import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/graficos.css"

export const Graficos = () => {
    const { store, actions } = useContext(Context);
    //graficos
    window.top.addEventListener("message", function (msg) {
        const widget = document.getElementById('TickerTape-cbipqhf');
        if (!widget) return; const styles = msg.data?.styles;
        if (styles) { Object.keys(styles).forEach(key => widget.style.setProperty(key, styles[key])) }
        const height = msg.data?.tickerTapeHeight;
        if (height) { widget.style.setProperty('height', height + 'px'); }
    });
    //cryptos
    window.top.addEventListener("message", function (msg) {
        const widget = document.getElementById('ScreenerWidget-24wh974');
        if (!widget) return; const styles = msg.data?.styles;
        if (styles) { Object.keys(styles).forEach(key => widget.style.setProperty(key, styles[key])) }
    });
    return (

        <div className="container">
            <br />
            <br />
            <h1 className="d-flex justify-content-center">Información en tiempo real</h1>
            <br />
            <br />
            <iframe
                width="100%"
                height="373px"
                data-widget-name=""
                name="TickerTape"
                src="https://darqube.com/external-embedding/ticker-tape?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aWRnZXQiOnsiYXNzZXRfY2xhc3NlcyI6WyJJTkRFWEVTIiwiU1RPQ0tTIiwiRk9SRVgiXX0sIndfdHlwZSI6IlRpY2tlclRhcGUiLCJmZV9jZmciOnsiY21vZGUiOjAsImZjbHIiOiJyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIiwiYmciOiJyZ2JhKDIxLCAyNSwgMzAsIDEpIiwiaCI6MzczLCJ3IjoxMTAwLCJhc3oiOnRydWUsImZ0IjoiZGVmYXVsdCIsImh0Ijoibm9uZSIsInRyaCI6W10sImNoYyI6InJnYmEoMjM3LCA1MCwgOTgsIDEpIiwiYmUiOmZhbHNlLCJiYyI6InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIsImJ3IjoxLCJjbiI6IiIsImxuZyI6ImVuIiwiY3RybHQiOjEsImhkaWNuIjpmYWxzZSwid3RtViI6eyJ0eXBlIjoiRGFycXViZSIsImVuYWJsZWQiOnRydWV9LCJ1YyI6InJnYmEoNDgsIDEzMSwgMTA5LCAxKSIsImRjIjoicmdiYSgyMzcsIDUwLCA5OCwgMSkiLCJjdHJsdiI6MSwic21iIjpbeyJuIjoiRVVSL1VTRCIsInQiOiJFVVJVU0QuT0FOREEifSx7Im4iOiJHQlAvVVNEIiwidCI6IkdCUFVTRC5PQU5EQSJ9LHsibiI6IkJUQyIsInQiOiJCVENVU0QuQUdSIn0seyJuIjoiRVRIIiwidCI6IkVUSFVTRC5BR1IifSx7Im4iOiJHb2xkIiwidCI6IlhBVVVTRC5PQU5EQSJ9LHsibiI6IlNpbHZlciIsInQiOiJYQUdVU0QuT0FOREEifSx7Im4iOiJBQVBMIiwidCI6IkFBUEwuVVMifSx7Im4iOiJUU0xBIiwidCI6IlRTTEEuVVMifSx7Im4iOiJNU0ZUIiwidCI6Ik1TRlQuVVMifSx7Im4iOiJBTVpOIiwidCI6IkFNWk4uVVMifSx7Im4iOiJVU0QvSlBZIiwidCI6IlVTREpQWS5PQU5EQSJ9XSwib3BuIjp0cnVlLCJjdGRjIjpmYWxzZX0sImV4cCI6MTY4NzE5NzUxNywic3ViIjoiYWNjZXNzIn0.wfIL4cqCSRHyQXqbCOoUhcnbVDePy-wwbrcsgRDbeaU"
                id="graficos TickerTape-cbipqhf">
            </iframe>
            <br />
            <br />
            <h1 className="d-flex justify-content-center">Cryptos - Materias Primas - Fondos</h1>
            <br />
            <br />
            <iframe
                width="100%"
                height="800px"
                data-widget-name=""
                name="ScreenerWidget"
                src="https://darqube.com/external-embedding/screener-widget?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aWRnZXQiOnsic2NyZWVuZXJfYXNzZXRfY2xhc3NlcyI6WyJDUllQVE8iLCJDT01NT0RJVElFUyIsIkZVTkRTIl19LCJ3X3R5cGUiOiJTY3JlZW5lcldpZGdldCIsImZlX2NmZyI6eyJjbW9kZSI6MCwiZmNsciI6InJnYmEoMjU1LCAyNTUsIDI1NSwgMSkiLCJiZyI6InJnYmEoMjEsIDI1LCAzMCwgMSkiLCJoIjo1MTAsInciOjkwMCwiYXN6Ijp0cnVlLCJmdCI6ImRlZmF1bHQiLCJodCI6Im5vbmUiLCJ0cmgiOltdLCJjaGMiOiJyZ2JhKDIzNywgNTAsIDk4LCAxKSIsImJlIjp0cnVlLCJiYyI6InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIsImJ3IjoxLCJjbiI6IiIsImxuZyI6ImVuIiwiaGRpY24iOmZhbHNlLCJ3dG1WIjp7InR5cGUiOiJEYXJxdWJlIiwiZW5hYmxlZCI6dHJ1ZX0sInVjIjoicmdiYSg0OCwgMTMxLCAxMDksIDEpIiwiZGMiOiJyZ2JhKDIzNywgNTAsIDk4LCAxKSIsImN0ZGMiOmZhbHNlfSwiZXhwIjoxNjg3MzYwOTIzLCJzdWIiOiJhY2Nlc3MifQ.0Dt8KWq8RO6siawLhsK_OIC2ETFWtmw0DhRMfrGCfcw"
                id="graficos ScreenerWidget-idwy4sl">
            </iframe>
        </div>
    )
}


