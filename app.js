/// DOM MANIPULATION

// Goal: Retail Site 
    // Dynamically change the Entire Site with a click of a button
    // General -- Mens -- Womens -- Children

    let majorContainer ={
        mens: {
            headImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            optionTags: ["Boots", "Flannels", "Rugged Wear", "Shaving Cream"],
            productImages: [
                {
                    name: 'Sneakers',
                    pic: "https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                },
                {
                    name: 'Boots',
                    pic: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                },
                {
                    name: 'Flannels',
                    pic: "https://images.unsplash.com/photo-1638718297700-e828368a54e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Scarves',
                    pic: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Hoodies',
                    pic: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Hats',
                    pic: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=723&q=80"
                },
            ],
            textDescription: 'Update your everyday wardrobe with our collection of mens pants. Discover tailored suit pants for work or special occasions, as well as comfier sweatpants and joggers for downtime. Mix up your weekend look and swap the jeans for a pair of cargo pants or chinos. Browse a range of colors, from neutral blacks and grays to brighter shades and prints. Find everything from soft breathable cotton to functional track pants and luxe velvet dress pants.',
            lowImage: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
        },
        womens: {
            headImage: "https://media.istockphoto.com/id/935032524/photo/women-summer-dresses-on-display-at-camden-market.jpg?s=1024x1024&w=is&k=20&c=tJOs8y-0XOCDy5Mtzsj4FRiPv8EGe1cUPbXp4UuSEuY=",
            optionTags: ["Hat", "Top", "Perfume", "shoes"],
            productImages: [
                {
                    name: 'Topdress',
                    pic: "https://litb-cgis.rightinthebox.com/images/640x853/202302/bps/product/inc/yxbfni1675327574753.jpg?fmt=webp&v=1"
                },
                {
                    name: 'Boots',
                    pic: "https://slimages.macysassets.com/is/image/MCY/products/4/optimized/20985654_fpx.tif?$browse$&wid=319&fmt=webp"
                },
                 
                {
                    name: 'Perfume',
                    pic: "https://m.media-amazon.com/images/I/51BSVKGWgHL._SY355_.jpg"
                },
                {
                    name: 'shirt',
                    pic: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTMjO_9PH9uAdQ0b_HFtI3O9oaBIVwigJC7uh7YlVK93I8D_tXnuOcAclWAHx30dI0wCxsSBIt-NniJZRforoz4c7tF4kw7Enl6eXy3kq6zvMJwSr9wRn47"
                },
                {
                    name: 'Perse',
                    pic: "https://n.nordstrommedia.com/id/sr3/84068570-3c22-4a9e-a6e4-6be934e37fd8.jpeg?h=365&w=240&dpr=2"
                },
               
                {
                    name: 'Hats',
                    pic: "https://m.media-amazon.com/images/I/41fvo7RQaZL._AC_SR320,400_.jpg"
                },
              
            ],
            textDescription: 'Update your everyday wardrobe with our collection of womans pants. Discover tailored suit pants for work or special occasions, as well as comfier sweatpants and joggers for downtime. Mix up your weekend look and swap the jeans for a pair of cargo pants or chinos. Browse a range of colors, from neutral blacks and grays to brighter shades and prints. Find everything from soft breathable cotton to functional track pants and luxe velvet dress pants.',
            lowImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5rD8eOGoIyIh4ptCeBZgtHt13vaLse1xvpbZfVfX9Xw8V29CMr2CXdtnhozBP94uFI6E&usqp=CAU'

        },
        kids: {
            headImage: "https://assets.theplace.com/image/upload/w_auto,f_auto,q_auto,dpr_1/w_1200/ecom/assets/content/tcp/us/homepage/2023/052323/final/uniform.jpg",
            optionTags: ["Uniform", "Shose", "Top", "Hat"],
            productImages: [
                {
                    name: 'Uniform',
                    pic: "https://assets.theplace.com/image/upload/w_300,f_auto,q_auto,dpr_1.5/ecom/assets/content/tcp/us/dlp/plp/L1/DLP_Grid_-_Portrait_-34.jpg"
                },
                {
                    name: 'Boots',
                    pic: "https://www.famousfootwear.com/blob/product-images/20000/41/53/5/41535_right_medium.jpg"
                },
                {
                    name: 'Toy',
                    pic: "https://m.media-amazon.com/images/I/81eYYJXuD-S._AC_SL1500_.jpg"
                },
                {
                    name: 'Top',
                    pic: "https://www.gapfactory.com/webcontent/0052/595/507/cn52595507.jpg"
                },
                {
                    name: 'Pant',
                    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoTluI16ahl7AQ2t2uiIdPBnjM00uwxpDLYj6c9Z2YXZMK_vqQIraTDo9rofwu3b3aQTA&usqp=CAU"
                },
                {
                    name: 'Hats',
                    pic: "https://i5.walmartimages.com/asr/5fa3e396-f69a-47a4-ba8b-ea2f509ff192.82bb0c5da637d84c2177b95ae140f50a.jpeg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
                }
            ],
            textDescription: "Update your everyday wardrobe with our collection of kids cloth, shoe and other staff.kid's staff is clothing for children who have not yet grown to full height.",
            lowImage: "https://img.freepik.com/free-photo/group-diverse-cheerful-kids_53876-138030.jpg?w=826&t=st=1686847220~exp=1686847820~hmac=06b938a71b74b2582ba16433f5a557f0b7f7e20b2cd3f0eb270155cb7a6f253c"

        }
    }
// -----------------------

let mainImage = document.querySelector('.mainImg')
let picture = document.querySelector('.topPic')
let option = document.querySelector('.options')
let miniOp = document.querySelectorAll('.choice')
let productBox = document.querySelector('.productContainer')
let pic = document.querySelector('.polaroid')
let textBox = document.querySelector('.textContainer')

const changeAll = (category) => {
    changeTopPic(category)
    changeOptions(category)
    product(category)
    lowerImage(category)
    description(category)

    }

    const changeTopPic = (category) =>{
        // createImage
        if (category === "mens") {
        picture.src = majorContainer.mens.headImage
        }else if(category === "womens"){

            picture.src = majorContainer.womens.headImage
    }else{
    // createImage
    picture.src = majorContainer.kids.headImage
    // replaceWith current
  
    }
 }
    const product= (category) => {
        productBox.innerHTML = ""
        if(category ==="mens"){
        majorContainer.mens.productImages.forEach((obj)=>{
                let shopBox  = document.createElement('img')
                shopBox.setAttribute('src',obj.pic)
                shopBox.setAttribute('class','product')
                productBox.append(shopBox)
        })
        } else if (category ==="womens"){
            majorContainer.womens.productImages.forEach((obj)=>{
                let shopBox  = document.createElement('img')
                shopBox.setAttribute('src',obj.pic)
                shopBox.setAttribute('class','product')
                productBox.append(shopBox)
            })
        }else {
            majorContainer.kids.productImages.forEach((obj)=>{
                let shopBox  = document.createElement('img')
                shopBox.setAttribute('src',obj.pic)
                shopBox.setAttribute('class','product')
                productBox.append(shopBox)
            })
        }
    }
    const changeOptions = (productCategory)=>{
    if (productCategory === "mens"){
    for(let i = 0; i < miniOp.length; i++){
        miniOp[i].innerHTML = majorContainer.mens.optionTags[i]
    }
    }else if ( productCategory === "womens") {
    for(let i = 0; i < miniOp.length; i++){
        miniOp[i].innerHTML = majorContainer.womens.optionTags[i]
    }
    }else{
    for(let i = 0; i < miniOp.length; i++){
        miniOp[i].innerHTML = majorContainer.kids.optionTags[i]
    }
    }
    }
    const lowerImage = (category) =>{
        if (category === "mens"){
    pic.src = majorContainer.mens.lowImage
        } else if(category==="womens"){
            pic.src = majorContainer.womens.lowImage
    } else{
        pic.src = majorContainer.kids.lowImage
    }
}
const description =  (category)=>{
    if (category === "mens"){
        textBox.innerHTML = majorContainer.mens. textDescription
            } else if(category==="womens"){
                textBox.innerHTML = majorContainer.womens. textDescription
        } else{
            textBox.innerHTML = majorContainer.kids. textDescription
        }
}