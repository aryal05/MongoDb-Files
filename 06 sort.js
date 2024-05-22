//Building database


db.inventory.find().limit(1) // to find first document..
  db.inventory.find().skip(1)// skips the first document..
  db.inventory.find().sort(-1)// shows the file in decending order..
  db.inventory.find().sort(1)// shows the file in acending order..
  

