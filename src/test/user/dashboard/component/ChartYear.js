import {useTheme} from "@mui/material/styles";
import {Box} from "@mui/material";
import {Bar} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function ChartYear(props) {
    const theme = useTheme();

    const styles = {
        container: {
            height: '320px',
            p: 1,
        },
    }

    const options = {
        type: 'bar',
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TITLE',
            },
        },
    };

    const createChartData = (xy) => {
        let rr = {x: [], y: []}
        for (const key in xy) {
            rr["x"].push(xy[key]["_id"])
            rr["y"].push(xy[key]["count"])
        }
        return(rr)
    }

    let datas = createChartData(props.data)
    const data = {
        labels: datas["x"],
        datasets: [
            {
                label: 'Count',
                data: datas["y"],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return(
        <>
            <Box sx={styles.container}>
                <Bar options={options} data={data}/>
            </Box>
        </>
    )
}
export default ChartYear