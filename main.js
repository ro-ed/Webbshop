let globalJSONArray = []
let allCategories = [globalJSONArray.tshirts, globalJSONArray.underwear, globalJSONArray.trousers, globalJSONArray.sweaters, globalJSONArray.shoes]

Vue.component('website-title',
    {
        template: '<div><h1>SCABLE</h1><p>™</p></div>'
    }
)

Vue.component('header-icon-search',
    {
        template: '<div><svg id="showSearch" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">'
            + '<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>'
            + '</svg></div>'
    })

Vue.component('header-icon-profile',
    {
        template: '<div><svg id="showProfile" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">'
            + '<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>'
            + '</svg></div>'

    })

Vue.component('header-icon-favorites',
    {
        template: '<div><svg id="showFavorites" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">'
            + '<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>'
            + '</svg></div>'

    })

Vue.component('header-icon-cart',
    {
        template: '<div><svg id="showCart" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">'
            + '<path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>'
            + '</svg></div>'

    })

Vue.component('start-usp',
    {
        template: '<div><div class="usp"><ul>'
            + '<li><h1 style="color: #81C784;">SUSTAINABLE.</h1></li>'
            + '<li><h1 style="color: #D27D2D">COMFORTABLE.</h1></li>'
            + '<li><h1 style="color: #E1AD01">AFFORDABLE.</h1></li>'
            + '<li><h1 style="color: white">We are SCABLE.</h1></li></ul></div>'
            + '<img src="/images/background-unsplash.jpg"></img>'
            + '</div>'
    })

Vue.component('x-icon',
    {
        template: `<div><svg id="x-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg></div>`
    })


