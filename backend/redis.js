const redis   = require("redis");
const redisPassword = '3OHRhlUMEmAGUguQmWztSrEhwWcNpGmB';
const redisEndpoint = "redis-15073.c228.us-central1-1.gce.cloud.redislabs.com"
const redisPort = 15073;
const redisDatabase = 0;

module.exports  = redis.createClient({
  host:redisEndpoint,
  port: 15073,
  password: redisPassword,
  db: redisDatabase 
});
