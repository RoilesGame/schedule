const day = 24 * 60 * 60 * 1000

function exceptionMapping(exception) {
    let dateStart = exception['date_start'] !== null ? new Date(exception['date_start']) : null
    let dateEnd = exception['date_end'] !== null ? new Date(exception['date_end']) : null
    return {
        'label': exception['label'],
        'dateStart': dateStart,
        'dateEnd': dateEnd,
        'date': new Date(exception['date']),
        'hidden': exception['hidden'],
        'backgroundColor': exception['background_color'],
    }
}

function notificationMapping(notification) {
    return {
        'interval': notification['interval'],
        'type': notification['type'],
        'time': [notification['minutes'], notification['hours']],
    }
}

function mapping(event) {
    let repeat = null

    if (event['repeat'] !== null && event['repeat'] !== undefined) {
        repeat = {
            'repeatInterval': event['repeat']['interval'],
            'repeatFreq': event['repeat']['freq'],
            'exceptions': event['repeat']['exceptions'].map(exceptionMapping)
        }
        if (event['repeat']['end_time'] !== null) {
            let date = new Date(event['repeat']['end_time'])
            repeat['repeatEnd'] = date
        } else {
           repeat['repeatEnd'] = event['repeat']['end_occurrences']
        }
    }

    return {
        'id': event['id'],
        'label': event['label'],
        'dateStart': new Date(event['date_start']),
        'dateEnd': new Date(event['date_end']),
        'description': event['description'],
        'allDay': event['all_day'],
        'hidden': event['hidden'],
        'backgroundColor': event['background_color'],
        'color': event['color'],
        'repeat': repeat,
        'status': event['status'],
        'notifications': event['notifications'].map(notificationMapping),
        'conference': event['conference_link'],
    }
}

function createScheduler(source) {
    new window.Smart('#scheduler', class {
        get properties() {
            return {
                view: 'week',
                dateCurrent: new Date(),
                dataSource: source,
                currentTimeIndicator: true,
                views: ['day', 'week',
                    {
                        label: 'Work Week',
                        value: 'workWeek',
                        type: 'week',
                        hideWeekend: true
                    },
                    'month'
                ],
                hourStart: 8,
                timelineDayScale: 'halfHour',
                firstDayOfWeek: 1
            }
        }
    });
}

$.ajax({
    url: '/api/events/list',
    method: 'get',
    dataType: 'json',
    success: (response, status, _) => {
        createScheduler(response['events'].map(mapping))
    }
})
