# Тестування працездатності системи

## Значення початкових таблиць

- User

![User](src="./resources/table_user.png") 
<p align="center">
    <img src="./resources/table_user.png">
</p>

- Role

<p align="center">
    <img src="./resources/table_role.png">
</p>

- Request

<p align="center">
    <img src="./resources/table_request.png">
</p>

- Origin

<p align="center">
    <img src="./resources/table_origin.png">
</p>

- Media

<p align="center">
    <img src="./resources/table_media.png">
</p>

- Grant

<p align="center">
    <img src="./resources/table_grant.png">
</p>

## Робота з User

### Отримання всіх користувачів

<p align="center">
    <img src="./resources/user/get-all-users.png">
</p>

### Отримати користувача за його id

<p align="center">
    <img src="./resources/user/get-user-by-id.png">
</p>

### Додавання нового користувача

<p align="center">
    <img src="./resources/user/add-user.png">
</p>

**Результат додавання нового запису в таблиці:**

<p align="center">
    <img src="./resources/user/add-user-table.png">
</p>

**При повторному додаванні користувача до таблиці з зареєстрованою електронною поштою, отримаємо помилку:**

<p align="center">
    <img src="./resources/user/add-user-error.png">
</p>

### Видалення користувача за його id

<p align="center">
    <img src="./resources/user/delete-user.png">
</p>

**Результат таблиці після видалення:**

<p align="center">
    <img src="./resources/user/delete-user-table.png">
</p>

**Якщо видалити вже не існуючого користувача, отримуємо помилку:**

<p align="center">
    <img src="./resources/user/delete-user-error.png">
</p>

### Змінити користувачу роль

<p align="center">
    <img src="./resources/user/change-user-role.png">
</p>

**Результат зміни ролі в користувача:**

<p align="center">
    <img src="./resources/user/change-user-role-table.png">
</p>

## Робота з Media

### Додавання нового медіа-контенту

<p align="center">
    <img src="./resources/media/add-media.png">
</p>

**В результаті було додано новий запис в таблицю:**

<p align="center">
    <img src="./resources/media/add-media-table.png">
</p>

**Якщо додаємо до таблиці медіа-контент з уже існуючим посиланням, отримуємо помилку:**

<p align="center">
    <img src="./resources/media/add-media-error.png">
</p>

### Здійснення пошуку серед існуючих медіа-контентів за ключовим словом

<p align="center">
    <img src="./resources/media/search-media.png">
</p>

### Видалення медіа-контенту за його id

<p align="center">
    <img src="./resources/media/delete-media.png">
</p>

**Результат є видалення відповідного запису з таблиці:**

<p align="center">
    <img src="./resources/media/delete-media-table.png">
</p>

**Якщо видаляємо вже не існуючий медіа-контент, отримуємо помилку:**

<p align="center">
    <img src="./resources/media/delete-media-error.png">
</p>

## Робота з Origin

### Додавання першоджерела

<p align="center">
    <img src="./resources/origin/add-origin.png">
</p>


**Результат було додано новий запис до таблиці:**


<p align="center">
    <img src="./resources/origin/add-origin-table.png">
</p>

**Якщо додаємо до таблиці першоджерело з уже існуючим ім'ям, отримуємо помилку:**

<p align="center">
    <img src="./resources/origin/add-origin-error.png">
</p>

### Видалення першоджерела за його id

<p align="center">
    <img src="./resources/origin/delete-origin.png">
</p>

**Результат було видалено відповідний запис з таблиці:**

<p align="center">
    <img src="./resources/origin/delete-origin-table.png">
</p>

**Якщо видалили уже не існуюче першоджерело, отримуємо помилку:**

<p align="center">
    <img src="./resources/origin/delete-origin-error.png">
</p>

## Робота з Role

### Додати роль

<p align="center">
    <img src="./resources/role/add-role.png">
</p>

**Результат було додано новий запис до таблиці:**

<p align="center">
    <img src="./resources/role/add-role-result.png">
</p>

**Якщо додаємо до таблиці роль з уже існуючою назвою, отримуємо помилку:**

<p align="center">
    <img src="./resources/role/add-role-error.png">
</p>

### Додати до ролі нові права

<p align="center">
    <img src="./resources/role/add-grant-tto-role.png">
</p>

**Результат до поля grants відповідного рядка додано потрібний id дозвіл:**

<p align="center">
    <img src="./resources/role/add-grant-tto-role-table.png">
</p>

**Якщо додаємо вже додане право, отримуємо помилку:**

<p align="center">
    <img src="./resources/role/add-grant-to-role-error.png">
</p>

### Видалити роль за її id

<p align="center">
    <img src="./resources/role/delete-role.png">
</p>

**Результат видалено відповідний запис  з таблиці:**

<p align="center">
    <img src="./resources/role/delete-role-table.png">
</p>

**Якщо видаляємо уже не існуючу роль, отримуємо помилку:**

<p align="center">
    <img src="./resources/role/delete-role-error.png">
</p>

## Робота з Request

### Додавання нового запиту

<p align="center">
    <img src="./resources/request/add-request.png">
</p>

**Результат додано новий запис до таблиці:**

<p align="center">
    <img src="./resources/request/add-request-table.png">
</p>

**Якщо додаємо запит з уже існуючим user id  до таблиці, отримуємо помилку:**

<p align="center">
    <img src="./resources/request/add-request-error.png">
</p>

### Отримання медіа-контенту за запитом

<p align="center">
    <img src="./resources/request/get-media-by-request.png">
</p>

### Видалення запиту за його id

<p align="center">
    <img src="./resources/request/delete-request.png">
</p>

**Результат видалено відповідний запис з таблиці :**

<p align="center">
    <img src="./resources/request/delete-request-table.png">
</p>

**Якщо видалити уже не існуючий запит, отримуємо помилку:**

<p align="center">
    <img src="./resources/request/delete-request-error.png">
</p>
