# Проект Schedule
Делали: Егор, Давид, Руслан

## Зависимости

* Python 3.11+

Для уставноки через poetry
* Poetry

## Технологии

Для backend'а мы использовали: `Flask`, `pydantic`, `SQLAlchemy`

Для frontend'а мы использовали: `Bootstrap`, `Ajax`, `Jquery`, `HTMLElements Smart Components`

## Установка

Через pip

```shell
pip install -r requirements/requirements.txt
```

Для dev зависимостей
```shell
pip install -r requirements/dev-requirements.txt
```

Через poetry

```shell
poetry install --no-dev
```

Для dev зависимостей
```shell
poetry install
```

## Start

1) Создайте файл `.env` в директории config, по примеру файла `.env.template`

2) Запустите сервер
```shell
python main.py
```

Через poetry
```shell
poetry run python main.py
```
