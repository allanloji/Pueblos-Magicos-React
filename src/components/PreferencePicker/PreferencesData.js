import gasIcon from '../../assets/Gas Icon.svg';
import selectedGasIcon from '../../assets/Selected Gas Icon.svg';
import timeIcon from '../../assets/Time Icon.svg';
import selectedTimeIcon from '../../assets/Selected Time Icon.svg';
import distanceIcon from '../../assets/Distance Icon.svg';
import selectedDistanceIcon from '../../assets/Selected Distance Icon.svg';

export const preferences = [
    {
        id: 0,
        title:  "Ahorrar Gasolina",
        icon: gasIcon,
        selectedIcon: selectedGasIcon,
        alt: "Gas Pump",
    },
    {
        id: 1,
        title:  `Menos\nTiempo`,
        icon: timeIcon,
        selectedIcon: selectedTimeIcon,
        alt: "Clock",
    },
    {
        id: 2,
        title:  "Menor Distancia",
        icon: distanceIcon,
        selectedIcon: selectedDistanceIcon,
        alt: "Ruler",
    },
]