var app = new Vue(
    {

        el: '#app',
        async created() {
            await this.fetchData();
            this.testFillWithItems();
            console.log("CREATING WEBSITE")
        },
        data: {
            typeOfPage: "",
            trousersChecked: "",
            sweatersChecked: "",
            shoesChecked: "",
            currentItemsInCartNumber: "",
            currentItemsInCartArray: [

            ],
            imageLink: "",
            totalPrice: "",
            totalVAT: "",
            paymentpicked: "",
            totalCost: "",
            totalCostVAT: "",
            firstnameHasText: "",
            surnameHasText: "",
            addressHasText: "",
            postcodeHasText: "",
            phonenumberHasText: "",
            emailHasText: "",
            cardnumberHasNumbers: "",
            cvcHasNumbers: "",
            noValueArr: [],
            amountOfNikeAirShoes: "",
            amountOfSmogSweaters: "",
            amountOfNikeDriFit: "",
            amountOfNikeNBA: "",
            amountOfTuuli: "",
            getImageBox_shoes2: "",
            usableGlobalArray: [],
            adminActivated: false,
            showNewItem: false,
            newItemID: "",
            newItemSpot: "",
            firstItemSpot: -1,
            amountOfNikeLeBron: ""

        },
        methods: {
            showStart: function () {
                this.typeOfPage = "start";
                //await this.fetchData();
                var imgBxShoes = document.getElementById('imgBx-shoes');
                console.log("IS THERE ITEMS START?????", globalJSONArray)
                if (imgBxShoes.innerHTML === '') {
                    this.testFillWithItems();
                }
            },
            showProduct: async function () {
                this.typeOfPage = "product";
                // var imgBxShoes = document.getElementById('imgBx-shoes');
                // console.log("IS THERE ITEMS PRODUCT?????", globalJSONArray) 
                //  await this.testFillWithItems();

            },
            showCart: async function () {
                this.typeOfPage = "cart"
                console.log(this.currentItemsInCartArray);
                console.log("THE AMOUNT OF SHOES: ", this.amountOfNikeAirShoes)
            },
            addToCart: async function (objectID) {
                // await this.showCart();

                let inputIDToString = objectID.toString();

                let allCategories = [globalJSONArray.tshirts, globalJSONArray.underwear, globalJSONArray.trousers, globalJSONArray.sweaters, globalJSONArray.shoes]

                // allCategories.forEach(category => {
                //     category.forEach(produkt => {
                //         if (produkt.ID == inputIDToString) {
                //             if (produkt.Quantity > 0) {
                //                 console.log('Produkten som läggs till:', produkt);
                //                 this.currentItemsInCartArray.push(produkt);
                //                 console.log('Produkter i arrayen:', this.currentItemsInCartArray);

                //                 produkt.Quantity--;
                //                 switch (inputIDToString) {
                //                     case '8a609b4b-b002-4eee-aa0c-e4fed93d2193':
                //                         this.amountOfNikeAirShoes = produkt.Quantity;
                //                         break;
                //                     case 'd42275ce-6874-4d1d-96d3-ae94aacdf14a':
                //                         this.amountOfSmogSweaters = produkt.Quantity;
                //                         break;
                //                     case '3ed9dcff-99d6-4f37-b9d4-e3ace1e78324':
                //                         this.amountOfNikeDriFit = produkt.Quantity;
                //                         break;
                //                     case 'c0b282d6-ba6f-4f29-8cf3-23e2bba017f8':
                //                         this.amountOfNikeNBA = produkt.Quantity;
                //                         break;
                //                     case '3b6bfa72-c346-41c4-a758-a00a0707f426':
                //                         this.amountOfTuuli = produkt.Quantity;
                //                         break;
                //                 }

                //                 console.log("SÅ HÄR MÅMGA AV", produkt.ID, "FINNS DET KVAR:", produkt.Quantity)
                //             }
                //             else {
                //                 this.toggleOutOfStock();
                //             }


                //         }

                //     })
                // });

                
                    this.usableGlobalArray.forEach(product => {
                        if (product.ID == inputIDToString) {
                            if (product.Quantity > 0) {
                                console.log('Produkten som läggs till:', product);
                                this.currentItemsInCartArray.push(product);
                                console.log('Produkter i arrayen:', this.currentItemsInCartArray);

                                product.Quantity--;
                                switch (inputIDToString) {
                                    case '8a609b4b-b002-4eee-aa0c-e4fed93d2193':
                                        this.amountOfNikeAirShoes = product.Quantity;
                                        break;
                                    case 'd42275ce-6874-4d1d-96d3-ae94aacdf14a':
                                        this.amountOfSmogSweaters = product.Quantity;
                                        break;
                                    case '3ed9dcff-99d6-4f37-b9d4-e3ace1e78324':
                                        this.amountOfNikeDriFit = product.Quantity;
                                        break;
                                    case 'c0b282d6-ba6f-4f29-8cf3-23e2bba017f8':
                                        this.amountOfNikeNBA = product.Quantity;
                                        break;
                                    case '3b6bfa72-c346-41c4-a758-a00a0707f426':
                                        this.amountOfTuuli = product.Quantity;
                                        break;
                                        
                                    case '626a4cd9-0a70-4894-97f2-5b4c90254adc':
                                        this.amountOfNikeLeBron = product.Quantity;
                                        break;
                                }

                                console.log("SÅ HÄR MÅMGA AV", product.ID, "FINNS DET KVAR:", product.Quantity)
                            }
                            else {
                                this.toggleOutOfStock();
                            }


                        }

                    })
                

                this.currentItemsInCartNumber = this.currentItemsInCartArray.length;
                console.log(this.currentItemsInCartNumber)
                this.totalPrice = this.currentItemsInCartArray.reduce(function (accumulator, item) {
                    return accumulator + item.Price;
                }, 0);
                console.log("TOTALPRICE:", this.totalPrice);
                this.totalVAT = this.totalPrice * 0.25;

                // await this.showStart();

            },
            toggle: function () {
                var blur = document.getElementById('blur');
                blur.classList.toggle('active');
                var popup = document.getElementById('popup');
                popup.classList.toggle('active');

            },
            toggleOutOfStock: function () {
                var blur = document.getElementById('blur');
                blur.classList.toggle('active');
                var popup = document.getElementById('popup-not-in-stock');
                popup.classList.toggle('active');
            },
            fetchData: async function () {
                await axios.get('products.json')
                    .then(response => {
                        let allData = response.data.categories[0];
                        globalJSONArray = allData;
                    })
            },
            testFillWithItems: function () {

                let allCategories = [globalJSONArray.tshirts, globalJSONArray.underwear, globalJSONArray.trousers, globalJSONArray.sweaters, globalJSONArray.shoes]

                console.log("ALL CATEGORIES", allCategories)

                allCategories.forEach(category => {
                    category.forEach(produkt => {

                        this.usableGlobalArray.push(produkt);
                        console.log("THIS IS THE USABLE ARRAY IN FILL WITH ITEMS")
                        switch (produkt.ID) {
                            case '8a609b4b-b002-4eee-aa0c-e4fed93d2193':

                                if (this.amountOfNikeAirShoes === '') {
                                    this.amountOfNikeAirShoes = produkt.Quantity;
                                }
                                if (produkt.Quantity > this.amountOfNikeAirShoes) {
                                    this.amountOfNikeAirShoes = produkt.Quantity;
                                }
                                if (this.amountOfNikeAirShoes === 0) {
                                    produkt.Quantity = this.amountOfNikeAirShoes;
                                }

                                break;

                            case 'd42275ce-6874-4d1d-96d3-ae94aacdf14a':


                                if (this.amountOfSmogSweaters === '') {
                                    this.amountOfSmogSweaters = produkt.Quantity;
                                }
                                if (produkt.Quantity > this.amountOfSmogSweaters) {
                                    this.amountOfSmogSweaters = produkt.Quantity;
                                }
                                if (this.amountOfSmogSweaters === 0) {
                                    produkt.Quantity = this.amountOfSmogSweaters;
                                }
                                break;

                            case '3ed9dcff-99d6-4f37-b9d4-e3ace1e78324':

                                if (this.amountOfNikeDriFit === '') {
                                    this.amountOfNikeDriFit = produkt.Quantity;
                                }
                                if (produkt.Quantity > this.amountOfNikeDriFit) {
                                    this.amountOfNikeDriFit = produkt.Quantity;
                                }
                                if (this.amountOfNikeDriFit === 0) {
                                    produkt.Quantity = this.amountOfNikeDriFit;
                                }
                                break;
                            case 'c0b282d6-ba6f-4f29-8cf3-23e2bba017f8':
                                if (this.amountOfNikeNBA === '') {
                                    this.amountOfNikeNBA = produkt.Quantity;
                                }
                                if (produkt.Quantity > this.amountOfNikeNBA) {
                                    this.amountOfNikeNBA = produkt.Quantity;
                                }
                                if (this.amountOfNikeNBA === 0) {
                                    produkt.Quantity = this.amountOfNikeNBA;
                                }
                                break;
                            case '3b6bfa72-c346-41c4-a758-a00a0707f426':
                                if (this.amountOfTuuli === '') {
                                    this.amountOfTuuli = produkt.Quantity;
                                }
                                if (produkt.Quantity > this.amountOfTuuli) {
                                    this.amountOfTuuli = produkt.Quantity;
                                }
                                if (this.amountOfTuuli === 0) {
                                    produkt.Quantity = this.amountOfTuuli;
                                }
                                break;
                        }
                    })
                });
            },
            deleteItemByIndex: function (index) {
                this.currentItemsInCartArray.splice(index, 1)
                console.log("Items in cart:", this.currentItemsInCartArray.length)
                this.currentItemsInCartNumber = this.currentItemsInCartArray.length;
                this.totalPrice = this.currentItemsInCartArray.reduce(function (accumulator, item) {
                    return accumulator + item.Price;
                }, 0);
                this.totalVAT = this.totalPrice * 0.25;
                this.totalCost = this.totalPrice;
                this.totalCostVAT = this.totalCost * 0.25;

            },
            deleteItemById: function (id) {
                console.log(id)
                let i = this.currentItemsInCartArray.map(item => item.ID).indexOf(id) // find index of your object
                // let findItem = this.currentItemsInCartArray.map(item => item.Quantity).indexOf(id)
                // console.log("THE FOUND ITEM" ,findItem)

                this.usableGlobalArray.forEach(item => {
                    if (item.ID == id) {
                        console.log("THE AMOUNT BEFORE:", item.Quantity)
                        item.Quantity++
                        console.log("THE AMOUNT AFTER:", item.Quantity)
                        switch (id) {
                            case '8a609b4b-b002-4eee-aa0c-e4fed93d2193':
                                this.amountOfNikeAirShoes = item.Quantity;
                                break;
                            case 'd42275ce-6874-4d1d-96d3-ae94aacdf14a':
                                this.amountOfSmogSweaters = item.Quantity;
                                break;
                            case '3ed9dcff-99d6-4f37-b9d4-e3ace1e78324':
                                this.amountOfNikeDriFit = item.Quantity;
                                break;
                            case 'c0b282d6-ba6f-4f29-8cf3-23e2bba017f8':
                                this.amountOfNikeNBA = item.Quantity;
                                break;
                            case '3b6bfa72-c346-41c4-a758-a00a0707f426':
                                this.amountOfTuuli = item.Quantity;
                                break;
                        }
                    }
                })

                // let allCategories = [globalJSONArray.tshirts, globalJSONArray.underwear, globalJSONArray.trousers, globalJSONArray.sweaters, globalJSONArray.shoes]

                // allCategories.forEach(category => {
                //     category.forEach(produkt => {
                //         if (produkt.ID == id) {
                //             console.log("THE AMOUNT BEFORE:", produkt.Quantity)
                //             produkt.Quantity++
                //             console.log("THE AMOUNT AFTER:", produkt.Quantity)
                //         }
                //     })

                // })
                console.log(i)
                this.currentItemsInCartArray.splice(i, 1)
                console.log("Items in cart:", this.currentItemsInCartArray.length)
                this.currentItemsInCartNumber = this.currentItemsInCartArray.length;
                this.totalPrice = this.currentItemsInCartArray.reduce(function (accumulator, item) {
                    return accumulator + item.Price;
                }, 0);
                this.totalVAT = this.totalPrice * 0.25;
                this.totalCost = this.totalPrice;
                this.totalCostVAT = this.totalCost * 0.25;
            },
            setTotalCost: function (value) {
                this.totalCost = "";
                this.totalCostVAT = "";
                console.log("MARKERAD");
                if (value === 'dhl') {
                    this.totalCost += this.totalPrice + 49
                    this.totalCostVAT += this.totalCost * 0.25
                }
                else if (value === 'schenker') {
                    this.totalCost += this.totalPrice + 59;
                    this.totalCostVAT += this.totalCost * 0.25
                }

                console.log(this.$refs.firstname_ref.value)

            },
            setErrorMessage: function () {


                this.noValueArr = []

                console.log(this.$refs);

                for (var ref in this.$refs) {

                    if (!this.$refs[ref].value) {

                        switch (this.$refs[ref].id) {
                            case 'firstname':
                                this.firstnameHasText = false;
                                this.noValueArr.push(this.$refs[ref]);
                                break;
                            case 'surname':
                                this.surnameHasText = false;
                                this.noValueArr.push(this.$refs[ref]);
                                break;
                            case 'address':
                                this.addressHasText = false;
                                this.noValueArr.push(this.$refs[ref]);
                                break;
                            case 'postcode':
                                this.postcodeHasText = false;
                                this.noValueArr.push(this.$refs[ref]);
                                break;
                            case 'phonenumber':
                                this.phonenumberHasText = false;
                                this.noValueArr.push(this.$refs[ref]);
                                break;
                            case 'email':
                                this.emailHasText = false;
                                this.noValueArr.push(this.$refs[ref]);
                                break;
                            case 'cardnumber':
                                this.cardnumberHasNumbers = false;
                                this.noValueArr.push(this.$refs[ref]);
                                break;
                            case 'cvc':
                                this.cvcHasNumbers = false;
                                this.noValueArr.push(this.$refs[ref]);
                                break;

                        }

                    }

                    else {
                        switch (this.$refs[ref].id) {
                            case 'firstname':
                                this.firstnameHasText = true;
                                break;

                            case 'surname':
                                this.surnameHasText = true;
                                break;

                            case 'address':
                                this.addressHasText = true;
                                break;

                            case 'postcode':
                                this.postcodeHasText = true;
                                break;

                            case 'phonenumber':
                                this.phonenumberHasText = true;
                                break;

                            case 'email':
                                this.emailHasText = true;
                                break;
                            case 'cardnumber':
                                this.cardnumberHasNumbers = true;
                                break;
                            case 'cvc':
                                this.cvcHasNumbers = true;
                                break;

                        }
                    }

                }

            },
            toggleError: function () {
                var blur = document.getElementById('cartBlur');
                blur.classList.toggle('active');
                var popup = document.getElementById('popup-cart');
                popup.classList.toggle('active');
            },
            purchaseItems: function () {
                if (!this.noValueArr.length && (this.cvcHasNumbers == true && this.cardnumberHasNumbers == true)
                    && (document.querySelector('input[value="pm-card"]:checked') != null)
                    && this.currentItemsInCartNumber > 0) {
                    this.currentItemsInCartArray = "";
                    this.totalPrice = "";
                    this.totalVAT = "";
                    this.totalCost = "";
                    this.totalCostVAT = "";
                    this.currentItemsInCartNumber = this.currentItemsInCartArray.length;
                    this.typeOfPage = "thankyou";
                }
                else if (!this.noValueArr.length && (this.cvcHasNumbers == false && this.cardnumberHasNumbers == false)
                    && (document.querySelector('input[value="pm-swish"]:checked') != null) && (document.querySelector('input[name="shipping"]:checked') != null)
                    && this.currentItemsInCartNumber > 0) {
                    this.currentItemsInCartArray = "";
                    this.currentItemsInCartArray = "";
                    this.totalPrice = "";
                    this.totalVAT = "";
                    this.totalCost = "";
                    this.totalCostVAT = "";
                    this.currentItemsInCartNumber = this.currentItemsInCartArray.length;
                    this.typeOfPage = "thankyou";
                }
                else {
                    this.toggleError()
                }
            },
            getImage: function (pic) {
                return pic
            },
            toggleAdmin: function () {
                if (this.adminActivated == false) {
                    this.adminActivated = true;
                }
                else {
                    this.adminActivated = false;
                }

            },
            adminAddItem: function () {
                var newItem =
                {
                    ID: this.$refs.enterid_ref.value,
                    Brand: this.$refs.enterbrand_ref.value,
                    Model: this.$refs.entermodel_ref.value,
                    Price: this.$refs.enterprice_ref.value,
                    Description: this.$refs.enterdesc_ref.value,
                    Img: this.$refs.enterimg_ref.value,
                    Quantity: this.$refs.enterquantity_ref.value

                };

                this.usableGlobalArray.push(newItem);
                console.log("NEW ITEM IS IN HERE", this.usableGlobalArray);

                let lastItem = this.usableGlobalArray.slice(-1)[0] //Get newly added item
                let theNumberOfNewObject = this.usableGlobalArray[this.usableGlobalArray.length - 1]
                console.log("LAST ITEM:", lastItem)
                
                this.newItemID = this.$refs.enterid_ref.value;
                console.log("NEW ITEM ID", this.newItemID)

                
                
                if(this.firstItemSpot > -1)
                {
                    this.newItemSpot = theNumberOfNewObject;
                }

                this.firstItemSpot = theNumberOfNewObject;

                
                
                this.showNewItem = true;
               
            },
            adminChangeItem: function () {
                this.usableGlobalArray.forEach(item => {
                    if (item.ID == this.$refs.enterid_ref.value) {

                            item.ID = this.$refs.enterid_ref.value,
                            item.Brand = this.$refs.enterbrand_ref.value,
                            item.Model = this.$refs.entermodel_ref.value,
                            item.Price = this.$refs.enterprice_ref.value,
                            item.Description = this.$refs.enterdesc_ref.value,
                            item.Img = this.$refs.enterimg_ref.value,
                            item.Quantity = this.$refs.enterquantity_ref.value
                    }
                })


                console.log("DEN ÄNDRADE ARRAYEN:", this.usableGlobalArray)
            }

        }

    })

//     Vue.component('newlyAddedItem',
//     {
//         template: `<div><div class="card">
//     <div class="imgBx" id="imgBx-shoes" v-for="item in app.this.usableGlobalArray" 
//     v-if="item.ID === 1">
//         <img :src="getImage(item.Img)">
//         <h2>{{item.Brand}} {{item.Model}}</h2>
//         <h3>{{item.Price}}kr</h3>
//     </div>
//     <div class="content" id="card-content-shoes">
//         <div class="size">
//             <h3>Size :</h3>
//             <span>41</span>
//             <span>42</span>
//             <span>43</span>
//             <span>44</span>
//         </div>
//         <div class="color">
//             <h3>Color :</h3>
//             <span></span>
//             <span></span>
//             <span></span>
//             <span></span>
//         </div>
//         <div class="buttons">
//             <a v-on:click="addToCart(app.this.$refs.enterid_ref.value)">Add to
//                 cart</a>
//             <a v-on:click="toggle()">More info</a>
//         </div>
//         <h3 class="quantity" v-model="amountOfNikeAirShoes">In stock {{amountOfNikeAirShoes}}</h3>

//     </div>
// </div></div>`

//     })