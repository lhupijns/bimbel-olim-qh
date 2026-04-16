// --- DATA MATERI & SOAL (Diambil FULL dari PDF Olimpiade) ---
const courseData = [
    {
        id: "taqwa",
        title: "Hadis Arba'in ke-18",
        subtitle: "Tentang Taqwa (HR. Tirmidzi)",
        arabic: "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ",
        translation: "\"Bertakwalah kepada Allah di mana pun engkau berada, dan ikutilah keburukan dengan kebaikan, niscaya kebaikan itu akan menghapusnya, dan bergaullah dengan manusia dengan akhlak yang baik.\"",
        explanation: `
            <h3 class="font-bold text-lg mb-2">Ringkasan Hadis:</h3>
            <ul class="list-disc pl-5 space-y-2 mb-4">
                <li><strong>1. Taqwa:</strong> Takut kepada Allah saat sendiri maupun ramai (Di mana pun kamu berada).</li>
                <li><strong>2. Hapus Dosa:</strong> Segera lakukan kebaikan (Tobat + Amal) setelah berbuat salah untuk menghapus dosa.</li>
                <li><strong>3. Akhlak Mulia:</strong> Bersikap baik kepada semua orang dalam pergaulan sehari-hari.</li>
            </ul>
            <p><strong>Keistimewaan Hadis:</strong> Hadis ini sangat komprehensif karena mencakup 3 aspek penting: Hubungan dengan Allah (Taqwa), Memperbaiki diri (Taubat), dan Hubungan dengan manusia (Akhlak).</p>
            <p><strong>Perawi:</strong> Abu Dzar Jundub bin Junadah & Abu Abdurrahman Mu'adz bin Jabal.</p>
        `,
        questions: [
            {
                q: "1. Hadis Arba'in ke-18 tentang taqwa diriwayatkan oleh dua sahabat sekaligus. Siapakah mereka?",
                options: ["Abu Hurairah & Ibnu Umar", "Abu Dzar & Mu'adz bin Jabal", "Anas bin Malik & Ali bin Abi Thalib", "Umar bin Khattab & Abu Bakar"],
                correct: 1,
                explanation: "Hadis ini istimewa karena memiliki dua perawi sekaligus, yaitu Abu Dzar Jundub bin Junadah dan Abu Abdurrahman Mu'adz bin Jabal. Keduanya adalah sahabat Nabi yang sangat terkenal."
            },
            {
                q: "2. Perintah pertama dalam hadis ini adalah \"اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ\". Apa arti kalimat tersebut?",
                options: ["Jadilah orang yang jujur di rumahmu", "Bertakwalah kepada Allah di mana pun engkau berada", "Berdoalah kepada Allah setiap saat", "Sholatlah kepada Allah kapan saja"],
                correct: 1,
                explanation: "\"Haitsumā kunta\" artinya \"di mana pun engkau berada.\" Ini berarti taqwa bukan hanya di masjid atau saat ada orang lain, tapi di mana saja — bahkan saat sendirian sekalipun."
            },
            {
                q: "3. Hadis ini mengandung tiga perintah utama. Manakah urutan yang BENAR?",
                options: ["Akhlak baik → Taqwa → Hapus dosa", "Hapus dosa → Taqwa → Akhlak baik", "Taqwa → Ikuti keburukan dengan kebaikan → Akhlak baik", "Taqwa → Akhlak baik → Hapus dosa"],
                correct: 2,
                explanation: "Tiga pesan hadis ini berurutan: (1) Bertaqwa kepada Allah, (2) Menghapus keburukan dengan kebaikan, (3) Bergaul dengan akhlak yang baik. Urutan ini penting karena saling berkaitan."
            },
            {
                q: "4. Kata \"تَمْحُهَا\" dalam hadis ini berarti...",
                options: ["Menambahnya", "Menyembunyikannya", "Menghapusnya", "Melupakannya"],
                correct: 2,
                explanation: "\"Tamhuhā\" berasal dari kata \"maḥa\" yang berarti menghapus. Ini kabar gembira: dosa kecil bisa terhapus jika kita langsung mengikutinya dengan amal kebaikan yang tulus."
            },
            {
                q: "5. Rafi berbohong kepada temannya, lalu ia menyesal dan langsung meminta maaf serta bersedekah. Tindakan Rafi mencerminkan pesan hadis bagian...",
                options: ["Bertaqwa kepada Allah di mana saja", "Mengiringi perbuatan buruk dengan perbuatan baik", "Bergaul dengan akhlak yang baik", "Menjauhi perbuatan tercela"],
                correct: 1,
                explanation: "Inilah penerapan pesan kedua hadis: setelah berbuat salah, jangan putus asa! Segera lakukan kebaikan untuk menghapus keburukan tersebut. Tobat + amal shalih = formula pembersih dosa."
            },
            {
                q: "6. Apa nama kitab hadis yang meriwayatkan hadis Arba'in ke-18 ini?",
                options: ["Shahih Bukhari", "Shahih Muslim", "Sunan Ibnu Majah", "Jami' at-Tirmidzi"],
                correct: 3,
                explanation: "Hadis ini diriwayatkan oleh Imam at-Tirmidzi dalam kitabnya Jami' at-Tirmidzi. Beliau adalah ulama hadis besar abad ke-3 Hijriah."
            },
            {
                q: "7. Pesan ketiga hadis ini adalah \"وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ\". Ini berarti kita diperintahkan untuk...",
                options: ["Menjauhi orang-orang yang berbuat jahat", "Bergaul dengan sesama manusia menggunakan akhlak yang baik", "Memilih teman yang baik saja", "Berbicara hanya kepada orang yang dikenal"],
                correct: 1,
                explanation: "\"Khāliqi an-nāsa bi khuluqin ḥasan\" artinya bergaullah dengan semua manusia menggunakan akhlak mulia — bersikap ramah, jujur, sabar, dan sopan kepada siapa saja."
            },
            {
                q: "8. Manakah contoh PERILAKU TAQWA yang paling tepat sesuai hadis ini?",
                options: ["Sholat hanya saat di masjid", "Tidak berbohong meskipun sedang sendirian dan tidak ada yang melihat", "Berbuat baik hanya kepada guru dan orang tua", "Bersedekah agar dipuji teman"],
                correct: 1,
                explanation: "Taqwa sejati adalah menjaga diri dari dosa di mana saja, termasuk saat tidak ada orang lain yang melihat. Sebab Allah selalu Maha Melihat."
            },
            {
                q: "9. Hadis ini disebut \"Hadis Arba'in\". Apa arti kata Arba'in (أَرْبَعِيْنَ)?",
                options: ["Dua puluh", "Tiga puluh", "Empat puluh", "Lima puluh"],
                correct: 2,
                explanation: "\"Arba'in\" dalam bahasa Arab berarti empat puluh. Kitab Hadis Arba'in (Arbain Nawawi) berisi 42 hadis pilihan pokok-pokok ajaran Islam."
            },
            {
                q: "10. Hadis ini disebut komprehensif karena mencakup tiga aspek penting dalam Islam. Manakah pasangan yang PALING TEPAT?",
                options: ["Aqidah – Ibadah – Muamalah", "Taqwa (hubungan dengan Allah) – Taubat (memperbaiki diri) – Akhlak (hubungan dengan manusia)", "Iman – Islam – Ihsan", "Ilmu – Amal – Dakwah"],
                correct: 1,
                explanation: "Inilah keistimewaan hadis ini: sangat lengkap! Taqwa = menjaga hubungan dengan Allah. Menghapus keburukan = memperbaiki diri. Akhlak baik = menjaga hubungan dengan sesama."
            }
        ]
    },
    {
        id: "niat",
        title: "Hadis Tentang Niat",
        subtitle: "Innamal A'mālu Binniyyāt (HR. Bukhari & Muslim)",
        arabic: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
        translation: "\"Sesungguhnya setiap perbuatan tergantung niatnya. Dan sesungguhnya setiap orang (akan dibalas) berdasarkan apa yang dia niatkan.\"",
        explanation: `
            <h3 class="font-bold text-lg mb-2">Peta Konsep Hadis Niat:</h3>
            <ul class="list-disc pl-5 space-y-2 mb-4">
                <li><strong>Perawi:</strong> Khalifah Umar bin Khattab RA.</li>
                <li><strong>Letak Niat:</strong> Di dalam hati (qalb), bukan sekadar ucapan lisan.</li>
                <li><strong>Niat Terbaik:</strong> Lillāhi Ta'ālā (karena Allah semata).</li>
                <li><strong>Niat Perusak:</strong> Riya' (ingin dipuji oleh manusia).</li>
                <li><strong>Keistimewaan:</strong> Aktivitas biasa (makan, tidur, belajar) bisa menjadi ibadah jika niatnya benar.</li>
            </ul>
            <p><strong>Pesan Imam Bukhari:</strong> Menempatkan hadis ini di No. 1 kitabnya menunjukkan bahwa niat adalah pondasi utama dari seluruh amal ibadah.</p>
        `,
        questions: [
            {
                q: "1. Hadis \"Innamal A'mālu Binniyyāt\" diriwayatkan oleh sahabat yang sangat terkenal. Siapakah perawi hadis ini?",
                options: ["Abu Hurairah RA", "Umar bin Khattab RA", "Ali bin Abi Thalib RA", "Anas bin Malik RA"],
                correct: 1,
                explanation: "Hadis tentang niat ini diriwayatkan oleh Umar bin Khattab RA, khalifah kedua dalam Islam yang terkenal tegas dan adil."
            },
            {
                q: "2. Di kitab manakah hadis tentang niat ini tercatat sebagai hadis PERTAMA (nomor 1)?",
                options: ["Sunan at-Tirmidzi", "Sunan Abu Dawud", "Shahih Bukhari", "Sunan Ibnu Majah"],
                correct: 2,
                explanation: "Imam Bukhari menempatkan hadis niat ini sebagai hadis nomor 1 dalam kitabnya Shahih Bukhari. Ini menunjukkan betapa pentingnya niat."
            },
            {
                q: "3. Apa arti kata \"النِّيَّاتِ\" (al-niyyāt) dalam hadis ini?",
                options: ["Perbuatan-perbuatan", "Niat-niat / maksud-maksud", "Pahala-pahala", "Dosa-dosa"],
                correct: 1,
                explanation: "\"An-niyyāt\" adalah bentuk jamak dari \"niyyah\" yang berarti niat atau maksud dalam hati."
            },
            {
                q: "4. Kata \"إِنَّمَا\" (innamā) di awal hadis berfungsi sebagai...",
                options: ["Kata tanya", "Kata penghubung", "Kata penegas/pembatas yang berarti 'sesungguhnya hanyalah'", "Kata perintah"],
                correct: 2,
                explanation: "\"Innamā\" dalam bahasa Arab disebut adāt al-ḥaṣr, yaitu kata yang berfungsi menegaskan dan membatasi. Artinya amal itu HANYA sah berdasarkan niatnya."
            },
            {
                q: "5. Apa arti penggalan hadis \"وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى\"?",
                options: ["Setiap orang wajib beramal shalih", "Sesungguhnya setiap orang akan dibalas berdasarkan apa yang diniatkan", "Setiap orang harus ikhlas dalam beribadah", "Sesungguhnya niat itu ada di dalam hati"],
                correct: 1,
                explanation: "Penggalan kedua ini menegaskan keadilan Allah: setiap manusia akan mendapat balasan sesuai apa yang ada dalam hatinya."
            },
            {
                q: "6. Hadis niat ini termasuk dalam kategori hadis yang sangat penting. Ulama menyebutnya sebagai salah satu dari...",
                options: ["Hadis Qudsi utama", "Hadis yang menjadi sepertiga atau seperempat ilmu agama", "Hadis yang hanya berlaku untuk ibadah sholat", "Hadis yang hanya untuk ulama dan guru"],
                correct: 1,
                explanation: "Imam Syafi'i dan ulama lainnya menyatakan hadis niat ini mencakup sepertiga dari seluruh ilmu agama Islam."
            },
            {
                q: "7. Dina membantu ibu bukan karena ingin menolong, melainkan agar dipuji ayah. Menurut hadis ini, amal Dina termasuk...",
                options: ["Tetap bernilai ibadah karena membantu ibu itu baik", "Bernilai ibadah setengahnya", "Tidak bernilai ibadah karena niatnya bukan karena Allah", "Berdosa besar karena tidak ikhlas"],
                correct: 2,
                explanation: "Inilah inti hadis: perbuatan yang sama bisa bernilai ibadah atau tidak, tergantung niatnya. Ingin dipuji = tidak mendapat pahala akhirat."
            },
            {
                q: "8. Di manakah letak niat menurut para ulama?",
                options: ["Di lisan (ucapan)", "Di hati (qalb)", "Di pikiran dan ucapan sekaligus", "Di gerakan anggota badan"],
                correct: 1,
                explanation: "Para ulama sepakat bahwa niat tempatnya di hati, bukan di lisan. Mengucapkan niat dengan mulut hukumnya sunnah dalam beberapa ibadah, tapi yang paling utama adalah kehadiran hati."
            },
            {
                q: "9. Ahmad belajar Al-Qur'an dengan niat agar bisa membaca dengan lancar DAN mendapat ridha Allah. Bagaimana nilai amal Ahmad?",
                options: ["Tidak sah karena niatnya bercampur", "Bernilai ibadah, karena ada niat mencari ridha Allah di dalamnya", "Hanya bernilai duniawi saja", "Harus diulang niatnya agar murni"],
                correct: 1,
                explanation: "Niat boleh mengandung lebih dari satu tujuan, selama salah satunya adalah karena Allah. Niat karena Allah yang menjadi penentu utama."
            },
            {
                q: "10. Pernyataan mana yang PALING TEPAT menggambarkan makna hadis niat ini?",
                options: ["Amal yang besar pasti bernilai lebih dari amal yang kecil", "Amal yang tampak baik di luar sudah pasti diterima Allah", "Nilai sebuah amal ditentukan oleh niat yang ada di dalam hati pelakunya", "Amal tanpa niat tetap sah jika dilakukan dengan benar"],
                correct: 2,
                explanation: "Hadis ini mengajarkan bahwa penampilan luar bukanlah penentu. Sholat khusyuk dengan niat ikhlas lebih bernilai daripada sholat panjang pamer."
            },
            {
                q: "11. Sholat adalah ibadah. Agar sholat bernilai ibadah yang benar menurut hadis ini, maka sholat harus dilakukan dengan niat...",
                options: ["Karena ingin masuk surga saja", "Karena takut masuk neraka saja", "Karena Allah (lillāhi ta'ālā)", "Karena perintah orang tua"],
                correct: 2,
                explanation: "Niat yang paling utama dalam beribadah adalah 'lillāhi ta'ālā' — karena Allah semata."
            },
            {
                q: "12. Imam Bukhari menempatkan hadis niat sebagai hadis pertama. Apa pesan yang ingin disampaikan Imam Bukhari?",
                options: ["Hadis ini paling panjang", "Niat adalah dasar dan pondasi dari seluruh amal, sehingga harus dipahami pertama kali", "Umar bin Khattab adalah sahabat paling utama", "Hadis ini hanya berlaku untuk ibadah mahdhah"],
                correct: 1,
                explanation: "Penempatan di nomor 1 adalah pesan cerdas Imam Bukhari: sebelum belajar amal apapun, pahami dulu niat."
            },
            {
                q: "13. Kata \"الْأَعْمَالُ\" (al-a'māl) dalam hadis ini berarti...",
                options: ["Para ulama", "Perbuatan-perbuatan / amal-amal", "Nabi-nabi", "Malaikat-malaikat"],
                correct: 1,
                explanation: "\"Al-a'māl\" adalah jamak dari \"'amal\" yang berarti perbuatan atau amal."
            },
            {
                q: "14. Ridho berpuasa Ramadhan tetapi niatnya hanya agar terlihat alim oleh teman-temannya. Apa yang terjadi dengan puasa Ridho?",
                options: ["Puasanya sah dan dapat pahala penuh", "Puasanya sah tapi pahala berkurang", "Puasanya hanya menahan lapar dan haus saja, tanpa pahala ibadah", "Puasanya batal dan wajib qadha"],
                correct: 2,
                explanation: "Rasulullah bersabda banyak orang puasa hanya mendapat lapar dahaga karena niat riya' menghilangkan nilai ibadah."
            },
            {
                q: "15. Hadis niat ini menjadi dalil bahwa aktivitas sehari-hari seperti makan, tidur, dan belajar bisa menjadi ibadah. Syaratnya adalah...",
                options: ["Dilakukan di bulan Ramadhan", "Dilakukan bersama orang sholeh", "Diniatkan karena Allah, misalnya makan agar kuat beribadah", "Dilakukan sambil berzikir"],
                correct: 2,
                explanation: "Ini keajaiban hadis niat: aktivitas biasa bisa bernilai ibadah! Tidur dengan niat agar kuat sholat malam = ibadah."
            },
            {
                q: "16. Manakah pasangan NIAT dan NILAI AMAL yang BENAR menurut hadis ini?",
                options: ["Sedekah karena pamer → Pahala penuh", "Sholat karena Allah → Bernilai ibadah", "Belajar agar dipuji guru → Pahala akhirat", "Puasa karena diet → Pahala ibadah puasa"],
                correct: 1,
                explanation: "Hanya amal yang diniatkan karena Allah yang bernilai ibadah."
            },
            {
                q: "17. Hadis ini diriwayatkan juga dalam Shahih Muslim dengan nomor hadis...",
                options: ["No. 1", "No. 100", "No. 1907", "No. 40"],
                correct: 2,
                explanation: "Dalam Shahih Muslim, hadis niat tercatat pada nomor 1907."
            },
            {
                q: "18. Seorang anak memberi makan pengemis karena kasihan sekaligus ingin mendapat pahala dari Allah. Niat seperti ini hukumnya...",
                options: ["Haram karena niatnya bercampur", "Boleh dan tetap bernilai ibadah karena mengharap ridha Allah", "Makruh karena seharusnya hanya satu niat", "Wajib diulang dengan niat yang murni"],
                correct: 1,
                explanation: "Niat karena kasihan (sifat kemanusiaan) + niat karena Allah = tetap sah dan berpahala. Yang merusak ibadah adalah niat riya'."
            },
            {
                q: "19. Manakah PELAJARAN UTAMA yang bisa kita ambil dari hadis niat ini untuk kehidupan sehari-hari?",
                options: ["Kita harus selalu mengucapkan niat dengan keras", "Amal yang banyak lebih baik daripada sedikit", "Luruskan niat sebelum beramal agar setiap aktivitas bernilai ibadah di sisi Allah", "Niat hanya diperlukan untuk ibadah wajib"],
                correct: 2,
                explanation: "Pelajaran emas hadis ini: sebelum melakukan apa pun, tanyakan pada diri sendiri 'untuk apa aku melakukan ini?'"
            },
            {
                q: "20. \"Dua orang melakukan sholat yang sama persis gerakannya. Satu ikhlas, satu riya'. Sholat mereka pasti sama nilainya.\" Apakah pernyataan ini BENAR atau SALAH?",
                options: ["Benar, karena gerakan sholat keduanya sama", "Benar, karena Allah Maha Adil", "Salah, karena nilai amal ditentukan niat, bukan penampilan luarnya", "Salah, karena sholat riya' hukumnya batal"],
                correct: 2,
                explanation: "Pernyataan itu SALAH. Inilah inti hadis niat: dua amal yang tampak SAMA di luar bisa bernilai SANGAT BERBEDA di sisi Allah."
            }
        ]
    },
    {
        id: "silaturahmi",
        title: "Hadis Silaturahmi",
        subtitle: "Menyambung Tali Persaudaraan (HR. Bukhari & Muslim)",
        arabic: "مَنْ أَحَبَّ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ، وَيُنْسَأَ لَهُ فِي أَثَرِهِ، فَلْيَصِلْ رَحِمَهُ",
        translation: "\"Barang siapa yang ingin diluaskan rezekinya dan dipanjangkan umurnya, maka hendaklah ia menyambung tali silaturahmi.\"",
        explanation: `
            <h3 class="font-bold text-lg mb-2">Pesan Utama Hadis:</h3>
            <ul class="list-disc pl-5 space-y-2 mb-4">
                <li><strong>Makna Silaturahmi:</strong> Berasal dari kata <i>Shilah</i> (menyambungan) dan <i>Rahim</i> (kekerabatan / kasih sayang).</li>
                <li><strong>2 Keuntungan Utama:</strong> Diluaskan rezeki (yubsatha) dan dipanjangkan umur / nama baik dikenang terus (yunsa-a fii atsarihi).</li>
                <li><strong>Larangan Keras:</strong> Memutus tali silaturahmi disebut <i>Qathi'urrahim</i> dan termasuk dosa besar dalam Islam.</li>
                <li><strong>Urutan Silaturahmi:</strong> Orang tua → Saudara kandung → Kerabat dekat → Tetangga → Masyarakat luas.</li>
            </ul>
        `,
        questions: [
            {
                q: "1. Kata \"مَنْ أَحَبَّ\" dalam hadis di atas memiliki arti...",
                options: ["Barang siapa yang membenci", "Barang siapa yang mencintai/menginginkan", "Barang siapa yang takut", "Barang siapa yang lupa"],
                correct: 1,
                explanation: "\"Man ahabbа\" berasal dari kata hubb (cinta/keinginan kuat). Dalam hadis ini berarti siapa saja yang benar-benar menginginkan sesuatu kebaikan."
            },
            {
                q: "2. Arti kata \"يُبْسَطَ لَهُ فِي رِزْقِهِ\" adalah...",
                options: ["Dipersempit rezekinya", "Diluaskan/dilapangkan rezekinya", "Dihilangkan rezekinya", "Dipersulit rezekinya"],
                correct: 1,
                explanation: "Kata \"yubsatha\" dari akar \"basatha\" artinya meluaskan atau melapangkan. Rezeki tidak hanya uang, tapi juga kesehatan, ilmu, dan kebahagiaan."
            },
            {
                q: "3. Makna \"وَيُنْسَأَ لَهُ فِي أَثَرِهِ\" dalam hadis tersebut adalah...",
                options: ["Dipercepat ajalnya", "Dilupakan namanya", "Dipanjangkan umurnya / dikenang jejaknya", "Diperberat dosanya"],
                correct: 2,
                explanation: "\"Yunsa-a fii atsarihi\" bermakna dipanjangkan jejak/bekasnya di dunia — bisa berarti umur panjang atau nama baik yang terus dikenang setelah wafat."
            },
            {
                q: "4. Kata \"فَلْيَصِلْ رَحِمَهُ\" mengandung perintah untuk...",
                options: ["Memutus hubungan keluarga", "Menyambung tali silaturahmi", "Mencari teman baru", "Berpuasa sunnah"],
                correct: 1,
                explanation: "\"Falyashil rahimahu\" adalah perintah langsung (fi'il amr) untuk menyambung hubungan kekerabatan."
            },
            {
                q: "5. Hadis tentang silaturahmi di atas diriwayatkan oleh...",
                options: ["HR. Abu Dawud dan Tirmidzi", "HR. Bukhari dan Muslim", "HR. Ibnu Majah dan Nasa'i", "HR. Ahmad dan Darimi"],
                correct: 1,
                explanation: "Hadis ini disepakati kesahihannya oleh dua imam hadis terbesar, sering disebut Muttafaq 'Alaih (HR. Bukhari dan Muslim)."
            },
            {
                q: "6. Menurut hadis ini, ada dua keuntungan bagi orang yang bersilaturahmi. Keuntungan tersebut adalah...",
                options: ["Banyak teman & populer", "Diluaskan rezeki & dipanjangkan umur", "Masuk surga & terhindar neraka", "Diampuni dosa & mendapat pahala"],
                correct: 1,
                explanation: "Hadis ini menyebut dua manfaat konkret: rezeki diluaskan dan umur/jejak dipanjangkan."
            },
            {
                q: "7. Silaturahim berasal dari dua kata: \"shilah\" dan \"rahim\". Arti gabungan keduanya adalah...",
                options: ["Memutus hubungan darah", "Menyambung hubungan kekerabatan", "Mencintai sesama manusia", "Berbagi harta kepada fakir"],
                correct: 1,
                explanation: "\"Shilah\" = sambungan, \"Rahim\" = kekerabatan. Jadi silaturahmi = menyambung hubungan kasih sayang, terutama kepada keluarga."
            },
            {
                q: "8. Orang yang memutus tali silaturahmi disebut...",
                options: ["Qathi'urrahim", "Washilurrahim", "Muhibburrahim", "Nashirurrahim"],
                correct: 0,
                explanation: "\"Qathi'urrahim\" dari kata \"qatha'a\" (memotong). Islam melarang keras qathi'urrahim karena termasuk dosa besar."
            },
            {
                q: "9. Dalam Islam, siapakah yang paling utama untuk disambung silaturahminya?",
                options: ["Tetangga terdekat", "Sahabat sekolah", "Orang tua dan keluarga terdekat", "Pemimpin desa"],
                correct: 2,
                explanation: "Urutan silaturahmi dimulai dari lingkaran terdekat: orang tua → saudara kandung → kerabat dekat."
            },
            {
                q: "10. Rasulullah bersabda bahwa silaturahmi sejati adalah...",
                options: ["Membalas kunjungan orang yang datang", "Menyambung hubungan dengan orang yang memutuskannya", "Hanya bersilaturahmi saat Lebaran", "Memberi hadiah kepada kerabat"],
                correct: 1,
                explanation: "Nabi bersabda bahwa washilurrahim sejati adalah orang yang menyambung hubungan meski pihak lain memutuskannya."
            },
            {
                q: "11. Dinda jarang mengunjungi nenek dan pamannya karena sibuk bermain game. Sikap Dinda ini bertentangan dengan hadis karena...",
                options: ["Bermain game hukumnya haram", "Ia mengabaikan kewajiban menyambung silaturahmi dengan kerabat", "Ia tidak belajar dengan rajin", "Ia tidak mengerjakan shalat"],
                correct: 1,
                explanation: "Hadis mendorong kita aktif menyambung silaturahmi. Mengunjungi keluarga adalah bentuk nyata amal."
            },
            {
                q: "12. Amir bertengkar dengan sepupunya. Lalu Amir mengambil langkah pertama untuk meminta maaf dan berdamai. Tindakan Amir mencerminkan nilai...",
                options: ["Sombong dan pemaaf", "Berani menyambung silaturahmi meski sulit", "Takut dimarahi orang tua", "Pura-pura baik"],
                correct: 1,
                explanation: "Mengambil inisiatif berdamai adalah akhlak mulia. Orang yang lebih dulu meminta maaf justru lebih tinggi derajatnya."
            },
            {
                q: "13. Di era digital, cara bersilaturahmi yang dibolehkan selain bertemu langsung adalah...",
                options: ["Hanya boleh bertemu tatap muka", "Mengirim pesan, menelepon, atau video call kepada keluarga", "Cukup mendoakan dalam hati", "Memberikan like di media sosial saja"],
                correct: 1,
                explanation: "Ulama menyatakan silaturahmi via telepon, pesan, atau video call tetap bernilai ibadah demi menjaga kesinambungan hubungan."
            },
            {
                q: "14. Pak Hasan adalah pedagang yang rajin bersilaturahmi dengan kerabat dan pelanggannya. Menurut hadis, apa yang kemungkinan besar akan terjadi pada usahanya?",
                options: ["Usahanya pasti bangkrut", "Usahanya tidak akan berpengaruh", "Rezekinya akan diluaskan oleh Allah", "Ia akan semakin sibuk dan stres"],
                correct: 2,
                explanation: "Silaturahmi membuka pintu rezeki karena mempererat kepercayaan, memperluas jaringan, dan mendatangkan keberkahan."
            },
            {
                q: "15. Perhatikan pernyataan berikut: (1) Hanya wajib saat Idul Fitri (2) Memutus silaturahmi dosa besar (3) Meluaskan rezeki dan umur (4) Hanya untuk keluarga kandung. Pernyataan yang benar adalah...",
                options: ["(1) dan (4)", "(2) dan (3)", "(1), (2), dan (3)", "Semua benar"],
                correct: 1,
                explanation: "Pernyataan (2) dan (3) benar. Silaturahmi wajib setiap saat, bukan hanya lebaran, dan cakupannya luas hingga tetangga dan sesama muslim."
            }
        ]
    }
];

