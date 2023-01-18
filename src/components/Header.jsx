import React from "react";
import Toggle from "./Toggle"

function Header () {
    return     <div class="top-container">
    <nav class="navbar navbar-expand-lg bg-transparent">
    <Toggle label=" " />
        <ul class="navbar-nav ml-auto">
            <li class="nav-item" id="home">
                <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item" id="visualiser">
                <a class="nav-link" href="visualiser.html">Visualiser</a>
            </li>
            <li class="nav-item" id="cash">
                <a class="nav-link" href="cash.html">Cash</a>
            </li>
            <li class="nav-item" id="shares">
                <a class="nav-link" href="shares.html">Shares</a>
            </li>
            <li class="nav-item" id="super">
                <a class="nav-link" href="super.html">Super</a>
            </li>
            <li class="nav-item" id="debts">
                <a class="nav-link" href="debts.html">Debts</a>
            </li>
            <li class="nav-item" id="budget">
                <a class="nav-link" href="budget.html">Budget</a>
            </li>
        </ul>
    </nav>

    <h1>FIPortal</h1>
</div>
}

export default Header;

