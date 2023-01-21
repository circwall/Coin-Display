import { React, useState } from "react";




export default function CurrencyDude (num){
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}