// --- STATE MANAGEMENT ---
let userProgress = JSON.parse(localStorage.getItem('quranHadisProgress')) || {};
let currentActiveCourse = null;
let currentQuestionIndex = 0;
let currentScore = 0;

// --- DOM ELEMENTS ---
const sections = {
    dashboard: document.getElementById('dashboard'),
    materi: document.getElementById('materi-section'),
    quiz: document.getElementById('quiz-section'),
    result: document.getElementById('result-section')
};

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    renderDashboard();
    updateNavProgress();
});

// --- NAVIGATION LOGIC ---
function hideAllSections() {
    Object.values(sections).forEach(sec => {
        sec.classList.add('hidden');
        sec.classList.remove('animate-fade-in');
    });
}

function showSection(sectionId) {
    hideAllSections();
    const sec = document.getElementById(sectionId);
    sec.classList.remove('hidden');
    // trigger animation reflow
    void sec.offsetWidth;
    sec.classList.add('animate-fade-in');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goHome() {
    currentActiveCourse = null;
    renderDashboard();
    showSection('dashboard');
    updateNavProgress();
}

// --- DASHBOARD LOGIC ---
function renderDashboard() {
    const listContainer = document.getElementById('material-list');
    listContainer.innerHTML = '';

    courseData.forEach(course => {
        const isDone = userProgress[course.id] !== undefined;
        const score = isDone ? userProgress[course.id] : 0;
        
        const card = document.createElement('div');
        card.className = "bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md transform hover:-translate-y-1";
        
        card.innerHTML = `
            <div class="h-2 w-full ${isDone ? 'bg-green-500' : 'bg-blue-500'}"></div>
            <div class="p-6">
                <div class="flex justify-between items-start mb-4">
                    <div class="bg-blue-100 text-blue-700 p-3 rounded-lg">
                        <i class="fas fa-book-open text-xl"></i>
                    </div>
                    ${isDone ? `<span class="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full"><i class="fas fa-check mr-1"></i> Nilai: ${score}</span>` : `<span class="bg-slate-100 text-slate-500 text-xs font-bold px-2 py-1 rounded-full">Belum dikerjakan</span>`}
                </div>
                <h3 class="font-bold text-lg text-slate-800 leading-tight">${course.title}</h3>
                <p class="text-sm text-slate-500 mt-1 mb-6">${course.subtitle} (${course.questions.length} Soal)</p>
                <button onclick="openMateri('${course.id}')" class="w-full text-center block bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-blue-700 font-semibold py-2 rounded-xl transition-colors">
                    Pelajari Materi
                </button>
            </div>
        `;
        listContainer.appendChild(card);
    });
}

function updateNavProgress() {
    const total = courseData.length;
    const done = Object.keys(userProgress).length;
    document.getElementById('nav-progress').innerText = `Progress: ${done}/${total} Selesai`;
}

// --- MATERI LOGIC ---
function openMateri(courseId) {
    currentActiveCourse = courseData.find(c => c.id === courseId);
    
    document.getElementById('materi-title').innerText = currentActiveCourse.title;
    document.getElementById('materi-subtitle').innerText = currentActiveCourse.subtitle;
    document.getElementById('materi-arabic').innerText = currentActiveCourse.arabic;
    document.getElementById('materi-translation').innerText = currentActiveCourse.translation;
    document.getElementById('materi-content').innerHTML = currentActiveCourse.explanation;
    
    document.getElementById('btn-start-quiz').onclick = () => startQuiz();
    
    showSection('materi-section');
}

// --- QUIZ LOGIC ---
function startQuiz() {
    currentQuestionIndex = 0;
    currentScore = 0;
    showSection('quiz-section');
    renderQuestion();
}

function renderQuestion() {
    const qData = currentActiveCourse.questions[currentQuestionIndex];
    const totalQ = currentActiveCourse.questions.length;
    
    document.getElementById('quiz-title').innerText = `Kuis: ${currentActiveCourse.title}`;
    document.getElementById('quiz-progress').innerText = `Soal ${currentQuestionIndex + 1} / ${totalQ}`;
    document.getElementById('quiz-question').innerText = qData.q;
    
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    
    const letters = ['A', 'B', 'C', 'D'];
    
    qData.options.forEach((optText, index) => {
        const btn = document.createElement('button');
        btn.className = "option-btn group";
        btn.innerHTML = `<span class="option-letter group-hover:bg-blue-500 group-hover:text-white transition-colors">${letters[index]}</span> <span>${optText}</span>`;
        btn.onclick = () => selectAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });

    document.getElementById('quiz-explanation').classList.add('hidden');
}

function selectAnswer(selectedIndex, btnElement) {
    // Disable all buttons to prevent double answering
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);

    const qData = currentActiveCourse.questions[currentQuestionIndex];
    const isCorrect = selectedIndex === qData.correct;

    if (isCorrect) {
        btnElement.classList.add('correct');
        // Point is calculated based on total questions to always sum to ~100
        currentScore += (100 / currentActiveCourse.questions.length);
        showExplanation(true, qData.explanation);
    } else {
        btnElement.classList.add('wrong');
        // Highlight correct answer
        allBtns[qData.correct].classList.add('correct');
        showExplanation(false, qData.explanation);
    }
}

