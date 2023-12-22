# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення на початкового наповнення бази даних


```sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Origin`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Origin` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Origin` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `location` VARCHAR(45) NULL,
  `rating` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Media`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Media` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Media` (
  `id` INT NOT NULL,
  `type` VARCHAR(45) NULL,
  `url` VARCHAR(45) NULL,
  `name` VARCHAR(45) NULL,
  `metadate` VARCHAR(45) NULL,
  `Origin_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Media_Origin_idx` (`Origin_id` ASC) VISIBLE,
  CONSTRAINT `fk_Media_Origin`
    FOREIGN KEY (`Origin_id`)
    REFERENCES `mydb`.`Origin` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Role` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Role` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `grants` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`User` ;

CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `login` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `Role_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_User_Role1_idx` (`Role_id` ASC) VISIBLE,
  CONSTRAINT `fk_User_Role1`
    FOREIGN KEY (`Role_id`)
    REFERENCES `mydb`.`Role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Request`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Request` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Request` (
  `id` INT NOT NULL,
  `desription` VARCHAR(45) NULL,
  `Media_id` INT NOT NULL,
  `User_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Media_id`),
  INDEX `fk_Request_Media1_idx` (`Media_id` ASC) VISIBLE,
  INDEX `fk_Request_User1_idx` (`User_id` ASC) VISIBLE,
  CONSTRAINT `fk_Request_Media1`
    FOREIGN KEY (`Media_id`)
    REFERENCES `mydb`.`Media` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Request_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `mydb`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Grant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Grant` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Grant` (
  `id` INT NOT NULL,
  `title` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `Role_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Role_id`),
  INDEX `fk_Grant_Role1_idx` (`Role_id` ASC) VISIBLE,
  CONSTRAINT `fk_Grant_Role1`
    FOREIGN KEY (`Role_id`)
    REFERENCES `mydb`.`Role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
```

## RESTfull сервіс для управління даними

Розроблено на мові програмування JavaScript з використанням фреймворку Fastify.

### Головний файл та файл підключення до бази даних

- `server.js`

```js
'use strict';

const fastify = require('fastify')({ logger: true });

const mediaRoutes = require('./routes/mediaRoutes');
const roleRoutes = require('./routes/roleRoutes');
const userRoutes = require('./routes/userRoutes');
const originRoutes = require('./routes/originRoutes');
const requestRoutes = require('./routes/requestRoutes');

fastify.register(mediaRoutes, { prefix: '/media' });
fastify.register(userRoutes, { prefix: '/user' });
fastify.register(roleRoutes, { prefix: '/role' });
fastify.register(originRoutes, { prefix: '/origin' });
fastify.register(requestRoutes, { prefix: '/request' });

