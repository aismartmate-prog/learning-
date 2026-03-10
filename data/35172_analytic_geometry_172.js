const questionsDB = [
    // ==========================================
    // תת נושא 1: מערכת צירים ונקודות
    // ==========================================

    // --- שאלה 1 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מערכת צירים ונקודות",
        question: `מהם שיעורי הנקודה A המסומנת במערכת הצירים הבאה?<br><br>
        <svg viewBox="0 0 200 200" style="width:100%; max-width:250px; display:block; margin:0 auto;">
            <line x1="20" y1="140" x2="180" y2="140" stroke="#f1f5f9" stroke-width="1" />
            <line x1="20" y1="100" x2="180" y2="100" stroke="#f1f5f9" stroke-width="1" />
            <line x1="20" y1="60" x2="180" y2="60" stroke="#f1f5f9" stroke-width="1" />
            <line x1="60" y1="20" x2="60" y2="180" stroke="#f1f5f9" stroke-width="1" />
            <line x1="140" y1="20" x2="140" y2="180" stroke="#f1f5f9" stroke-width="1" />
            <line x1="20" y1="180" x2="180" y2="180" stroke="#0f172a" stroke-width="2" />
            <line x1="20" y1="180" x2="20" y2="20" stroke="#0f172a" stroke-width="2" />
            <text x="185" y="185" font-size="12" fill="#0f172a" font-weight="bold">x</text>
            <text x="10" y="15" font-size="12" fill="#0f172a" font-weight="bold">y</text>
            <text x="58" y="195" font-size="10">2</text>
            <text x="98" y="195" font-size="10">4</text>
            <text x="138" y="195" font-size="10">6</text>
            <text x="5" y="143" font-size="10">2</text>
            <text x="5" y="103" font-size="10">4</text>
            <text x="5" y="63" font-size="10">6</text>
            <circle cx="100" cy="60" r="5" fill="#dc2626" />
            <line x1="100" y1="180" x2="100" y2="60" stroke="#dc2626" stroke-width="1" stroke-dasharray="4,4" />
            <line x1="20" y1="60" x2="100" y2="60" stroke="#dc2626" stroke-width="1" stroke-dasharray="4,4" />
            <text x="110" y="55" font-size="14" fill="#dc2626" font-weight="bold">A</text>
        </svg>`,
        options: ["(4, 6)", "(6, 4)", "(2, 4)", "(4, 4)"],
        correctAnswer: 0,
        hint: "שיעורי נקודה נכתבים תמיד בסדר הזה: קודם ערך ציר ה-x (האופקי) ולאחר מכן ערך ציר ה-y (האנכי).",
        solution_steps: [
            { verbal_explanation: "נוריד קו דמיוני (במקרה זה, מקווקו) מהנקודה A כלפי מטה אל ציר ה-x האופקי.", math_expression: "הקו פוגע במספר 4" },
            { verbal_explanation: "נעביר קו דמיוני שמאלה אל ציר ה-y האנכי.", math_expression: "הקו פוגע במספר 6" },
            { verbal_explanation: "נרשום את התשובה כזוג סדור. תמיד מתחילים ב-x ואז רושמים את ה-y.", math_expression: "(x, y)  =>  (4, 6)" }
        ],
        final_answer: "(4, 6)"
    },

    // --- שאלה 2 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מערכת צירים ונקודות",
        question: "באיזה רביע נמצאת הנקודה B ששיעוריה הם (-3, 5)?",
        options: ["רביע שני", "רביע ראשון", "רביע שלישי", "רביע רביעי"],
        correctAnswer: 0,
        hint: "ברביע הראשון שני השיעורים חיוביים. ברביע השני ה-x שלילי וה-y חיובי (שמאל ולמעלה). ברביע השלישי שניהם שליליים. ברביע הרביעי ה-x חיובי וה-y שלילי.",
        solution_steps: [
            { verbal_explanation: "נבדוק את הסימן של ערך ה-x. בנקודה זו, x שווה למינוס 3.", math_expression: "x < 0  (שלילי)" },
            { verbal_explanation: "נבדוק את הסימן של ערך ה-y. בנקודה זו, y שווה ל-5.", math_expression: "y > 0  (חיובי)" },
            { verbal_explanation: "נקודה שבה x שלילי (נמצאת שמאלה מראשית הצירים) ו-y חיובי (נמצאת למעלה), ממוקמת ברביע השני.", math_expression: "רביע שני" }
        ],
        final_answer: "רביע שני"
    },

    // --- שאלה 3 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מערכת צירים ונקודות",
        question: "נקודה C נמצאת על ציר ה-x. מה מהבאים נכון בוודאות לגבי שיעורי הנקודה?",
        options: ["שיעור ה-y שלה שווה לאפס", "שיעור ה-x שלה שווה לאפס", "שני השיעורים שלה שווים לאפס", "הנקודה נמצאת ברביע הראשון"],
        correctAnswer: 0,
        hint: "ציר ה-x הוא קו אופקי לחלוטין. על הקו הזה אין שום גובה (לא עלינו ולא ירדנו), ולכן שיעור הגובה מתאפס.",
        solution_steps: [
            { verbal_explanation: "מערכת הצירים בנויה משני צירים המאונכים זה לזה. ציר ה-y מתאר את הגובה, וציר ה-x מתאר את המיקום האופקי.", math_expression: "y = גובה" },
            { verbal_explanation: "כל נקודה שמונחת בדיוק על ציר ה-x אינה נמצאת 'מעל' הציר ואינה 'מתחת' לו. הגובה שלה הוא בדיוק הרצפה.", math_expression: "גובה שווה לאפס" },
            { verbal_explanation: "לכן, בכל נקודה על ציר ה-x, שיעור ה-y חייב להיות אפס. הצורה הכללית היא (x, 0).", math_expression: "y = 0" }
        ],
        final_answer: "שיעור ה-y שלה שווה לאפס"
    },

    // --- שאלה 4 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מערכת צירים ונקודות",
        question: "נתונות שתי נקודות על מערכת צירים: A(2, 5) ו- B(8, 5). מהו המרחק ביניהן?",
        options: ["6 יחידות אורך", "10 יחידות אורך", "13 יחידות אורך", "4 יחידות אורך"],
        correctAnswer: 0,
        hint: "שימו לב ששיעור ה-y בשתי הנקודות זהה (5). המשמעות היא שהקטע שמחבר ביניהן הוא קו אופקי לחלוטין, מקביל לציר ה-x. כדי למצוא מרחק אופקי, פשוט חסרו את ה-x הקטן מה-x הגדול.",
        solution_steps: [
            { verbal_explanation: "נבחן את שיעורי ה-y של שתי הנקודות. בשתיהן y = 5. מכאן שהקטע AB מקביל לציר ה-x.", math_expression: "y_A = y_B = 5" },
            { verbal_explanation: "כדי למצוא אורך של קטע אופקי, עלינו לחשב את ההפרש בין ערכי ה-x. תמיד נחסר את הקטן מהגדול כדי לקבל מרחק חיובי.", math_expression: "מרחק = x_B - x_A" },
            { verbal_explanation: "נציב את הנתונים: ערך ה-x של נקודה B הוא 8, וערך ה-x של נקודה A הוא 2.", math_expression: "מרחק = 8 - 2" },
            { verbal_explanation: "נבצע את פעולת החיסור לקבלת אורך הקטע.", math_expression: "6" }
        ],
        final_answer: "6 יחידות אורך"
    },

    // --- שאלה 5 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מערכת צירים ונקודות",
        question: "נתונות שתי נקודות: C(4, -2) ו- D(4, 7). מהו המרחק ביניהן?",
        options: ["9 יחידות אורך", "5 יחידות אורך", "11 יחידות אורך", "0 יחידות אורך"],
        correctAnswer: 0,
        hint: "כאן שיעור ה-x זהה (4), מה שאומר שהקטע הוא קו אנכי המקביל לציר ה-y. חסרו את ה-y הקטן מה-y הגדול.",
        solution_steps: [
            { verbal_explanation: "בשתי הנקודות שיעור ה-x הוא 4. לכן, הקטע המחבר ביניהן הוא אנכי ועולה ויורד לאורך אותו קו.", math_expression: "x_C = x_D = 4" },
            { verbal_explanation: "כדי למצוא אורך של קטע אנכי, נחשב את ההפרש בין ערכי ה-y (מהנקודה הגבוהה ביותר לפחות את הנקודה הנמוכה ביותר).", math_expression: "מרחק = y_D - y_C" },
            { verbal_explanation: "נציב את הנתונים. הנקודה הגבוהה היא 7, והנמוכה היא מינוס 2. שימו לב לחיסור של מספר שלילי.", math_expression: "מרחק = 7 - (-2)" },
            { verbal_explanation: "מינוס כפול מינוס נותן פלוס. נחבר את הערכים.", math_expression: "7 + 2 = 9" }
        ],
        final_answer: "9 יחידות אורך"
    },

    // --- שאלה 6 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מערכת צירים ונקודות",
        question: `במערכת צירים שורטט מלבן שצלעותיו מקבילות לצירים.<br>
        שלושה מקודקודי המלבן הם: (1, 2) , (6, 2) , (1, 5).<br>
        מהם שיעורי הקודקוד הרביעי של המלבן?<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:200px; display:block; margin:0 auto;">
            <line x1="20" y1="130" x2="180" y2="130" stroke="#cbd5e1" stroke-width="2" />
            <line x1="40" y1="140" x2="40" y2="10" stroke="#cbd5e1" stroke-width="2" />
            <rect x="60" y="40" width="100" height="60" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,4" />
            <circle cx="60" cy="100" r="4" fill="#0f172a" />
            <circle cx="160" cy="100" r="4" fill="#0f172a" />
            <circle cx="60" cy="40" r="4" fill="#0f172a" />
            <circle cx="160" cy="40" r="5" fill="#ef4444" />
            <text x="30" y="115" font-size="10">(1,2)</text>
            <text x="165" y="115" font-size="10">(6,2)</text>
            <text x="30" y="35" font-size="10">(1,5)</text>
            <text x="165" y="35" font-size="12" font-weight="bold" fill="#ef4444">?</text>
        </svg>`,
        options: ["(6, 5)", "(5, 6)", "(1, 6)", "(6, 1)"],
        correctAnswer: 0,
        hint: "לקודקוד החסר חייב להיות אותו שיעור x כמו לנקודה התחתונה שמתחתיו, ואותו שיעור y כמו לנקודה השמאלית שלצידו.",
        solution_steps: [
            { verbal_explanation: "במלבן שצלעותיו מקבילות לצירים, כל צד ימני מורכב מנקודות בעלות אותו ערך x.", math_expression: "הקו הימני" },
            { verbal_explanation: "הקודקוד הימני התחתון הוא (6, 2). לכן, גם לקודקוד הימני העליון חייב להיות x = 6.", math_expression: "x = 6" },
            { verbal_explanation: "כמו כן, כל צלע עליונה מורכבת מנקודות בעלות אותו גובה (ערך y).", math_expression: "הקו העליון" },
            { verbal_explanation: "הקודקוד השמאלי העליון הוא (1, 5). לכן, גם לקודקוד הימני העליון חייב להיות y = 5.", math_expression: "y = 5" },
            { verbal_explanation: "נחבר את הערכים לנקודה אחת.", math_expression: "(6, 5)" }
        ],
        final_answer: "(6, 5)"
    },

    // --- שאלה 7 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מערכת צירים ונקודות",
        question: "במערכת צירים נתון מלבן שקודקודיו הם: A(2, 1), B(8, 1), C(8, 4), D(2, 4). מהו שטח המלבן?",
        options: ["18 יחידות ריבועיות", "24 יחידות ריבועיות", "12 יחידות ריבועיות", "20 יחידות ריבועיות"],
        correctAnswer: 0,
        hint: "חשבו את אורך הבסיס של המלבן (המרחק האופקי בין A ל-B). לאחר מכן, חשבו את גובה המלבן (המרחק האנכי בין B ל-C). שטח מלבן הוא בסיס כפול גובה.",
        solution_steps: [
            { verbal_explanation: "נחשב את אורך צלע הבסיס AB. שתיהן על אותו קו אופקי (y=1). ההפרש בין ערכי ה-x הוא 8 פחות 2.", math_expression: "רוחב = 8 - 2 = 6" },
            { verbal_explanation: "נחשב את אורך הצלע האנכית BC. שתיהן על אותו קו אנכי (x=8). ההפרש בין ערכי ה-y הוא 4 פחות 1.", math_expression: "גובה = 4 - 1 = 3" },
            { verbal_explanation: "שטח מלבן שווה למכפלת שתי צלעות סמוכות.", math_expression: "שטח = 6 × 3" },
            { verbal_explanation: "נבצע את הכפל.", math_expression: "18" }
        ],
        final_answer: "18 יחידות ריבועיות"
    },

    // --- שאלה 8 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מערכת צירים ונקודות",
        question: "מהו היקף המלבן שתואר בשאלה הקודמת? קודקודים: (2, 1), (8, 1), (8, 4), (2, 4).",
        options: ["18 יחידות אורך", "24 יחידות אורך", "9 יחידות אורך", "15 יחידות אורך"],
        correctAnswer: 0,
        hint: "היקף של מלבן שווה לסכום כל ארבע צלעותיו: פעמיים הרוחב ועוד פעמיים הגובה.",
        solution_steps: [
            { verbal_explanation: "מחישוב קודם, מצאנו שהרוחב (בסיס) הוא 6 יחידות אורך.", math_expression: "רוחב = 6" },
            { verbal_explanation: "ומצאנו שהגובה הוא 3 יחידות אורך.", math_expression: "גובה = 3" },
            { verbal_explanation: "נוסחת היקף מלבן היא סכום כל הצלעות: (רוחב + גובה) כפול 2.", math_expression: "היקף = 2 × (6 + 3)" },
            { verbal_explanation: "נחשב את הסוגריים ונכפיל ב-2.", math_expression: "היקף = 2 × 9 = 18" }
        ],
        final_answer: "18 יחידות אורך"
    },

    // --- שאלה 9 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מערכת צירים ונקודות",
        question: `משולש ישר זווית שורטט במערכת צירים.<br>קודקודי המשולש הם: A(1, 2) , B(5, 2) , C(1, 6).<br>מהו שטח המשולש?<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:200px; display:block; margin:0 auto;">
            <line x1="20" y1="130" x2="180" y2="130" stroke="#cbd5e1" stroke-width="2" />
            <line x1="40" y1="140" x2="40" y2="10" stroke="#cbd5e1" stroke-width="2" />
            <polygon points="60,110 140,110 60,30" fill="#fef2f2" stroke="#dc2626" stroke-width="2" />
            <rect x="60" y="100" width="10" height="10" fill="none" stroke="#dc2626" stroke-width="1" />
            <text x="30" y="125" font-size="10">A(1,2)</text>
            <text x="145" y="125" font-size="10">B(5,2)</text>
            <text x="25" y="25" font-size="10">C(1,6)</text>
        </svg>`,
        options: ["8 יחידות ריבועיות", "16 יחידות ריבועיות", "12 יחידות ריבועיות", "10 יחידות ריבועיות"],
        correctAnswer: 0,
        hint: "הצלעות AB ו-AC מקבילות לצירים, ולכן הן הניצבים של המשולש. חשבו את האורך של כל ניצב, הכפילו אותם, וחלקו ב-2 (לפי נוסחת שטח משולש).",
        solution_steps: [
            { verbal_explanation: "נחשב את אורך הניצב האופקי AB. שתי הנקודות באותו גובה (y=2). נחסר את ערכי ה-x.", math_expression: "AB = 5 - 1 = 4" },
            { verbal_explanation: "נחשב את אורך הניצב האנכי AC. שתי הנקודות על אותו קו אנכי (x=1). נחסר את ערכי ה-y.", math_expression: "AC = 6 - 2 = 4" },
            { verbal_explanation: "שטח משולש ישר זווית הוא מכפלת הניצבים חלקי 2.", math_expression: "שטח = (AB × AC) / 2" },
            { verbal_explanation: "נציב את הערכים שמצאנו.", math_expression: "שטח = (4 × 4) / 2" },
            { verbal_explanation: "נחשב את התוצאה הסופית.", math_expression: "16 / 2 = 8" }
        ],
        final_answer: "8 יחידות ריבועיות"
    },

    // --- שאלה 10 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מערכת צירים ונקודות",
        question: "נתונה הנקודה E ששיעוריה (4, 7). מהי הנקודה הסימטרית ל-E ביחס לציר ה-y?",
        options: ["(-4, 7)", "(4, -7)", "(-4, -7)", "(7, 4)"],
        correctAnswer: 0,
        hint: "כאשר מעבירים נקודה בסימטריה ('מראה') ביחס לציר ה-y, הגובה שלה (y) נשאר זהה, אך המיקום האופקי שלה (x) מתהפך ומקבל סימן נגדי.",
        solution_steps: [
            { verbal_explanation: "סימטריה ביחס לציר ה-y משמעה שהנקודה קופצת מצד ימין לצד שמאל (או להיפך) בדיוק באותו מרחק מהציר.", math_expression: "השתקפות רוחבית" },
            { verbal_explanation: "מאחר שהנקודה לא עולה ולא יורדת, ערך ה-y שלה נשאר ללא שינוי.", math_expression: "y נשאר 7" },
            { verbal_explanation: "ערך ה-x משתנה למספר הנגדי שלו. מכיוון שהוא היה 4 (ימינה מהציר), הוא יהפוך למינוס 4 (שמאלה מהציר).", math_expression: "x הופך ל- (-4)" },
            { verbal_explanation: "נרכיב את הנקודה החדשה.", math_expression: "(-4, 7)" }
        ],
        final_answer: "(-4, 7)"
    },

    // --- שאלה 11 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מערכת צירים ונקודות",
        question: "נתונה הנקודה F ששיעוריה (-3, -2). מהי הנקודה הסימטרית לה ביחס לציר ה-x?",
        options: ["(-3, 2)", "(3, -2)", "(3, 2)", "(2, 3)"],
        correctAnswer: 0,
        hint: "סימטריה ביחס לציר ה-x אומרת שהנקודה 'משתקפת' למעלה או למטה. המיקום האופקי (x) נשאר זהה, אך הגובה (y) מקבל סימן נגדי.",
        solution_steps: [
            { verbal_explanation: "סימטריה ביחס לציר ה-x משמעה קיפול הנייר מלמעלה למטה.", math_expression: "השתקפות אנכית" },
            { verbal_explanation: "במקרה זה, המיקום ימינה/שמאלה לא משתנה. ערך ה-x נשאר בדיוק כפי שהיה.", math_expression: "x נשאר (-3)" },
            { verbal_explanation: "הגובה מתהפך. מאחר שהנקודה הייתה מתחת לציר (מינוס 2), היא תקפוץ בדיוק אותו מרחק מעל הציר (פלוס 2).", math_expression: "y הופך ל- 2" },
            { verbal_explanation: "נרשום את שיעורי הנקודה החדשה.", math_expression: "(-3, 2)" }
        ],
        final_answer: "(-3, 2)"
    },

    // --- שאלה 12 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מערכת צירים ונקודות",
        question: "מזיזים את הנקודה A(5, 3) שתי יחידות ימינה ושלוש יחידות למטה. מה יהיו שיעורי הנקודה החדשה?",
        options: ["(7, 0)", "(3, 6)", "(7, 6)", "(3, 0)"],
        correctAnswer: 0,
        hint: "תזוזה ימינה משמעותה הוספה לערך ה-x. תזוזה למטה משמעותה חיסור מערך ה-y.",
        solution_steps: [
            { verbal_explanation: "התזוזה 'ימינה' פועלת על ציר ה-x. עלינו להוסיף 2 לערך ה-x הנוכחי.", math_expression: "x חדש = 5 + 2 = 7" },
            { verbal_explanation: "התזוזה 'למטה' פועלת על ציר ה-y. עלינו לחסר 3 מערך ה-y הנוכחי.", math_expression: "y חדש = 3 - 3 = 0" },
            { verbal_explanation: "נרכיב את הנקודה החדשה שנוצרה לאחר התזוזה (טרנסלציה).", math_expression: "(7, 0)" }
        ],
        final_answer: "(7, 0)"
    },

    // --- שאלה 13 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מערכת צירים ונקודות",
        question: "הנקודות (0, 0), (a, 0), ו- (0, a) מרכיבות משולש (a הוא מספר חיובי). מה סוג המשולש?",
        options: ["משולש ישר זווית ושווה שוקיים", "משולש שווה צלעות", "משולש קהה זווית", "משולש ישר זווית בלבד (שונה שוקיים)"],
        correctAnswer: 0,
        hint: "שרטטו את הנקודות בדמיון: אחת בראשית הצירים, השנייה ימינה על ציר x, והשלישית למעלה על ציר y. אורך שני הניצבים הוא a.",
        solution_steps: [
            { verbal_explanation: "נקודה אחת נמצאת בראשית הצירים (0,0).", math_expression: "נקודה ראשונה" },
            { verbal_explanation: "נקודה שנייה (a,0) נמצאת על ציר ה-x. המרחק מהראשית הוא בדיוק a יחידות.", math_expression: "ניצב אופקי = a" },
            { verbal_explanation: "נקודה שלישית (0,a) נמצאת על ציר ה-y. המרחק מהראשית הוא בדיוק a יחידות.", math_expression: "ניצב אנכי = a" },
            { verbal_explanation: "הצירים מאונכים זה לזה, לכן המשולש ישר זווית. שני הניצבים שווים לאורכו של a, לכן הוא גם שווה שוקיים.", math_expression: "ישר זווית ושווה שוקיים" }
        ],
        final_answer: "משולש ישר זווית ושווה שוקיים"
    },

    // --- שאלה 14 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מערכת צירים ונקודות",
        question: "האם הנקודות A(3, 4) ו- B(3, -9) יוצרות ישר המקביל לציר ה-x או לציר ה-y?",
        options: ["מקביל לציר ה-y (ישר אנכי)", "מקביל לציר ה-x (ישר אופקי)", "אינו מקביל לאף ציר", "מתלכד עם ציר ה-y"],
        correctAnswer: 0,
        hint: "בדקו אילו מהשיעורים (x או y) זהים בשתי הנקודות. אם ה-x קבוע, הקו עולה ויורד במקום אחד (אנכי).",
        solution_steps: [
            { verbal_explanation: "נבחן את שיעורי הנקודות הנתונות. שיעור ה-y משתנה (מ-4 למינוס 9).", math_expression: "y משתנה" },
            { verbal_explanation: "שיעור ה-x בשתי הנקודות הוא בדיוק אותו מספר (3).", math_expression: "x_A = x_B = 3" },
            { verbal_explanation: "כאשר ה-x קבוע, המשמעות היא שהנקודות נמצאות בדיוק אחת מעל השנייה במערכת הצירים.", math_expression: "קו שעולה ויורד ישר" },
            { verbal_explanation: "קו אנכי כזה בהכרח מקביל לציר ה-y (שגם הוא קו אנכי).", math_expression: "מקביל לציר y" }
        ],
        final_answer: "מקביל לציר ה-y (ישר אנכי)"
    },

    // --- שאלה 15 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מערכת צירים ונקודות",
        question: "מהם שיעורי 'ראשית הצירים'?",
        options: ["(0, 0)", "(1, 1)", "לא מוגדר", "(0, 1)"],
        correctAnswer: 0,
        hint: "ראשית הצירים היא נקודת האפס, המקום שבו שני הצירים מצטלבים ומתחילים.",
        solution_steps: [
            { verbal_explanation: "ראשית הצירים (Origin) היא נקודת החיתוך של ציר ה-x וציר ה-y.", math_expression: "מפגש הצירים" },
            { verbal_explanation: "בנקודה זו, המרחק משמאל וימין הוא אפס.", math_expression: "x = 0" },
            { verbal_explanation: "בנוסף, המרחק למעלה ולמטה הוא אפס.", math_expression: "y = 0" },
            { verbal_explanation: "לכן, שיעורי הנקודה הם תמיד אפס פסיק אפס.", math_expression: "(0, 0)" }
        ],
        final_answer: "(0, 0)"
    },

    // ==========================================
    // תת נושא 2: אמצע קטע
    // ==========================================

    // --- שאלה 16 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "אמצע קטע",
        question: "נתונות שתי נקודות קצה של קטע: A(2, 4) ו- B(8, 10). מצאו את שיעורי נקודת האמצע (M) של הקטע AB.",
        options: ["(5, 7)", "(10, 14)", "(3, 3)", "(6, 6)"],
        correctAnswer: 0,
        hint: "נוסחת אמצע קטע קובעת ששיעור ה-x של האמצע הוא הממוצע של ערכי ה-x בקצוות, ושיעור ה-y הוא הממוצע של ערכי ה-y בקצוות.",
        solution_steps: [
            { verbal_explanation: "נשתמש בנוסחת אמצע קטע לחלק האופקי: נחבר את ערכי ה-x של הקצוות ונחלק ב-2.", math_expression: "x_M = (2 + 8) / 2" },
            { verbal_explanation: "נחשב את ערך ה-x של האמצע.", math_expression: "x_M = 10 / 2 = 5" },
            { verbal_explanation: "נשתמש בנוסחת אמצע קטע לחלק האנכי: נחבר את ערכי ה-y של הקצוות ונחלק ב-2.", math_expression: "y_M = (4 + 10) / 2" },
            { verbal_explanation: "נחשב את ערך ה-y של האמצע.", math_expression: "y_M = 14 / 2 = 7" },
            { verbal_explanation: "נרכיב את הנקודה הסופית.", math_expression: "(5, 7)" }
        ],
        final_answer: "(5, 7)"
    },

    // --- שאלה 17 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "אמצע קטע",
        question: "מצאו את אמצע הקטע המחבר את הנקודות C(-4, -6) ו- D(2, -2).",
        options: ["(-1, -4)", "(-2, -4)", "(-1, -8)", "(3, 2)"],
        correctAnswer: 0,
        hint: "היזהרו בחישובים עם מספרים שליליים. חברו את מינוס 4 ופלוס 2, ואז חלקו ב-2. עשו אותו דבר לערכי ה-y.",
        solution_steps: [
            { verbal_explanation: "נחשב את ממוצע ערכי ה-x.", math_expression: "x_M = (-4 + 2) / 2" },
            { verbal_explanation: "מינוס 4 פלוס 2 נותן מינוס 2. נחלק ב-2.", math_expression: "x_M = -2 / 2 = -1" },
            { verbal_explanation: "נחשב את ממוצע ערכי ה-y.", math_expression: "y_M = (-6 + -2) / 2" },
            { verbal_explanation: "מינוס 6 פחות 2 נותן מינוס 8. נחלק ב-2.", math_expression: "y_M = -8 / 2 = -4" },
            { verbal_explanation: "נרשום את התוצאה כנקודה.", math_expression: "(-1, -4)" }
        ],
        final_answer: "(-1, -4)"
    },

    // --- שאלה 18 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "אמצע קטע",
        question: "מצאו את אמצע הקטע שקצותיו הם (1, 5) ו- (4, 10). (התשובה תכיל שברים עשרוניים).",
        options: ["(2.5, 7.5)", "(3, 8)", "(2.5, 7)", "(5, 15)"],
        correctAnswer: 0,
        hint: "בצעו את הממוצע כרגיל: 1 ועוד 4 לחלק ל-2. 5 ועוד 10 לחלק ל-2.",
        solution_steps: [
            { verbal_explanation: "נחשב את ערך ה-x של נקודת האמצע.", math_expression: "x_M = (1 + 4) / 2 = 5 / 2 = 2.5" },
            { verbal_explanation: "נחשב את ערך ה-y של נקודת האמצע.", math_expression: "y_M = (5 + 10) / 2 = 15 / 2 = 7.5" },
            { verbal_explanation: "נרשום את זוג השיעורים.", math_expression: "(2.5, 7.5)" }
        ],
        final_answer: "(2.5, 7.5)"
    },

    // --- שאלה 19 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "אמצע קטע",
        question: "נקודה M(4, 0) היא נקודת האמצע של קטע שקצהו האחד הוא A(1, 0). מהם שיעורי נקודת הקצה השנייה B?",
        options: ["(7, 0)", "(8, 0)", "(3, 0)", "(5, 0)"],
        correctAnswer: 0,
        hint: "מכיוון שהכל קורה על ציר ה-x (ה-y הוא 0), אפשר פשוט לבדוק מה המרחק מהקצה A לאמצע M, ולהוסיף את אותו מרחק מהאמצע ימינה כדי למצוא את קצה B.",
        solution_steps: [
            { verbal_explanation: "נשים לב שכל הנקודות נמצאות על ציר ה-x, לכן ערך ה-y של נקודה B חייב להיות גם הוא 0.", math_expression: "y_B = 0" },
            { verbal_explanation: "נבדוק את המרחק על ציר ה-x מנקודה A לאמצע M. מאחד עד ארבע יש 3 יחידות.", math_expression: "מרחק: 4 - 1 = 3" },
            { verbal_explanation: "מכיוון ש-M היא באמצע בדיוק, עלינו להתקדם עוד 3 יחידות מהאמצע כדי להגיע לקצה השני.", math_expression: "x_B = 4 + 3 = 7" },
            { verbal_explanation: "ניתן לפתור גם אלגברית: 4 שווה ל- (1 ועוד איקס) חלקי 2.", math_expression: "4 = (1 + x) / 2  =>  8 = 1 + x  =>  x = 7" },
            { verbal_explanation: "הנקודה היא (7, 0).", math_expression: "(7, 0)" }
        ],
        final_answer: "(7, 0)"
    },

    // --- שאלה 20 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "אמצע קטע",
        question: "נתונה נקודת קצה של קטע A(2, 5) ונקודת האמצע שלו M(6, 9). מצאו את שיעורי נקודת הקצה השנייה B.",
        options: ["(10, 13)", "(12, 18)", "(4, 4)", "(8, 14)"],
        correctAnswer: 0,
        hint: "היעזרו בנוסחת אמצע קטע כמשוואה. האמצע (6) שווה לחיבור ה-x של A וה-x של B, חלקי 2. כך גם לגבי ציר ה-y.",
        solution_steps: [
            { verbal_explanation: "נבנה משוואה למציאת ערך ה-x של הנקודה החסרה B. שיעור האמצע שווה לסכום הקצוות חלקי 2.", math_expression: "6 = (2 + x_B) / 2" },
            { verbal_explanation: "נכפיל את שני האגפים ב-2 כדי לבטל את המכנה.", math_expression: "12 = 2 + x_B" },
            { verbal_explanation: "נמצא את ערך ה-x.", math_expression: "x_B = 10" },
            { verbal_explanation: "נחזור על התהליך עבור ציר ה-y.", math_expression: "9 = (5 + y_B) / 2" },
            { verbal_explanation: "נכפיל ב-2 ונחסר 5.", math_expression: "18 = 5 + y_B  =>  y_B = 13" },
            { verbal_explanation: "נרשום את התוצאה כנקודה.", math_expression: "(10, 13)" }
        ],
        final_answer: "(10, 13)"
    },

    // --- שאלה 21 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "אמצע קטע",
        question: `הקטע AB הוא קוטר של מעגל. הנקודות הן A(-2, 0) ו- B(6, 0). מהם שיעורי מרכז המעגל?<br><br>
        <svg viewBox="0 0 200 100" style="width:100%; max-width:200px; display:block; margin:0 auto;">
            <line x1="20" y1="50" x2="180" y2="50" stroke="#cbd5e1" stroke-width="2" />
            <circle cx="100" cy="50" r="40" fill="none" stroke="#3b82f6" stroke-width="2" />
            <line x1="60" y1="50" x2="140" y2="50" stroke="#ef4444" stroke-width="2" />
            <circle cx="60" cy="50" r="4" fill="#0f172a" />
            <circle cx="140" cy="50" r="4" fill="#0f172a" />
            <circle cx="100" cy="50" r="4" fill="#c5a059" />
            <text x="40" y="40" font-size="10">A(-2,0)</text>
            <text x="140" y="40" font-size="10">B(6,0)</text>
            <text x="95" y="40" font-size="10">מרכז</text>
        </svg>`,
        options: ["(2, 0)", "(4, 0)", "(0, 0)", "(-4, 0)"],
        correctAnswer: 0,
        hint: "מרכז המעגל הוא בדיוק נקודת האמצע של הקוטר. השתמשו בנוסחת אמצע קטע על הנקודות A ו-B.",
        solution_steps: [
            { verbal_explanation: "מרכז מעגל תמיד חוצה את הקוטר לשני רדיוסים שווים, לכן הוא נקודת האמצע של הקטע.", math_expression: "M = מרכז המעגל" },
            { verbal_explanation: "נחשב את ערך ה-x של מרכז המעגל באמצעות ממוצע.", math_expression: "x_M = (-2 + 6) / 2 = 4 / 2 = 2" },
            { verbal_explanation: "ערכי ה-y של הקצוות הם 0, לכן הממוצע נשאר 0.", math_expression: "y_M = (0 + 0) / 2 = 0" },
            { verbal_explanation: "שיעורי המרכז הם (2, 0).", math_expression: "(2, 0)" }
        ],
        final_answer: "(2, 0)"
    },

    // --- שאלה 22 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "אמצע קטע",
        question: "נקודת המרכז של מעגל היא M(0, 0). אחת מנקודות הקצה של קוטר במעגל היא A(3, 4). מהי נקודת הקצה השנייה B של אותו קוטר?",
        options: ["(-3, -4)", "(3, -4)", "(-3, 4)", "(6, 8)"],
        correctAnswer: 0,
        hint: "מאחר שהמרכז הוא בדיוק בראשית הצירים (0,0), הנקודה בקצה השני של הקוטר תהיה בדיוק סימטרית לנקודה A, כלומר עם סימנים הפוכים.",
        solution_steps: [
            { verbal_explanation: "נבנה משוואה למציאת x של נקודת הקצה, כשהאמצע הוא 0.", math_expression: "0 = (3 + x_B) / 2" },
            { verbal_explanation: "נכפיל ב-2 ונקבל אפס.", math_expression: "0 = 3 + x_B  =>  x_B = -3" },
            { verbal_explanation: "נעשה את אותו הדבר עבור ציר ה-y.", math_expression: "0 = (4 + y_B) / 2" },
            { verbal_explanation: "נפתור עבור y.", math_expression: "0 = 4 + y_B  =>  y_B = -4" },
            { verbal_explanation: "נרשום את הנקודה הסופית.", math_expression: "(-3, -4)" }
        ],
        final_answer: "(-3, -4)"
    },

    // --- שאלה 23 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "אמצע קטע",
        question: `במקבילית ABCD, קודקוד A הוא (1, 2) וקודקוד C הנגדי לו הוא (7, 8). <br>האלכסונים במקבילית חוצים זה את זה. מהם שיעורי נקודת מפגש האלכסונים?<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:200px; display:block; margin:0 auto;">
            <polygon points="40,110 140,110 180,30 80,30" fill="none" stroke="#0f172a" stroke-width="2" />
            <line x1="40" y1="110" x2="180" y2="30" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4,4" />
            <line x1="140" y1="110" x2="80" y2="30" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4,4" />
            <circle cx="110" cy="70" r="4" fill="#ef4444" />
            <text x="15" y="125" font-size="10">A(1,2)</text>
            <text x="185" y="25" font-size="10">C(7,8)</text>
            <text x="110" y="90" font-size="10" font-weight="bold">מפגש</text>
        </svg>`,
        options: ["(4, 5)", "(3, 4)", "(8, 10)", "(4, 6)"],
        correctAnswer: 0,
        hint: "במקבילית, האלכסונים תמיד חוצים זה את זה בדיוק באמצע. כלומר, מפגש האלכסונים הוא נקודת האמצע של האלכסון AC.",
        solution_steps: [
            { verbal_explanation: "אנו צריכים למצוא את אמצע הקטע המחבר את הנקודות A ו-C.", math_expression: "M = אמצע AC" },
            { verbal_explanation: "נחשב את ערך ה-x של המפגש.", math_expression: "x_M = (1 + 7) / 2 = 8 / 2 = 4" },
            { verbal_explanation: "נחשב את ערך ה-y של המפגש.", math_expression: "y_M = (2 + 8) / 2 = 10 / 2 = 5" },
            { verbal_explanation: "נרשום את התוצאה כנקודה.", math_expression: "(4, 5)" }
        ],
        final_answer: "(4, 5)"
    },

    // --- שאלה 24 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "אמצע קטע",
        question: "במעוין, נקודת מפגש האלכסונים היא M(5, 5). ידוע שקודקוד אחד הוא (2, 1). מהו הקודקוד הנגדי לו על אותו אלכסון?",
        options: ["(8, 9)", "(3, 4)", "(10, 10)", "(7, 6)"],
        correctAnswer: 0,
        hint: "זהו תרגיל של מציאת קצה קטע. האמצע הוא (5,5) והקצה הוא (2,1). הציבו בנוסחה: 5 שווה (2 ועוד איקס) חלקי 2.",
        solution_steps: [
            { verbal_explanation: "נבנה משוואה עבור ציר ה-x, כאשר אנו יודעים את האמצע ואחד הקצוות.", math_expression: "5 = (2 + x_2) / 2" },
            { verbal_explanation: "נכפיל ב-2 ונחסר 2 למציאת איקס הקצה.", math_expression: "10 = 2 + x_2   =>   x_2 = 8" },
            { verbal_explanation: "נבנה משוואה עבור ציר ה-y.", math_expression: "5 = (1 + y_2) / 2" },
            { verbal_explanation: "נכפיל ב-2 ונחסר 1 למציאת וואי הקצה.", math_expression: "10 = 1 + y_2   =>   y_2 = 9" },
            { verbal_explanation: "הנקודה הנגדית היא (8, 9).", math_expression: "(8, 9)" }
        ],
        final_answer: "(8, 9)"
    },

    // --- שאלה 25 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "אמצע קטע",
        question: "במשולש קודקודי הבסיס הם B(0, 2) ו- C(6, 2). מורידים תיכון מהקודקוד העליון אל צלע הבסיס BC. באיזו נקודה על צלע BC יפגע התיכון?",
        options: ["(3, 2)", "(3, 0)", "(6, 4)", "(2, 3)"],
        correctAnswer: 0,
        hint: "תיכון במשולש תמיד חוצה את הצלע אליה הוא מגיע לשני חצאים שווים. לכן, נקודת הפגיעה היא בדיוק נקודת האמצע של הקטע BC.",
        solution_steps: [
            { verbal_explanation: "מטרתנו למצוא את אמצע הקטע המחבר את B ואת C.", math_expression: "M = אמצע BC" },
            { verbal_explanation: "שתי הנקודות נמצאות על אותו קו אופקי (y=2), ולכן נקודת האמצע חייבת להיות על אותו הקו.", math_expression: "y_M = (2 + 2) / 2 = 2" },
            { verbal_explanation: "נחשב את האמצע עבור ציר ה-x.", math_expression: "x_M = (0 + 6) / 2 = 3" },
            { verbal_explanation: "הנקודה בה התיכון פוגע בבסיס היא (3, 2).", math_expression: "(3, 2)" }
        ],
        final_answer: "(3, 2)"
    },

    // --- שאלה 26 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "אמצע קטע",
        question: "מצאו את אמצע הקטע המונח כולו על ציר ה-y, כאשר קצותיו הם (0, 8) ו- (0, -4).",
        options: ["(0, 2)", "(0, 4)", "(0, 6)", "(0, 0)"],
        correctAnswer: 0,
        hint: "ה-x נשאר אפס, אז התרכזו רק בחישוב הממוצע של ערכי ה-y: שמונה ומינוס 4.",
        solution_steps: [
            { verbal_explanation: "מכיוון שהקטע מונח על ציר ה-y, ערך ה-x לא משתנה ונשאר 0.", math_expression: "x_M = 0" },
            { verbal_explanation: "נחשב את הממוצע של ערכי ה-y.", math_expression: "y_M = (8 + -4) / 2" },
            { verbal_explanation: "שמונה פחות 4 זה 4. לחלק ב-2 שווה ל-2.", math_expression: "y_M = 4 / 2 = 2" },
            { verbal_explanation: "הנקודה היא (0, 2).", math_expression: "(0, 2)" }
        ],
        final_answer: "(0, 2)"
    },

    // --- שאלה 27 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "אמצע קטע",
        question: "נתון שקצות קטע הם נקודות הסימטריות אחת לשנייה ביחס לראשית הצירים: (5, 5) ו- (-5, -5). היכן תהיה נקודת האמצע של הקטע?",
        options: ["בראשית הצירים (0,0)", "ברביע הראשון", "על ציר ה-x", "לא ניתן לדעת"],
        correctAnswer: 0,
        hint: "כאשר מחברים מספר למספר הנגדי שלו, התוצאה היא תמיד אפס.",
        solution_steps: [
            { verbal_explanation: "נחשב את ערך ה-x של האמצע.", math_expression: "x_M = (5 + -5) / 2" },
            { verbal_explanation: "5 פחות 5 שווה 0.", math_expression: "x_M = 0 / 2 = 0" },
            { verbal_explanation: "נחשב את ערך ה-y של האמצע באותה דרך.", math_expression: "y_M = (5 + -5) / 2 = 0" },
            { verbal_explanation: "נקודת האמצע יושבת בדיוק במרכז המערכת - בראשית הצירים.", math_expression: "(0, 0)" }
        ],
        final_answer: "בראשית הצירים (0,0)"
    },

    // --- שאלה 28 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "אמצע קטע",
        question: "נקודת האמצע של קטע היא M(5, 5). ידוע שהקצה הראשון הוא (a, 4) והקצה השני הוא (6, b). מהם הערכים של הנעלמים a ו- b?",
        options: ["a = 4, b = 6", "a = 6, b = 4", "a = 5, b = 5", "a = 10, b = 10"],
        correctAnswer: 0,
        hint: "בנו שתי משוואות נפרדות. משוואה אחת עבור ה-x (האמצע 5 שווה לחיבור a ו-6 חלקי 2), ומשוואה שנייה עבור ה-y.",
        solution_steps: [
            { verbal_explanation: "נרכיב משוואה עבור ציר ה-x כדי למצוא את a.", math_expression: "5 = (a + 6) / 2" },
            { verbal_explanation: "נכפיל ב-2 ונקבל 10 שווה a פלוס 6. לכן a שווה ל-4.", math_expression: "10 = a + 6   =>   a = 4" },
            { verbal_explanation: "נרכיב משוואה עבור ציר ה-y כדי למצוא את b.", math_expression: "5 = (4 + b) / 2" },
            { verbal_explanation: "נכפיל ב-2 ונקבל 10 שווה 4 פלוס b. לכן b שווה ל-6.", math_expression: "10 = 4 + b   =>   b = 6" },
            { verbal_explanation: "מצאנו את שני הערכים המבוקשים.", math_expression: "a = 4, b = 6" }
        ],
        final_answer: "a = 4, b = 6"
    },

    // --- שאלה 29 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "אמצע קטע",
        question: "קטע מקביל לציר ה-x. שיעורי נקודות הקצה שלו הם (10, 3) ו- (20, 3). מהי נקודת האמצע של הקטע?",
        options: ["(15, 3)", "(30, 3)", "(15, 0)", "(15, 6)"],
        correctAnswer: 0,
        hint: "מכיוון שהקטע מקביל לציר ה-x, הגובה (y) שלו לא משתנה ונשאר 3 לכל אורכו. חשבו רק את האמצע של איקס.",
        solution_steps: [
            { verbal_explanation: "ה-y בשני הקצוות הוא 3, לכן גם לאמצע יהיה y=3.", math_expression: "y_M = (3 + 3) / 2 = 3" },
            { verbal_explanation: "נחשב את האמצע עבור ציר ה-x.", math_expression: "x_M = (10 + 20) / 2" },
            { verbal_explanation: "שלושים חלקי 2 נותן 15.", math_expression: "x_M = 30 / 2 = 15" },
            { verbal_explanation: "נרשום את התשובה הסופית.", math_expression: "(15, 3)" }
        ],
        final_answer: "(15, 3)"
    },

    // --- שאלה 30 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "אמצע קטע",
        question: `על פי השרטוט, מהם שיעורי הנקודה A, אם M היא נקודת האמצע ו-B היא נקודת הקצה?<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:200px; display:block; margin:0 auto;">
            <line x1="40" y1="120" x2="160" y2="40" stroke="#0f172a" stroke-width="2" />
            <circle cx="40" cy="120" r="4" fill="#dc2626" />
            <circle cx="100" cy="80" r="4" fill="#f59e0b" />
            <circle cx="160" cy="40" r="4" fill="#3b82f6" />
            <text x="15" y="135" font-size="12" font-weight="bold" fill="#dc2626">A(?)</text>
            <text x="80" y="70" font-size="10">M(5,4)</text>
            <text x="165" y="35" font-size="10">B(9,8)</text>
        </svg>`,
        options: ["(1, 0)", "(0, 0)", "(2, 1)", "(1, 2)"],
        correctAnswer: 0,
        hint: "היעזרו בנוסחה למציאת קצה חסר, או בשיטת 'קפיצות': כדי להגיע מ-B ל-M, ירדנו 4 ב-x ו-4 ב-y. בצעו את אותה קפיצה מ-M ל-A.",
        solution_steps: [
            { verbal_explanation: "נשתמש במשוואת אמצע הקטע עבור ציר ה-x.", math_expression: "5 = (x_A + 9) / 2" },
            { verbal_explanation: "נפתור עבור ה-x של הנקודה A.", math_expression: "10 = x_A + 9   =>   x_A = 1" },
            { verbal_explanation: "נשתמש במשוואת אמצע הקטע עבור ציר ה-y.", math_expression: "4 = (y_A + 8) / 2" },
            { verbal_explanation: "נפתור עבור ה-y של הנקודה A.", math_expression: "8 = y_A + 8   =>   y_A = 0" },
            { verbal_explanation: "שיעורי הנקודה שחישבנו הם (1, 0).", math_expression: "(1, 0)" }
        ],
        final_answer: "(1, 0)"
    },// ==========================================
    // תת נושא 3: מרחק בין שתי נקודות
    // ==========================================

    // --- שאלה 31 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מרחק בין שתי נקודות",
        question: `חשבו את המרחק בין שתי הנקודות הבאות: A(3, 4) ו- B(6, 8).<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:200px; display:block; margin:0 auto;">
            <line x1="20" y1="130" x2="180" y2="130" stroke="#cbd5e1" stroke-width="2" />
            <line x1="40" y1="140" x2="40" y2="10" stroke="#cbd5e1" stroke-width="2" />
            <line x1="60" y1="100" x2="120" y2="40" stroke="#dc2626" stroke-width="3" />
            <circle cx="60" cy="100" r="4" fill="#0f172a" />
            <circle cx="120" cy="40" r="4" fill="#0f172a" />
            <text x="25" y="110" font-size="10">A(3,4)</text>
            <text x="125" y="35" font-size="10">B(6,8)</text>
            <line x1="60" y1="100" x2="120" y2="100" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4,4" />
            <line x1="120" y1="100" x2="120" y2="40" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4,4" />
        </svg>`,
        options: ["5 יחידות", "7 יחידות", "25 יחידות", "10 יחידות"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת המרחק (המבוססת על משפט פיתגורס): המרחק שווה לשורש הריבועי של (הפרש האיקסים בריבוע ועוד הפרש הוואים בריבוע).",
        solution_steps: [
            { verbal_explanation: "נרשום את נוסחת המרחק בין שתי נקודות (d).", math_expression: "d = √((x2 - x1)² + (y2 - y1)²)" },
            { verbal_explanation: "נחשב את הפרש האיקסים: 6 פחות 3.", math_expression: "Δx = 6 - 3 = 3" },
            { verbal_explanation: "נחשב את הפרש הוואים: 8 פחות 4.", math_expression: "Δy = 8 - 4 = 4" },
            { verbal_explanation: "נעלה כל הפרש בריבוע ונחבר אותם.", math_expression: "d² = 3² + 4² = 9 + 16 = 25" },
            { verbal_explanation: "נוציא שורש ריבועי מ-25 למציאת המרחק הסופי.", math_expression: "d = √25 = 5" }
        ],
        final_answer: "5 יחידות"
    },

    // --- שאלה 32 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מרחק בין שתי נקודות",
        question: "מהו המרחק בין הנקודה C(-2, -1) לנקודה D(4, 7)?",
        options: ["10 יחידות", "14 יחידות", "100 יחידות", "8 יחידות"],
        correctAnswer: 0,
        hint: "היזהרו בעת חישוב ההפרשים עם המספרים השליליים. למשל: 4 פחות (מינוס 2) הופך ל- 4 ועוד 2.",
        solution_steps: [
            { verbal_explanation: "נחשב את הפרש האיקסים, ונזכור שמינוס ליד מינוס הופך לפלוס.", math_expression: "Δx = 4 - (-2) = 4 + 2 = 6" },
            { verbal_explanation: "נחשב את הפרש הוואים באותו האופן.", math_expression: "Δy = 7 - (-1) = 7 + 1 = 8" },
            { verbal_explanation: "נציב בנוסחת המרחק: שורש של סכום הריבועים.", math_expression: "d = √(6² + 8²)" },
            { verbal_explanation: "נחשב את הריבועים והסכום.", math_expression: "d = √(36 + 64) = √100" },
            { verbal_explanation: "השורש של 100 הוא 10.", math_expression: "d = 10" }
        ],
        final_answer: "10 יחידות"
    },

    // --- שאלה 33 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מרחק בין שתי נקודות",
        question: "חשבו את מרחקה של הנקודה (8, 15) מראשית הצירים (0, 0).",
        options: ["17 יחידות", "23 יחידות", "15 יחידות", "289 יחידות"],
        correctAnswer: 0,
        hint: "מכיוון שאחת הנקודות היא (0,0), החיסור הוא פשוט: המרחק הוא השורש של (האיקס בריבוע ועוד הוואי בריבוע).",
        solution_steps: [
            { verbal_explanation: "מרחק של נקודה מראשית הצירים חוסך לנו את פעולת החיסור, שכן חיסור אפס לא משנה את המספר.", math_expression: "d = √(x² + y²)" },
            { verbal_explanation: "נציב את שיעורי הנקודה הנתונה.", math_expression: "d = √(8² + 15²)" },
            { verbal_explanation: "נחשב את הריבועים: 8 בריבוע זה 64, ו-15 בריבוע זה 225.", math_expression: "d = √(64 + 225)" },
            { verbal_explanation: "נחבר את המספרים שמתחת לשורש.", math_expression: "d = √289" },
            { verbal_explanation: "נשתמש במחשבון כדי למצוא את השורש.", math_expression: "d = 17" }
        ],
        final_answer: "17 יחידות"
    },

    // --- שאלה 34 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מרחק בין שתי נקודות",
        question: "נתון מעגל שמרכזו בנקודה M(2, 3) והוא עובר בנקודה A(2, 10). מהו אורך רדיוס המעגל?",
        options: ["7 יחידות", "13 יחידות", "10 יחידות", "5 יחידות"],
        correctAnswer: 0,
        hint: "הרדיוס הוא המרחק ממרכז המעגל ועד לנקודה שעליו. שימו לב ששיעור ה-x בשתי הנקודות זהה, לכן זהו קו אנכי שקל מאוד למדוד.",
        solution_steps: [
            { verbal_explanation: "אורך הרדיוס שווה למרחק שבין מרכז המעגל M לנקודה A.", math_expression: "R = המרחק בין M ל-A" },
            { verbal_explanation: "נבחין שבשתי הנקודות ערך ה-x שווה ל-2. משמעות הדבר היא שהנקודה A נמצאת בדיוק מעל הנקודה M.", math_expression: "x_M = x_A = 2" },
            { verbal_explanation: "כאשר הקטע הוא אנכי (מקביל לציר y), המרחק הוא פשוט ההפרש בין ערכי ה-y.", math_expression: "R = 10 - 3" },
            { verbal_explanation: "נבצע את החיסור.", math_expression: "R = 7" }
        ],
        final_answer: "7 יחידות"
    },

    // --- שאלה 35 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מרחק בין שתי נקודות",
        question: `מהו היקף המשולש שקודקודיו הם בנקודות: (0,0) , (3,0) , (0,4)?<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:200px; display:block; margin:0 auto;">
            <line x1="20" y1="120" x2="180" y2="120" stroke="#cbd5e1" stroke-width="2" />
            <line x1="40" y1="140" x2="40" y2="10" stroke="#cbd5e1" stroke-width="2" />
            <polygon points="40,120 100,120 40,40" fill="#e0f2fe" stroke="#3b82f6" stroke-width="2" />
            <circle cx="40" cy="120" r="4" fill="#0f172a" />
            <circle cx="100" cy="120" r="4" fill="#0f172a" />
            <circle cx="40" cy="40" r="4" fill="#0f172a" />
            <text x="60" y="135" font-size="12">3 יח'</text>
            <text x="10" y="80" font-size="12">4 יח'</text>
        </svg>`,
        options: ["12 יחידות אורך", "10 יחידות אורך", "14 יחידות אורך", "7 יחידות אורך"],
        correctAnswer: 0,
        hint: "זהו משולש ישר זווית (הניצבים על הצירים). אורך הבסיס הוא 3, אורך הגובה הוא 4. חשבו את אורך היתר בעזרת משפט פיתגורס, וחברו את כל השלוש.",
        solution_steps: [
            { verbal_explanation: "היקף משולש הוא סכום שלושת צלעותיו.", math_expression: "היקף = צלע א' + צלע ב' + צלע ג'" },
            { verbal_explanation: "הניצב האופקי מונח על ציר x ואורכו מ-0 עד 3 הוא 3 יחידות.", math_expression: "ניצב א' = 3" },
            { verbal_explanation: "הניצב האנכי מונח על ציר y ואורכו מ-0 עד 4 הוא 4 יחידות.", math_expression: "ניצב ב' = 4" },
            { verbal_explanation: "נמצא את היתר בעזרת משפט פיתגורס.", math_expression: "יתר = √(3² + 4²) = √(9 + 16) = √25 = 5" },
            { verbal_explanation: "נחבר את כל הצלעות לקבלת ההיקף.", math_expression: "היקף = 3 + 4 + 5 = 12" }
        ],
        final_answer: "12 יחידות אורך"
    },

    // --- שאלה 36 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מרחק בין שתי נקודות",
        question: "האם המשולש שקודקודיו הם A(1, 1), B(4, 5), C(7, 1) הוא משולש שווה שוקיים? כיצד ניתן לדעת?",
        options: ["כן, משום שאורכן של שתי צלעות שווה ל-5", "לא, כל הצלעות באורך שונה", "כן, משום שאורכן של שתי צלעות שווה ל-6", "לא ניתן לחשב ללא שרטוט"],
        correctAnswer: 0,
        hint: "חשבו את המרחק בין A ל-B, ואת המרחק בין B ל-C בעזרת נוסחת המרחק. אם התוצאות זהות, המשולש שווה שוקיים.",
        solution_steps: [
            { verbal_explanation: "נחשב את אורך הצלע AB.", math_expression: "AB = √((4 - 1)² + (5 - 1)²)" },
            { verbal_explanation: "נפתור עבור AB.", math_expression: "AB = √(3² + 4²) = √(9 + 16) = √25 = 5" },
            { verbal_explanation: "כעת נחשב את אורך הצלע BC.", math_expression: "BC = √((7 - 4)² + (1 - 5)²)" },
            { verbal_explanation: "נפתור עבור BC.", math_expression: "BC = √(3² + (-4)²) = √(9 + 16) = √25 = 5" },
            { verbal_explanation: "מכיוון שאורך הצלע AB שווה לאורך הצלע BC, למשולש יש שתי שוקיים שוות ולכן הוא שווה שוקיים.", math_expression: "AB = BC = 5" }
        ],
        final_answer: "כן, משום שאורכן של שתי צלעות שווה ל-5"
    },

    // --- שאלה 37 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מרחק בין שתי נקודות",
        question: "המרחק בין ראשית הצירים (0, 0) לנקודה A ששיעוריה (x, 4) שווה ל-5. ידוע ש-x הוא מספר חיובי. מהו ערכו של x?",
        options: ["x = 3", "x = 5", "x = 4", "x = 9"],
        correctAnswer: 0,
        hint: "הציבו את הנתונים בנוסחת המרחק: השורש של (איקס בריבוע ועוד 4 בריבוע) שווה ל-5. כדי להיפטר מהשורש, העלו את שני האגפים בריבוע.",
        solution_steps: [
            { verbal_explanation: "נרשום את משוואת המרחק מראשית הצירים.", math_expression: "√(x² + y²) = d" },
            { verbal_explanation: "נציב את הנתונים הידועים: ה-y הוא 4, והמרחק (d) הוא 5.", math_expression: "√(x² + 4²) = 5" },
            { verbal_explanation: "נעלה את שני האגפים בריבוע כדי לבטל את השורש.", math_expression: "x² + 16 = 25" },
            { verbal_explanation: "נעביר את ה-16 אגף ונחסר.", math_expression: "x² = 25 - 16 = 9" },
            { verbal_explanation: "נוציא שורש ריבועי. מכיוון שנתון כי x חיובי, ניקח רק את התשובה החיובית.", math_expression: "x = 3" }
        ],
        final_answer: "x = 3"
    },

    // --- שאלה 38 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מרחק בין שתי נקודות",
        question: "חשבו את אורך האלכסון במלבן שקודקודיו הנגדיים ממוקמים בנקודות A(1, 2) ו- C(13, 7).",
        options: ["13 יחידות", "17 יחידות", "12 יחידות", "15 יחידות"],
        correctAnswer: 0,
        hint: "אורך האלכסון במלבן הוא בדיוק המרחק שבין שני קודקודיו הנגדיים. פשוט הפעילו את נוסחת המרחק בין A ל-C.",
        solution_steps: [
            { verbal_explanation: "נחשב את הפרש ערכי ה-x.", math_expression: "Δx = 13 - 1 = 12" },
            { verbal_explanation: "נחשב את הפרש ערכי ה-y.", math_expression: "Δy = 7 - 2 = 5" },
            { verbal_explanation: "נציב את ההפרשים שמצאנו בנוסחת המרחק.", math_expression: "d = √(12² + 5²)" },
            { verbal_explanation: "נחשב את הריבועים ונחבר.", math_expression: "d = √(144 + 25) = √169" },
            { verbal_explanation: "נוציא שורש מ-169 לקבלת אורך האלכסון.", math_expression: "d = 13" }
        ],
        final_answer: "13 יחידות"
    },

    // --- שאלה 39 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מרחק בין שתי נקודות",
        question: "מצאו את אורך קוטר המעגל שקצותיו מונחים בנקודות P(-3, 0) ו- Q(5, 6).",
        options: ["10 יחידות", "14 יחידות", "8 יחידות", "100 יחידות"],
        correctAnswer: 0,
        hint: "הקוטר הוא הקטע המחבר את שתי הנקודות. חשבו את המרחק ביניהן בעזרת הנוסחה. היזהרו כשאתם מחסרים את מינוס 3.",
        solution_steps: [
            { verbal_explanation: "נחשב את ההפרש האופקי (שיעורי איקס).", math_expression: "Δx = 5 - (-3) = 5 + 3 = 8" },
            { verbal_explanation: "נחשב את ההפרש האנכי (שיעורי וואי).", math_expression: "Δy = 6 - 0 = 6" },
            { verbal_explanation: "נציב בנוסחת המרחק.", math_expression: "d = √(8² + 6²)" },
            { verbal_explanation: "נחשב את הריבועים והסכום.", math_expression: "d = √(64 + 36) = √100" },
            { verbal_explanation: "שורש של 100 נותן לנו את אורך הקוטר בשלמותו.", math_expression: "d = 10" }
        ],
        final_answer: "10 יחידות"
    },

    // --- שאלה 40 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מרחק בין שתי נקודות",
        question: "נתון ריבוע ששניים מקודקודיו הסמוכים ממוקמים בנקודות (0, 0) ו- (3, 4). מהו שטחו של הריבוע?",
        options: ["25 יחידות ריבועיות", "5 יחידות ריבועיות", "20 יחידות ריבועיות", "10 יחידות ריבועיות"],
        correctAnswer: 0,
        hint: "המרחק בין שני קודקודים סמוכים הוא למעשה אורך הצלע של הריבוע. מצאו את אורך הצלע בעזרת נוסחת המרחק, ולאחר מכן העלו אותה בריבוע למציאת השטח.",
        solution_steps: [
            { verbal_explanation: "נמצא את אורך צלע הריבוע (d) על ידי חישוב המרחק בין שתי הנקודות.", math_expression: "צלע = √(3² + 4²)" },
            { verbal_explanation: "נחשב את השורש.", math_expression: "צלע = √(9 + 16) = √25 = 5" },
            { verbal_explanation: "כעת אנו יודעים שאורך צלע הריבוע הוא 5 יחידות. שטח ריבוע מחושב על ידי הכפלת צלע בעצמה.", math_expression: "שטח = צלע × צלע = 5²" },
            { verbal_explanation: "נחשב את התוצאה.", math_expression: "שטח = 25" }
        ],
        final_answer: "25 יחידות ריבועיות"
    },

    // --- שאלה 41 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מרחק בין שתי נקודות",
        question: "מהו המרחק בין הנקודות M(-5, 0) ו- N(8, 0)?",
        options: ["13 יחידות", "3 יחידות", "10 יחידות", "8 יחידות"],
        correctAnswer: 0,
        hint: "שימו לב ששתי הנקודות יושבות בדיוק על ציר ה-x. כדי למצוא את המרחק ביניהן, פשוט חסרו את ה-x הקטן מה-x הגדול.",
        solution_steps: [
            { verbal_explanation: "הנקודות בעלות ערך y זהה (אפס), כלומר הן נמצאות על אותו קו אופקי.", math_expression: "y_M = y_N = 0" },
            { verbal_explanation: "המרחק מחושב על ידי חיסור ערך ה-x השמאלי מערך ה-x הימני.", math_expression: "d = x_N - x_M" },
            { verbal_explanation: "נציב את הערכים ונחשב. (מינוס כפול מינוס שווה פלוס).", math_expression: "d = 8 - (-5) = 8 + 5" },
            { verbal_explanation: "נחבר לקבלת אורך הקטע.", math_expression: "13" }
        ],
        final_answer: "13 יחידות"
    },

    // --- שאלה 42 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מרחק בין שתי נקודות",
        question: "משולש מוגדר על ידי שלוש הנקודות: A(0, 0), B(6, 0), C(3, 4). איזה מן המשפטים הבאים מתאר את המשולש במדויק?",
        options: ["המשולש הוא שווה שוקיים", "המשולש הוא שווה צלעות", "המשולש הוא ישר זווית", "כל צלעותיו שונות באורכן"],
        correctAnswer: 0,
        hint: "חשבו את אורך כל אחת משלוש הצלעות בעזרת נוסחת המרחק. AB מונחת על ציר x. AC ו-BC דורשות את נוסחת השורש.",
        solution_steps: [
            { verbal_explanation: "נחשב את אורך צלע הבסיס AB. שתיהן על ציר x, המרחק הוא מ-0 עד 6.", math_expression: "AB = 6" },
            { verbal_explanation: "נחשב את אורך הצלע AC. המרחק מ-(0,0) ל-(3,4).", math_expression: "AC = √(3² + 4²) = √25 = 5" },
            { verbal_explanation: "נחשב את אורך הצלע BC. המרחק מ-(6,0) ל-(3,4). הפרש האיקסים הוא 3, הפרש הוואים הוא 4.", math_expression: "BC = √((3-6)² + (4-0)²) = √(9 + 16) = 5" },
            { verbal_explanation: "מצאנו ש-AC שווה ל-BC. כלומר, למשולש יש שתי שוקיים שוות.", math_expression: "משולש שווה שוקיים" }
        ],
        final_answer: "המשולש הוא שווה שוקיים"
    },

    // --- שאלה 43 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מרחק בין שתי נקודות",
        question: "נתון מעגל שקוטרו מונח על ציר ה-x, והוא נמתח מהנקודה (-4, 0) לנקודה (4, 0). מה אורך הרדיוס של מעגל זה?",
        options: ["4 יחידות", "8 יחידות", "2 יחידות", "16 יחידות"],
        correctAnswer: 0,
        hint: "תחילה, מצאו את אורך הקוטר המלא (המרחק בין שתי הנקודות). הרדיוס הוא בדיוק חצי מאורך הקוטר.",
        solution_steps: [
            { verbal_explanation: "נחשב את אורך הקוטר השלם (המרחק האופקי שבין הקצוות).", math_expression: "D = 4 - (-4) = 8" },
            { verbal_explanation: "הקוטר כולו הוא 8 יחידות אורך.", math_expression: "קוטר = 8" },
            { verbal_explanation: "רדיוס תמיד שווה למחצית הקוטר.", math_expression: "R = 8 / 2" },
            { verbal_explanation: "נחשב את המנה.", math_expression: "R = 4" }
        ],
        final_answer: "4 יחידות"
    },

    // --- שאלה 44 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מרחק בין שתי נקודות",
        question: "מהו היקף המלבן שקודקודיו הם: (0, 0), (6, 0), (6, 8), (0, 8)?",
        options: ["28 יחידות אורך", "48 יחידות אורך", "14 יחידות אורך", "24 יחידות אורך"],
        correctAnswer: 0,
        hint: "המלבן מונח בדיוק על הצירים. אורך הבסיס הוא המרחק מ-(0,0) ל-(6,0). הגובה הוא המרחק מ-(6,0) ל-(6,8). היקף הוא סכום ארבע הצלעות.",
        solution_steps: [
            { verbal_explanation: "נמצא את אורך צלע הבסיס. שתיהן על ציר x.", math_expression: "אורך = 6 - 0 = 6" },
            { verbal_explanation: "נמצא את אורך הגובה האנכי. ה-x קבוע על 6.", math_expression: "גובה = 8 - 0 = 8" },
            { verbal_explanation: "היקף של מלבן שווה לפעמיים האורך ועוד פעמיים הגובה.", math_expression: "היקף = 2 × (6 + 8)" },
            { verbal_explanation: "נחבר ונכפיל.", math_expression: "2 × 14 = 28" }
        ],
        final_answer: "28 יחידות אורך"
    },

    // --- שאלה 45 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "מרחק בין שתי נקודות",
        question: "איזו מהנקודות הבאות נמצאת במרחק של בדיוק 5 יחידות מראשית הצירים (0, 0)?",
        options: ["(3, 4)", "(5, 5)", "(2, 3)", "(4, 4)"],
        correctAnswer: 0,
        hint: "מרחק מראשית הצירים הוא השורש של (x² + y²). בידקו באיזו מהתשובות סכום הריבועים שווה ל-25.",
        solution_steps: [
            { verbal_explanation: "אנו מחפשים נקודה שעונה על המשוואה הבאה.", math_expression: "x² + y² = 25" },
            { verbal_explanation: "נבדוק את הנקודה הראשונה: (3, 4).", math_expression: "3² + 4² = 9 + 16" },
            { verbal_explanation: "סכום הריבועים הוא 25, ולכן השורש הוא 5. זוהי התשובה הנכונה.", math_expression: "√25 = 5" },
            { verbal_explanation: "אם נבדוק את (5, 5) למשל, נקבל 25+25=50, והשורש אינו 5.", math_expression: "הנקודה הנכונה היא (3, 4)" }
        ],
        final_answer: "(3, 4)"
    },

    // ==========================================
    // תת נושא 4: שיפוע ומשוואת ישר
    // ==========================================

    // --- שאלה 46 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "שיפוע ומשוואת ישר",
        question: "חשבו את שיפוע הישר העובר דרך הנקודות A(1, 2) ו- B(3, 6).",
        options: ["2", "4", "0.5", "1"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת השיפוע: הפרש ערכי ה-y לחלק להפרש ערכי ה-x.",
        solution_steps: [
            { verbal_explanation: "נרשום את נוסחת השיפוע (m).", math_expression: "m = (y2 - y1) / (x2 - x1)" },
            { verbal_explanation: "נציב את הנתונים במונה (הפרש ה-y) ובמכנה (הפרש ה-x).", math_expression: "m = (6 - 2) / (3 - 1)" },
            { verbal_explanation: "נחשב את המונה ואת המכנה בנפרד.", math_expression: "m = 4 / 2" },
            { verbal_explanation: "נבצע את החלוקה לקבלת השיפוע הסופי.", math_expression: "m = 2" }
        ],
        final_answer: "2"
    },

    // --- שאלה 47 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "שיפוע ומשוואת ישר",
        question: "מהו שיפוע הישר העובר דרך הנקודות (-2, 5) ו- (2, -3)?",
        options: ["-2", "2", "-0.5", "0.5"],
        correctAnswer: 0,
        hint: "הקפידו על סדר ההצבה: אם התחלתם עם ה-y של הנקודה השנייה במונה, התחילו עם ה-x של הנקודה השנייה גם במכנה.",
        solution_steps: [
            { verbal_explanation: "נשתמש בנוסחת השיפוע.", math_expression: "m = (y2 - y1) / (x2 - x1)" },
            { verbal_explanation: "נציב את הערכים. במונה: מינוס 3 פחות 5. במכנה: 2 פחות (מינוס 2).", math_expression: "m = (-3 - 5) / (2 - (-2))" },
            { verbal_explanation: "נחשב. במונה נקבל מינוס 8. במכנה המינוסים הופכים לפלוס, לכן נקבל 4.", math_expression: "m = -8 / 4" },
            { verbal_explanation: "נחלק ונקבל שיפוע שלילי.", math_expression: "m = -2" }
        ],
        final_answer: "-2"
    },

    // --- שאלה 48 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "שיפוע ומשוואת ישר",
        question: `מהי משוואת הישר שהשיפוע שלו הוא 3 והוא עובר בנקודה (1, 5)?<br><br>
        <svg viewBox="0 0 200 120" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <line x1="20" y1="100" x2="180" y2="100" stroke="#cbd5e1" stroke-width="2" />
            <line x1="60" y1="110" x2="60" y2="10" stroke="#cbd5e1" stroke-width="2" />
            <path d="M 40 80 L 100 20" stroke="#3b82f6" stroke-width="3" />
            <circle cx="70" cy="50" r="5" fill="#ef4444" />
            <text x="80" y="55" font-size="12" font-weight="bold">(1,5)</text>
            <text x="30" y="40" font-size="12" fill="#0f172a" font-weight="bold">m = 3</text>
        </svg>`,
        options: ["y = 3x + 2", "y = 3x + 5", "y = x + 3", "y = 3x - 2"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחה למציאת משוואת ישר: y - y1 = m(x - x1). הציבו m=3, x1=1, y1=5.",
        solution_steps: [
            { verbal_explanation: "נשתמש בנוסחה הכללית למציאת משוואת ישר על פי שיפוע ונקודה.", math_expression: "y - y1 = m(x - x1)" },
            { verbal_explanation: "נציב את הנתונים שלנו לתוך הנוסחה.", math_expression: "y - 5 = 3(x - 1)" },
            { verbal_explanation: "נפתח את הסוגריים באגף ימין.", math_expression: "y - 5 = 3x - 3" },
            { verbal_explanation: "נעביר את מינוס 5 לאגף ימין (כפלוס 5) כדי לבודד את y.", math_expression: "y = 3x - 3 + 5" },
            { verbal_explanation: "נכנס איברים למשוואה סופית.", math_expression: "y = 3x + 2" }
        ],
        final_answer: "y = 3x + 2"
    },

    // --- שאלה 49 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "שיפוע ומשוואת ישר",
        question: "מצאו את משוואת הישר העובר דרך שתי הנקודות: (0, 4) ו- (2, 8).",
        options: ["y = 2x + 4", "y = 4x + 2", "y = 2x - 4", "y = x + 4"],
        correctAnswer: 0,
        hint: "שלב א': מצאו את השיפוע (m). שלב ב': הנקודה (0,4) חושפת מיד את נקודת החיתוך עם ציר ה-y (הפרמטר b).",
        solution_steps: [
            { verbal_explanation: "תחילה, נחשב את השיפוע בעזרת שתי הנקודות.", math_expression: "m = (8 - 4) / (2 - 0) = 4 / 2 = 2" },
            { verbal_explanation: "כעת עלינו למצוא את המספר החופשי (b) במשוואה y = mx + b.", math_expression: "y = 2x + b" },
            { verbal_explanation: "הנקודה (0,4) היא בדיוק נקודת החיתוך עם ציר ה-y (כי x=0), ולכן b שווה ל-4.", math_expression: "b = 4" },
            { verbal_explanation: "נציב את השיפוע והחיתוך למשוואה המלאה.", math_expression: "y = 2x + 4" }
        ],
        final_answer: "y = 2x + 4"
    },

    // --- שאלה 50 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "שיפוע ומשוואת ישר",
        question: "נתון הישר שמשוואתו היא y = -4x + 7. מהו שיפועו של ישר זה?",
        options: ["-4", "7", "4", "-7"],
        correctAnswer: 0,
        hint: "במשוואת ישר מסודרת מהצורה y = mx + b, השיפוע הוא תמיד המספר (המקדם) שכופל את המשתנה x.",
        solution_steps: [
            { verbal_explanation: "המשוואה הנתונה מסודרת בצורה המפורשת של קו ישר.", math_expression: "y = mx + b" },
            { verbal_explanation: "במבנה זה, הפרמטר m הוא השיפוע, והפרמטר b הוא החיתוך עם ציר y.", math_expression: "m = שיפוע" },
            { verbal_explanation: "נביט במשוואה שלנו ונראה איזה מספר צמוד ל-x.", math_expression: "המקדם הוא -4" },
            { verbal_explanation: "לכן, השיפוע של הישר הוא מינוס 4 (הישר במגמת ירידה חדה).", math_expression: "m = -4" }
        ],
        final_answer: "-4"
    },

    // --- שאלה 51 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "שיפוע ומשוואת ישר",
        question: "נתון ישר שמשוואתו היא y = 5x - 2. מה יהיה שיפועו של ישר אחר המקביל אליו?",
        options: ["5", "-5", "2", "-0.2"],
        correctAnswer: 0,
        hint: "כלל ברזל בגיאומטריה אנליטית: לישרים מקבילים יש בדיוק את אותו השיפוע.",
        solution_steps: [
            { verbal_explanation: "נזהה את השיפוע של הישר הנתון. המקדם של איקס הוא 5.", math_expression: "m1 = 5" },
            { verbal_explanation: "הכלל אומר שאם שני ישרים מקבילים (לא ייפגשו לעולם), קצב העלייה או הירידה שלהם זהה.", math_expression: "m1 = m2" },
            { verbal_explanation: "מכאן נובע שהשיפוע של הישר החדש יהיה זהה לישן.", math_expression: "m2 = 5" }
        ],
        final_answer: "5"
    },

    // --- שאלה 52 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "שיפוע ומשוואת ישר",
        question: `מצאו את משוואת הישר שמקביל לישר y = 2x + 1 ועובר בנקודה (3, 10).<br><br>
        <svg viewBox="0 0 200 120" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <line x1="20" y1="100" x2="80" y2="20" stroke="#cbd5e1" stroke-width="2" />
            <line x1="60" y1="100" x2="120" y2="20" stroke="#3b82f6" stroke-width="3" />
            <text x="15" y="115" font-size="10" fill="#64748b">y=2x+1</text>
            <text x="110" y="15" font-size="12" fill="#0f172a" font-weight="bold">מקביל?</text>
            <circle cx="105" cy="40" r="4" fill="#dc2626" />
            <text x="115" y="45" font-size="10">(3,10)</text>
        </svg>`,
        options: ["y = 2x + 4", "y = 2x + 10", "y = 3x + 1", "y = 2x - 4"],
        correctAnswer: 0,
        hint: "הישרים מקבילים, לכן השיפוע של הישר החדש הוא גם 2. כעת השתמשו בנקודה (3,10) ובשיפוע 2 בתוך הנוסחה למציאת משוואת ישר.",
        solution_steps: [
            { verbal_explanation: "נמצא את השיפוע של הישר הנתון.", math_expression: "m = 2" },
            { verbal_explanation: "לישרים מקבילים יש אותו שיפוע. לכן השיפוע שלנו הוא גם 2.", math_expression: "השיפוע החדש = 2" },
            { verbal_explanation: "נציב את השיפוע והנקודה בנוסחה y - y1 = m(x - x1).", math_expression: "y - 10 = 2(x - 3)" },
            { verbal_explanation: "נפתח סוגריים ונעביר את מינוס 10 ימינה.", math_expression: "y = 2x - 6 + 10" },
            { verbal_explanation: "נכנס איברים לקבלת המשוואה הסופית.", math_expression: "y = 2x + 4" }
        ],
        final_answer: "y = 2x + 4"
    },

    // --- שאלה 53 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "שיפוע ומשוואת ישר",
        question: "האם הנקודה (2, 5) מונחת על הישר שמשוואתו היא y = 3x - 1?",
        options: ["כן, הנקודה נמצאת על הישר", "לא, הנקודה מעל הישר", "לא, הנקודה מתחת לישר", "אי אפשר לדעת ללא שרטוט מדויק"],
        correctAnswer: 0,
        hint: "כדי לבדוק אם נקודה נמצאת על ישר, הציבו את שיעור ה-x שלה (2) במשוואה ובידקו אם התוצאה שתקבלו שווה לשיעור ה-y שלה (5).",
        solution_steps: [
            { verbal_explanation: "נציב את ה-x של הנקודה הנתונה בתוך משוואת הישר.", math_expression: "נציב x = 2 במשוואה y = 3x - 1" },
            { verbal_explanation: "נחשב את ערך ה-y שמתקבל.", math_expression: "y = 3(2) - 1" },
            { verbal_explanation: "3 כפול 2 זה 6, פחות 1 זה 5.", math_expression: "y = 5" },
            { verbal_explanation: "התוצאה שקיבלנו זהה לחלוטין ל-y של הנקודה הנתונה (2,5). המשמעות היא שהנקודה מקיימת את המשוואה ומונחת עליו.", math_expression: "הנקודה על הישר" }
        ],
        final_answer: "כן, הנקודה נמצאת על הישר"
    },

    // --- שאלה 54 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "שיפוע ומשוואת ישר",
        question: "מהי נקודת החיתוך של הישר y = -2x + 8 עם ציר ה-x?",
        options: ["(4, 0)", "(0, 8)", "(-4, 0)", "(8, 0)"],
        correctAnswer: 0,
        hint: "נקודת חיתוך עם ציר ה-x (ציר אופקי) משמעותה שהגובה הוא אפס (y=0). הציבו 0 ופתרו את המשוואה.",
        solution_steps: [
            { verbal_explanation: "כדי למצוא חיתוך עם ציר x, נציב y שווה לאפס.", math_expression: "0 = -2x + 8" },
            { verbal_explanation: "נעביר את מינוס 2x לאגף השמאלי (בסימן פלוס).", math_expression: "2x = 8" },
            { verbal_explanation: "נחלק ב-2 למציאת x.", math_expression: "x = 4" },
            { verbal_explanation: "נרשום את התשובה כזוג סדור.", math_expression: "(4, 0)" }
        ],
        final_answer: "(4, 0)"
    },

    // --- שאלה 55 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "שיפוע ומשוואת ישר",
        question: "נתון ישר העובר בנקודות (4, 5) ו- (-2, 5). מהו שיפוע הישר?",
        options: ["0 (ישר אופקי)", "בלתי מוגדר (ישר אנכי)", "5", "1"],
        correctAnswer: 0,
        hint: "שימו לב שערך ה-y זהה בשתי הנקודות. משמעות הדבר היא שהקו לא עולה ולא יורד, אלא נשאר קבוע באותו גובה.",
        solution_steps: [
            { verbal_explanation: "ננסה להציב את הנקודות בנוסחת השיפוע.", math_expression: "m = (5 - 5) / (-2 - 4)" },
            { verbal_explanation: "המונה מתאפס (0), והמכנה שווה למינוס 6.", math_expression: "m = 0 / -6" },
            { verbal_explanation: "אפס חלקי כל מספר שווה לאפס.", math_expression: "m = 0" },
            { verbal_explanation: "שיפוע 0 אומר שהישר אופקי לחלוטין (מקביל לציר ה-x).", math_expression: "ישר אופקי" }
        ],
        final_answer: "0 (ישר אופקי)"
    },

    // --- שאלה 56 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "שיפוע ומשוואת ישר",
        question: "נתון ישר שמשוואתו y = 4x - 5. מצאו את שיעור ה-x של הנקודה הנמצאת על ישר זה, ששיעור ה-y שלה הוא 7.",
        options: ["x = 3", "x = 23", "x = 2", "x = 0.5"],
        correctAnswer: 0,
        hint: "במקום להציב איקס כדי למצוא וואי (כמו בדרך כלל), הפעם הציבו במקום ה-y את המספר 7, ופתרו משוואה כדי למצוא את ה-x.",
        solution_steps: [
            { verbal_explanation: "נציב את הערך הנתון של ה-y (7) בתוך המשוואה.", math_expression: "7 = 4x - 5" },
            { verbal_explanation: "נעביר את המינוס 5 לאגף השמאלי (כפלוס 5).", math_expression: "7 + 5 = 4x" },
            { verbal_explanation: "נחבר את המספרים.", math_expression: "12 = 4x" },
            { verbal_explanation: "נחלק ב-4 למציאת x.", math_expression: "x = 3" }
        ],
        final_answer: "x = 3"
    },

    // --- שאלה 57 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "שיפוע ומשוואת ישר",
        question: "מהי משוואתו של ציר ה-x כולו (כקו ישר במישור)?",
        options: ["y = 0", "x = 0", "y = x", "אין לו משוואה"],
        correctAnswer: 0,
        hint: "חישבו מה מאפיין את כל הנקודות שיושבות על ציר ה-x: הגובה של כולן הוא בדיוק אפס.",
        solution_steps: [
            { verbal_explanation: "ציר ה-x הוא קו אופקי שבו לא עלינו למעלה ולא ירדנו למטה.", math_expression: "גובה אפס" },
            { verbal_explanation: "לכן, כל נקודה על ציר ה-x מקיימת את התנאי ששיעור ה-y שלה הוא 0.", math_expression: "y_1 = 0, y_2 = 0 ..." },
            { verbal_explanation: "המשוואה שמתארת את האוסף של כל הנקודות הללו היא פשוט y שווה לאפס.", math_expression: "y = 0" }
        ],
        final_answer: "y = 0"
    },

    // --- שאלה 58 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "שיפוע ומשוואת ישר",
        question: "מהי נקודת החיתוך של שני הישרים הבאים? y = 2x וכן y = x + 3.",
        options: ["(3, 6)", "(6, 3)", "(1, 2)", "(3, 9)"],
        correctAnswer: 0,
        hint: "בנקודת החיתוך שני ה-y שווים. לכן השוו בין שני הביטויים: 2x = x + 3.",
        solution_steps: [
            { verbal_explanation: "נשווה את שני הביטויים המייצגים את הגובה (y) כדי למצוא היכן הם נפגשים.", math_expression: "2x = x + 3" },
            { verbal_explanation: "נעביר את x ימינה בסימן מינוס.", math_expression: "2x - x = 3" },
            { verbal_explanation: "החיסור נותן לנו את ערך ה-x של נקודת המפגש.", math_expression: "x = 3" },
            { verbal_explanation: "נציב את ה-x באחת המשוואות (למשל הראשונה, שהיא קלה יותר) למציאת ה-y.", math_expression: "y = 2 × 3 = 6" },
            { verbal_explanation: "נקודת המפגש היא (3, 6).", math_expression: "(3, 6)" }
        ],
        final_answer: "(3, 6)"
    },

    // --- שאלה 59 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "שיפוע ומשוואת ישר",
        question: "ידוע ששיפועו של ישר הוא 0.5 והוא עובר בדיוק בראשית הצירים (0,0). מהי משוואתו של ישר זה?",
        options: ["y = 0.5x", "y = 0.5x + 1", "y = x + 0.5", "y = 2x"],
        correctAnswer: 0,
        hint: "ישר שעובר בראשית הצירים חותך את ציר ה-y בנקודה 0, לכן ה-b שלו שווה ל-0. נותר רק להציב את ה-m.",
        solution_steps: [
            { verbal_explanation: "נציב את הנתונים בנוסחה הכללית: y = mx + b.", math_expression: "m = 0.5" },
            { verbal_explanation: "מכיוון שהישר עובר ב-(0,0), החיתוך שלו עם ציר y הוא בדיוק באפס.", math_expression: "b = 0" },
            { verbal_explanation: "נרכיב את המשוואה. ה-b מתבטל ולכן לא רושמים אותו.", math_expression: "y = 0.5x + 0" },
            { verbal_explanation: "המשוואה הסופית.", math_expression: "y = 0.5x" }
        ],
        final_answer: "y = 0.5x"
    },

    // --- שאלה 60 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "שיפוע ומשוואת ישר",
        question: "ישר מסוים נמצא במגמת עלייה וחותך את ציר ה-y בנקודה (0, 4). איזו מבין המשוואות הבאות יכולה להיות המשוואה שלו?",
        options: ["y = 2x + 4", "y = -2x + 4", "y = 2x - 4", "y = 4x"],
        correctAnswer: 0,
        hint: "ננתח את הנתונים: 'עולה' אומר שהשיפוע (m) חייב להיות מספר חיובי. 'חותך את ציר ה-y ב-4' אומר שהאיבר החופשי (b) חייב להיות פלוס 4.",
        solution_steps: [
            { verbal_explanation: "נתון שהישר עולה, כלומר המקדם של x חייב להיות חיובי.", math_expression: "m > 0" },
            { verbal_explanation: "זה פוסל את התשובה עם השיפוע השלילי (-2x).", math_expression: "האופציות הנותרות חיוביות" },
            { verbal_explanation: "נתון שהחיתוך עם ציר ה-y הוא בנקודה (0,4), כלומר b=4.", math_expression: "b = 4" },
            { verbal_explanation: "המשוואה היחידה שמקיימת גם שיפוע חיובי וגם b=4 היא המשוואה הראשונה.", math_expression: "y = 2x + 4" }
        ],
        final_answer: "y = 2x + 4"
    },// ==========================================
    // תת נושא 5: ישרים מקבילים
    // ==========================================

    // --- שאלה 61 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "ישרים מקבילים",
        question: "איזה מהישרים הבאים מקביל לישר שמשוואתו היא y = 4x - 7 ?",
        options: ["y = 4x + 10", "y = -4x - 7", "y = 0.25x + 7", "y = -0.25x + 4"],
        correctAnswer: 0,
        hint: "ישרים מקבילים לעולם לא ייפגשו, משום שיש להם בדיוק את אותו קצב עלייה. לכן, חפשו ישר שיש לו בדיוק את אותו השיפוע (המקדם של איקס).",
        solution_steps: [
            { verbal_explanation: "נזהה את השיפוע (m) של הישר הנתון. השיפוע הוא המספר שכופל את איקס.", math_expression: "m = 4" },
            { verbal_explanation: "תנאי לישרים מקבילים הוא ששיפועיהם שווים זה לזה.", math_expression: "m1 = m2" },
            { verbal_explanation: "נבדוק את התשובות ונחפש משוואה שבה המקדם של איקס הוא גם 4.", math_expression: "בתשובה א' השיפוע הוא 4" },
            { verbal_explanation: "האיבר החופשי (המספר ללא איקס) משנה רק את הגובה של הישר, אך לא את השיפוע שלו.", math_expression: "y = 4x + 10" }
        ],
        final_answer: "y = 4x + 10"
    },

    // --- שאלה 62 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "ישרים מקבילים",
        question: "מצאו את משוואת הישר העובר דרך הנקודה (0, 5) ומקביל לישר y = -2x + 8.",
        options: ["y = -2x + 5", "y = 2x + 5", "y = -2x + 8", "y = 5x - 2"],
        correctAnswer: 0,
        hint: "היעזרו בשני נתונים: 1. השיפוע זהה לישר המקביל. 2. הנקודה הנתונה (0,5) חושפת מיד את נקודת החיתוך עם ציר ה-y (שהוא האיבר החופשי b).",
        solution_steps: [
            { verbal_explanation: "מכיוון שהישרים מקבילים, השיפוע של הישר החדש זהה לשיפוע של הישר הישן.", math_expression: "m = -2" },
            { verbal_explanation: "אנו יודעים שהישר חותך את ציר ה-y בנקודה שבה איקס שווה לאפס. הנקודה הנתונה היא (0, 5).", math_expression: "b = 5" },
            { verbal_explanation: "נרכיב את משוואת הישר מהצורה הכללית y = mx + b.", math_expression: "y = -2x + 5" }
        ],
        final_answer: "y = -2x + 5"
    },

    // --- שאלה 63 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "ישרים מקבילים",
        question: `לפניכם שרטוט של שני ישרים מקבילים.<br>
        משוואת הישר התחתון היא y = 3x - 2.<br>
        הישר העליון עובר בנקודה (2, 10). מהי משוואתו?<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <line x1="20" y1="120" x2="180" y2="120" stroke="#cbd5e1" stroke-width="2" />
            <line x1="100" y1="140" x2="100" y2="10" stroke="#cbd5e1" stroke-width="2" />
            <line x1="40" y1="130" x2="80" y2="10" stroke="#dc2626" stroke-width="2" />
            <line x1="80" y1="130" x2="120" y2="10" stroke="#3b82f6" stroke-width="2" />
            <circle cx="73" cy="30" r="4" fill="#0f172a" />
            <text x="30" y="30" font-size="10">(2,10)</text>
            <text x="125" y="50" font-size="10" fill="#3b82f6">y=3x-2</text>
        </svg>`,
        options: ["y = 3x + 4", "y = 3x + 10", "y = 3x - 10", "y = 2x + 6"],
        correctAnswer: 0,
        hint: "השיפוע הוא 3. השתמשו בנוסחה y - y1 = m(x - x1) והציבו את הנקודה (2, 10) והשיפוע 3.",
        solution_steps: [
            { verbal_explanation: "הישרים מקבילים, ולכן שיפוע הישר העליון שווה לשיפוע הישר התחתון.", math_expression: "m = 3" },
            { verbal_explanation: "נציב את השיפוע ואת הנקודה הנתונה (2, 10) בנוסחה למציאת ישר.", math_expression: "y - 10 = 3(x - 2)" },
            { verbal_explanation: "נפתח סוגריים באגף ימין.", math_expression: "y - 10 = 3x - 6" },
            { verbal_explanation: "נעביר את מינוס 10 ימינה (הופך לפלוס 10).", math_expression: "y = 3x - 6 + 10" },
            { verbal_explanation: "נכנס איברים לקבלת התשובה הסופית.", math_expression: "y = 3x + 4" }
        ],
        final_answer: "y = 3x + 4"
    },

    // --- שאלה 64 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "ישרים מקבילים",
        question: "ישר א' עובר דרך הנקודות (1, 4) ו- (3, 12). ישר ב' מקביל לישר א'. מהו שיפועו של ישר ב'?",
        options: ["4", "8", "-4", "0.25"],
        correctAnswer: 0,
        hint: "חשבו את השיפוע של ישר א' לפי שתי הנקודות הנתונות (הפרש הוואים חלקי הפרש האיקסים). השיפוע של ישר ב' יהיה זהה.",
        solution_steps: [
            { verbal_explanation: "נחשב את השיפוע של ישר א' באמצעות נוסחת השיפוע.", math_expression: "m = (12 - 4) / (3 - 1)" },
            { verbal_explanation: "נחשב את המונה והמכנה.", math_expression: "m = 8 / 2 = 4" },
            { verbal_explanation: "מכיוון שהישרים מקבילים, השיפוע שלהם זהה לחלוטין.", math_expression: "שיפוע ישר ב' = 4" }
        ],
        final_answer: "4"
    },

    // --- שאלה 65 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "ישרים מקבילים",
        question: "האם הישרים הבאים מקבילים זה לזה? <br> ישר ראשון: y = 5x + 2 <br> ישר שני: 2y = 10x - 8",
        options: ["כן, הם מקבילים כי שיפועיהם שווים", "לא, השיפועים שונים", "כן, כי שניהם חותכים את ציר ה-y בנקודה זוגית", "לא, הם מתלכדים לישר אחד"],
        correctAnswer: 0,
        hint: "סדרו את המשוואה השנייה כדי לבודד את y (חלקו את כולה ב-2). רק לאחר שה-y מבודד תוכלו לראות בבירור מהו השיפוע.",
        solution_steps: [
            { verbal_explanation: "נזהה את השיפוע של הישר הראשון. המשוואה מסודרת לכן השיפוע ברור.", math_expression: "m1 = 5" },
            { verbal_explanation: "במשוואה השנייה ה-y אינו מבודד. נחלק את כל המשוואה ב-2 כדי לסדר אותה.", math_expression: "(2y) / 2 = (10x) / 2 - 8 / 2" },
            { verbal_explanation: "נקבל את משוואת הישר השני בצורה מפורשת.", math_expression: "y = 5x - 4" },
            { verbal_explanation: "השיפוע של הישר השני הוא גם 5. מכיוון שהשיפועים שווים והאיבר החופשי שונה (2 ומינוס 4), הישרים מקבילים.", math_expression: "m1 = m2 = 5" }
        ],
        final_answer: "כן, הם מקבילים כי שיפועיהם שווים"
    },

    // --- שאלה 66 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "ישרים מקבילים",
        question: "במרובע ABCD נתון כי הצלע AB מונחת על הישר y = -x + 5. הצלע הנגדית לה, CD, עוברת בנקודה (4, 1) ומקבילה לה. מהי משוואת הצלע CD?",
        options: ["y = -x + 5", "y = x - 3", "y = -x + 2", "y = -x - 5"],
        correctAnswer: 0,
        hint: "השיפוע של CD שווה לשיפוע של AB (מינוס 1). הציבו את השיפוע ואת הנקודה הנתונה (4, 1) בנוסחת משוואת הישר.",
        solution_steps: [
            { verbal_explanation: "הצלעות מקבילות, לכן השיפוע שלהן זהה. המקדם של איקס בצלע AB הוא מינוס 1.", math_expression: "m = -1" },
            { verbal_explanation: "נציב את השיפוע והנקודה C(4,1) בנוסחת הישר.", math_expression: "y - 1 = -1(x - 4)" },
            { verbal_explanation: "נפתח סוגריים. מינוס 1 כפול מינוס 4 שווה לפלוס 4.", math_expression: "y - 1 = -x + 4" },
            { verbal_explanation: "נעביר את מינוס 1 ימינה. רגע, 4 ועוד 1 זה 5. אם המשוואה היא y = -x + 5, הרי שמדובר באותו הישר בדיוק (ישרים מתלכדים)! נבדוק את התשובות. בתשובות יש y = -x + 5 כנכונה. נכון.", math_expression: "y = -x + 5" }
        ],
        final_answer: "y = -x + 5"
    },

    // --- שאלה 67 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "ישרים מקבילים",
        question: "מצאו את ערכו של הפרמטר A, אם ידוע שהישר שמשוואתו y = Ax + 7 מקביל לישר העובר בנקודות (0, 2) ו- (2, 8).",
        options: ["A = 3", "A = 6", "A = 4", "A = -3"],
        correctAnswer: 0,
        hint: "הפרמטר A הוא למעשה השיפוע של הישר הראשון. חשבו את שיפוע הישר השני לפי שתי הנקודות הנתונות, והשוו ביניהם.",
        solution_steps: [
            { verbal_explanation: "נחשב את השיפוע של הישר השני בעזרת שתי הנקודות שעליו.", math_expression: "m = (8 - 2) / (2 - 0)" },
            { verbal_explanation: "נחשב מונה ומכנה.", math_expression: "m = 6 / 2 = 3" },
            { verbal_explanation: "מכיוון שהישרים מקבילים, שיפועיהם חייבים להיות שווים. במשוואה הראשונה השיפוע הוא A.", math_expression: "A = m" },
            { verbal_explanation: "לכן הערך של A הוא 3.", math_expression: "A = 3" }
        ],
        final_answer: "A = 3"
    },

    // --- שאלה 68 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "ישרים מקבילים",
        question: "מהי משוואתו של הישר העובר בנקודה (4, 9) ומקביל לציר ה-x?",
        options: ["y = 9", "x = 4", "y = 4x", "x = 9"],
        correctAnswer: 0,
        hint: "ישר המקביל לציר ה-x הוא ישר אופקי לחלוטין. בישר כזה, הגובה (y) נשאר קבוע בכל הנקודות שעליו ואינו תלוי ב-x.",
        solution_steps: [
            { verbal_explanation: "ישר המקביל לציר ה-x הוא ישר שהשיפוע שלו הוא 0 (הוא לא עולה ולא יורד).", math_expression: "m = 0" },
            { verbal_explanation: "אם נציב בנוסחת הישר y = mx + b את השיפוע 0, המשתנה x ייעלם ונישאר רק עם הגובה b.", math_expression: "y = 0x + b   =>   y = b" },
            { verbal_explanation: "מכיוון שהישר עובר בנקודה שבה הגובה (y) הוא 9, אזי המשוואה שלו תהיה תמיד y=9.", math_expression: "y = 9" }
        ],
        final_answer: "y = 9"
    },

    // --- שאלה 69 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "ישרים מקבילים",
        question: "מהי משוואתו של הישר העובר בנקודה (-5, 2) ומקביל לציר ה-y?",
        options: ["x = -5", "y = 2", "y = -5x", "x = 2"],
        correctAnswer: 0,
        hint: "ישר המקביל לציר ה-y הוא קו אנכי לחלוטין. על קו זה, המיקום האופקי (x) נשאר קבוע תמיד, ולא משנה מהו הגובה (y).",
        solution_steps: [
            { verbal_explanation: "ישר אנכי (המקביל לציר ה-y) הוא אוסף של נקודות הנמצאות בדיוק באותו מיקום על ציר ה-x.", math_expression: "x קבוע" },
            { verbal_explanation: "השיפוע של ישר כזה אינו מוגדר, ולכן לא ניתן לרשום אותו כפונקציה של y=.", math_expression: "משוואה מהצורה x = c" },
            { verbal_explanation: "מאחר שהישר עובר בנקודה שבה ערך ה-x הוא מינוס 5, משוואתו תהיה פשוט איקס שווה מינוס 5.", math_expression: "x = -5" }
        ],
        final_answer: "x = -5"
    },

    // --- שאלה 70 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "ישרים מקבילים",
        question: `נתונים שני ישרים. האם הישרים מקבילים זה לזה?<br> ישר א: 3y - 6x = 12 <br> ישר ב: y - 2x = 0`,
        options: ["כן, לשניהם שיפוע 2", "לא, לישר א' שיפוע 6 ולישר ב' שיפוע 2", "כן, שניהם חותכים את ציר y ב-4", "לא, הם חותכים זה את זה בראשית הצירים"],
        correctAnswer: 0,
        hint: "כדי לדעת את השיפוע, עליכם לבודד את המשתנה y בשתי המשוואות. העבירו את ה-x לאגף ימין וחלקו במקדם של y אם קיים.",
        solution_steps: [
            { verbal_explanation: "נסדר את ישר א'. נעביר את מינוס 6x לאגף ימין (לפלוס 6x).", math_expression: "3y = 6x + 12" },
            { verbal_explanation: "נחלק את ישר א' ב-3 כדי לבודד את y.", math_expression: "y = 2x + 4" },
            { verbal_explanation: "השיפוע של ישר א' הוא 2.", math_expression: "m1 = 2" },
            { verbal_explanation: "נסדר את ישר ב'. נעביר את מינוס 2x ימינה.", math_expression: "y = 2x" },
            { verbal_explanation: "השיפוע של ישר ב' הוא גם 2. מכיוון שהשיפועים שווים, הישרים מקבילים.", math_expression: "m1 = m2 = 2" }
        ],
        final_answer: "כן, לשניהם שיפוע 2"
    },

    // ==========================================
    // תת נושא 6: ישרים מאונכים
    // ==========================================

    // --- שאלה 71 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "ישרים מאונכים",
        question: "שיפועו של ישר נתון הוא 4. מה יהיה שיפועו של ישר המאונך לו (יוצר עמו זווית של 90 מעלות)?",
        options: ["-0.25 (מינוס רבע)", "-4", "0.25 (רבע)", "4"],
        correctAnswer: 0,
        hint: "תנאי לישרים מאונכים הוא שהשיפועים שלהם 'הופכיים ונגדיים'. כלומר, הופכים את השבר (4/1 הופך ל-1/4) ומשנים את הסימן ממוקדם למינוס.",
        solution_steps: [
            { verbal_explanation: "הכלל לישרים מאונכים קובע שמכפלת השיפועים שלהם חייבת להיות מינוס 1.", math_expression: "m1 × m2 = -1" },
            { verbal_explanation: "במילים פשוטות, השיפוע המאונך הוא 'הופכי ונגדי'. תחילה נרשום את 4 כשבר.", math_expression: "4 = 4 / 1" },
            { verbal_explanation: "נהפוך את השבר (המונה למכנה והמכנה למונה).", math_expression: "1 / 4" },
            { verbal_explanation: "נשנה את הסימן שלו לחיובי או לשלילי בהתאם.", math_expression: "m2 = -1 / 4 = -0.25" }
        ],
        final_answer: "-0.25 (מינוס רבע)"
    },

    // --- שאלה 72 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "ישרים מאונכים",
        question: "מצאו את משוואת הישר העובר בראשית הצירים (0, 0) ומאונך לישר y = 0.5x + 3.",
        options: ["y = -2x", "y = 2x", "y = -0.5x", "y = -2x + 3"],
        correctAnswer: 0,
        hint: "השיפוע של הישר הנתון הוא חצי. השיפוע המאונך לו הוא הופכי (2/1) ונגדי (מינוס). מכיוון שהוא עובר בראשית הצירים, ה-b שלו הוא 0.",
        solution_steps: [
            { verbal_explanation: "נמצא את השיפוע של הישר המאונך. השיפוע המקורי הוא 0.5 (או חצי).", math_expression: "m1 = 1 / 2" },
            { verbal_explanation: "ההופכי הנגדי של חצי הוא מינוס 2.", math_expression: "m2 = -2" },
            { verbal_explanation: "הישר המבוקש עובר בראשית הצירים, לכן הוא חותך את ציר ה-y באפס.", math_expression: "b = 0" },
            { verbal_explanation: "נרכיב את משוואת הישר.", math_expression: "y = -2x" }
        ],
        final_answer: "y = -2x"
    },

    // --- שאלה 73 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "ישרים מאונכים",
        question: "האם הישרים הבאים מאונכים זה לזה? <br> ישר א: y = 3x - 1 <br> ישר ב: y = -(1/3)x + 5",
        options: ["כן, מכפלת השיפועים שלהם היא מינוס 1", "לא, כי הם נחתכים בנקודה חיובית", "כן, כי לשניהם יש איקס חיובי", "לא, השיפועים לא נגדיים"],
        correctAnswer: 0,
        hint: "כדי לבדוק מאונכות, הכפילו את השיפוע של ישר א' (3) בשיפוע של ישר ב' (מינוס שליש). אם התוצאה היא מינוס 1, הישרים מאונכים.",
        solution_steps: [
            { verbal_explanation: "השיפוע של ישר א' הוא המקדם של איקס.", math_expression: "m1 = 3" },
            { verbal_explanation: "השיפוע של ישר ב' הוא המקדם של איקס.", math_expression: "m2 = -1 / 3" },
            { verbal_explanation: "נבדוק את תנאי המאונכות: האם מכפלת השיפועים שווה למינוס 1?", math_expression: "3 × (-1 / 3) = -1" },
            { verbal_explanation: "מכיוון שהתנאי מתקיים (הם הופכיים ונגדיים זה לזה), הרי שהישרים ניצבים זה לזה ויוצרים זווית ישרה.", math_expression: "כן, הם מאונכים" }
        ],
        final_answer: "כן, מכפלת השיפועים שלהם היא מינוס 1"
    },

    // --- שאלה 74 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "ישרים מאונכים",
        question: `לפניכם שני ישרים מאונכים במערכת צירים.<br>
        הישר האדום הוא y = x + 2.<br>
        מה תהיה משוואתו של הישר הכחול העובר דרך הנקודה (4, 4)?<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <line x1="20" y1="120" x2="180" y2="120" stroke="#cbd5e1" stroke-width="2" />
            <line x1="100" y1="140" x2="100" y2="10" stroke="#cbd5e1" stroke-width="2" />
            <line x1="60" y1="120" x2="140" y2="40" stroke="#dc2626" stroke-width="3" />
            <line x1="60" y1="40" x2="140" y2="120" stroke="#3b82f6" stroke-width="3" />
            <rect x="95" y="75" width="10" height="10" fill="none" stroke="#0f172a" stroke-width="1" />
            <circle cx="140" cy="40" r="4" fill="#0f172a" />
            <text x="145" y="35" font-size="10">(4,4)</text>
            <text x="120" y="20" font-size="10" fill="#dc2626">y=x+2</text>
        </svg>`,
        options: ["y = -x + 8", "y = -x + 4", "y = x + 4", "y = -2x + 8"],
        correctAnswer: 0,
        hint: "השיפוע של הישר האדום הוא 1 (המקדם של איקס). השיפוע המאונך לו הוא ההופכי הנגדי, כלומר מינוס 1. הציבו בנוסחה עם הנקודה הנתונה.",
        solution_steps: [
            { verbal_explanation: "נזהה את השיפוע של הישר האדום. המקדם של x הוא 1.", math_expression: "m1 = 1" },
            { verbal_explanation: "נמצא את השיפוע המאונך (הכחול). ההופכי של 1 הוא 1, והנגדי הוא לשנות למינוס.", math_expression: "m2 = -1" },
            { verbal_explanation: "נציב את השיפוע והנקודה (4,4) בנוסחת משוואת הישר.", math_expression: "y - 4 = -1(x - 4)" },
            { verbal_explanation: "נפתח סוגריים ונסדר.", math_expression: "y - 4 = -x + 4   =>   y = -x + 8" }
        ],
        final_answer: "y = -x + 8"
    },

    // --- שאלה 75 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "ישרים מאונכים",
        question: "איזה ערך של פרמטר k יהפוך את שני הישרים הבאים למאונכים זה לזה?<br> ישר 1: y = kx - 5<br> ישר 2: y = 0.2x + 1",
        options: ["k = -5", "k = 5", "k = -0.2", "k = 2"],
        correctAnswer: 0,
        hint: "השיפוע של הישר השני הוא 0.2 (או חמישית). כדי שהמכפלה של השיפועים תהיה מינוס 1, k צריך להיות ההופכי הנגדי של חמישית.",
        solution_steps: [
            { verbal_explanation: "השיפוע של הישר השני נתון לנו כ-0.2. נמיר אותו לשבר פשוט לצורך נוחות.", math_expression: "m2 = 1 / 5" },
            { verbal_explanation: "אנו מחפשים את השיפוע k של הישר הראשון, כך שמכפלתם תהיה מינוס 1.", math_expression: "k × (1 / 5) = -1" },
            { verbal_explanation: "כדי למצוא את k, ניקח את ההופכי הנגדי של חמישית. ההופכי של 1/5 הוא 5/1, ונוסיף מינוס.", math_expression: "k = -5" }
        ],
        final_answer: "k = -5"
    },

    // --- שאלה 76 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "ישרים מאונכים",
        question: "נתון משולש ישר זווית. ניצב אחד מונח על הישר y = 2x + 4. מה יכול להיות שיפועו של הישר שעליו מונח הניצב השני?",
        options: ["-0.5", "2", "-2", "0.5"],
        correctAnswer: 0,
        hint: "ניצבים במשולש ישר זווית מאונכים זה לזה. לכן, השיפועים של הישרים שעליהם הם מונחים חייבים להיות הופכיים ונגדיים.",
        solution_steps: [
            { verbal_explanation: "ידוע שניצבים במשולש ישר זווית יוצרים זווית של 90 מעלות ביניהם.", math_expression: "ניצבים = ישרים מאונכים" },
            { verbal_explanation: "שיפוע הניצב הנתון הוא 2.", math_expression: "m1 = 2" },
            { verbal_explanation: "השיפוע של הניצב המאונך אליו יהיה ההופכי והנגדי של 2.", math_expression: "m2 = -1 / 2" },
            { verbal_explanation: "מינוס חצי יכול להיכתב גם כשבר עשרוני.", math_expression: "-0.5" }
        ],
        final_answer: "-0.5"
    },

    // --- שאלה 77 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "ישרים מאונכים",
        question: "במלבן ABCD, הצלע AB מונחת על הישר y = 3x - 1. הצלע הסמוכה לה, BC, עוברת בנקודה (6, 5). מהי משוואת הישר של הצלע BC?",
        options: ["y = -(1/3)x + 7", "y = 3x - 13", "y = -(1/3)x + 5", "y = -3x + 23"],
        correctAnswer: 0,
        hint: "במלבן, צלעות סמוכות מאונכות זו לזו (זווית 90 מעלות). לכן, שיפוע צלע BC הופכי ונגדי לצלע AB. הציבו את השיפוע שמצאתם עם הנקודה הנתונה.",
        solution_steps: [
            { verbal_explanation: "במלבן יש זוויות ישרות, לכן הצלע BC מאונכת לצלע AB.", math_expression: "AB ⊥ BC" },
            { verbal_explanation: "השיפוע של AB הוא 3. לכן השיפוע של BC יהיה ההופכי הנגדי שלו.", math_expression: "m_BC = -1 / 3" },
            { verbal_explanation: "נציב את השיפוע ואת הנקודה C(6, 5) בנוסחת משוואת הישר.", math_expression: "y - 5 = -(1/3)(x - 6)" },
            { verbal_explanation: "נפתח סוגריים. מינוס שליש כפול מינוס 6 זה פלוס 2.", math_expression: "y - 5 = -(1/3)x + 2" },
            { verbal_explanation: "נעביר את מינוס 5 לאגף ימין ונחבר.", math_expression: "y = -(1/3)x + 2 + 5   =>   y = -(1/3)x + 7" }
        ],
        final_answer: "y = -(1/3)x + 7"
    },

    // --- שאלה 78 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "ישרים מאונכים",
        question: "ישר העובר בנקודות (2, 4) ו- (6, 12) מאונך לישר אחר. מהו שיפועו של הישר האחר?",
        options: ["-0.5", "2", "0.5", "-2"],
        correctAnswer: 0,
        hint: "חשבו קודם את השיפוע של הישר הראשון בעזרת שתי הנקודות הנתונות. לאחר מכן, מצאו את ההופכי הנגדי של התוצאה.",
        solution_steps: [
            { verbal_explanation: "נחשב את השיפוע של הישר הראשון לפי הנוסחה.", math_expression: "m1 = (12 - 4) / (6 - 2)" },
            { verbal_explanation: "נחשב מונה ומכנה.", math_expression: "m1 = 8 / 4 = 2" },
            { verbal_explanation: "הישר האחר מאונך לו, לכן שיפועו יהיה ההופכי הנגדי של 2.", math_expression: "m2 = -1 / 2" },
            { verbal_explanation: "נרשום את התוצאה כשבר עשרוני.", math_expression: "m2 = -0.5" }
        ],
        final_answer: "-0.5"
    },

    // --- שאלה 79 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "ישרים מאונכים",
        question: "האם הישר y = 5 מאונך לישר x = 2 ?",
        options: ["כן, ישר אופקי תמיד מאונך לישר אנכי", "לא, אין להם שיפועים שאפשר להכפיל", "כן, כי שניהם חיוביים", "לא, הם מקבילים זה לזה"],
        correctAnswer: 0,
        hint: "דמיינו את הגרפים: y=5 הוא קו השוכב אופקית (כמו ציר ה-x). x=2 הוא קו העומד אנכית (כמו ציר ה-y). קווים כאלו תמיד יוצרים צלב של 90 מעלות.",
        solution_steps: [
            { verbal_explanation: "המשוואה y = 5 מייצגת ישר אופקי לחלוטין (מקביל לציר x).", math_expression: "שיפוע = 0" },
            { verbal_explanation: "המשוואה x = 2 מייצגת ישר אנכי לחלוטין (מקביל לציר y).", math_expression: "שיפוע לא מוגדר" },
            { verbal_explanation: "במערכת צירים ישרה (קרטזית), ציר x וציר y מאונכים זה לזה. לכן, כל קו המקביל ל-x מאונך בהכרח לכל קו המקביל ל-y.", math_expression: "זווית של 90 מעלות" }
        ],
        final_answer: "כן, ישר אופקי תמיד מאונך לישר אנכי"
    },

    // --- שאלה 80 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "ישרים מאונכים",
        question: "נתון אלכסון של ריבוע שמונח על הישר y = -x + 3. מה יהיה שיפועו של האלכסון השני של אותו ריבוע?",
        options: ["1", "-1", "3", "0"],
        correctAnswer: 0,
        hint: "תכונה חשובה של ריבוע: האלכסונים שלו תמיד מאונכים זה לזה. לכן, מצאו את השיפוע ההופכי והנגדי של האלכסון הנתון.",
        solution_steps: [
            { verbal_explanation: "האלכסונים בריבוע (וגם במעוין) חותכים זה את זה בזווית של 90 מעלות.", math_expression: "מאונכים זה לזה" },
            { verbal_explanation: "נזהה את השיפוע של האלכסון הנתון.", math_expression: "m1 = -1" },
            { verbal_explanation: "השיפוע המאונך לו יהיה ההופכי הנגדי. ההופכי של 1 הוא 1, והנגדי הופך את המינוס לפלוס.", math_expression: "m2 = 1" }
        ],
        final_answer: "1"
    },

    // ==========================================
    // תת נושא 7: חיתוך בין ישרים ופרבולה
    // ==========================================

    // --- שאלה 81 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "חיתוך בין ישרים ופרבולה",
        question: "מצאו את נקודות החיתוך שבין הפרבולה y = x² לישר האופקי y = 9.",
        options: ["(3, 9) ו- (-3, 9)", "(9, 3) ו- (9, -3)", "(3, 0) ו- (-3, 0)", "אין נקודות חיתוך"],
        correctAnswer: 0,
        hint: "נקודות חיתוך מוצאים על ידי השוואת שתי הפונקציות. כלומר, איקס בריבוע שווה ל-9. פתרו, ואל תשכחו שערך ה-y של הנקודות חייב להיות 9.",
        solution_steps: [
            { verbal_explanation: "כדי למצוא את המפגש, נשווה בין משוואת הפרבולה למשוואת הישר.", math_expression: "x² = 9" },
            { verbal_explanation: "נוציא שורש ריבועי כדי למצוא את ערכי ה-x. נזכור שיש שתי תשובות אפשריות לשורש.", math_expression: "x1 = 3,  x2 = -3" },
            { verbal_explanation: "בנקודות החיתוך, ערך ה-y חייב להיות זהה על שני הגרפים. היות והישר הוא תמיד y=9, ה-y יהיה 9.", math_expression: "y = 9" },
            { verbal_explanation: "נרשום את זוגות הנקודות.", math_expression: "(3, 9), (-3, 9)" }
        ],
        final_answer: "(3, 9) ו- (-3, 9)"
    },

    // --- שאלה 82 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "חיתוך בין ישרים ופרבולה",
        question: "מצאו את נקודות החיתוך של הפרבולה y = x² - 4x עם הישר y = 5.",
        options: ["(5, 5) ו- (-1, 5)", "(4, 5) ו- (1, 5)", "(5, 0) ו- (-1, 0)", "(0, 5) ו- (4, 5)"],
        correctAnswer: 0,
        hint: "השוו את משוואת הפרבולה למספר 5. התקבל x² - 4x = 5. העבירו את 5 שמאלה כדי לאפס את המשוואה ופתרו בעזרת נוסחת השורשים.",
        solution_steps: [
            { verbal_explanation: "נשווה בין הפונקציות.", math_expression: "x² - 4x = 5" },
            { verbal_explanation: "נעביר את 5 לאגף שמאל כדי לסדר משוואה ריבועית ששווה לאפס.", math_expression: "x² - 4x - 5 = 0" },
            { verbal_explanation: "נפתור בעזרת טרינום או נוסחת השורשים. אנו מחפשים שני מספרים שמכפלתם מינוס 5 וסכומם מינוס 4.", math_expression: "(x - 5)(x + 1) = 0" },
            { verbal_explanation: "נקבל את ערכי ה-x.", math_expression: "x1 = 5,  x2 = -1" },
            { verbal_explanation: "ה-y נתון לנו מראש על ידי הישר y=5. לכן הנקודות הן (5,5) ו-(-1,5).", math_expression: "(5, 5) , (-1, 5)" }
        ],
        final_answer: "(5, 5) ו- (-1, 5)"
    },

    // --- שאלה 83 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "חיתוך בין ישרים ופרבולה",
        question: "מצאו את נקודות החיתוך בין הפרבולה y = x² לבין הישר y = 2x.",
        options: ["(0, 0) ו- (2, 4)", "(0, 0) ו- (4, 2)", "(2, 0) ו- (0, 4)", "אין נקודות חיתוך"],
        correctAnswer: 0,
        hint: "השוו: איקס בריבוע שווה ל-2 איקס. העבירו הכל לאגף אחד והוציאו גורם משותף (x) כדי לפתור את המשוואה.",
        solution_steps: [
            { verbal_explanation: "נשווה בין משוואת הפרבולה לישר.", math_expression: "x² = 2x" },
            { verbal_explanation: "נעביר את 2x לאגף השמאלי (בסימן מינוס). חשוב מאוד לא לחלק ב-x, אחרת נאבד את אחד הפתרונות!", math_expression: "x² - 2x = 0" },
            { verbal_explanation: "נוציא את x כגורם משותף מחוץ לסוגריים.", math_expression: "x(x - 2) = 0" },
            { verbal_explanation: "נקבל שני ערכי x אפשריים.", math_expression: "x1 = 0,  x2 = 2" },
            { verbal_explanation: "נציב את ערכי ה-x במשוואת הישר למציאת ה-y. עבור x=0, ה-y הוא 0. עבור x=2, ה-y הוא 4.", math_expression: "y1 = 2(0)=0  => (0,0) \n y2 = 2(2)=4 => (2,4)" }
        ],
        final_answer: "(0, 0) ו- (2, 4)"
    },

    // --- שאלה 84 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "חיתוך בין ישרים ופרבולה",
        question: `על פי השרטוט, הישר y = x + 1 חותך את הפרבולה y = x² - 5x + 6 בשתי נקודות. מצאו את הנקודות הללו.<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <line x1="20" y1="120" x2="180" y2="120" stroke="#cbd5e1" stroke-width="2" />
            <path d="M 60 20 Q 120 180 180 20" fill="none" stroke="#dc2626" stroke-width="3" />
            <line x1="40" y1="140" x2="160" y2="20" stroke="#3b82f6" stroke-width="2" />
            <circle cx="113" cy="67" r="4" fill="#0f172a" />
            <circle cx="78" cy="103" r="4" fill="#0f172a" />
        </svg>`,
        options: ["(1, 2) ו- (5, 6)", "(2, 1) ו- (6, 5)", "(0, 1) ו- (3, 4)", "(5, 1) ו- (1, 5)"],
        correctAnswer: 0,
        hint: "השוו את הפונקציות: איקס בריבוע פחות 5 איקס ועוד 6, שווה לאיקס ועוד 1. העבירו את כל איברי הישר שמאלה, סדרו למשוואה ריבועית ופתרו.",
        solution_steps: [
            { verbal_explanation: "נשווה בין הפונקציות.", math_expression: "x² - 5x + 6 = x + 1" },
            { verbal_explanation: "נעביר את ה-x ואת ה-1 מאגף ימין לאגף שמאל (בסימן מינוס).", math_expression: "x² - 5x - x + 6 - 1 = 0" },
            { verbal_explanation: "נכנס איברים דומים לקבלת משוואה ריבועית מסודרת.", math_expression: "x² - 6x + 5 = 0" },
            { verbal_explanation: "נפתור בעזרת טרינום (מספרים שמכפלתם 5 וסכומם מינוס 6 הם מינוס 1 ומינוס 5).", math_expression: "(x - 1)(x - 5) = 0   =>   x1 = 1, x2 = 5" },
            { verbal_explanation: "נציב את ה-x במשוואת הישר הפשוטה למציאת ה-y.", math_expression: "y1 = 1 + 1 = 2  => (1, 2) \n y2 = 5 + 1 = 6  => (5, 6)" }
        ],
        final_answer: "(1, 2) ו- (5, 6)"
    },

    // --- שאלה 85 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "חיתוך בין ישרים ופרבולה",
        question: "כמה נקודות חיתוך יש לפרבולה המחייכת y = x² + 1 עם הישר y = -2 ?",
        options: ["אפס נקודות חיתוך", "נקודת חיתוך אחת", "שתי נקודות חיתוך", "אינסוף נקודות"],
        correctAnswer: 0,
        hint: "חישבו בהיגיון לפני שאתם פותרים: הפרבולה תמיד חיובית (כי x² תמיד חיובי או אפס, והוספנו 1). הישר הוא שלילי (-2). האם הם יכולים להיפגש אי פעם?",
        solution_steps: [
            { verbal_explanation: "ננסה להשוות בין שתי הפונקציות מתמטית.", math_expression: "x² + 1 = -2" },
            { verbal_explanation: "נעביר את 1 לאגף הימני בסימן מינוס.", math_expression: "x² = -2 - 1 = -3" },
            { verbal_explanation: "קיבלנו מצב שבו מספר בריבוע שווה למספר שלילי. זהו מצב בלתי אפשרי במספרים ממשיים.", math_expression: "אין שורש למספר שלילי" },
            { verbal_explanation: "מבחינה גרפית, הפרבולה מרחפת מעל ציר ה-x, והישר נמצא מתחתיו, ולכן לעולם לא ייפגשו.", math_expression: "אפס נקודות" }
        ],
        final_answer: "אפס נקודות חיתוך"
    },

    // --- שאלה 86 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "חיתוך בין ישרים ופרבולה",
        question: "מצאו את נקודות החיתוך בין הפרבולה הבוכה y = -x² + 4 לבין הישר y = x + 2.",
        options: ["(-2, 0) ו- (1, 3)", "(2, 0) ו- (-1, 3)", "(1, -2) ו- (3, 0)", "אין נקודות חיתוך"],
        correctAnswer: 0,
        hint: "השוו את המשוואות. מומלץ להעביר את איברי אגף שמאל (של הפרבולה) לימין כדי לקבל איקס בריבוע חיובי, שיהיה קל לפתור.",
        solution_steps: [
            { verbal_explanation: "נשווה בין הפונקציות.", math_expression: "-x² + 4 = x + 2" },
            { verbal_explanation: "נעביר את כל אגף שמאל לימין (איקס בריבוע הופך לחיובי, ו-4 הופך למינוס 4).", math_expression: "0 = x² + x + 2 - 4" },
            { verbal_explanation: "נכנס איברים.", math_expression: "x² + x - 2 = 0" },
            { verbal_explanation: "נפתור בעזרת טרינום או נוסחת שורשים. הפתרונות הם 1 ומינוס 2.", math_expression: "x1 = 1,  x2 = -2" },
            { verbal_explanation: "נציב את הערכים בישר y=x+2 למציאת y.", math_expression: "עבור 1: y = 1+2=3 => (1,3) \n עבור -2: y = -2+2=0 => (-2,0)" }
        ],
        final_answer: "(-2, 0) ו- (1, 3)"
    },

    // --- שאלה 87 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "חיתוך בין ישרים ופרבולה",
        question: "כמה נקודות חיתוך יש לפרבולה y = x² - 4x + 4 עם ציר ה-x (שהוא הישר y=0)?",
        options: ["נקודה אחת (הפרבולה משיקה לציר)", "שתי נקודות", "אפס נקודות", "אינסוף"],
        correctAnswer: 0,
        hint: "הציבו y=0 וחשבו את נוסחת השורשים. תראו שהביטוי בתוך השורש יוצא בדיוק אפס, כלומר יש רק פתרון אחד (קודקוד הפרבולה מונח על הציר).",
        solution_steps: [
            { verbal_explanation: "נשווה את משוואת הפרבולה לאפס.", math_expression: "x² - 4x + 4 = 0" },
            { verbal_explanation: "ניתן לזהות כאן נוסחת כפל מקוצר מושלמת.", math_expression: "(x - 2)² = 0" },
            { verbal_explanation: "נוציא שורש ונקבל רק פתרון אחד ויחיד.", math_expression: "x - 2 = 0   =>   x = 2" },
            { verbal_explanation: "כאשר לפרבולה וישר יש רק נקודת חיתוך אחת משותפת, המשמעות היא שהישר משיק (נוגע) בפרבולה בקודקוד שלה.", math_expression: "נקודה אחת" }
        ],
        final_answer: "נקודה אחת (הפרבולה משיקה לציר)"
    },

    // --- שאלה 88 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "חיתוך בין ישרים ופרבולה",
        question: "מצאו את הנקודות בהן הישר y = 7 חותך את הפרבולה y = x² - 9.",
        options: ["(4, 7) ו- (-4, 7)", "(16, 7) ו- (-16, 7)", "(2, 7) ו- (-2, 7)", "אין חיתוך"],
        correctAnswer: 0,
        hint: "השוו את המשוואות: x² - 9 = 7. העבירו את 9 אגף והוציאו שורש (חיובי ושלילי).",
        solution_steps: [
            { verbal_explanation: "נשווה את הפרבולה לגובה הישר (7).", math_expression: "x² - 9 = 7" },
            { verbal_explanation: "נעביר את מינוס 9 לאגף ימין כפלוס 9.", math_expression: "x² = 7 + 9" },
            { verbal_explanation: "נחבר את המספרים.", math_expression: "x² = 16" },
            { verbal_explanation: "נוציא שורש משני הצדדים. השורש של 16 יכול להיות 4 או מינוס 4.", math_expression: "x1 = 4,  x2 = -4" },
            { verbal_explanation: "ה-y ידוע מראש (7), לכן נרשום את הנקודות.", math_expression: "(4, 7) ו- (-4, 7)" }
        ],
        final_answer: "(4, 7) ו- (-4, 7)"
    },

    // --- שאלה 89 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "חיתוך בין ישרים ופרבולה",
        question: "מצאו את נקודות החיתוך בין הפרבולה y = 2x² - 8x + 6 לישר y = 6.",
        options: ["(0, 6) ו- (4, 6)", "(2, 6) ו- (-2, 6)", "(0, 0) ו- (4, 0)", "(1, 6) ו- (3, 6)"],
        correctAnswer: 0,
        hint: "השוו ל-6. המספר 6 יתבטל משני האגפים. לאחר מכן תוכלו להוציא 2x כגורם משותף.",
        solution_steps: [
            { verbal_explanation: "נשווה בין הפונקציות.", math_expression: "2x² - 8x + 6 = 6" },
            { verbal_explanation: "נחסר 6 משני אגפי המשוואה.", math_expression: "2x² - 8x = 0" },
            { verbal_explanation: "נוציא 2x כגורם משותף מחוץ לסוגריים.", math_expression: "2x(x - 4) = 0" },
            { verbal_explanation: "נשווה כל גורם לאפס כדי למצוא את הפתרונות.", math_expression: "2x = 0  =>  x1 = 0 \n x - 4 = 0  =>  x2 = 4" },
            { verbal_explanation: "נצרף את ערך ה-y הקבוע לזוגות.", math_expression: "(0, 6) ו- (4, 6)" }
        ],
        final_answer: "(0, 6) ו- (4, 6)"
    },

    // --- שאלה 90 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית_172",
        subTopic: "חיתוך בין ישרים ופרבולה",
        question: "הפרבולה y = x² - 1 נחתכת על ידי הישר y = 3 בשתי נקודות, A ו-B. מהו המרחק בין שתי הנקודות הללו על הישר?",
        options: ["4 יחידות", "2 יחידות", "6 יחידות", "8 יחידות"],
        correctAnswer: 0,
        hint: "מכיוון שהן יושבות על ישר אופקי (y=3), המרחק ביניהן הוא פשוט ההפרש שבין ערכי ה-x שלהן. השוו בין הפונקציות כדי למצוא את האיקסים (שורש של 4) וחסרו ביניהם.",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את נקודות החיתוך על ידי השוואה.", math_expression: "x² - 1 = 3" },
            { verbal_explanation: "נעביר את מינוס 1 ימינה.", math_expression: "x² = 4" },
            { verbal_explanation: "נוציא שורש למציאת ערכי ה-x.", math_expression: "x1 = 2,  x2 = -2" },
            { verbal_explanation: "שלב ב': נחשב את המרחק האופקי בין שתי הנקודות הללו. (מספר גדול פחות מספר קטן).", math_expression: "d = 2 - (-2) = 2 + 2" },
            { verbal_explanation: "המרחק ביניהן הוא 4 יחידות.", math_expression: "4" }
        ],
        final_answer: "4 יחידות"
    }
];