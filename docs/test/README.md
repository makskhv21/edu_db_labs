# Тестування працездатності системи

## Значення початкових таблиць

- User

![User](./resources/table_user.png) 

![Role](./resources/table_role.png)

![Media](./resources/table_media.png)

![Origin](./resources/table_origin.png)

![Grant](./resources/table_grant.png)

## Робота з User

### Отримання всіх користувачів

![](./resources/user/get-all-users.png)

### Отримати користувача за його id

![](./resources/user/get-user-by-id.png)

### Додавання нового користувача

![](./resources/user/add-user.png)

**Результат додавання нового запису в таблиці:**

![](./resources/user/add-user-table.png)
**При повторному додаванні користувача до таблиці з зареєстрованою електронною поштою, отримаємо помилку:**

![](./resources/user/add-user-error.png)
### Видалення користувача за його id

![](./resources/user/delete-user.png)
**Результат таблиці після видалення:**

![](./resources/user/delete-user-table.png)
**Якщо видалити вже не існуючого користувача, отримуємо помилку:**

![](./resources/user/delete-user-error.png)
### Змінити користувачу роль

![](./resources/user/change-user-role.png)
**Результат зміни ролі в користувача:**

![](./resources/user/change-user-role-table.png)
## Робота з Media

### Додавання нового медіа-контенту

![](./resources/media/add-media.png)
**В результаті було додано новий запис в таблицю:**

![](./resources/media/add-media-table.png)
**Якщо додаємо до таблиці медіа-контент з уже існуючим посиланням, отримуємо помилку:**

![](./resources/media/add-media-error.png)
### Здійснення пошуку серед існуючих медіа-контентів за ключовим словом

![](./resources/media/search-media.png)
### Видалення медіа-контенту за його id

![](./resources/media/delete-media.png)
**Результат є видалення відповідного запису з таблиці:**

![](./resources/media/delete-media-table.png)
**Якщо видаляємо вже не існуючий медіа-контент, отримуємо помилку:**

![](./resources/media/delete-media-error.png)
## Робота з Origin

### Додавання першоджерела

![](./resources/origin/add-origin.png)
**Результат було додано новий запис до таблиці:**

![](./resources/origin/add-origin-table.png)
**Якщо додаємо до таблиці першоджерело з уже існуючим ім'ям, отримуємо помилку:**

![](./resources/origin/add-origin-error.png)
### Видалення першоджерела за його id

![](./resources/origin/delete-origin.png)
**Результат було видалено відповідний запис з таблиці:**

![](./resources/origin/delete-origin-table.png)
**Якщо видалили уже не існуюче першоджерело, отримуємо помилку:**

![](./resources/origin/delete-origin-error.png)
## Робота з Role

### Додати роль

![](./resources/role/add-role.png)
**Результат було додано новий запис до таблиці:**

![](./resources/role/add-role-result.png)
**Якщо додаємо до таблиці роль з уже існуючою назвою, отримуємо помилку:**

![](./resources/role/add-role-error.png)
### Додати до ролі нові права

![](./resources/role/add-grant-tto-role.png)
**Результат до поля grants відповідного рядка додано потрібний id дозвіл:**

![](./resources/role/add-grant-tto-role-table.png)
**Якщо додаємо вже додане право, отримуємо помилку:**

![](./resources/role/add-grant-to-role-error.png)
### Видалити роль за її id

![](./resources/role/delete-role.png)
**Результат видалено відповідний запис  з таблиці:**

![](./resources/role/delete-role-table.png)

**Якщо видаляємо уже не існуючу роль, отримуємо помилку:**

![](./resources/role/delete-role-error.png)

## Робота з Request

### Додавання нового запиту

![](./resources/request/add-request.png)

**Результат додано новий запис до таблиці:**


    ./resources/request/add-request-table.png)

**Якщо додаємо запит з уже існуючим user id  до таблиці, отримуємо помилку:**

![](./resources/request/add-request-error.png)
### Отримання медіа-контенту за запитом

![](./resources/request/get-media-by-request.png)
### Видалення запиту за його id

![](./resources/request/delete-request.png)
**Результат видалено відповідний запис з таблиці :**

![](./resources/request/delete-request-table.png)
**Якщо видалити уже не існуючий запит, отримуємо помилку:**

![](./resources/request/delete-request-error.png)
