# node-event-loops
playing with node event loops from https://www.udemy.com/advanced-node-for-developers/learn/v4/t/lecture/9636100?start=0

# apachebench
ab -c 50 -n 500 localhost:3000/fast

# pm2
pm2 start index.js -i 0
pm2 list
pm2 show
pm2 show index
pm2 monit
pm2 delete index