function showExplanation(isCorrect, text) {
    const expDiv = document.getElementById('quiz-explanation');
    const title = document.getElementById('explanation-title');
    const desc = document.getElementById('explanation-text');
    const nextBtn = document.getElementById('btn-next-question');

    expDiv.classList.remove('hidden', 'bg-green-50', 'bg-red-50', 'border-green-200', 'border-red-200', 'text-green-800', 'text-red-800');
    
    if (isCorrect) {
        expDiv.classList.add('bg-green-50', 'border-green-200', 'text-green-800');
        title.innerHTML = '<i class="fas fa-check-circle mr-1"></i> Benar!';
    } else {
        expDiv.classList.add('bg-red-50', 'border-red-200', 'text-red-800');
        title.innerHTML = '<i class="fas fa-times-circle mr-1"></i> Kurang Tepat!';
    }

    desc.innerHTML = `<strong>Penjelasan:</strong> ${text}`;
    
    if (currentQuestionIndex < currentActiveCourse.questions.length - 1) {
        nextBtn.innerHTML = 'Lanjut ke Soal Berikutnya <i class="fas fa-arrow-right ml-1"></i>';
        nextBtn.onclick = () => {
            currentQuestionIndex++;
            renderQuestion();
            // Scroll sedikit ke atas form kuis agar responsif di HP
            document.getElementById('quiz-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
    } else {
        nextBtn.innerHTML = 'Lihat Hasil Akhir <i class="fas fa-flag-checkered ml-1"></i>';
        nextBtn.onclick = finishQuiz;
    }
}

function finishQuiz() {
    // Round the final score nicely
    const finalScore = Math.round(currentScore);
    
    // Save to localStorage
    userProgress[currentActiveCourse.id] = finalScore;
    localStorage.setItem('quranHadisProgress', JSON.stringify(userProgress));

    // Show Result UI
    showSection('result-section');
    document.getElementById('result-score').innerText = finalScore;
    
    const iconDiv = document.getElementById('result-icon');
    if (finalScore >= 80) {
        iconDiv.innerHTML = '🏆';
        document.getElementById('result-title').innerText = "Alhamdulillah, Luar Biasa!";
    } else if (finalScore >= 60) {
        iconDiv.innerHTML = '⭐';
        document.getElementById('result-title').innerText = "Bagus, Terus Tingkatkan!";
    } else {
        iconDiv.innerHTML = '💪';
        document.getElementById('result-title').innerText = "Jangan Menyerah, Ayo Belajar Lagi!";
    }
}

// --- REPORT TO TEACHER LOGIC ---
function sendToTeacher() {
    if (Object.keys(userProgress).length === 0) {
        alert("Kamu belum mengerjakan kuis satupun. Kerjakan minimal 1 kuis untuk melapor ke Guru.");
        return;
    }

    let namaSiswa = prompt("Masukkan Nama Lengkap Kamu:");
    if (!namaSiswa) return; // Cancelled by user

    let textReport = `Assalamualaikum Bapak Aditya,\nBerikut adalah laporan hasil belajar interaktif Qur'an Hadis saya:\n\n*Nama:* ${namaSiswa}\n*Kelas:* 6 MI\n\n*Rincian Nilai:*\n`;
    
    let totalScore = 0;
    let completed = 0;

    courseData.forEach(course => {
        if (userProgress[course.id] !== undefined) {
            textReport += `- ${course.title}: *${userProgress[course.id]}*\n`;
            totalScore += userProgress[course.id];
            completed++;
        } else {
            textReport += `- ${course.title}: _Belum Dikerjakan_\n`;
        }
    });

    let avg = completed > 0 ? Math.round(totalScore / completed) : 0;
    textReport += `\n*Rata-rata Nilai Sementara:* ${avg}\n\nTerima kasih, Wassalamualaikum.`;

    // Try to copy to clipboard automatically
    navigator.clipboard.writeText(textReport).then(() => {
        alert("Laporan berhasil disalin! Silakan BUKA WHATSAPP, cari kontak Bpk. Aditya, dan PASTE (Tempel) pesan tersebut.");
    }).catch(err => {
        // Fallback for older browsers / older phones
        const textArea = document.createElement("textarea");
        textArea.value = textReport;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert("Laporan berhasil disalin! Silakan buka WhatsApp dan Paste (Tempel) ke pesan guru.");
    });
}