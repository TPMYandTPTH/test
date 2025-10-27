// Interview booking URLs mapped by language
const interviewLinks = {
    'zh': 'https://outlook.office.com/book/Chinese@teleperformance.onmicrosoft.com/s/7lYQUtBQp0O-ps7TnPavzA2?ismsaljsauthenabled',
    'cantonese': 'https://outlook.office.com/book/Chinese@teleperformance.onmicrosoft.com/s/MV4FDjJs7EeuSYmAOiz6zQ2?ismsaljsauthenabled',
    'kr': 'https://outlook.office.com/book/TeleperformanceMalaysiaThailandinterviews@teleperformance.onmicrosoft.com/s/VOKIhr5rN0CbMRcvzrUyIw2?ismsaljsauthenabled',
    'jp': 'https://outlook.office.com/book/TeleperformanceMalaysiaThailandinterviews@teleperformance.onmicrosoft.com/s/G_rYtA5Pg0ebNjlKhHtTGg2?ismsaljsauthenabled',
    'en': 'https://outlook.office.com/book/EnglishMalay@teleperformance.onmicrosoft.com/s/1VrPYr8cmESlwvf5rfq-Og2?ismsaljsauthenabled',
    'my': 'https://outlook.office.com/book/EnglishMalay@teleperformance.onmicrosoft.com/s/1VrPYr8cmESlwvf5rfq-Og2?ismsaljsauthenabled',
    'th': 'https://outlook.office.com/book/TeleperformanceMalaysiaSupportHiring@teleperformance.onmicrosoft.com/s/8uzkPuNYJEWfdPhpfRoQag2?ismsaljsauthenabled'
};

// Job types that qualify for interview booking (agent positions)
const agentJobKeywords = [
    'customer service',
    'content mod',
    'content moderator',
    'agent',
    'support',
    'representative',
    'specialist',
    'associate',
    'advisor',
    'care'
];

