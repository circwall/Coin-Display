import { React, useState, useEffect } from "react";
import { useGlobalcontext } from "../Context";
import axios from "axios";

function CurrencyDude (num){
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}


export default CurrencyDude

       
    