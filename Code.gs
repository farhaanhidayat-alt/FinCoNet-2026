function doGet(e) {
  // Daftar halaman yang diizinkan (whitelist) untuk keamanan
  var allowedPages = ['home', 'day1-page', 'day2-page', 'day3-page'];
  
  // Tangkap parameter 'page' dari URL jika ada
  var requestedPage = (e && e.parameter && e.parameter.page) ? e.parameter.page.toLowerCase() : 'home';
  
  // Validasi apakah halaman yang diminta ada di daftar, jika tidak kembalikan ke 'home'
  var initialPage = allowedPages.indexOf(requestedPage) !== -1 ? requestedPage : 'home';
  
  // Pastikan nama file di bawah ini SAMA PERSIS dengan nama file HTML di panel kiri GAS Anda
  // (Gunakan 'Index' jika huruf I kapital, atau 'index' jika huruf kecil semua)
  var template = HtmlService.createTemplateFromFile('index'); 
  
  // Kirim variabel ke dalam HTML
  template.initialPage = initialPage;
  
  return template.evaluate()
      .setTitle('FinCoNet 2026 | Bali, Indonesia')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1.0')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
