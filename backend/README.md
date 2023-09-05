# Event_Management_Application_Backend


Design the data structure and build a RESTful API which Event create app related data and able to do crud operation on it.


* The deployed backend api url
`https://create-event-mern-stack-app.vercel.app`


## Events Home Page

1. GET REQUEST

`/create/getevent`

* by fetch this endpoint it gives title and participants data

```js
    [
        {
            'title': 'Birthday Celebration',
            'participants': [
                {
                    'name': 'John Doe',
                    'date': '2011-02-21',
                    'email': 'john.doe@gmail.com',
                    'contact': 9876543210
                }
            ]
        }
    ]
```

2. DELETE REQUEST

`/create/delete/id`

* we need to provide an id to delete the events




## Create Event Page

1. GET REQUEST

`/create`

* by fetch this endpoint we get all the participants on the page


2. POST REQUEST

`/create/addtolist`, payload

* in that we need to provide an payload data to send the participants information like 'name', 'date', 'emai', 'contact'.


3. POST REQUEST FOR EVENT (CREATE EVENT)

`/create/addevent`, payload

* that endpoint we need to pass title and participants data by selecting checkbox to get participants added.



## Thanks you for reading.