// Translation object
const translations = {
    en: {
        about_us: "About Us",
        careers: "Careers",
        hot_jobMY: "Hot Job MALAYSIA 🔥",
        hot_jobTH: "Hot Job THAILAND 🔥",
        refer_friend: "Refer A Friend 🌟",
        stay_connected: "Stay Connected",
        contact_us: "Contact Us",
        language: "Language",
        find_job: "Find your perfect job!",
        preferred_language: "Preferred Language",
        choose_language: "Choose your language",
        choose_location: "Choose Your Location",
        choose_job_type: "Choose Your Job Type",
        generate_qr: "Generate QR Code & Apply Now!",
        team_response: "Our team will respond within 48 hours!",
        hot_job_content: "Hot Job Of The Week!",
        hot_job_description: "Check out our \"Hot Job of the Week\" and join our award-winning team! This role offers fantastic growth opportunities, competitive benefits, and the chance to work with cutting-edge AI technology. Apply now and be part of our journey to excellence!",
        apply_now: "Apply Now!",
        application_process: "Your Application Process",
        step_one: "Submit Your Application",
        step_one_desc: "Click the link below or scan the QR code to apply for this position",
        apply_online: "Apply Online Now",
        or_scan: "Or scan QR",
        step_two: "Book Your Interview",
        step_two_desc: "After submitting your application, schedule your interview at your convenience",
        book_interview: "Schedule Interview Now",
        interview_note: "Our team will contact you within 48 hours of your application",
        share_opportunity: "Share This Opportunity"
    },
    zh: {
        about_us: "关于我们",
        careers: "职业机会",
        hot_jobMY: "马来西亚热门职位 🔥",
        hot_jobTH: "泰国热门职位 🔥",
        refer_friend: "推荐朋友 🌟",
        stay_connected: "保持联系",
        contact_us: "联系我们",
        language: "语言",
        find_job: "找到您的理想工作！",
        preferred_language: "首选语言",
        choose_language: "选择您的语言",
        choose_location: "选择您的地点",
        choose_job_type: "选择您的工作类型",
        generate_qr: "生成二维码并立即申请！",
        team_response: "我们的团队将在 48 小时内回复！",
        hot_job_content: "本周热门职位！",
        hot_job_description: "查看我们的"本周热门职位"并加入我们屡获殊荣的团队！该职位提供出色的成长机会、具有竞争力的福利以及使用尖端人工智能技术的机会。立即申请并成为我们卓越之旅的一部分！",
        apply_now: "立即申请！",
        application_process: "您的申请流程",
        step_one: "提交您的申请",
        step_one_desc: "点击下方链接或扫描二维码申请此职位",
        apply_online: "立即在线申请",
        or_scan: "或扫描二维码",
        step_two: "预约面试",
        step_two_desc: "提交申请后，请按您的方便时间安排面试",
        book_interview: "立即预约面试",
        interview_note: "我们的团队将在您申请后48小时内与您联系",
        share_opportunity: "分享此机会"
    },
    jp: {
        about_us: "会社について",
        careers: "キャリア",
        hot_jobMY: "マレーシア人気求人 🔥",
        hot_jobTH: "タイ人気求人 🔥",
        refer_friend: "友達を紹介 🌟",
        stay_connected: "つながりを保つ",
        contact_us: "お問い合わせ",
        language: "言語",
        find_job: "あなたにぴったりの仕事を見つけましょう！",
        preferred_language: "希望言語",
        choose_language: "言語を選択してください",
        choose_location: "勤務地を選択してください",
        choose_job_type: "職種を選択してください",
        generate_qr: "QRコードを生成して今すぐ応募！",
        team_response: "チームは48時間以内に返信します！",
        hot_job_content: "今週の人気求人！",
        hot_job_description: "「今週の人気求人」をチェックして、受賞歴のあるチームに参加してください！この役割は、素晴らしい成長の機会、競争力のある福利厚生、最先端のAI技術を使用する機会を提供します。今すぐ応募して、卓越性への旅の一部になりましょう！",
        apply_now: "今すぐ応募！",
        application_process: "応募プロセス",
        step_one: "応募書類を提出",
        step_one_desc: "下のリンクをクリックするか、QRコードをスキャンしてこのポジションに応募してください",
        apply_online: "今すぐオンラインで応募",
        or_scan: "またはQRをスキャン",
        step_two: "面接を予約",
        step_two_desc: "応募後、ご都合の良い時間に面接を予約してください",
        book_interview: "今すぐ面接を予約",
        interview_note: "チームは応募後48時間以内にご連絡いたします",
        share_opportunity: "この機会を共有"
    },
    th: {
        about_us: "เกี่ยวกับเรา",
        careers: "โอกาสในการทำงาน",
        hot_jobMY: "งานยอดนิยมมาเลเซีย 🔥",
        hot_jobTH: "งานยอดนิยมไทย 🔥",
        refer_friend: "แนะนำเพื่อน 🌟",
        stay_connected: "ติดตาม",
        contact_us: "ติดต่อเรา",
        language: "ภาษา",
        find_job: "ค้นหางานที่เหมาะกับคุณ!",
        preferred_language: "ภาษาที่ต้องการ",
        choose_language: "เลือกภาษาของคุณ",
        choose_location: "เลือกสถานที่ของคุณ",
        choose_job_type: "เลือกประเภทงานของคุณ",
        generate_qr: "สร้าง QR Code และสมัครเลย!",
        team_response: "ทีมของเราจะตอบกลับภายใน 48 ชั่วโมง!",
        hot_job_content: "งานยอดนิยมประจำสัปดาห์!",
        hot_job_description: "ตรวจสอบ \"งานยอดนิยมประจำสัปดาห์\" ของเราและเข้าร่วมทีมที่ได้รับรางวัลของเรา! บทบาทนี้มีโอกาสในการเติบโตที่ยอดเยี่ยม สวัสดิการที่แข่งขันได้ และโอกาสในการทำงานกับเทคโนโลยี AI ที่ทันสมัย สมัครตอนนี้และเป็นส่วนหนึ่งของการเดินทางสู่ความเป็นเลิศของเรา!",
        apply_now: "สมัครเลย!",
        application_process: "ขั้นตอนการสมัคร",
        step_one: "ส่งใบสมัคร",
        step_one_desc: "คลิกลิงก์ด้านล่างหรือสแกน QR Code เพื่อสมัครตำแหน่งนี้",
        apply_online: "สมัครออนไลน์ทันที",
        or_scan: "หรือสแกน QR",
        step_two: "จองการสัมภาษณ์",
        step_two_desc: "หลังจากส่งใบสมัคร กำหนดเวลาสัมภาษณ์ตามความสะดวกของคุณ",
        book_interview: "จองการสัมภาษณ์ทันที",
        interview_note: "ทีมของเราจะติดต่อคุณภายใน 48 ชั่วโมงหลังจากการสมัคร",
        share_opportunity: "แชร์โอกาสนี้"
    },
    my: {
        about_us: "Tentang Kami",
        careers: "Kerjaya",
        hot_jobMY: "Pekerjaan Popular MALAYSIA 🔥",
        hot_jobTH: "Pekerjaan Popular THAILAND 🔥",
        refer_friend: "Rujuk Rakan 🌟",
        stay_connected: "Kekal Berhubung",
        contact_us: "Hubungi Kami",
        language: "Bahasa",
        find_job: "Cari pekerjaan sempurna anda!",
        preferred_language: "Bahasa Pilihan",
        choose_language: "Pilih bahasa anda",
        choose_location: "Pilih Lokasi Anda",
        choose_job_type: "Pilih Jenis Pekerjaan Anda",
        generate_qr: "Jana Kod QR & Mohon Sekarang!",
        team_response: "Pasukan kami akan bertindak balas dalam masa 48 jam!",
        hot_job_content: "Pekerjaan Popular Minggu Ini!",
        hot_job_description: "Lihat \"Pekerjaan Popular Minggu Ini\" kami dan sertai pasukan kami yang memenangi anugerah! Peranan ini menawarkan peluang pertumbuhan yang hebat, faedah yang kompetitif, dan peluang untuk bekerja dengan teknologi AI terkini. Mohon sekarang dan jadilah sebahagian daripada perjalanan kami ke arah kecemerlangan!",
        apply_now: "Mohon Sekarang!",
        application_process: "Proses Permohonan Anda",
        step_one: "Hantar Permohonan Anda",
        step_one_desc: "Klik pautan di bawah atau imbas kod QR untuk memohon jawatan ini",
        apply_online: "Mohon Dalam Talian Sekarang",
        or_scan: "Atau imbas QR",
        step_two: "Tempah Temu Duga Anda",
        step_two_desc: "Selepas menghantar permohonan, jadualkan temu duga anda mengikut keselesaan anda",
        book_interview: "Jadualkan Temu Duga Sekarang",
        interview_note: "Pasukan kami akan menghubungi anda dalam masa 48 jam selepas permohonan",
        share_opportunity: "Kongsi Peluang Ini"
    },
    kr: {
        about_us: "회사 소개",
        careers: "채용",
        hot_jobMY: "말레이시아 인기 채용 🔥",
        hot_jobTH: "태국 인기 채용 🔥",
        refer_friend: "친구 추천 🌟",
        stay_connected: "연결 유지",
        contact_us: "문의하기",
        language: "언어",
        find_job: "완벽한 직업을 찾으세요!",
        preferred_language: "선호 언어",
        choose_language: "언어를 선택하세요",
        choose_location: "위치를 선택하세요",
        choose_job_type: "직무 유형을 선택하세요",
        generate_qr: "QR 코드 생성 및 지금 지원!",
        team_response: "저희 팀이 48시간 이내에 응답합니다!",
        hot_job_content: "이번 주 인기 채용!",
        hot_job_description: "\"이번 주 인기 채용\"을 확인하고 수상 경력이 있는 팀에 합류하세요! 이 역할은 환상적인 성장 기회, 경쟁력 있는 혜택, 최첨단 AI 기술을 사용할 기회를 제공합니다. 지금 지원하고 우수성을 향한 여정의 일부가 되세요!",
        apply_now: "지금 지원!",
        application_process: "지원 절차",
        step_one: "지원서 제출",
        step_one_desc: "아래 링크를 클릭하거나 QR 코드를 스캔하여 이 포지션에 지원하세요",
        apply_online: "지금 온라인으로 지원",
        or_scan: "또는 QR 스캔",
        step_two: "면접 예약",
        step_two_desc: "지원서를 제출한 후 편리한 시간에 면접을 예약하세요",
        book_interview: "지금 면접 예약",
        interview_note: "저희 팀이 지원 후 48시간 이내에 연락드립니다",
        share_opportunity: "이 기회 공유"
    }
};

