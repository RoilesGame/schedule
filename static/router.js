function notificationReverseMapping(notification) {
    return {
        'interval': notification.interval,
        'type': notification.type,
        'hours': notification.time[1],
        'minutes': notification.time[0]
    }
}

function exceptionReverseMapping(exception) {
    return {
        'label': exception.label,
        'date_start': moment(exception.dateStart).format(),
        'date_end': moment(exception.dateEnd).format(),
        'date': moment(exception.date).format(),
        'hidden': exception.hidden,
        'background_color': exception.backgroundColor,
    }
}

function reverseMapping(event) {
    let notifications = event.notifications
    if (notifications !== undefined) {
        notifications = notifications.map(notificationReverseMapping)
    } else {
        notifications = []
    }
    let repeatJson = null
    let repeat = event.repeat

    try {
        if (repeat.repeatInterval !== undefined) {
            repeatJson = {
              'interval': repeat.repeatInterval,
              'freq': repeat.repeatFreq,
            }
            if (repeat.exceptions === undefined || repeat.exceptions === null) {
                repeatJson['exceptions'] = []
            } else {
                repeatJson['exceptions'] = repeat.exceptions.map(exceptionReverseMapping)
            }

            if (!Number.isInteger(repeat.repeatEnd)) {
                repeatJson['end_time'] = moment(repeat.repeatEnd).format('YYYY-MM-DD')
            } else {
                repeatJson['end_occurrences'] = repeat.repeatEnd
            }
        }
    } catch (_) {}

    return JSON.stringify({
        'id': event.id,
        'label': event.label,
        'date_start': moment(event.dateStart).format(),
        'date_end':  moment(event.dateEnd).format(),
        'description': event.description,
        'all_day': event.allDay,
        'background_color': event.backgroundColor,
        'color': event.color,
        'repeat': repeatJson,
        'notifications': notifications,
        'conference_link': event.conference,
        'status': event.status,
        'hidden': event.hidden,
    })
}


function createEvent(event) {
    const detail = event.detail
    $.post({
        url: '/api/events/create',
        data: reverseMapping(detail.item),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        processData: false,
        error: (error) => {
            console.log(error)
        },
        success: (response, status, _) => {
            detail.item.id = parseInt(response['id'])
        }
    })
}

function deleteEvent(event) {
    const detail = event.detail

    $.ajax({
        url: `/api/events/${detail.item.id}/delete`,
        type: 'DELETE',
        error: (error) => {
            console.log(error)
        }
    })
}

function updateEvent(event) {
    const detail = event.detail
    console.log(detail)

    $.ajax({
        url: `/api/events/${detail.item.id}/update`,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: reverseMapping(detail.item),
        processData: false,
        type: 'PATCH',
        error: (error) => {
            console.log(error)
        }
    })
}

function changingEvent(event) {
    console.log(event)
}

window.onload = () => {
    const scheduler = $('.smart-scheduler').get(0)
    scheduler.addEventListener('itemInsert', createEvent)
    scheduler.addEventListener('itemRemove', deleteEvent)
    scheduler.addEventListener('itemUpdate', updateEvent)
    scheduler.addEventListener('resizeEnd', updateEvent)
    scheduler.addEventListener('dragEnd', updateEvent)
}