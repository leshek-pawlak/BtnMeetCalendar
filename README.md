# BtnMeetCalendar
Todo list + google calendar + slack integration (Node.js, Angular2)


## v0.1
---

## Backend

### Actions 
[] get calendar from Google API 
[] send parsed Json to frontend 

### Slack (#btn_rooms) 

[] room is reserved to ... (date)

### Google Calendar 

[] get calendar 

### Issues

[] resolve events collisions

---

## Frontend 

### Angular2 

[] parse data from Node.js to view 

### CSS

[] styles timeline

---
---

## v0.2
---

## Backend

### Actions 

[] add new event in first free space  
[] delay start (move next event X minutes later) 

### Slack (#btn_rooms) 

[] start next event is delayed (title, how much, planned start)

### Google Calendar 

[] change event in calendar (delay start) 
[] add new event in the first empty space 

### Issues

[] title and user of created event in the first free space

---

## Frontend 

### Angular2 

[] actions 
  [] delay start of the next event
  [] create event in the first free space 
[] buttons
  [] delay start of next event (minutes) 
  [] add new event in the first free space (minutes)

### CSS

[] animations  
  [] available room 
  [] reserved room 

### Issues

[] title and duration of new event. How should look picker and options

---
---

## v0.3
---

## Backend

### Actions 

[] edit / remove today's event in calendar

### Slack (#btn_rooms) 

[] today's event is removed / changed (title, time) 

### Issues

[] title and user of created event in the first free space

---

## Frontend 

### Angular2 

[] actions 
  [] edit / remove today's events
[] buttons
  [] edit / remove today's events

### Issues

[] quick and simple authorization before edit events 