// Job data structure
const jobData = {
    languages: {
        en: ["English", "Cantonese", "Mandarin", "Japanese", "Korean", "Thai", "Malay"],
        zh: ["英语", "粤语", "普通话", "日语", "韩语", "泰语", "马来语"],
        jp: ["英語", "広東語", "中国語", "日本語", "韓国語", "タイ語", "マレー語"],
        th: ["อังกฤษ", "กวางตุ้ง", "จีนกลาง", "ญี่ปุ่น", "เกาหลี", "ไทย", "มาเลย์"],
        my: ["Inggeris", "Kantonis", "Mandarin", "Jepun", "Korea", "Thai", "Melayu"],
        kr: ["영어", "광동어", "만다린", "일본어", "한국어", "태국어", "말레이어"]
    },
    locations: {
        en: ["Malaysia - Kuala Lumpur", "Malaysia - Penang", "Thailand - Bangkok"],
        zh: ["马来西亚 - 吉隆坡", "马来西亚 - 槟城", "泰国 - 曼谷"],
        jp: ["マレーシア - クアラルンプール", "マレーシア - ペナン", "タイ - バンコク"],
        th: ["มาเลเซีย - กัวลาลัมเปอร์", "มาเลเซีย - ปีนัง", "ไทย - กรุงเทพฯ"],
        my: ["Malaysia - Kuala Lumpur", "Malaysia - Pulau Pinang", "Thailand - Bangkok"],
        kr: ["말레이시아 - 쿠알라룸푸르", "말레이시아 - 페낭", "태국 - 방콕"]
    },
    jobTypes: {
        en: ["Customer Service", "Content Moderator", "Technical Support", "Sales", "Back Office", "Management"],
        zh: ["客户服务", "内容审核", "技术支持", "销售", "后台办公", "管理"],
        jp: ["カスタマーサービス", "コンテンツモデレーター", "テクニカルサポート", "営業", "バックオフィス", "管理"],
        th: ["บริการลูกค้า", "ผู้ตรวจสอบเนื้อหา", "ฝ่ายสนับสนุนทางเทคนิค", "ฝ่ายขาย", "งานสำนักงาน", "ฝ่ายจัดการ"],
        my: ["Perkhidmatan Pelanggan", "Moderator Kandungan", "Sokongan Teknikal", "Jualan", "Pejabat Belakang", "Pengurusan"],
        kr: ["고객 서비스", "콘텐츠 관리자", "기술 지원", "영업", "백오피스", "관리"]
    }
};

