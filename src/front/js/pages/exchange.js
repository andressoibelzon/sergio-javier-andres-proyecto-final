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

    // hacer que se cambie de pagina de 1 en 1
    // function previousPage() {
    //     if (currentsPage > 1)
    //         currentsPage--;
    //     redenderTable(currentsPage)
    // }
    // // function nextPage() {
    // if ((currentsPage * pageSize) < coinsData.length)
    //     currentsPage++;
    // redenderTable(currentsPage)

    // function numbersPages() {
    //     return Math.ceil(coinsData.length / pageSize)
    // }
    //evento de listado 

    // documents.querySelector('#prevButton').addEvenListener('click', previousPage, false)
    // documents.querySelector('#nextButton').addEvenListener('click', nextPage, false)
    return (
        <div className="container mt-5 mb-5 bg-black">
            <table className="table table-dark table-striped" id="listingTable">
                <thead>
                    <tr>
                        <th scope="col" >BTC price</th>
                        <th scope="col" >Rank</th>
                        <th scope="col" >Tier</th>
                        <th scope="col" >Name</th>
                        <th scope="col" >Prices</th>
                        <th scope="col" >Symbol</th>
                    </tr>
                </thead>
                <tbody id="data">
                </tbody>
            </table>
            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <button className="page-link mx-2" id="prevButton">Previous</button>
                    </li>
                    <li className="page-item">
                        <button className="page-link" id="nextButton">Next</button>
                    </li>
                </ul>
            </nav>
            <script type="module" src="./indices.js"></script>
        </div>
    )
}