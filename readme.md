# Tyler Web Dev 

## Setup control machine ansible

1. Install ansible:
	```
	brew install ansible
	```

2. clone this repo onto your machine:
	```
	git clone git@github.com:TylerWebDev/twd.git
	```

3. install ansible-galaxy requirements:
	```
	ansible-galaxy install -r requirements.txt
	```

4. run composer install for dynamic inventory
    ```
    composer install
    ```

## Things you can do from here:

### Provision and deploy
```
ansible-playbook deploy.yml --ask-vault
```

### Edit production config
```
ansible-vault edit roles/twd/files/env.ini
```

### deploy only
```
ansible-playbook deploy.yml --ask-vault --tags "twd"
```

## Tests
```
vendor/bin/phpunit
```

## Endpoints

---

> https://tylerwebdev.io/members

---

> https://tylerwebdev.io/non-profits-request (POST)

### Required Fields (JSON):
- name (1 - 100)
- email (valid email)
- phone (10, digits only)
- cause (1 - 500)

#### Success 200 (JSON)
```
```

#### Failure 400 (JSON)
```
{
    "error_field1": [
        "first error of error_field1",
        "second error of error_field1"
    ],
    "error_field2": [
       "first error of error_field2", 
    ]
}
```

---
