let date = new Date();
let tanggal = date.getDate();
let bulan = date.getMonth() + 1;
let tahun = date.getFullYear();

if (tanggal < 10) {
  tanggal = "0" + tanggal;
}
if (bulan < 10) {
  bulan = "0" + bulan;
}

// deklarasi untuk menampilkan tanggal sekarang
let dateNow = tahun + "-" + bulan + "-" + tanggal;

// deklarasi untuk loading
const loading = document.querySelector("#loading");

//  function untuk menampilkan loading
function showLoading() {
  loading.style.display = "block";
  loading.style.opacity = 1;
}
// function untuk menyembunyikan  hasil loading
function hiddenLoading() {
  let loadingEffect = setInterval(() => {
    if (!loading.style.opacity) {
      loading.style.opacity = 1;
    }
    if (loading.style.opacity > 0) {
      loading.style.opacity -= 0.1;
    } else {
      clearInterval(loadingEffect);
      loading.style.display = "none";
    }
  }, 100);
}

// deklarasi tampilan hasil case dari API di HTML
const activeCase = document.querySelector("#activeCase");
activeCase.innerHTML = 0;
const newCase = document.querySelector("#newCases");
newCase.innerHTML = 0;
const recoveredCase = document.querySelector("#recoverCases");
recoveredCase.innerHTML = 0;
const totalCase = document.querySelector("#totalCases");
totalCase.innerHTML = 0;
const totalDate = document.querySelector("#totalDeaths");
totalDate.innerHTML = 0;
const totalTest = document.querySelector("#totalTest");
totalTest.innerHTML = 0;
const populasi = document.querySelector(".population");

// deklarasi untuk Header pengambilan API
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4ea3ed900dmsh0205b31b16c271dp1c14b1jsn2a2d224cb894",
    "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
  },
};

// mendapatkan button cari
const buttonTracker = document.querySelector("#cariTracker");

buttonTracker.addEventListener("click", (e) => {
  e.preventDefault();
  // deklarasi mengambil element negara  tracker
  const negaraTracker = document.querySelector("#negaraTracker");
  // deklarasi value hasil inputan
  const negara = document.querySelector("#inputNegara").value;
  const inputDate = document.querySelector("#inputDate").value;

  showLoading();

  if (inputDate > dateNow) {
    alert("Tanggal yang anda masukkan melebih batas ");
    hiddenLoading();
    return;
  } else if (inputDate == "") {
    fatchApi = fetch(
      `https://covid-193.p.rapidapi.com/history?country=${negara}&day=${dateNow}`,
      options
    );
  } else {
    fatchApi = fetch(
      `https://covid-193.p.rapidapi.com/history?country=${negara}&day=${inputDate}`,
      options
    );
  }
  fatchApi
    .then((response) => response.json())
    .then((response) => {
      if (response.results == 0) {
        alert("Negara " + negara + " tidak ditemukan");
        hiddenLoading();
        return;
      } else {
        negaraTracker.innerHTML =
          response.response[0].country + " " + response.response[0].day;
        // pengondisian untuk value new case hasil api yang null
        if (response.response[0].cases.new == null) {
          newCase.innerHTML = 0;
        } else {
          newCase.innerHTML = response.response[0].cases.new;
        }
        // pengondisian untuk value hasil test api yang null
        if (response.response[0].tests.total == null) {
          totalTest.innerHTML = 0;
        } else {
          totalTest.innerHTML = response.response[0].tests.total;
        }
        activeCase.innerHTML = response.response[0].cases.active;
        recoveredCase.innerHTML = response.response[0].cases.recovered;
        totalCase.innerHTML = response.response[0].cases.total;
        totalDate.innerHTML = response.response[0].deaths.total;
        populasi.innerHTML =
          "Total Populasi: " + response.response[0].population;
      }
      hiddenLoading();
    })
    
});