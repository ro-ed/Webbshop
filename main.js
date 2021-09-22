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

        },
        methods: {
            showStart: async function () {
                this.typeOfPage = "start";
                await this.fetchData();
                var imgBxShoes = document.getElementById('imgBx-shoes');
                if (imgBxShoes.innerHTML === "") {
                    await this.testFillWithItems();
                }

            },
            showProduct: function () {
                this.typeOfPage = "product"
            },
            showCart: async function () {
                this.typeOfPage = "cart"
                console.log(this.currentItemsInCartArray);
            },
            addToCart: async function (objectID) {
                await this.showCart();

                let inputIDToString = objectID.toString();

                let allCategories = [globalJSONArray.tshirts, globalJSONArray.underwear, globalJSONArray.trousers, globalJSONArray.sweaters, globalJSONArray.shoes]

                allCategories.forEach(category => {
                    category.forEach(produkt => {
                        if (produkt.ID == inputIDToString) {
                            console.log('Produkten som läggs till:', produkt);
                            this.currentItemsInCartArray.push(produkt);
                            console.log('Produkter i arrayen:', this.currentItemsInCartArray);
                            this.imageLink = produkt.Img

                        }
                    })
                });
                this.currentItemsInCartNumber = this.currentItemsInCartArray.length;
                console.log(this.currentItemsInCartNumber)
                this.totalPrice = this.currentItemsInCartArray.reduce(function (accumulator, item) {
                    return accumulator + item.Price;
                }, 0);
                console.log("TOTALPRICE:", this.totalPrice);
                this.totalVAT = this.totalPrice * 0.25;

                await this.showStart();

            },
            toggle: function () {
                var blur = document.getElementById('blur');
                blur.classList.toggle('active');
                var popup = document.getElementById('popup');
                popup.classList.toggle('active');

            },
            fetchData: async function () {
                await axios.get('products.json')
                    .then(response => {
                        let allData = response.data.categories[0];
                        globalJSONArray = allData;
                    })
            },
            testFillWithItems: async function () {

                let getImageBox_shoes = document.getElementById('imgBx-shoes');
                let getImageBox_sweater = document.getElementById('imgBx-sweater');
                let getImageBox_trouser = document.getElementById('imgBx-trouser');

                let allCategories = [globalJSONArray.tshirts, globalJSONArray.underwear, globalJSONArray.trousers, globalJSONArray.sweaters, globalJSONArray.shoes]

                allCategories.forEach(category => {
                    category.forEach(produkt => {
                        switch (produkt.ID) {
                            case '8a609b4b-b002-4eee-aa0c-e4fed93d2193':
                                //Sätter image-source
                                let newImg_1 = document.createElement('img')
                                newImg_1.src = produkt.Img;
                                getImageBox_shoes.appendChild(newImg_1);

                                //Sätter H2-tagg
                                let newH2_1 = document.createElement('h2');
                                newH2_1.innerHTML = produkt.Brand + ' ' + produkt.Model;
                                getImageBox_shoes.appendChild(newH2_1)


                                //Sätter H3-tagg
                                let newH3_1 = document.createElement('h3');
                                newH3_1.innerHTML = produkt.Price + 'kr';
                                getImageBox_shoes.appendChild(newH3_1);
                                break;

                            case 'd42275ce-6874-4d1d-96d3-ae94aacdf14a':
                                //Sätter image-source
                                let newImg_2 = document.createElement('img')
                                newImg_2.src = produkt.Img;
                                getImageBox_sweater.appendChild(newImg_2);

                                //Sätter H2-tagg
                                let newH2_2 = document.createElement('h2');
                                newH2_2.innerHTML = produkt.Brand + ' ' + produkt.Model;
                                getImageBox_sweater.appendChild(newH2_2)


                                //Sätter H3-tagg
                                let newH3_2 = document.createElement('h3');
                                newH3_2.innerHTML = produkt.Price + 'kr';
                                getImageBox_sweater.appendChild(newH3_2);

                                break;

                            case '3ed9dcff-99d6-4f37-b9d4-e3ace1e78324':
                                //Sätter image-source
                                let newImg_3 = document.createElement('img')
                                newImg_3.src = produkt.Img;
                                getImageBox_trouser.appendChild(newImg_3);

                                //Sätter H2-tagg
                                let newH2_3 = document.createElement('h2');
                                newH2_3.innerHTML = produkt.Brand + ' ' + produkt.Model;
                                getImageBox_trouser.appendChild(newH2_3)


                                //Sätter H3-tagg
                                let newH3_3 = document.createElement('h3');
                                newH3_3.innerHTML = produkt.Price + 'kr';
                                getImageBox_trouser.appendChild(newH3_3);

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

                let noValueArr = []


                console.log(this.$refs);

                for (var ref in this.$refs) {

                    if (!this.$refs[ref].value) {
                        
                        switch (this.$refs[ref].id) {
                            case 'firstname':
                                this.firstnameHasText = false;
                                noValueArr.push(this.$refs[ref]);
                                break;
                            case 'surname':
                                this.surnameHasText = false;
                                noValueArr.push(this.$refs[ref]);
                                break;
                            case 'address':
                                this.addressHasText = false;
                                noValueArr.push(this.$refs[ref]);
                                break;
                            case 'postcode':
                                this.postcodeHasText = false;
                                noValueArr.push(this.$refs[ref]);
                                break;
                            case 'phonenumber':
                                this.phonenumberHasText = false;
                                noValueArr.push(this.$refs[ref]);
                                break;
                            case 'email':
                                this.emailHasText = false;
                                noValueArr.push(this.$refs[ref]);
                                break;

                        }

                    }

                    else
                    {
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

                        }
                    }

                }
                if (!noValueArr.length) {
                    console.log("ALLA HAR VÄRDE DU KAN GÖRA PURCHASE")
                }
            }

        }

    })