// Job application URLs (placeholder - you'll need to update these)
const jobUrls = {
    "English": {
        "Malaysia - Kuala Lumpur": {
            "Customer Service": "https://example.com/apply/en/kl/cs",
            "Content Moderator": "https://example.com/apply/en/kl/cm",
            "Technical Support": "https://example.com/apply/en/kl/ts",
            "Sales": "https://example.com/apply/en/kl/sales",
            "Back Office": "https://example.com/apply/en/kl/bo",
            "Management": "https://example.com/apply/en/kl/mgmt"
        }
        // Add more locations and job types as needed
    }
    // Add more languages as needed
};

// Global variables
let currentLanguage = 'en';
let selectedLanguageOption = '';
let selectedLocation = '';
let selectedJobType = '';

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Setup language switcher
    setupLanguageSwitcher();
    
    // Setup dropdowns
    populateLanguageDropdown();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize with default language
    updatePageLanguage('en');
});

// Setup language switcher
function setupLanguageSwitcher() {
    const languageLinks = document.querySelectorAll('[data-lang]');
    languageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            currentLanguage = lang;
            updatePageLanguage(lang);
            
            // Show Thai video if Thai is selected
            const thaiVideoSection = document.getElementById('thai-video-section');
            if (lang === 'th') {
                thaiVideoSection.style.display = 'block';
            } else {
                thaiVideoSection.style.display = 'none';
            }
        });
    });
}

// Update page language
function updatePageLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                // Preserve highlighted-word spans
                if (key === 'team_response') {
                    element.innerHTML = translations[lang][key].replace('48 hours', '<span class="highlighted-word">48 hours</span>');
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        }
    });
    
    // Repopulate dropdowns
    populateLanguageDropdown();
    populateLocationDropdown();
    populateJobTypeDropdown();
}

// Populate dropdowns
function populateLanguageDropdown() {
    const select = document.getElementById('language-select');
    select.innerHTML = `<option value="" disabled selected>${translations[currentLanguage].choose_language}</option>`;
    
    jobData.languages[currentLanguage].forEach(lang => {
        const option = document.createElement('option');
        option.value = lang;
        option.textContent = lang;
        select.appendChild(option);
    });
}

function populateLocationDropdown() {
    const select = document.getElementById('location-select');
    select.innerHTML = `<option value="" disabled selected>${translations[currentLanguage].choose_location}</option>`;
    
    jobData.locations[currentLanguage].forEach(location => {
        const option = document.createElement('option');
        option.value = location;
        option.textContent = location;
        select.appendChild(option);
    });
}

