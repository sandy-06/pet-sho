import React from "react";
import Information from "../Information";

function Products() {

    return (
            <div uk-filter="target: .js-filter">

                <ul class="uk-subnav uk-subnav-pill uk-flex uk-flex-center">
                    <li class="uk-active" uk-filter-control=''><a href="#">All Products</a></li>
                    <li uk-filter-control="[data-color='white']"><a href="#">Food</a></li>
                    <li uk-filter-control="[data-color='blue']"><a href="#">Toys</a></li>
                    <li uk-filter-control="[data-color='black']"><a href="#">Acessories</a></li>
                </ul>

                <ul class="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid=''>
                    <li data-color="white">
                        <div class="uk-card uk-card-default uk-card-body">
                            <a href="#modal-example" uk-toggle=''>Item</a>
                        </div>
                    </li>
                    <li data-color="blue">
                        <div class="uk-card uk-card-primary uk-card-body">Item</div>
                    </li>
                    <li data-color="white">
                        <div class="uk-card uk-card-default uk-card-body">Item</div>
                    </li>
                    <li data-color="white">
                        <div class="uk-card uk-card-default uk-card-body">Item</div>
                    </li>
                    <li data-color="black">
                        <div class="uk-card uk-card-secondary uk-card-body">Item</div>
                    </li>
                    <li data-color="black">
                        <div class="uk-card uk-card-secondary uk-card-body">Item</div>
                    </li>
                    <li data-color="blue">
                        <div class="uk-card uk-card-primary uk-card-body">Item</div>
                    </li>
                    <li data-color="black">
                        <div class="uk-card uk-card-secondary uk-card-body">Item</div>
                    </li>
                    <li data-color="blue">
                        <div class="uk-card uk-card-primary uk-card-body">Item</div>
                    </li>
                    <li data-color="white">
                        <div class="uk-card uk-card-default uk-card-body">Item</div>
                    </li>
                    <li data-color="blue">
                        <div class="uk-card uk-card-primary uk-card-body">Item</div>
                    </li>
                    <li data-color="black">
                        <div class="uk-card uk-card-secondary uk-card-body">Item</div>
                    </li>
                </ul>
            </div>
    )
}

export default Products