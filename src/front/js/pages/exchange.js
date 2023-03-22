import React, { useState, useEffect, useContext, Component } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


const options = {
    'x-access-token': 'coinranking01dedb7a7955216d99f82ecfab7dabbaca98eaee97945b7f'
}

export const Exchange = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    async function redenderTable(page = 1) {
        await getData()
        // if (page == 1) {
        //     prevButton.style.visibility = "hidden"
        // } else {
        //     prevButton.style.visibility = "visible"
        // }

        // if (page == numbersPages) {
        //     nextButton.style.visibility = "hidden"
        // } else {
        //     nextButton.style.visibility = "visible"
        // }
        // creando tabla html para ver los datos ordenados
        let cryptoCoin = ""
        console.log(coinsData)
        // filtrado coinsData
        coinsData.filter((row, index) => {
            let start = (currentsPage - 1) * pageSize
            let end = currentsPage * pageSize
            if (index >= start && index < end) return true;
        }).forEach(coin => {
            cryptoCoin += "<tr>"
            cryptoCoin += `<td>${parseFloat(coin.btcPrice).toFixed(6)}</td>`
            cryptoCoin += `<td>${(coin.rank)}</td>`
            cryptoCoin += `<td>${(coin.tier)}</td>`
            cryptoCoin += `<td>${(coin.name)}</td>`
            cryptoCoin += `<td>${Math.round(coin.price)}Billons</td>`
            cryptoCoin += `<td>${(coin.symbol)}</td>`
        })
        document.getElementById("data").innerHTML = cryptoCoin
    }
    redenderTable()
    async function getData() {
        const response = await fetch('https://api.coinranking.com/v2/coins', options)
        const coins = await response.json()
        coinsData = coins.data.coins
        console.log(coinsData)

    }
    let coinsData = []
    let pageSize = 50;
    let currentsPage = 1;

    return (
        <div className="container mt-5 mb-5 ">
            <h1 className="d-flex justify-content-center bg-white ">Exchange</h1>
            <table className="table table-dark table-striped" id="listingTable">
                <thead>
                    <tr>
                        <th scope="col" >BTC price*</th>
                        <th scope="col" >Rank*</th>
                        <th scope="col" >Tier*</th>
                        <th scope="col" >Name*</th>
                        <th scope="col" >Prices*</th>
                        <th scope="col" >Symbol*</th>
                    </tr>
                </thead>
                <tbody id="data">
                </tbody>
            </table>
            <ul className="bg-grey">
                <li className="">Btc Prices = precio exchange respecto al Bitcoin</li>
                <li className="">Rank = ranking segun su valor de mercado</li>
                <li className="">Tier = nivel del exchange</li>
                <li className="">Name = nombre del exchange</li>
                <li className="">Prices = inversion que tiene el exchange</li>
                <li className="">Symbol = abreviatura</li>
            </ul>
        </div>
    )
}