function populateJobTypeDropdown() {
    const select = document.getElementById('job-type-select');
    select.innerHTML = `<option value="" disabled selected>${translations[currentLanguage].choose_job_type}</option>`;
    
    jobData.jobTypes[currentLanguage].forEach(jobType => {
        const option = document.createElement('option');
        option.value = jobType;
        option.textContent = jobType;
        select.appendChild(option);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Generate button
    document.getElementById('generate-btn').addEventListener('click', generateQRAndShowModal);
    
    // Apply button (hot job)
    document.getElementById('apply-btn').addEventListener('click', function() {
        window.open('https://linktr.ee/TPMY_IG', '_blank');
    });
    
    // Share buttons
    document.getElementById('share-button-whatsapp').addEventListener('click', shareViaWhatsApp);
    document.getElementById('share-button-line').addEventListener('click', shareViaLine);
    
    // Dropdown changes
    document.getElementById('language-select').addEventListener('change', function(e) {
        selectedLanguageOption = e.target.value;
    });
    
    document.getElementById('location-select').addEventListener('change', function(e) {
        selectedLocation = e.target.value;
    });
    
    document.getElementById('job-type-select').addEventListener('change', function(e) {
        selectedJobType = e.target.value;
    });
}

// Check if job is an agent position
function isAgentPosition(jobType) {
    if (!jobType) return false;
    const jobLower = jobType.toLowerCase();
    return agentJobKeywords.some(keyword => jobLower.includes(keyword));
}

// Get interview link based on language
function getInterviewLink(languageOption) {
    // Map language option to language code
    const languageMap = {
        'Mandarin': 'zh',
        '普通话': 'zh',
        '中国語': 'zh',
        'จีนกลาง': 'zh',
        'Mandarin': 'zh',
        'Cantonese': 'cantonese',
        '粤语': 'cantonese',
        '広東語': 'cantonese',
        'กวางตุ้ง': 'cantonese',
        'Kantonis': 'cantonese',
        'Korean': 'kr',
        '韩语': 'kr',
        '韓国語': 'kr',
        'เกาหลี': 'kr',
        'Korea': 'kr',
        '한국어': 'kr',
        'Japanese': 'jp',
        '日语': 'jp',
        '日本語': 'jp',
        'ญี่ปุ่น': 'jp',
        'Jepun': 'jp',
        '일본어': 'jp',
        'English': 'en',
        '英语': 'en',
        '英語': 'en',
        'อังกฤษ': 'en',
        'Inggeris': 'en',
        '영어': 'en',
        'Malay': 'my',
        '马来语': 'my',
        'マレー語': 'my',
        'มาเลย์': 'my',
        'Melayu': 'my',
        '말레이어': 'my',
        'Thai': 'th',
        '泰语': 'th',
        'タイ語': 'th',
        'ไทย': 'th',
        'Thai': 'th',
        '태국어': 'th'
    };
    
    const langCode = languageMap[languageOption];
    return interviewLinks[langCode] || interviewLinks['en'];
}

// Generate QR and show modal
function generateQRAndShowModal() {
    if (!selectedLanguageOption || !selectedLocation || !selectedJobType) {
        alert(currentLanguage === 'en' ? 'Please select all options!' : 
              currentLanguage === 'zh' ? '请选择所有选项！' :
              currentLanguage === 'jp' ? 'すべてのオプションを選択してください！' :
              currentLanguage === 'th' ? 'กรุณาเลือกตัวเลือกทั้งหมด!' :
              currentLanguage === 'my' ? 'Sila pilih semua pilihan!' :
              currentLanguage === 'kr' ? '모든 옵션을 선택하세요!' :
              'Please select all options!');
        return;
    }
    
    // Generate job URL (you'll need to implement your actual URL logic)
    const jobUrl = `https://example.com/apply?lang=${selectedLanguageOption}&location=${selectedLocation}&job=${selectedJobType}`;
    
    // Update job URL in modal
    const jobUrlElement = document.getElementById('job-url');
    jobUrlElement.href = jobUrl;
    jobUrlElement.textContent = jobUrl;
    
    // Generate QR code
    const qrCanvas = document.getElementById('qr-code');
    const qr = new QRious({
        element: qrCanvas,
        value: jobUrl,
        size: 200,
        background: 'white',
        foreground: 'black'
    });
    
    // Check if this is an agent position and show/hide interview step
    const interviewStep = document.getElementById('interview-step');
    if (isAgentPosition(selectedJobType)) {
        interviewStep.style.display = 'block';
        
        // Set the interview URL
        const interviewUrl = getInterviewLink(selectedLanguageOption);
        const interviewUrlElement = document.getElementById('interview-url');
        interviewUrlElement.href = interviewUrl;
    } else {
        interviewStep.style.display = 'none';
    }
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('qrModal'));
    modal.show();
}

// Share functions
function shareViaWhatsApp() {
    const jobUrl = document.getElementById('job-url').href;
    const text = encodeURIComponent(`Check out this job opportunity at TP: ${jobUrl}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
}

function shareViaLine() {
    const jobUrl = document.getElementById('job-url').href;
    const text = encodeURIComponent(`Check out this job opportunity at TP: ${jobUrl}`);
    window.open(`https://line.me/R/msg/text/?${text}`, '_blank');
}
