# BtnMeetCalendar
Todo list + google calendar + slack integration (Node.js, Angular2)

---

## Backend

### Actions 

- get calendar from Google API 
- send parsed Json to frontend 
- add new event in first free space  
- delay start (move next event X minutes later) 

### Slack (#btn_rooms) 

- room is reserved to ... 
- start next event is delayed (title, how much, planned start) 
- today's event is removed / changed (title, time) 

### Google Calendar 

- get calendar 
- change event in calendar (delay start) 
- add new event in the first empty space 

### Issues

- resolve events collisions 
- title and user of created event in the first free space

---

## Frontend 

### Angular2 

- parse data from Node.js to view 
- actions 
  - delay start of the next event 
  - create event as fast as is possible 
- buttons
  - delay start of next event (minutes) 
  - add new event as fast as it's possible (minutes) 

### CSS

- styles timeline
- animations  
  - available room 
  - reserved room 

### Issues

- title and duration of new event. How should look picker and options 
- quick and simple authorization before edit events 

