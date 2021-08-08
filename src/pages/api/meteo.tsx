export default async function handler(req, res) {
    await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=41.9028&lon=12.4964&exclude=hourly,daily&units=metric&appid=22835791d76deb5492e4638d5dd1a34a')
    .then(res => res.json())
    .then(resa => {
 
 
    res.status(200).json({ resa })})
  }