document.getElementById("simpan").addEventListener(
  "click",
  function () {
      let nama = document.getElementById("nama").value;
      let npm = document.getElementById("npm").value;
      let mhs = { nama: nama, npm: npm };
      let listmhs = [];
      if (localStorage.getItem("mhs")) {
          listmhs = JSON.parse(localStorage.getItem("mhs"));
          listmhs.push(mhs);
      } else {
          listmhs.push(mhs);
      }
      localStorage.setItem("mhs", JSON.stringify(listmhs));
      let data = "";
      for (const [idx, dt] of listmhs.entries()) {
          data +=
              "<tr>" +
              "<th scope='row'>" +
              (idx + 1) +
              "</th>" +
              "<td>" +
              dt.npm +
              "</td>" +
              "<td>" +
              dt.nama +
              "</td>" +
              "<td><button class='btn btn-danger' onclick='hapusData(" + idx + ")'>Hapus</button></td>"
      }
      document.getElementById("data").innerHTML = data;
  },
  true
);

function hapusData(index) {
  let listmhs = JSON.parse(localStorage.getItem("mhs"));
  listmhs.splice(index, 1);
  localStorage.setItem("mhs", JSON.stringify(listmhs)); 
  renderData(); 
}


function renderData() {
  let listmhs = JSON.parse(localStorage.getItem("mhs"));
  let data = "";
  for (const [idx, dt] of listmhs.entries()) {
      data +=
          "<tr>" +
          "<th scope='row'>" +
          (idx + 1) +
          "</th>" +
          "<td>" +
          dt.npm +
          "</td>" +
          "<td>" +
          dt.nama +
          "</td>" +
          "<td><button class='btn btn-danger' onclick='hapusData(" + idx + ")'>Hapus</button></td>"
          "</tr>";
  }
  document.getElementById("data").innerHTML = data;
}
