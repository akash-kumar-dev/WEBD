import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";

export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://media.istockphoto.com/id/813720840/photo/summer-heat-wave-in-the-city.jpg?s=612x612&w=0&k=20&c=8DxY8mLBr1ogKBwHxxC0bd6lv8tlBXytISdAjdPBhTE=";
    const COLD_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa4_KceZSeK5WPSfmoc08pCziDWwXJcsysyHnYtdRGlQ&s";
    const RAIN_URL = "https://media.istockphoto.com/id/140453995/photo/road-with-cars-in-stormy-weather-people-running.jpg?s=612x612&w=0&k=20&c=V6MZ6LWxs6B7Yj5csCNXSTTdgiwZNckkfE3A-IH14Fk=";

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80
                                ? RAIN_URL
                                : info.temp > 15
                                    ? HOT_URL
                                    : COLD_URL
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {
                                info.humidity > 80
                                    ? <ThunderstormIcon />
                                    : info.temp > 15
                                        ? <WbSunnyIcon />
                                        : <AcUnitIcon />
                            }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temp = {info.tempMin}&deg;C</p>
                            <p>Max Temp = {info.tempMax}&deg;C</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}