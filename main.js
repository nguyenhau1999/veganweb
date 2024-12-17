// Java của fancy box
$(function () { // Khi tài liệu DOM đã sẵn sàng
  $('.khung a').fancybox({ // Áp dụng Fancybox cho tất cả các liên kết trong .khunganh
    // 'transitionIn': 'elastic', // Hiệu ứng co giãn khi mở
    // 'transitionOut': 'elastic', // Hiệu ứng co giãn khi đóng
    'speedIn': 600, // Thời gian hiệu ứng mở (600ms)
    'speedOut': 200, // Thời gian hiệu ứng đóng (200ms)
    'overlayShow': true, // Hiển thị lớp phủ phía sau Fancybox
    'cyclic': true, // Cho phép duyệt ảnh liên tục
    'titlePosition': 'over', // Hiển thị tiêu đề dưới ảnh
    'titleFormat': function (title, currentArray, currentIndex, currentOpts) {
        return '<span id="fancybox-title-over">images ' + 
               (currentIndex + 1) + 
               ' / ' + currentArray.length + 
               (title.length ? ' &nbsp; ' + title : '') + 
               '</span>';
    },
  });
});

// Java của Form

function kiemtra(){
    var ht = window.document.dangky.firstname.value;
    var em = window.document.dangky.Email.value;
    var yk = window.document.dangky.subject.value;

    if (ht.length == 0) {
        alert("Vui lòng nhập họ và tên");
        window.document.dangky.firstname.focus();
        return false;
    }
    if (em.length == 0){
        alert("Vui lòng nhập Email của bạn");
        window.document.dangky.Email.focus();
        return false;
    }
    if (yk.length == 0) {
        alert("Vui lòng ý kiến của bạn");
        window.document.dangky.subject.focus();
        return false;
    }
    alert("Chúng tôi đã thu nhận ý kiến từ phía bạn !!!!!");
    return true;
}


/*Hiệu ứng ẩn hiện*/

let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}
let menu = document.querySelector('.menu');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}

// Java của giỏ hàng

const buy = document.querySelectorAll("button")
//console.log(buy)
buy.forEach(function(button,index){
button.addEventListener("click",function(event){{ //sự kiện click chuột vào button
    var buyproduct = event.target //đặt biến để khi click vào
    var productsanpham =  buyproduct.parentElement  //đặt biến 'khung' là biến cha để khi click vào thì nó sẽ lấy bao quát 1 class "khung"
    var khung = productsanpham.parentElement
    var khungImg = khung.querySelector('img').src //click vào để thêm thông tin hình ảnh vào giỏ hàng
    var khungName = khung.querySelector('h3').innerText //click vào để thêm thông tin tên vào giỏ hàng
    var khungPrice = khung.querySelector('span').innerText //click vào để thêm thông tin trong thẻ span là 'giá tiền'
    //console.log(khungPrice,khungImg,khungName)
    addcart(khungPrice,khungImg,khungName)
}})

})
function addcart(khungPrice,khungImg,khungName){ //hàm thêm sản phẩm vào cart
    var addtr = document.createElement("tr") //tạo thẻ tr 
    var cartItem  = document.querySelectorAll("tbody tr")
    for(var i = 0;i < cartItem.length;i++)
    {
        var productT = document.querySelectorAll(".for")
        if(productT[i].innerHTML == khungName)
        {
            alert("Sản phẩm đã có trong giỏ hàng")
            return
        }
    }
    var trContent ='<tr><td style="display: flex; align-items: center;"><img style="width: 90px" src="'+khungImg+'" alt=""><span class="for">'+khungName+'</span></td><td><span class="prices">'+khungPrice+'</span></td><td><input style="width:50px; outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;text-align: right;"><span class="delete-cart">Xoá</span></td></tr>'
    addtr.innerHTML = trContent
    var cartTable = document.querySelector('tbody')
    cartTable.append(addtr)
    cartTotal() //gọi hàm
    deleteProduct()
}

//-------------------------------------------Total Price---------------------------------------
function cartTotal(){ //định nghĩa hàm
    var cartItem  = document.querySelectorAll("tbody tr")
    //console.log(cartItem.length) kiểm tra
    TotalC = 0
    for(var i = 0; i < cartItem.length; i++)
    {
        var inputValue = cartItem[i].querySelector("input").value
        //console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".prices").innerHTML
        //console.log(productPrice)
        TotalA = inputValue*productPrice*1000
        TotalC = TotalC + TotalA
        //console.log(TotalC)
    }
    var cartTotalA = document.querySelector(".price-total span")
    cartTotalA.innerHTML = TotalC.toLocaleString('de-DE')
    inputChange()
}

//-------------------------------------------Delete Product---------------------------------------
function deleteProduct()
{
    var cartItem  = document.querySelectorAll("tbody tr")
    for(var i = 0;i < cartItem.length;i++)
    {
        var productT = document.querySelectorAll(".delete-cart")
        productT[i].addEventListener("click",function(event){
             var deleteCart = event.target
             var deleteItem = deleteCart.parentElement.parentElement
             deleteItem.remove() // xoá product
             cartTotal() // gọi lại hàm để định dạng lại giá sau khi xoá sản phẩm
        })
    }
}

function inputChange()
{
    var cartItem  = document.querySelectorAll("tbody tr")
    for(var i = 0;i < cartItem.length;i++)
        {
            var inputValue = cartItem[i].querySelector("input") 
            inputValue.addEventListener("change",function(){
                cartTotal()
            })
        }
}