const startServer = async () => {
    try {
        const port = 3004;
        await fastify.listen({ port });
        console.log(`Server is running on ${fastify.server.address().port}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

startServer();
```

- `db.js`

```js
'use strict';

const mysql = require('mysql2');

const config = require('./constants.json')

const pool = mysql.createPool({
    host: config['DB_HOST'],
    user: config['DB_USER'],
    password: config['DB_PASS'],
    port: config['DB_PORT'],
    database: config['DB_DATABASE']
});

module.exports = pool.promise();
```

### Файли шляхів

- `mediaRoutes.js`

```js
'use strict';

const mediaController = require('../controllers/mediaController');

const mediaRoutes = async (fastify, options) => {
    const { 
      addMedia, 
      searchMedia, 
      deleteMediaById } = mediaController
    fastify.post('/', addMedia);
    fastify.get('/find/:keyword', searchMedia);
    fastify.delete('/remove/:id', deleteMediaById);
};

module.exports = mediaRoutes;
```

- `originRoutes.js`

```js
'use strict';

const originController = require('../controllers/originController');

const originRoutes = async (fastify, options) => {
    const {
        addOrigin, 
        deleteOriginById} = originController;
    fastify.post('/origins', addOrigin);
    fastify.delete('/origins/:id', deleteOriginById);
}

module.exports = originRoutes;
```

- `requestRoutes.js`

```js
'use strict';

const requestController = require('../controllers/requestController');

const requestRoutes = async (fastify, options) => {
    const { 
        addRequest, 
        getMediaByRequestId, 
        deleteRequestById} = requestController
    fastify.post('/requests', addRequest);
    fastify.get('/requests/:id', getMediaByRequestId);
    fastify.delete('/requests/remove/:id', deleteRequestById);
};

module.exports = requestRoutes;
```

- `roleRoutes.js`

```js
'use strict';

const roleController = require('../controllers/roleController');

const roleRoutes = async (fastify, options) => {
    const { 
        addRole, 
        addGrant, 
        deleteRoleById } = roleController;
    fastify.post('/roles', addRole);
    fastify.put('/roles/:id/:grantId', addGrant);
    fastify.delete('/roles/:id', deleteRoleById);
}

module.exports = roleRoutes;
```

- `userRoutes.js`

```js
'use strict';

const userController = require('../controllers/userController');

const userRoutes = async (fastify, options) => {
    const {
        getAllUsers,
        getUserById,
        addUser,
        deleteUserById,
        updateUserRoleById,
    } = userController;
    fastify.get('/users', getAllUsers);
    fastify.get('/users/:id', getUserById);
    fastify.post('/users', addUser);
    fastify.delete('/users/:id', deleteUserById);
    fastify.put('/users/:id/role/:roleId', updateUserRoleById);
}

module.exports = userRoutes;
```

### Файли контролерів

- `mediaController.js`
  
```js
'use strict';

const Media = require('../models/mediaModel');

const handleOperation = async (promise, successMessage, reply) => {
    try {
        const result = await promise;
        reply.send({ message: successMessage });
    } catch (err) {
        reply.code(500).send({ error: err.message });
    }
};

const addMedia = async (request, reply) => {
    await handleOperation(Media.add(request.body, 'url'), 'Media has been successfully added.', reply);
};

const searchMedia = async (request, reply) => {
    const [rows] = await Media.search(request.params.keyword);
    reply.send(rows);
};


const deleteMediaById = async (request, reply) => {
    await handleOperation(Media.deleteById(request.params.id), 'Media deletion successful.', reply);
};

module.exports = {
    addMedia,
    searchMedia,
    deleteMediaById
};
```

- `originController.js`
  
```js
'use strict';

const Origin = require('../models/originModel');

const addOrigin = async (request, reply) => {
    const [rows, fields] = await Origin.add(request.body, 'name');
    reply.send({ message: 'Origin has been successfully added.' });
};

const deleteOriginById = async (request, reply) => {
    await Origin.deleteById(request.params.id);
    return ({ message: 'Origin deletion successful.' });
};

module.exports = { 
    addOrigin,
    deleteOriginById
};
```

- `requestController.js`
  
```js
'use strict';

const Request = require('../models/requestModel');

const generateHandler = (handler) => async (req, reply) => {
    try {
        const result = await handler(req);
        if (result) {
            reply.send(result);
        } else {
            reply.send({ message: 'Request operation successful...' });
        }
    } catch (err) {
        reply.code(500).send({ error: err.message });
    }
};

const addRequest = generateHandler(async (req) => {
    await Request.add(req.body, 'User_id');
    return { message: 'Request has been successfully added.' };
});

const getMediaByRequestId = generateHandler(async (req) => {
    const result = await Request.getRequestAndMediaById(req.params.id);
    return result;
});

const deleteRequestById = generateHandler(async (req) => {
    await Request.deleteById(req.params.id);
    return { message: "Request deletion successful." };
});

module.exports = {
    addRequest,
    getMediaByRequestId,
    deleteRequestById
};
```

- `roleController.js`
  
```js
'use strict';

const Role = require('../models/roleModel');

const addRole = async (request) => {
    await Role.add(request.body, 'name');
    return { message: "Role has been successfully added."}
};

const addGrant = async (request) => {
    await Role.addGrant(request.params.id, request.params.grantId);
    return {message: "Grant added to role."} 
};

const deleteRoleById = async (request) => {
    await Role.deleteById(request.params.id);
    return {message: "Role deletion successful."}
};

module.exports = { 
    addRole,
    addGrant,
    deleteRoleById
};
```

- `userController.js`
  
```js
'use strict';

const User = require('../models/userModel');

const getAllUsers = async () => await User.getAll();
const getUserById = async (request, reply) => {
    const [rows] = await User.getByField('id', request.params.id);
    reply.send(rows);
};
const addUser = async (request) => {
    await User.add(request.body, 'email');
    return { message: 'User has been successfully added.' };
};

const deleteUserById = async (request) => {
    await User.deleteById(request.params.id);
    return { message: 'User deletion successful.' };
}

const updateUserRoleById = async (request) => {
    await User.updateUserRoleById(request.params.id, request.params.roleId);
    return { message: 'User role successfully updated.' }
}


module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    deleteUserById,
    updateUserRoleById
};
```

### Файли моделей

- `customModel.js` - основний файл, як абстрактний клас customModel, реалізований для забезпечення головних методів моделей.

```js
'use strict';

const db = require('../db');
const CustomError = require("../customError");

class customModel {
    constructor(name) {
        this.name = name;
    }

    async getAll() {
        return await db.execute(`SELECT * FROM ${this.name}`);
    }

    async getByField(field, value) {
        return await db.execute(`SELECT * FROM ${this.name} WHERE ${field} = ?`, [value]);
    }

    async  add(values, uniqueField) {
        const [existingRows] = await this.getByField(uniqueField, values[uniqueField]);
        if (existingRows.length > 0) {
            throw new CustomError(`Duplicate entry found for ${this.name} with ${uniqueField}: ${values[uniqueField]}`);
        }
    
        const fields = Object.keys(values).join(',');
        const placeholders = Object.keys(values).map(() => '?').join(',');
        const query = `INSERT INTO ${this.name} (${fields}) VALUES (${placeholders})`;
        
        return await db.execute(query, Object.values(values));
    }    

    async deleteById(id) {
        const [existingRows] = await this.getByField('id', id);
        if (existingRows.length === 0) {
            throw new CustomError(`No ${this.name} found with this id`);
        }
        await db.execute(`DELETE FROM ${this.name} WHERE id = ?`, [id]);
        return { message: `${this.name} deleted successfully` };
    }        
}

module.exports = customModel;
```

- `mediaModel.js`

```js
'use strict';

const db = require('../db');
const customModel = require('./customModel');

class Media extends customModel {
  constructor() {
      super('Media');
  }

  async search(keyword) {
      const searchQuery = `
          SELECT * FROM ${this.name} 
          WHERE type LIKE ? OR 
                url LIKE ? OR 
                name LIKE ? OR 
                metadate LIKE ? OR
                Origin_id IN (SELECT id FROM Origin WHERE name LIKE ?)
      `;

      const searchParams = new Array(5).fill(`%${keyword}%`);
      return await db.execute(searchQuery, searchParams);
  }
}

module.exports = new Media();
```

- `originModel.js`

```js
'use strict';

const db = require('../db');
const customModel = require('./customModel');

class Origin extends customModel {
    constructor() {
        super('Origin');
    }
}

module.exports = new Origin();
```

- `requestModel.js`

```js
'use strict';

const customError = require("../customError");
const customModel = require("./customModel");
const Media = require('./mediaModel');

class Request extends customModel {
    constructor() {
        super('Request');
    }

    async getRequestAndMediaById(id) {
        const [requestRows] = await this.getByField('id', id);
        
        if (requestRows.length === 0) {
            throw new customError(`ID, which was requested, does not exist.`);
        }
    
        const mediaId = requestRows[0]['Media_id'];
        return await Media.getByField('id', mediaId);
    }
}

module.exports = new Request();
```

- `roleModel.js`

```js
'use strict';

const db = require('../db');
const customModel = require('./customModel');

class Role extends customModel {
    constructor() {
        super('Role');
    }

    async addGrant(roleId, grantId) {
        const [existingRow] = await db.execute(`SELECT * FROM ${this.name} WHERE id = ? AND FIND_IN_SET(?, TRIM(grants))`, [roleId, grantId]);
        
        if (existingRow.length > 0) {
            throw new Error(`The grant ID ${grantId} already exists in the role with ID ${roleId}`);
        }
    
        const updatedRow = await db.execute(`UPDATE ${this.name} SET grants = CONCAT(grants, ?) WHERE id = ?`, [grantId + ',', roleId]);
        return updatedRow;
    }
}

module.exports = new Role();
```

- `userModel.js`
  
```js
'use strict';

const db = require('../db');
const customModel = require('./customModel');

class User extends customModel {
    constructor() {
        super('User');
    }
    
    async updateRoleById(userId, roleId) {
        const updateQuery = `UPDATE ${this.name} SET Role_id = ? WHERE id = ?`;
        return await db.execute(updateQuery, [roleId, userId]);
    }
}

module.exports = new User();
```

### Файл помилки

- `custom.js`

```js
'use strict';

class customError extends Error {
    constructor(msg) {
        super(msg);
        this.statusCode = 404;
    }
};

module.exports = customError;
```
