import fc25 from "../Assets/FC25_PS4.png"
import minecraft from "../Assets/Minecraft_xBox.png"
import gta5 from "../Assets/GTA5_PS4.png"
import w2k23 from "../Assets/W2K23_Xbox.png"

let data_games = [
    {
        id: 1,
        name: "FC25",
        image: fc25,
        new_price: 12000,
        old_price: 17000,
      },
      {
        id: 2,
        name: "MineCraft",
        image: minecraft,
        new_price: 6500,
        old_price: 10000,
      },
      {
        id: 3,
        name: "GTA 5", // Minor typo fix
        image: gta5,
        new_price: 5000,
        old_price: 8000,
      },
      {
        id: 4,
        name: "W2K23",
        image: w2k23,
        new_price: 12500,
        old_price: 15000,
      },
      
];
export default data_games; 