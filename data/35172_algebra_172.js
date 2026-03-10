const questionsDB = [
    // ==========================================
    // תת נושא 1: פתרון משוואה ממעלה ראשונה
    // ==========================================
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה ראשונה",
        question: "פתרו את המשוואה הבאה הכוללת פתיחת סוגריים:<br><br> 3(x - 2) + 4 = 2x + 5",
        options: ["x = 7", "x = 3", "x = -1", "x = 5"],
        correctAnswer: 0,
        hint: "שלב ראשון: פתחו את הסוגריים על ידי הכפלת המספר 3 בכל אחד מהאיברים בפנים.<br>שלב שני: העבירו את איברי ה-x לאגף אחד ואת המספרים לאגף השני.",
        solution_steps: [
            { verbal_explanation: "נפתח את הסוגריים על ידי הכפלת 3 ב-x וב-מינוס 2.", math_expression: "3x - 6 + 4 = 2x + 5" },
            { verbal_explanation: "נכנס איברים דומים באגף השמאלי (מינוס 6 פלוס 4).", math_expression: "3x - 2 = 2x + 5" },
            { verbal_explanation: "נעביר את 2x לאגף שמאל (בסימן מינוס) ואת מינוס 2 לאגף ימין (בסימן פלוס).", math_expression: "3x - 2x = 5 + 2" },
            { verbal_explanation: "נבצע את פעולות החיבור והחיסור לקבלת הפתרון הסופי.", math_expression: "x = 7" }
        ],
        final_answer: "x = 7"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה ראשונה",
        question: "פתרו את המשוואה הבאה הכוללת שברים:<br><br> x / 2  +  x / 3  =  5",
        options: ["x = 6", "x = 5", "x = 10", "x = 1"],
        correctAnswer: 0,
        hint: "כדי להיפטר מהשברים, מצאו מכנה משותף ל-2 ול-3 (שהוא 6) והכפילו את כל המשוואה בו.",
        solution_steps: [
            { verbal_explanation: "נמצא מכנה משותף ל-2 ול-3, שהוא 6, ונכפיל את כל המשוואה ב-6.", math_expression: "6 × (x / 2)  +  6 × (x / 3)  =  6 × 5" },
            { verbal_explanation: "נצמצם את השברים: 6 חלקי 2 זה 3, ו-6 חלקי 3 זה 2.", math_expression: "3x + 2x = 30" },
            { verbal_explanation: "נחבר את איברי ה-x באגף השמאלי.", math_expression: "5x = 30" },
            { verbal_explanation: "נחלק את שני האגפים ב-5 כדי לבודד את x.", math_expression: "x = 6" }
        ],
        final_answer: "x = 6"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה ראשונה",
        question: "פתרו את המשוואה הבאה:<br><br> 5x - 2(x + 3) = 9",
        options: ["x = 5", "x = 3", "x = -5", "x = 15"],
        correctAnswer: 0,
        hint: "שימו לב לסימן המינוס לפני הסוגריים. הכפילו את (מינוס 2) בכל אחד מהאיברים שבתוך הסוגריים.",
        solution_steps: [
            { verbal_explanation: "נפתח סוגריים תוך הקפדה על חוקי הסימנים: (מינוס 2) כפול x ו-(מינוס 2) כפול 3.", math_expression: "5x - 2x - 6 = 9" },
            { verbal_explanation: "נכנס איברים דומים המכילים x בצד שמאל.", math_expression: "3x - 6 = 9" },
            { verbal_explanation: "נעביר את המספר (מינוס 6) לאגף הימני בסימן הפוך (פלוס).", math_expression: "3x = 9 + 6" },
            { verbal_explanation: "נחבר את המספרים באגף ימין.", math_expression: "3x = 15" },
            { verbal_explanation: "נחלק את המשוואה במקדם של x (שהוא 3).", math_expression: "x = 5" }
        ],
        final_answer: "x = 5"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה ראשונה",
        question: "מצאו את x מתוך הפרופורציה הבאה:<br><br> (x - 1) / 3  =  (x + 2) / 4",
        options: ["x = 10", "x = 2", "x = -2", "x = 5"],
        correctAnswer: 0,
        hint: "כאשר יש שוויון בין שני שברים, הדרך הנוחה ביותר היא לבצע כפל בהצלבה.",
        solution_steps: [
            { verbal_explanation: "נבצע כפל בהצלבה: המונה השמאלי כפול המכנה הימני, שווה למונה הימני כפול המכנה השמאלי.", math_expression: "4(x - 1) = 3(x + 2)" },
            { verbal_explanation: "נפתח את הסוגריים בשני האגפים.", math_expression: "4x - 4 = 3x + 6" },
            { verbal_explanation: "נעביר את איברי ה-x שמאלה ואת המספרים ימינה.", math_expression: "4x - 3x = 6 + 4" },
            { verbal_explanation: "נכנס איברים לקבלת התוצאה הסופית.", math_expression: "x = 10" }
        ],
        final_answer: "x = 10"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה ראשונה",
        question: "פתרו את המשוואה הבאה הכוללת מספר סוגריים:<br><br> 2(3x - 1) - 4(x - 2) = 14",
        options: ["x = 4", "x = 2", "x = 8", "x = -1"],
        correctAnswer: 0,
        hint: "פתחו בזהירות כל זוג סוגריים בנפרד. זכרו שכפל של מינוס במינוס נותן פלוס (בחלק של מינוס 4 כפול מינוס 2).",
        solution_steps: [
            { verbal_explanation: "נפתח את זוג הסוגריים הראשון.", math_expression: "6x - 2 - 4(x - 2) = 14" },
            { verbal_explanation: "נפתח את זוג הסוגריים השני, נשים לב שמינוס 4 כפול מינוס 2 שווה לפלוס 8.", math_expression: "6x - 2 - 4x + 8 = 14" },
            { verbal_explanation: "נכנס איברים דומים באגף שמאל (האיקסים בנפרד והמספרים בנפרד).", math_expression: "2x + 6 = 14" },
            { verbal_explanation: "נעביר את 6 לאגף ימין בסימן מינוס.", math_expression: "2x = 14 - 6" },
            { verbal_explanation: "נחסר ונחלק את המשוואה ב-2.", math_expression: "2x = 8   =>   x = 4" }
        ],
        final_answer: "x = 4"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה ראשונה",
        question: "פתרו את המשוואה הבאה:<br><br> (x + 2) / 3  -  (x - 1) / 2  =  1",
        options: ["x = 1", "x = 5", "x = -1", "x = 7"],
        correctAnswer: 0,
        hint: "המכנה המשותף ל-3 ול-2 הוא 6. הכפילו את כל המשוואה ב-6 כדי להסיר את השברים.",
        solution_steps: [
            { verbal_explanation: "נכפיל את כל המשוואה במכנה המשותף 6.", math_expression: "6 × [(x + 2) / 3]  -  6 × [(x - 1) / 2]  =  6 × 1" },
            { verbal_explanation: "נצמצם את השברים ונרשום את המונים בתוך סוגריים עם המקדמים שנותרו.", math_expression: "2(x + 2) - 3(x - 1) = 6" },
            { verbal_explanation: "נפתח סוגריים. נשים לב שמינוס 3 כפול מינוס 1 הופך לפלוס 3.", math_expression: "2x + 4 - 3x + 3 = 6" },
            { verbal_explanation: "נכנס איברים דומים בצד שמאל.", math_expression: "-x + 7 = 6" },
            { verbal_explanation: "נעביר את 7 לאגף ימין בסימן הפוך.", math_expression: "-x = 6 - 7" },
            { verbal_explanation: "נחסר ונכפיל את כל המשוואה במינוס 1 כדי לקבל איקס חיובי.", math_expression: "-x = -1   =>   x = 1" }
        ],
        final_answer: "x = 1"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה ראשונה",
        question: "מצאו את ערכו של x במשוואה הבאה:<br><br> x - (x / 4) = 0.5x + 2",
        options: ["x = 8", "x = 4", "x = 2", "x = 16"],
        correctAnswer: 0,
        hint: "נוח להכפיל את כל המשוואה ב-4 כדי להעלים גם את השבר וגם את המספר העשרוני (חצי כפול 4 שווה 2).",
        solution_steps: [
            { verbal_explanation: "נכפיל את כל איברי המשוואה ב-4.", math_expression: "4 × x  -  4 × (x / 4)  =  4 × 0.5x  +  4 × 2" },
            { verbal_explanation: "נחשב ונסדר את המשוואה החדשה ללא שברים.", math_expression: "4x - x = 2x + 8" },
            { verbal_explanation: "נכנס איברים דומים באגף השמאלי.", math_expression: "3x = 2x + 8" },
            { verbal_explanation: "נעביר את 2x שמאלה בסימן הפוך ונחסר.", math_expression: "3x - 2x = 8   =>   x = 8" }
        ],
        final_answer: "x = 8"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה ראשונה",
        question: "פתרו משוואה עם שברים עשרוניים:<br><br> 0.5x + 1.2 = 0.2x + 3",
        options: ["x = 6", "x = 5", "x = 1.8", "x = 4.2"],
        correctAnswer: 0,
        hint: "אפשר לעבוד עם השברים העשרוניים כפי שהם, או להכפיל את כל המשוואה ב-10 כדי לעבוד רק עם מספרים שלמים.",
        solution_steps: [
            { verbal_explanation: "כדי להקל על החישוב, נכפיל את כל המשוואה ב-10 להסרת הנקודה העשרונית.", math_expression: "10 × (0.5x + 1.2) = 10 × (0.2x + 3)" },
            { verbal_explanation: "נבצע את הכפל.", math_expression: "5x + 12 = 2x + 30" },
            { verbal_explanation: "נעביר את איברי ה-x שמאלה ואת המספרים ימינה.", math_expression: "5x - 2x = 30 - 12" },
            { verbal_explanation: "נכנס איברים ונחלק ב-3.", math_expression: "3x = 18   =>   x = 6" }
        ],
        final_answer: "x = 6"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה ראשונה",
        question: "פתרו את המשוואה הכוללת סוגריים בתוך סוגריים:<br><br> 2[x - 3(x - 1)] = -8",
        options: ["x = 3.5", "x = 2.5", "x = 1", "x = -1"],
        correctAnswer: 0,
        hint: "תמיד מתחילים בפתיחת הסוגריים הפנימיים ביותר (העגולים) ורק לאחר מכן פותחים את החיצוניים (המרובעים).",
        solution_steps: [
            { verbal_explanation: "נפתח קודם את הסוגריים העגולים הפנימיים.", math_expression: "2[x - 3x + 3] = -8" },
            { verbal_explanation: "נכנס איברים דומים בתוך הסוגריים המרובעים.", math_expression: "2[-2x + 3] = -8" },
            { verbal_explanation: "נפתח את הסוגריים המרובעים על ידי הכפלה ב-2 מבחוץ.", math_expression: "-4x + 6 = -8" },
            { verbal_explanation: "נעביר את המספר 6 ימינה בסימן מינוס.", math_expression: "-4x = -8 - 6   =>   -4x = -14" },
            { verbal_explanation: "נחלק במינוס 4 לקבלת התוצאה הסופית.", math_expression: "x = -14 / -4 = 3.5" }
        ],
        final_answer: "x = 3.5"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה ראשונה",
        question: `היקף של מלבן הוא 34 ס"מ. צלע אחת ארוכה ב-3 ס"מ מהצלע השנייה.<br>
        היעזרו בנתונים כדי לבנות משוואה ולמצוא את אורך הצלע הקצרה (נסמן אותה ב-x).<br><br>
        <svg viewBox="0 0 200 120" style="width:100%; max-width:220px; display:block; margin:0 auto;">
            <rect x="30" y="20" width="140" height="80" fill="#e0f2fe" stroke="#0f172a" stroke-width="3" />
            <text x="100" y="15" text-anchor="middle" font-weight="bold" fill="#dc2626">x + 3</text>
            <text x="15" y="65" text-anchor="middle" font-weight="bold" fill="#dc2626">x</text>
        </svg>`,
        options: ["7 ס\"מ", "10 ס\"מ", "14 ס\"מ", "8.5 ס\"מ"],
        correctAnswer: 0,
        hint: "היקף מלבן שווה לפעמיים הצלע הקצרה ועוד פעמיים הצלע הארוכה. המשוואה תהיה: 2x + 2(x + 3) = 34.",
        solution_steps: [
            { verbal_explanation: "נסמן את הצלע הקצרה באות x. לכן הצלע הארוכה תהיה x + 3.", math_expression: "רוחב = x,  אורך = x + 3" },
            { verbal_explanation: "נוסחת היקף מלבן היא סכום כל 4 הצלעות.", math_expression: "2x + 2(x + 3) = 34" },
            { verbal_explanation: "נפתח את הסוגריים.", math_expression: "2x + 2x + 6 = 34" },
            { verbal_explanation: "נכנס את איברי ה-x ונעביר את המספר 6 לאגף ימין.", math_expression: "4x = 34 - 6" },
            { verbal_explanation: "נחסר ונחלק ב-4 למציאת התשובה.", math_expression: "4x = 28   =>   x = 7" },
            { verbal_explanation: "מכיוון ש-x מייצג את הצלע הקצרה, זוהי התשובה הסופית.", math_expression: "הצלע הקצרה היא 7 ס\"מ" }
        ],
        final_answer: "7 ס\"מ"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה ראשונה",
        question: "כמה פתרונות יש למשוואה הבאה?<br><br> 4(x - 2) = 2(2x - 4)",
        options: ["אינסוף פתרונות", "אין פתרון", "פתרון יחיד (x = 0)", "פתרון יחיד (x = 2)"],
        correctAnswer: 0,
        hint: "פתחו סוגריים. אם מתקבל פסוק אמת מוחלט (שני האגפים זהים לחלוטין), המשמעות היא שכל מספר יקיים את המשוואה.",
        solution_steps: [
            { verbal_explanation: "נפתח סוגריים בשני האגפים.", math_expression: "4x - 8 = 4x - 8" },
            { verbal_explanation: "נעביר איברי x שמאלה ומספרים ימינה.", math_expression: "4x - 4x = -8 + 8" },
            { verbal_explanation: "נכנס איברים ונראה ששני האגפים מתאפסים.", math_expression: "0 = 0" },
            { verbal_explanation: "היות וקיבלנו פסוק אמת, המשוואה נכונה תמיד ולכן כל ערך שנציב יהיה נכון.", math_expression: "אינסוף פתרונות" }
        ],
        final_answer: "אינסוף פתרונות"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה ראשונה",
        question: "כמה פתרונות יש למשוואה הבאה?<br><br> 3x + 5 = 3(x + 2)",
        options: ["אין פתרון", "פתרון יחיד", "אינסוף פתרונות", "שני פתרונות"],
        correctAnswer: 0,
        hint: "פתחו סוגריים ונסו לכנס איברים. אם המשתנים מתבטלים ונשאר לכם שוויון שקרי, המשמעות היא שאין למשוואה אף פתרון הגיוני.",
        solution_steps: [
            { verbal_explanation: "נפתח את הסוגריים באגף ימין.", math_expression: "3x + 5 = 3x + 6" },
            { verbal_explanation: "נעביר את כל איברי ה-x לאגף שמאל.", math_expression: "3x - 3x = 6 - 5" },
            { verbal_explanation: "נכנס איברים. ה-x מתבטל ונשארנו עם שוויון לא הגיוני.", math_expression: "0 = 1" },
            { verbal_explanation: "מכיוון שאפס לעולם אינו שווה לאחד, הרי שלמשוואה זו אין פתרון.", math_expression: "אין פתרון" }
        ],
        final_answer: "אין פתרון"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה ראשונה",
        question: `לפניכם מאזניים מאוזנים. על כף ימין יש 3 קופסאות זהות במשקל x ומשקולת של 5 ק"ג. על כף שמאל יש קופסה אחת ושתי משקולות של 10 ק"ג. מהו משקל כל קופסה (x)?<br><br>
        <svg viewBox="0 0 200 100" style="width:100%; max-width:250px; display:block; margin:0 auto;">
            <line x1="100" y1="80" x2="100" y2="40" stroke="#0f172a" stroke-width="4" />
            <line x1="40" y1="40" x2="160" y2="40" stroke="#0f172a" stroke-width="4" />
            <polygon points="80,100 120,100 100,80" fill="#cbd5e1" />
            <rect x="35" y="15" width="20" height="25" fill="#f59e0b" />
            <text x="45" y="32" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">20</text>
            <rect x="58" y="15" width="20" height="25" fill="#3b82f6" />
            <text x="68" y="32" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">x</text>
            
            <rect x="130" y="15" width="15" height="25" fill="#3b82f6" />
            <text x="137" y="32" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">x</text>
            <rect x="148" y="15" width="15" height="25" fill="#3b82f6" />
            <text x="155" y="32" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">x</text>
            <rect x="166" y="15" width="15" height="25" fill="#3b82f6" />
            <text x="173" y="32" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">x</text>
            <rect x="110" y="15" width="15" height="25" fill="#f59e0b" />
            <text x="117" y="32" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">5</text>
        </svg>`,
        options: ["7.5 ק\"ג", "5 ק\"ג", "10 ק\"ג", "15 ק\"ג"],
        correctAnswer: 0,
        hint: "בנו משוואה המתארת את מצב שיווי המשקל: המשקל בצד שמאל שווה למשקל בצד ימין.",
        solution_steps: [
            { verbal_explanation: "נייצג את המשקל על כף שמאל: קופסה אחת ועוד שתי משקולות של 10 ק\"ג.", math_expression: "x + 20" },
            { verbal_explanation: "נייצג את המשקל על כף ימין: שלוש קופסאות ועוד משקולת של 5 ק\"ג.", math_expression: "3x + 5" },
            { verbal_explanation: "המאזניים מאוזנים ולכן נשווה בין האגפים.", math_expression: "x + 20 = 3x + 5" },
            { verbal_explanation: "נעביר את x ימינה ואת 5 שמאלה.", math_expression: "20 - 5 = 3x - x" },
            { verbal_explanation: "נחסר איברים.", math_expression: "15 = 2x" },
            { verbal_explanation: "נחלק ב-2 למציאת משקל הקופסה הבודדת.", math_expression: "x = 7.5" }
        ],
        final_answer: "7.5 ק\"ג"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה ראשונה",
        question: "פתרו את המשוואה בעלת המקדמים הגדולים:<br><br> 150x - 300 = 50x + 700",
        options: ["x = 10", "x = 100", "x = 5", "x = 15"],
        correctAnswer: 0,
        hint: "אפשר לפתור רגיל, או לחלק את כל המשוואה ב-50 על ההתחלה כדי לעבוד עם מספרים קטנים ונוחים יותר.",
        solution_steps: [
            { verbal_explanation: "נעביר את 50x לאגף שמאל (בסימן מינוס), ואת מינוס 300 לאגף ימין (בסימן פלוס).", math_expression: "150x - 50x = 700 + 300" },
            { verbal_explanation: "נבצע חיסור וחיבור רגילים.", math_expression: "100x = 1000" },
            { verbal_explanation: "נחלק את המשוואה במקדם של x (שהוא 100).", math_expression: "x = 1000 / 100" },
            { verbal_explanation: "נקבל את התוצאה הסופית.", math_expression: "x = 10" }
        ],
        final_answer: "x = 10"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה ראשונה",
        question: `במשולש נתון, זווית אחת היא בת x מעלות, זווית שנייה גדולה ממנה פי 2, והזווית השלישית גדולה ממנה ב-20 מעלות. מצאו את גודל הזווית הראשונה (x).<br><br>
        <svg viewBox="0 0 200 120" style="width:100%; max-width:220px; display:block; margin:0 auto;">
            <polygon points="20,100 180,100 100,20" fill="#fdfcf8" stroke="#0f172a" stroke-width="2" />
            <text x="50" y="90" font-size="12" font-weight="bold" fill="#dc2626">x</text>
            <text x="140" y="90" font-size="12" font-weight="bold" fill="#dc2626">2x</text>
            <text x="90" y="50" font-size="12" font-weight="bold" fill="#dc2626">x+20</text>
        </svg>`,
        options: ["40 מעלות", "30 מעלות", "45 מעלות", "50 מעלות"],
        correctAnswer: 0,
        hint: "סכום הזוויות במשולש הוא תמיד 180 מעלות. חברו את שלושת הביטויים והשוו אותם ל-180.",
        solution_steps: [
            { verbal_explanation: "נרשום את הייצוג האלגברי של שלוש הזוויות.", math_expression: "זווית א' = x,  זווית ב' = 2x,  זווית ג' = x + 20" },
            { verbal_explanation: "נרכיב משוואה המבוססת על כך שסכום זוויות במשולש הוא 180.", math_expression: "x + 2x + (x + 20) = 180" },
            { verbal_explanation: "נכנס איברים דומים באגף שמאל.", math_expression: "4x + 20 = 180" },
            { verbal_explanation: "נעביר את 20 לאגף ימין בסימן מינוס.", math_expression: "4x = 180 - 20" },
            { verbal_explanation: "נחסר ונחלק ב-4.", math_expression: "4x = 160   =>   x = 40" }
        ],
        final_answer: "40 מעלות"
    },

    // ==========================================
    // תת נושא 2: מערכת משוואות בשני נעלמים
    // ==========================================
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "מערכת משוואות בשני נעלמים",
        question: "פתרו את מערכת המשוואות הבאה:<br><br> x + y = 10<br> x - y = 4",
        options: ["(7, 3)", "(6, 4)", "(8, 2)", "(3, 7)"],
        correctAnswer: 0,
        hint: "השתמשו בשיטת חיבור משוואות (השוואת מקדמים). חברו את שתי המשוואות וה-y יתבטל.",
        solution_steps: [
            { verbal_explanation: "נחבר את שתי המשוואות יחד. ה-y והמינוס y מתבטלים.", math_expression: "(x + x) + (y - y) = 10 + 4" },
            { verbal_explanation: "נקבל משוואה פשוטה עם נעלם אחד.", math_expression: "2x = 14" },
            { verbal_explanation: "נחלק ב-2 ונמצא את ערכו של x.", math_expression: "x = 7" },
            { verbal_explanation: "נציב את ה-x שמצאנו באחת המשוואות המקוריות כדי למצוא את y.", math_expression: "7 + y = 10   =>   y = 3" },
            { verbal_explanation: "נרשום את הפתרון כזוג סדור (x, y).", math_expression: "(7, 3)" }
        ],
        final_answer: "(7, 3)"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "מערכת משוואות בשני נעלמים",
        question: `פתרו את המערכת בעזרת שיטת ההצבה:<br><br> y = 2x<br> x + y = 12<br><br>
        <svg viewBox="0 0 200 100" style="width:100%; max-width:200px; display:block; margin:0 auto;">
            <line x1="20" y1="80" x2="180" y2="20" stroke="#3b82f6" stroke-width="3" />
            <line x1="40" y1="10" x2="160" y2="90" stroke="#dc2626" stroke-width="3" />
            <circle cx="110" cy="55" r="5" fill="#f59e0b" />
            <text x="125" y="55" font-size="12" font-weight="bold">נקודת חיתוך</text>
        </svg>`,
        options: ["(4, 8)", "(8, 4)", "(3, 6)", "(6, 12)"],
        correctAnswer: 0,
        hint: "מכיוון שהמשוואה הראשונה כבר מבודדת את y, פשוט קחו את הערך 2x והציבו אותו במקום ה-y במשוואה השנייה.",
        solution_steps: [
            { verbal_explanation: "נציב את הביטוי של y מתוך המשוואה הראשונה אל תוך המשוואה השנייה.", math_expression: "x + (2x) = 12" },
            { verbal_explanation: "נכנס איברים באגף שמאל.", math_expression: "3x = 12" },
            { verbal_explanation: "נחלק ב-3 למציאת x.", math_expression: "x = 4" },
            { verbal_explanation: "נציב את x שמצאנו במשוואה הראשונה למציאת y.", math_expression: "y = 2 × 4 = 8" },
            { verbal_explanation: "נרשום את הפתרון הסופי.", math_expression: "(4, 8)" }
        ],
        final_answer: "(4, 8)"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "מערכת משוואות בשני נעלמים",
        question: "פתרו את המערכת הבאה שבה נדרשת הכפלת משוואה:<br><br> 2x + y = 8<br> 3x - 2y = 5",
        options: ["(3, 2)", "(2, 4)", "(4, 0)", "(1, 6)"],
        correctAnswer: 0,
        hint: "כדי להשתמש בשיטת חיבור המשוואות, הכפילו את המשוואה הראשונה פי 2 כדי לקבל 2y, שיתבטל עם ה-מינוס 2y במשוואה השנייה.",
        solution_steps: [
            { verbal_explanation: "נכפיל את המשוואה העליונה פי 2.", math_expression: "4x + 2y = 16" },
            { verbal_explanation: "נרשום מתחתיה את המשוואה השנייה כמו שהיא ונחבר ביניהן.", math_expression: "משוואה שנייה: 3x - 2y = 5" },
            { verbal_explanation: "חיבור המשוואות יעלים את ה-y לחלוטין.", math_expression: "(4x + 3x) + (2y - 2y) = 16 + 5" },
            { verbal_explanation: "נפתור את המשוואה החדשה שהתקבלה.", math_expression: "7x = 21   =>   x = 3" },
            { verbal_explanation: "נציב x=3 במשוואה הראשונה המקורית למציאת y.", math_expression: "2(3) + y = 8   =>   6 + y = 8   =>   y = 2" }
        ],
        final_answer: "(3, 2)"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "מערכת משוואות בשני נעלמים",
        question: "פתרו את המערכת הבאה (מומלץ להכפיל את שתי המשוואות):<br><br> 3x + 2y = 12<br> 4x - 3y = -1",
        options: ["(2, 3)", "(3, 2)", "(4, 0)", "(-2, 9)"],
        correctAnswer: 0,
        hint: "הכפילו את המשוואה הראשונה ב-3 ואת השנייה ב-2. כך תקבלו 6y ו-מינוס 6y, שיתבטלו בחיבור.",
        solution_steps: [
            { verbal_explanation: "נכפיל את משוואה מספר 1 פי 3.", math_expression: "9x + 6y = 36" },
            { verbal_explanation: "נכפיל את משוואה מספר 2 פי 2.", math_expression: "8x - 6y = -2" },
            { verbal_explanation: "נחבר את שתי המשוואות המורחבות יחד. נעלם ה-y מתבטל.", math_expression: "(9x + 8x) + (6y - 6y) = 36 - 2" },
            { verbal_explanation: "נפשט ונפתור עבור x.", math_expression: "17x = 34   =>   x = 2" },
            { verbal_explanation: "נציב x=2 במשוואה הראשונה המקורית למציאת y.", math_expression: "3(2) + 2y = 12   =>   6 + 2y = 12" },
            { verbal_explanation: "נבודד את y.", math_expression: "2y = 6   =>   y = 3" }
        ],
        final_answer: "(2, 3)"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "מערכת משוואות בשני נעלמים",
        question: "פתרו מערכת משוואות עם סוגריים:<br><br> x + (y - 1) = 5<br> 2(x - 1) - y = 4",
        options: ["(4, 2)", "(3, 3)", "(5, 1)", "(2, 4)"],
        correctAnswer: 0,
        hint: "לפני שתנסו לפתור, פתחו את הסוגריים בכל משוואה וסדרו אותה כך שהמשתנים יהיו בצד אחד והמספרים בצד שני.",
        solution_steps: [
            { verbal_explanation: "נסדר את המשוואה הראשונה: נעביר את המינוס 1 לאגף הימני.", math_expression: "x + y = 5 + 1   =>   x + y = 6" },
            { verbal_explanation: "נסדר את המשוואה השנייה: נפתח סוגריים ונעביר מספרים ימינה.", math_expression: "2x - 2 - y = 4   =>   2x - y = 6" },
            { verbal_explanation: "כעת נחבר את שתי המשוואות המסודרות. ה-y מתבטל.", math_expression: "(x + 2x) + (y - y) = 6 + 6" },
            { verbal_explanation: "נפתור עבור x.", math_expression: "3x = 12   =>   x = 4" },
            { verbal_explanation: "נציב את x במשוואה הראשונה המאורגנת למציאת y.", math_expression: "4 + y = 6   =>   y = 2" }
        ],
        final_answer: "(4, 2)"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "מערכת משוואות בשני נעלמים",
        question: "פתרו מערכת משוואות המכילה שברים:<br><br> x/2 + y/3 = 4<br> x/4 - y = -5",
        options: ["(4, 6)", "(6, 4)", "(8, 0)", "(2, 9)"],
        correctAnswer: 0,
        hint: "הכפילו כל משוואה במכנה המשותף שלה (משוואה ראשונה ב-6, משוואה שנייה ב-4) כדי לקבל מערכת פשוטה ללא שברים.",
        solution_steps: [
            { verbal_explanation: "נכפיל את המשוואה הראשונה ב-6.", math_expression: "3x + 2y = 24" },
            { verbal_explanation: "נכפיל את המשוואה השנייה ב-4.", math_expression: "x - 4y = -20" },
            { verbal_explanation: "נבודד את x מתוך המשוואה השנייה שסידרנו.", math_expression: "x = 4y - 20" },
            { verbal_explanation: "נציב את הביטוי הזה בתוך המשוואה הראשונה המסודרת.", math_expression: "3(4y - 20) + 2y = 24" },
            { verbal_explanation: "נפתח סוגריים ונפתור עבור y.", math_expression: "12y - 60 + 2y = 24   =>   14y = 84   =>   y = 6" },
            { verbal_explanation: "נציב את y במשוואה המבודדת ונמצא את x.", math_expression: "x = 4(6) - 20 = 24 - 20 = 4" }
        ],
        final_answer: "(4, 6)"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "מערכת משוואות בשני נעלמים",
        question: "כמה פתרונות יש למערכת המשוואות הבאה?<br><br> 2x + y = 5<br> 4x + 2y = 10",
        options: ["אינסוף פתרונות (הישרים מתלכדים)", "אין פתרון (הישרים מקבילים)", "פתרון יחיד בראשית הצירים", "פתרון יחיד"],
        correctAnswer: 0,
        hint: "נסו לחלק את המשוואה השנייה ב-2. מה גיליתם לגבי הקשר בין שתי המשוואות?",
        solution_steps: [
            { verbal_explanation: "נבחין שהמשוואה השנייה היא למעשה כפולה מדויקת של המשוואה הראשונה.", math_expression: "(4x + 2y = 10) / 2   =>   2x + y = 5" },
            { verbal_explanation: "קיבלנו ששתי המשוואות זהות לחלוטין. בייצוג גרפי, אלו שני ישרים שיושבים בדיוק אחד על השני.", math_expression: "ישרים מתלכדים" },
            { verbal_explanation: "לכן, כל נקודה שנמצאת על הישר תהווה פתרון למערכת.", math_expression: "אינסוף פתרונות" }
        ],
        final_answer: "אינסוף פתרונות (הישרים מתלכדים)"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "מערכת משוואות בשני נעלמים",
        question: "מה קורה במערכת הבאה מבחינה גיאומטרית?<br><br> x - y = 4<br> -2x + 2y = -8",
        options: ["שני הישרים מתלכדים (אינסוף פתרונות)", "הישרים מקבילים (אין פתרון)", "הישרים נחתכים בנקודה אחת", "הישרים מאונכים זה לזה"],
        correctAnswer: 0,
        hint: "חלקו את המשוואה השנייה במינוס 2 ובידקו האם היא שווה למשוואה הראשונה.",
        solution_steps: [
            { verbal_explanation: "נסתכל על המשוואה השנייה ונחלק את כולה במינוס 2.", math_expression: "(-2x) / (-2) + (2y) / (-2) = (-8) / (-2)" },
            { verbal_explanation: "נקבל את המשוואה המפושטת.", math_expression: "x - y = 4" },
            { verbal_explanation: "שתי המשוואות זהות לחלוטין. מדובר באותו הישר בדיוק.", math_expression: "זהות בין המשוואות" },
            { verbal_explanation: "כאשר ישרים מתלכדים, כל נקודה עליהם היא פתרון משותף.", math_expression: "אינסוף פתרונות" }
        ],
        final_answer: "שני הישרים מתלכדים (אינסוף פתרונות)"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "מערכת משוואות בשני נעלמים",
        question: `מה משמעות הפתרון של המערכת הבאה?<br><br>
        2x + y = 5<br> 2x + y = 10<br><br>
        <svg viewBox="0 0 200 100" style="width:100%; max-width:200px; display:block; margin:0 auto;">
            <line x1="20" y1="80" x2="180" y2="20" stroke="#dc2626" stroke-width="3" />
            <line x1="20" y1="50" x2="180" y2="-10" stroke="#3b82f6" stroke-width="3" />
        </svg>`,
        options: ["אין פתרון למערכת (הישרים מקבילים)", "אינסוף פתרונות", "יש פתרון בראשית הצירים", "יש שני פתרונות"],
        correctAnswer: 0,
        hint: "חישבו בהיגיון: האם ייתכן שביטוי מסוים יהיה שווה גם ל-5 וגם ל-10 באותו זמן? בגיאומטריה, אלו ישרים בעלי אותו שיפוע שלעולם לא ייפגשו.",
        solution_steps: [
            { verbal_explanation: "נחסר את המשוואה השנייה מהראשונה.", math_expression: "(2x - 2x) + (y - y) = 5 - 10" },
            { verbal_explanation: "המשתנים בצד שמאל מתבטלים לחלוטין.", math_expression: "0 = -5" },
            { verbal_explanation: "קיבלנו פסוק שקר, מכיוון ש-0 לא שווה למינוס 5.", math_expression: "פסוק שקר" },
            { verbal_explanation: "המשמעות היא שאין למערכת אף נקודת מפגש. הישרים מקבילים.", math_expression: "אין פתרון" }
        ],
        final_answer: "אין פתרון למערכת (הישרים מקבילים)"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "מערכת משוואות בשני נעלמים",
        question: "פתרו את המערכת הבאה בשיטת ההצבה:<br><br> x - 2y = 3<br> 4x + y = 21",
        options: ["(5, 1)", "(3, 0)", "(1, -1)", "(7, 2)"],
        correctAnswer: 0,
        hint: "בודדו את המשתנה x במשוואה הראשונה (העבירו את מינוס 2y לאגף ימין), ואז הציבו את כל הביטוי במשוואה השנייה.",
        solution_steps: [
            { verbal_explanation: "נבודד את המשתנה x במשוואה העליונה.", math_expression: "x = 2y + 3" },
            { verbal_explanation: "נציב את הביטוי במקום x במשוואה התחתונה.", math_expression: "4(2y + 3) + y = 21" },
            { verbal_explanation: "נפתח סוגריים ונכנס איברים.", math_expression: "8y + 12 + y = 21   =>   9y + 12 = 21" },
            { verbal_explanation: "נפתור עבור y.", math_expression: "9y = 9   =>   y = 1" },
            { verbal_explanation: "נציב את ערך ה-y לתוך הביטוי שבודדנו עבור x.", math_expression: "x = 2(1) + 3 = 5" }
        ],
        final_answer: "(5, 1)"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "מערכת משוואות בשני נעלמים",
        question: "פתרו מערכת משוואות עם מספרים עשרוניים:<br><br> 0.5x + 0.2y = 2.4<br> x - 0.4y = 1.6",
        options: ["(3.2, 4)", "(4, 2)", "(2.5, 5)", "(3, 4.5)"],
        correctAnswer: 0,
        hint: "הכפילו את שתי המשוואות ב-10 כדי לעבוד רק עם מספרים שלמים. לאחר מכן, פתרו בשיטת חיבור משוואות.",
        solution_steps: [
            { verbal_explanation: "נכפיל את שתי המשוואות ב-10 כדי להעלים את הנקודה העשרונית.", math_expression: "משוואה א: 5x + 2y = 24 \n משוואה ב: 10x - 4y = 16" },
            { verbal_explanation: "נכפיל את המשוואה הראשונה (החדשה) ב-2 כדי להשוות את מקדמי ה-y.", math_expression: "10x + 4y = 48" },
            { verbal_explanation: "נחבר את המשוואה הזו עם המשוואה השנייה. ה-y מתבטל.", math_expression: "(10x + 10x) = 48 + 16" },
            { verbal_explanation: "נפתור עבור x.", math_expression: "20x = 64   =>   x = 3.2" },
            { verbal_explanation: "נציב את x באחת המשוואות ונמצא את y.", math_expression: "5(3.2) + 2y = 24   =>   16 + 2y = 24   =>   2y = 8   =>   y = 4" }
        ],
        final_answer: "(3.2, 4)"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "מערכת משוואות בשני נעלמים",
        question: "דני קנה 5 מחברות ו-2 עטים ושילם 34 שקלים. יעל קנתה 3 מחברות ו-4 עטים באותה חנות ושילמה 33 שקלים.<br>מה מחירו של עט אחד (y)?",
        options: ["4.5 שקלים", "5 שקלים", "3 שקלים", "4 שקלים"],
        correctAnswer: 0,
        hint: "בנו את המערכת: 5x + 2y = 34 ומשוואה שניה 3x + 4y = 33. כדאי להכפיל את המשוואה הראשונה ב-2 ולחסר משוואות כדי למצוא את x קודם.",
        solution_steps: [
            { verbal_explanation: "נגדיר משתנים. נסמן ב-x מחיר מחברת, וב-y מחיר עט. נבנה משוואות.", math_expression: "משוואה 1: 5x + 2y = 34 \n משוואה 2: 3x + 4y = 33" },
            { verbal_explanation: "נכפיל את המשוואה הראשונה ב-2 כדי שיהיה קל לחסר את ה-y.", math_expression: "10x + 4y = 68" },
            { verbal_explanation: "נחסר את המשוואה השנייה מהמשוואה המורחבת.", math_expression: "(10x - 3x) + (4y - 4y) = 68 - 33" },
            { verbal_explanation: "נמצא את מחירו של ה-x (מחברת).", math_expression: "7x = 35   =>   x = 5" },
            { verbal_explanation: "נציב את ערך המחברת כדי למצוא את העט (y).", math_expression: "5(5) + 2y = 34   =>   25 + 2y = 34" },
            { verbal_explanation: "נבודד את y.", math_expression: "2y = 9   =>   y = 4.5" }
        ],
        final_answer: "4.5 שקלים"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "מערכת משוואות בשני נעלמים",
        question: "פתרו את המערכת הבאה שבה נעלם מופיע בשני האגפים:<br><br> 3x - y = x + y + 2<br> 2x + 3y = 12",
        options: ["(3, 2)", "(4, 1)", "(2, 3)", "(5, 0)"],
        correctAnswer: 0,
        hint: "סדרו תחילה את המשוואה הראשונה: העבירו את איברי ה-x וה-y לאגף שמאל. לאחר מכן, תוכלו לחלק את המשוואה שתתקבל ב-2 ולבודד משתנה.",
        solution_steps: [
            { verbal_explanation: "נסדר את המשוואה העליונה.", math_expression: "3x - x - y - y = 2   =>   2x - 2y = 2" },
            { verbal_explanation: "נחלק את המשוואה שסידרנו ב-2 ונבודד את x.", math_expression: "x - y = 1   =>   x = y + 1" },
            { verbal_explanation: "נציב את הביטוי שמצאנו בתוך המשוואה התחתונה.", math_expression: "2(y + 1) + 3y = 12" },
            { verbal_explanation: "נפתח סוגריים ונסדר איברים.", math_expression: "2y + 2 + 3y = 12   =>   5y = 10" },
            { verbal_explanation: "נמצא את y ואז נציב למציאת x.", math_expression: "y = 2   =>   x = 2 + 1 = 3" }
        ],
        final_answer: "(3, 2)"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "מערכת משוואות בשני נעלמים",
        question: "היקף מלבן הוא 24 ס\"מ. ההפרש בין אורך המלבן לרוחבו הוא 2 ס\"מ. מהן מידות המלבן?",
        options: ["7 ו-5", "8 ו-4", "6 ו-4", "9 ו-3"],
        correctAnswer: 0,
        hint: "סמנו אורך באות x, רוחב באות y. בנו שתי משוואות. הראשונה: ההיקף הוא 2x+2y=24. השנייה: ההפרש הוא x-y=2.",
        solution_steps: [
            { verbal_explanation: "נגדיר את מידות המלבן.", math_expression: "אורך = x, רוחב = y" },
            { verbal_explanation: "המשוואה הראשונה מתארת את ההיקף.", math_expression: "2x + 2y = 24" },
            { verbal_explanation: "ניתן לחלק משוואה זו ב-2 לשם פשטות.", math_expression: "x + y = 12" },
            { verbal_explanation: "המשוואה השנייה מתארת את ההפרש בין הצלעות.", math_expression: "x - y = 2" },
            { verbal_explanation: "נחבר את שתי המשוואות בשיטת השוואת מקדמים. ה-y יתבטל.", math_expression: "(x + x) + (y - y) = 12 + 2" },
            { verbal_explanation: "נפתור עבור x ו-y.", math_expression: "2x = 14   =>   x = 7 \n 7 + y = 12   =>   y = 5" }
        ],
        final_answer: "7 ו-5"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "מערכת משוואות בשני נעלמים",
        question: "במפעל מייצרים שני סוגי ברגים. 5 ברגים מסוג א' ו-3 ברגים מסוג ב' שוקלים יחד 37 גרם. 2 ברגים מסוג א' ו-4 ברגים מסוג ב' שוקלים יחד 26 גרם.<br> מהו המשקל של בורג מסוג ב' (y)?",
        options: ["4 גרם", "5 גרם", "3 גרם", "6 גרם"],
        correctAnswer: 0,
        hint: "משוואות: 5x+3y=37 ו- 2x+4y=26. אפשר לחלק את המשוואה השנייה ב-2 כדי לקבל x+2y=13, לבודד את x, ולהציב במשוואה הראשונה.",
        solution_steps: [
            { verbal_explanation: "נבנה את המערכת. x מייצג בורג א', y מייצג בורג ב'.", math_expression: "משוואה 1: 5x + 3y = 37 \n משוואה 2: 2x + 4y = 26" },
            { verbal_explanation: "נפשט את המשוואה השנייה על ידי חלוקה ב-2 ונבודד את x.", math_expression: "x + 2y = 13   =>   x = 13 - 2y" },
            { verbal_explanation: "נציב את הביטוי במשוואה הראשונה.", math_expression: "5(13 - 2y) + 3y = 37" },
            { verbal_explanation: "נפתח סוגריים ונכנס איברים.", math_expression: "65 - 10y + 3y = 37   =>   -7y = 37 - 65" },
            { verbal_explanation: "נחסר ונחלק במינוס 7 למציאת משקל בורג ב'.", math_expression: "-7y = -28   =>   y = 4" }
        ],
        final_answer: "4 גרם"
    },,
    // ==========================================
    // תת נושא 3: פתרון משוואה ממעלה שנייה
    // ==========================================
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה שנייה",
        question: `פתרו את המשוואה הריבועית הבאה באמצעות נוסחת השורשים:<br><br>
        x² - 5x + 6 = 0<br><br>
        <svg viewBox="0 0 200 100" style="width:100%; max-width:250px; display:block; margin:10px auto;">
            <path d="M 20 50 L 180 50" stroke="#cbd5e1" stroke-width="2" />
            <path d="M 100 10 L 100 90" stroke="#cbd5e1" stroke-width="2" />
            <path d="M 60 10 Q 100 130 140 10" fill="none" stroke="#dc2626" stroke-width="3" />
            <circle cx="85" cy="50" r="5" fill="#0f172a" />
            <circle cx="115" cy="50" r="5" fill="#0f172a" />
            <text x="75" y="70" font-size="14" fill="#0f172a" font-weight="bold">x1</text>
            <text x="120" y="70" font-size="14" fill="#0f172a" font-weight="bold">x2</text>
        </svg>
        (האיור ממחיש כי פתרון המשוואה הוא מציאת נקודות החיתוך של הפרבולה עם ציר האיקס).`,
        options: ["x1 = 2, x2 = 3", "x1 = -2, x2 = -3", "x1 = 1, x2 = 6", "אין פתרון"],
        correctAnswer: 0,
        hint: "זהו את המקדמים: המקדם a הוא 1, המקדם b הוא מינוס 5, והמספר החופשי c הוא 6. הציבו בנוסחת השורשים.",
        solution_steps: [
            { verbal_explanation: "נזהה את המקדמים של המשוואה הריבועית.", math_expression: "a = 1,  b = -5,  c = 6" },
            { verbal_explanation: "נציב את המקדמים בתוך נוסחת השורשים: מינוס b פלוס/מינוס שורש של (b בריבוע פחות 4ac) חלקי 2a.", math_expression: "x1,2 = (5 ± √((-5)² - 4 × 1 × 6)) / 2" },
            { verbal_explanation: "נחשב תחילה את הביטוי שנמצא בתוך השורש (הדיסקרימיננטה).", math_expression: "25 - 24 = 1" },
            { verbal_explanation: "נוציא שורש למספר שקיבלנו. השורש של 1 הוא 1.", math_expression: "x1,2 = (5 ± 1) / 2" },
            { verbal_explanation: "נחשב את הפתרון הראשון באמצעות פעולת החיבור.", math_expression: "x1 = (5 + 1) / 2 = 6 / 2 = 3" },
            { verbal_explanation: "נחשב את הפתרון השני באמצעות פעולת החיסור.", math_expression: "x2 = (5 - 1) / 2 = 4 / 2 = 2" }
        ],
        final_answer: "x1 = 2, x2 = 3"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה שנייה",
        question: "פתרו את המשוואה הריבועית הבאה שבה יש פתרון חיובי ושלילי:<br><br> x² + 2x - 8 = 0",
        options: ["x = 2, x = -4", "x = -2, x = 4", "x = 2, x = 4", "x = -2, x = -4"],
        correctAnswer: 0,
        hint: "הציבו את המקדמים a=1, b=2, c=-8 בנוסחת השורשים. שימו לב שמתחת לשורש יש לכם מינוס כפול מינוס שהופך לפלוס.",
        solution_steps: [
            { verbal_explanation: "נזהה את המקדמים של המשוואה.", math_expression: "a = 1,  b = 2,  c = -8" },
            { verbal_explanation: "נציב בנוסחת השורשים.", math_expression: "x1,2 = (-2 ± √(2² - 4 × 1 × (-8))) / 2" },
            { verbal_explanation: "נחשב את הביטוי שמתחת לשורש (מינוס 4 כפול 1 כפול מינוס 8 שווה לפלוס 32).", math_expression: "4 + 32 = 36" },
            { verbal_explanation: "נוציא שורש מ-36 ונקבל 6.", math_expression: "x1,2 = (-2 ± 6) / 2" },
            { verbal_explanation: "נחשב את שתי האפשרויות לפתרון.", math_expression: "x1 = (-2 + 6) / 2 = 4 / 2 = 2" },
            { verbal_explanation: "הפתרון השני:", math_expression: "x2 = (-2 - 6) / 2 = -8 / 2 = -4" }
        ],
        final_answer: "x = 2, x = -4"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה שנייה",
        question: "פתרו את המשוואה הריבועית החסרה הבאה (משוואה ללא המספר החופשי c):<br><br> x² - 7x = 0",
        options: ["x = 0, x = 7", "x = 7, x = -7", "x = 0, x = -7", "x = 7 בלבד"],
        correctAnswer: 0,
        hint: "כאשר האיבר החופשי חסר, הדרך המהירה והקלה ביותר היא להוציא את המשתנה x כגורם משותף מחוץ לסוגריים ולהשוות כל חלק לאפס.",
        solution_steps: [
            { verbal_explanation: "נוציא את x כגורם משותף מחוץ לסוגריים.", math_expression: "x(x - 7) = 0" },
            { verbal_explanation: "מכפלה שווה לאפס רק אם לפחות אחד מהגורמים שווה לאפס. נשווה את הגורם הראשון (x) לאפס.", math_expression: "x1 = 0" },
            { verbal_explanation: "נשווה את הגורם השני (הביטוי שבתוך הסוגריים) לאפס.", math_expression: "x - 7 = 0" },
            { verbal_explanation: "נעביר את מינוס 7 לאגף ימין לקבלת הפתרון השני.", math_expression: "x2 = 7" }
        ],
        final_answer: "x = 0, x = 7"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה שנייה",
        question: "פתרו את המשוואה החסרה הבאה (משוואה ללא המקדם האמצעי b):<br><br> 2x² - 50 = 0",
        options: ["x = 5, x = -5", "x = 25, x = -25", "x = 5 בלבד", "אין פתרון"],
        correctAnswer: 0,
        hint: "העבירו את המספר לאגף ימין, חלקו את המשוואה ב-2, ולאחר מכן הוציאו שורש ריבועי. אל תשכחו ששורש נותן שתי תשובות: חיובית ושלילית.",
        solution_steps: [
            { verbal_explanation: "נעביר את המספר החופשי (מינוס 50) לאגף הימני (הוא הופך לפלוס 50).", math_expression: "2x² = 50" },
            { verbal_explanation: "נחלק את שני אגפי המשוואה ב-2 כדי לבודד את x².", math_expression: "x² = 25" },
            { verbal_explanation: "נוציא שורש ריבועי משני האגפים. כל מספר חיובי או שלילי שנעלה בריבוע ייתן תוצאה חיובית, ולכן ניקח את שתי האפשרויות.", math_expression: "x = ±√25" },
            { verbal_explanation: "נקבל את שני הפתרונות הסופיים.", math_expression: "x1 = 5,  x2 = -5" }
        ],
        final_answer: "x = 5, x = -5"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה שנייה",
        question: "סדרו ופתרו את המשוואה הבאה:<br><br> x(x - 3) = 10",
        options: ["x = 5, x = -2", "x = -5, x = 2", "x = 5, x = 2", "x = 10, x = 1"],
        correctAnswer: 0,
        hint: "ראשית, פתחו את הסוגריים על ידי הכפלת x בשני האיברים בפנים. לאחר מכן, העבירו את 10 לאגף שמאל כדי לאפס את המשוואה והשתמשו בנוסחת השורשים.",
        solution_steps: [
            { verbal_explanation: "נפתח את הסוגריים באגף שמאל.", math_expression: "x² - 3x = 10" },
            { verbal_explanation: "נעביר את 10 לאגף השמאלי (בסימן מינוס) כדי להגיע לצורה שבה אגף ימין שווה לאפס.", math_expression: "x² - 3x - 10 = 0" },
            { verbal_explanation: "נציב את המקדמים (a=1, b=-3, c=-10) בנוסחת השורשים.", math_expression: "x1,2 = (3 ± √((-3)² - 4 × 1 × (-10))) / 2" },
            { verbal_explanation: "נחשב את הביטוי מתחת לשורש.", math_expression: "9 + 40 = 49" },
            { verbal_explanation: "נוציא שורש ל-49 (שהוא 7) ונציב.", math_expression: "x1,2 = (3 ± 7) / 2" },
            { verbal_explanation: "נחשב את שני הפתרונות.", math_expression: "x1 = 10 / 2 = 5 \n x2 = -4 / 2 = -2" }
        ],
        final_answer: "x = 5, x = -2"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה שנייה",
        question: "סדרו את המשוואה הבאה, הדורשת פתיחת סוגריים כפולים, ופתרו אותה:<br><br> (x + 1)(x - 4) = 14",
        options: ["x = 6, x = -3", "x = -6, x = 3", "x = 5, x = -2", "x = 4, x = -1"],
        correctAnswer: 0,
        hint: "הכפילו כל איבר בסוגריים הראשונים בכל איבר בסוגריים השניים. כנסו איברים דומים, העבירו את ה-14 שמאלה ופתרו כרגיל.",
        solution_steps: [
            { verbal_explanation: "נפתח את הסוגריים הכפולים.", math_expression: "x² - 4x + 1x - 4 = 14" },
            { verbal_explanation: "נכנס איברים דומים באגף השמאלי (האיקסים).", math_expression: "x² - 3x - 4 = 14" },
            { verbal_explanation: "נעביר את המספר 14 לאגף השמאלי כדי לאפס את המשוואה.", math_expression: "x² - 3x - 18 = 0" },
            { verbal_explanation: "נציב את המקדמים בנוסחת השורשים (a=1, b=-3, c=-18).", math_expression: "x1,2 = (3 ± √((-3)² - 4 × 1 × (-18))) / 2" },
            { verbal_explanation: "נחשב את הדיסקרימיננטה (הביטוי בתוך השורש).", math_expression: "9 + 72 = 81" },
            { verbal_explanation: "השורש של 81 הוא 9. נחשב את שני הפתרונות.", math_expression: "x1 = (3 + 9) / 2 = 6 \n x2 = (3 - 9) / 2 = -3" }
        ],
        final_answer: "x = 6, x = -3"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה שנייה",
        question: "כמה פתרונות יש למשוואה x² - 8x + 16 = 0 ? מצאו את הפתרון.",
        options: ["פתרון יחיד: x = 4", "שני פתרונות: x = 4, x = -4", "אין פתרון", "פתרון יחיד: x = -4"],
        correctAnswer: 0,
        hint: "חשבו את הביטוי שבתוך השורש. אם התוצאה היא בדיוק 0, זה אומר שיש לפרבולה נקודת חיתוך אחת בלבד עם ציר האיקס (נקודת מינימום או מקסימום שנוגעת בציר).",
        solution_steps: [
            { verbal_explanation: "נציב את המקדמים (a=1, b=-8, c=16) בנוסחת השורשים.", math_expression: "x1,2 = (8 ± √((-8)² - 4 × 1 × 16)) / 2" },
            { verbal_explanation: "נחשב את הערך שמתחת לשורש.", math_expression: "64 - 64 = 0" },
            { verbal_explanation: "מכיוון שהשורש שווה לאפס, הוספה או חיסור שלו אינם משנים את התוצאה, ולכן יש רק פתרון אחד.", math_expression: "x = (8 ± 0) / 2" },
            { verbal_explanation: "נחשב את הפתרון היחיד.", math_expression: "x = 8 / 2 = 4" }
        ],
        final_answer: "פתרון יחיד: x = 4"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה שנייה",
        question: "האם למשוואה הבאה יש פתרונות ממשיים? הסבירו מדוע.<br><br> x² + 2x + 5 = 0",
        options: ["אין פתרונות (הביטוי בתוך השורש שלילי)", "יש שני פתרונות", "יש פתרון אחד", "יש אינסוף פתרונות"],
        correctAnswer: 0,
        hint: "הציבו את המקדמים רק בביטוי שבתוך השורש (b² - 4ac). לא ניתן להוציא שורש ממספר שלילי במספרים ממשיים.",
        solution_steps: [
            { verbal_explanation: "נבדוק את הביטוי שאמור להיות בתוך השורש בנוסחת השורשים (הנקרא 'דלתא').", math_expression: "Δ = b² - 4ac" },
            { verbal_explanation: "נציב את המקדמים: a=1, b=2, c=5.", math_expression: "Δ = 2² - 4 × 1 × 5" },
            { verbal_explanation: "נבצע את פעולות החשבון.", math_expression: "Δ = 4 - 20 = -16" },
            { verbal_explanation: "התוצאה היא שלילית (-16). מכיוון שאין שורש ממשי למספר שלילי, למשוואה אין פתרון. (הפרבולה מרחפת באוויר מעל ציר האיקס).", math_expression: "אין פתרון ממשי" }
        ],
        final_answer: "אין פתרונות (הביטוי בתוך השורש שלילי)"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה שנייה",
        question: `שטח של מלבן הוא 50 סמ"ר. אורך המלבן גדול ב-5 ס"מ מרוחבו. <br>מהו רוחב המלבן? (סמנו את הרוחב ב-x).<br><br>
        <svg viewBox="0 0 200 120" style="width:100%; max-width:220px; display:block; margin:0 auto;">
            <rect x="30" y="20" width="140" height="80" fill="#e0f2fe" stroke="#0f172a" stroke-width="3" />
            <text x="100" y="65" text-anchor="middle" font-weight="bold" fill="#1e293b" font-size="16">S = 50</text>
            <text x="100" y="15" text-anchor="middle" font-weight="bold" fill="#dc2626">x + 5</text>
            <text x="15" y="65" text-anchor="middle" font-weight="bold" fill="#dc2626">x</text>
        </svg>`,
        options: ["5 ס\"מ", "10 ס\"מ", "4 ס\"מ", "15 ס\"מ"],
        correctAnswer: 0,
        hint: "שטח מלבן שווה לאורך כפול רוחב. הרכיבו את המשוואה: x כפול (x+5) שווה ל-50. לאחר הפתרון, זכרו שאורך צלע לא יכול להיות שלילי.",
        solution_steps: [
            { verbal_explanation: "נסמן את רוחב המלבן באות x. מכיוון שהאורך גדול ב-5, הוא יהיה שווה ל- x+5.", math_expression: "רוחב = x,  אורך = x + 5" },
            { verbal_explanation: "נרכיב משוואה: מכפלת הצלעות (שטח) שווה ל-50.", math_expression: "x(x + 5) = 50" },
            { verbal_explanation: "נפתח סוגריים ונעביר את 50 לאגף שמאל ליצירת משוואה ריבועית.", math_expression: "x² + 5x - 50 = 0" },
            { verbal_explanation: "נציב בנוסחת השורשים. השורש של (25 פלוס 200) הוא השורש של 225, שהוא 15.", math_expression: "x1,2 = (-5 ± 15) / 2" },
            { verbal_explanation: "נחשב את שתי האפשרויות.", math_expression: "x1 = 10 / 2 = 5 \n x2 = -20 / 2 = -10" },
            { verbal_explanation: "מכיוון ש-x מייצג אורך של צלע מלבן, הוא חייב להיות חיובי. לכן, הפתרון השלילי נפסל.", math_expression: "רוחב המלבן הוא 5 ס\"מ" }
        ],
        final_answer: "5 ס\"מ"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה שנייה",
        question: "פתרו את המשוואה הריבועית בעזרת ביטול מכנים:<br><br> (x² - 1) / 3 = 8",
        options: ["x = 5, x = -5", "x = 25, x = -25", "x = 4, x = -4", "x = 5 בלבד"],
        correctAnswer: 0,
        hint: "הכפילו את שני האגפים ב-3 כדי להיפטר מהמכנה, ואז תיוותר בידיכם משוואה חסרה שקל לפתור.",
        solution_steps: [
            { verbal_explanation: "נכפיל את כל המשוואה ב-3 כדי לבטל את השבר שבאגף השמאלי.", math_expression: "x² - 1 = 8 × 3" },
            { verbal_explanation: "נחשב את הכפל באגף ימין.", math_expression: "x² - 1 = 24" },
            { verbal_explanation: "נעביר את המספר מינוס 1 לאגף ימין (הוא יהפוך לפלוס 1).", math_expression: "x² = 24 + 1" },
            { verbal_explanation: "נחבר את המספרים.", math_expression: "x² = 25" },
            { verbal_explanation: "נוציא שורש ריבועי. נזכור לקחת גם את התשובה החיובית וגם את השלילית.", math_expression: "x = ±√25   =>   x1 = 5, x2 = -5" }
        ],
        final_answer: "x = 5, x = -5"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה שנייה",
        question: "סדרו את המשוואה הבאה שבה איברי האיקס בריבוע מופיעים בשני האגפים:<br><br> 3x² - 4x = 2x² + 12",
        options: ["x = 6, x = -2", "x = -6, x = 2", "x = 3, x = -4", "x = 4, x = -3"],
        correctAnswer: 0,
        hint: "העבירו את כל איברי אגף ימין שמאלה (שנו סימנים) כדי לאפס את אגף ימין. כנסו את איברי ה-x² ופתרו.",
        solution_steps: [
            { verbal_explanation: "נעביר את כל איברי אגף ימין שמאלה (בשינוי סימן).", math_expression: "3x² - 2x² - 4x - 12 = 0" },
            { verbal_explanation: "נכנס איברים דומים (נחסר את מקדמי ה-x²).", math_expression: "x² - 4x - 12 = 0" },
            { verbal_explanation: "נציב בנוסחת השורשים (a=1, b=-4, c=-12).", math_expression: "x1,2 = (4 ± √((-4)² - 4 × 1 × (-12))) / 2" },
            { verbal_explanation: "נחשב את הביטוי מתחת לשורש.", math_expression: "16 + 48 = 64" },
            { verbal_explanation: "נוציא שורש ל-64 (שהוא 8) ונחשב את הפתרונות.", math_expression: "x1 = (4 + 8) / 2 = 6 \n x2 = (4 - 8) / 2 = -2" }
        ],
        final_answer: "x = 6, x = -2"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה שנייה",
        question: "פתרו את המשוואה הכוללת מקדם שלילי לאיבר הריבועי:<br><br> -x² + 6x - 5 = 0",
        options: ["x = 5, x = 1", "x = -5, x = -1", "x = 6, x = 1", "x = -6, x = -1"],
        correctAnswer: 0,
        hint: "כדי למנוע טעויות סימן בנוסחה, מומלץ תמיד להכפיל את כל המשוואה ב-מינוס 1 (כלומר, להפוך את כל הסימנים) לפני ההצבה.",
        solution_steps: [
            { verbal_explanation: "לנוחות החישוב וכדי למנוע בלבול, נכפיל את כל המשוואה במינוס 1. כך מקדם x² יהפוך לחיובי.", math_expression: "x² - 6x + 5 = 0" },
            { verbal_explanation: "כעת נציב בנוסחת השורשים (a=1, b=-6, c=5).", math_expression: "x1,2 = (6 ± √((-6)² - 4 × 1 × 5)) / 2" },
            { verbal_explanation: "נחשב את הביטוי מתחת לשורש.", math_expression: "36 - 20 = 16" },
            { verbal_explanation: "נוציא שורש ל-16 (שהוא 4) ונחשב את הפתרונות.", math_expression: "x1 = (6 + 4) / 2 = 10 / 2 = 5 \n x2 = (6 - 4) / 2 = 2 / 2 = 1" }
        ],
        final_answer: "x = 5, x = 1"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה שנייה",
        question: "פתרו את המשוואה הבאה הדורשת צמצום משמעותי:<br><br> 5x² - 30x + 40 = 0",
        options: ["x = 4, x = 2", "x = -4, x = -2", "x = 5, x = 8", "x = 10, x = 4"],
        correctAnswer: 0,
        hint: "כל המקדמים מתחלקים ב-5. צמצמו את המשוואה לפני שתשתמשו בנוסחה, כדי לחסוך עבודה עם מספרים ענקיים.",
        solution_steps: [
            { verbal_explanation: "נבחין שכל המקדמים מתחלקים ב-5. נחלק את כל המשוואה ב-5 לפשטות.", math_expression: "x² - 6x + 8 = 0" },
            { verbal_explanation: "נציב בנוסחת השורשים (a=1, b=-6, c=8).", math_expression: "x1,2 = (6 ± √((-6)² - 4 × 1 × 8)) / 2" },
            { verbal_explanation: "נחשב את הדיסקרימיננטה (הביטוי בשורש).", math_expression: "36 - 32 = 4" },
            { verbal_explanation: "שורש 4 הוא 2. נחשב את שני הפתרונות.", math_expression: "x1 = (6 + 2) / 2 = 4 \n x2 = (6 - 2) / 2 = 2" }
        ],
        final_answer: "x = 4, x = 2"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה שנייה",
        question: "מצאו את נקודות החיתוך של הפונקציה (פרבולה) y = x² - 9x + 14 עם ציר ה-x.",
        options: ["(7, 0) ו- (2, 0)", "(-7, 0) ו- (-2, 0)", "(14, 0) ו- (1, 0)", "(9, 0) ו- (0, 0)"],
        correctAnswer: 0,
        hint: "כדי למצוא חיתוך עם ציר x, עלינו להציב y=0. כך נקבל משוואה ריבועית רגילה. לאחר מציאת הפתרונות, רשמו אותם כנקודות.",
        solution_steps: [
            { verbal_explanation: "חיתוך עם ציר ה-x מתרחש כאשר y = 0. נציב אפס במקום ה-y.", math_expression: "x² - 9x + 14 = 0" },
            { verbal_explanation: "נציב את המקדמים בנוסחת השורשים.", math_expression: "x1,2 = (9 ± √((-9)² - 4 × 1 × 14)) / 2" },
            { verbal_explanation: "נחשב את הביטוי בתוך השורש.", math_expression: "81 - 56 = 25" },
            { verbal_explanation: "שורש 25 הוא 5. נחשב את ערכי ה-x.", math_expression: "x1 = (9 + 5) / 2 = 7 \n x2 = (9 - 5) / 2 = 2" },
            { verbal_explanation: "נרשום את התשובה כנקודות (זוגות סדורים על ציר x).", math_expression: "(7, 0) ו- (2, 0)" }
        ],
        final_answer: "(7, 0) ו- (2, 0)"
    },
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "פתרון משוואה ממעלה שנייה",
        question: `במשולש ישר זווית, אורכי הצלעות הם שלושה מספרים עוקבים.<br>
        הניצב הקטן הוא x, הניצב השני הוא x+1, והיתר (הצלע הארוכה) הוא x+2.<br>
        היעזרו במשפט פיתגורס כדי למצוא את אורך הניצב הקטן (x).<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:200px; display:block; margin:0 auto;">
            <polygon points="40,130 160,130 40,30" fill="#fdfcf8" stroke="#0f172a" stroke-width="2" />
            <rect x="40" y="110" width="20" height="20" fill="none" stroke="#dc2626" stroke-width="2" />
            <text x="100" y="145" font-size="14" font-weight="bold" fill="#0f172a">x</text>
            <text x="10" y="80" font-size="14" font-weight="bold" fill="#0f172a">x+1</text>
            <text x="120" y="70" font-size="14" font-weight="bold" fill="#dc2626">x+2</text>
        </svg>`,
        options: ["3", "4", "5", "6"],
        correctAnswer: 0,
        hint: "לפי משפט פיתגורס: ניצב בריבוע ועוד ניצב בריבוע שווה ליתר בריבוע. בנו את המשוואה: x² + (x+1)² = (x+2)² ופתחו סוגריים.",
        solution_steps: [
            { verbal_explanation: "נבנה משוואה לפי משפט פיתגורס (a² + b² = c²).", math_expression: "x² + (x + 1)² = (x + 2)²" },
            { verbal_explanation: "נפתח את הסוגריים לפי נוסחאות הכפל המקוצר בשני האגפים.", math_expression: "x² + (x² + 2x + 1) = (x² + 4x + 4)" },
            { verbal_explanation: "נכנס איברים בצד שמאל.", math_expression: "2x² + 2x + 1 = x² + 4x + 4" },
            { verbal_explanation: "נעביר את כל האיברים שמאלה כדי לאפס את אגף ימין.", math_expression: "2x² - x² + 2x - 4x + 1 - 4 = 0" },
            { verbal_explanation: "נקבל את המשוואה הריבועית הסופית.", math_expression: "x² - 2x - 3 = 0" },
            { verbal_explanation: "נפתור בעזרת נוסחת השורשים (השורש יהיה של 4 ועוד 12, שזה שורש 16).", math_expression: "x1 = (2 + 4) / 2 = 3 \n x2 = (2 - 4) / 2 = -1" },
            { verbal_explanation: "אורך של צלע משולש חייב להיות חיובי, ולכן x = -1 נפסל.", math_expression: "x = 3" }
        ],
        final_answer: "3"
    },
    // =========================================================
    // תת נושא: נוסחאות הכפל המקוצר
    // =========================================================

    // --- שאלה 1 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "נוסחאות הכפל המקוצר",
        question: `פתחו את הסוגריים באמצעות נוסחת הכפל המקוצר לריבוע של סכום:<br><br> (x + 4)²<br><br>
        <svg viewBox="0 0 200 200" style="width:100%; max-width:180px; display:block; margin:10px auto;">
            <rect x="30" y="30" width="90" height="90" fill="#f8fafc" stroke="#0f172a" stroke-width="2"/>
            <rect x="120" y="30" width="50" height="90" fill="#e0f2fe" stroke="#3b82f6" stroke-width="2"/>
            <rect x="30" y="120" width="90" height="50" fill="#e0f2fe" stroke="#3b82f6" stroke-width="2"/>
            <rect x="120" y="120" width="50" height="50" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
            <text x="75" y="80" font-size="16" fill="#0f172a" font-weight="bold">x²</text>
            <text x="140" y="80" font-size="14" fill="#3b82f6" font-weight="bold">4x</text>
            <text x="70" y="148" font-size="14" fill="#3b82f6" font-weight="bold">4x</text>
            <text x="135" y="148" font-size="16" fill="#dc2626" font-weight="bold">16</text>
            <text x="75" y="20" font-size="14" fill="#64748b">x</text>
            <text x="140" y="20" font-size="14" fill="#64748b">4</text>
        </svg>
        (האיור ממחיש כי שטח הריבוע הגדול שווה לסכום 4 השטחים הפנימיים).`,
        options: ["x² + 8x + 16", "x² + 16", "x² + 4x + 16", "x² + 8x + 8"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחה: (a + b)² = a² + 2ab + b². המקדם a הוא איקס, והמקדם b הוא 4.",
        solution_steps: [
            { verbal_explanation: "נרשום את הנוסחה לריבוע של סכום.", math_expression: "(a + b)² = a² + 2ab + b²" },
            { verbal_explanation: "נזהה את האיברים במקרה שלנו.", math_expression: "a = x,  b = 4" },
            { verbal_explanation: "נציב את האיברים בתוך הנוסחה.", math_expression: "x² + 2 × x × 4 + 4²" },
            { verbal_explanation: "נחשב את הכפל האמצעי (2 כפול 4) ואת החזקה האחרונה (4 בריבוע).", math_expression: "x² + 8x + 16" }
        ],
        final_answer: "x² + 8x + 16"
    },

    // --- שאלה 2 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "נוסחאות הכפל המקוצר",
        question: "פתחו את הסוגריים בעזרת נוסחת הכפל המקוצר לריבוע של הפרש:<br><br> (x - 7)²",
        options: ["x² - 14x + 49", "x² - 49", "x² + 14x - 49", "x² - 7x + 49"],
        correctAnswer: 0,
        hint: "הנוסחה לריבוע של הפרש היא: a² - 2ab + b². שימו לב שהאיבר האחרון תמיד חיובי מכיוון שמספר שלילי בריבוע הופך לחיובי.",
        solution_steps: [
            { verbal_explanation: "נרשום את הנוסחה המתאימה לריבוע של הפרש.", math_expression: "(a - b)² = a² - 2ab + b²" },
            { verbal_explanation: "נזהה שהאיבר הראשון הוא איקס, והאיבר השני הוא 7.", math_expression: "a = x,  b = 7" },
            { verbal_explanation: "נציב בנוסחה בהתאמה.", math_expression: "x² - 2 × x × 7 + 7²" },
            { verbal_explanation: "נחשב את המכפלה האמצעית ואת החזקה לקבלת הביטוי הסופי.", math_expression: "x² - 14x + 49" }
        ],
        final_answer: "x² - 14x + 49"
    },

    // --- שאלה 3 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "נוסחאות הכפל המקוצר",
        question: "פשטו את הביטוי הבא באמצעות נוסחת הפרש ריבועים:<br><br> (x - 9)(x + 9)",
        options: ["x² - 81", "x² + 81", "x² - 18x - 81", "x² - 18"],
        correctAnswer: 0,
        hint: "זוהי הנוסחה השלישית: מכפלה של הפרש וסכום שווה לראשון בריבוע פחות השני בריבוע. האיברים האמצעיים מבטלים זה את זה.",
        solution_steps: [
            { verbal_explanation: "נזהה תבנית של מכפלת סכום והפרש של אותם איברים בדיוק.", math_expression: "(a - b)(a + b) = a² - b²" },
            { verbal_explanation: "האיבר הראשון a הוא איקס. האיבר השני b הוא 9.", math_expression: "a = x,  b = 9" },
            { verbal_explanation: "נעלה כל אחד מהאיברים בריבוע ונרשום פעולת חיסור ביניהם.", math_expression: "x² - 9²" },
            { verbal_explanation: "נחשב את החזקה של 9 לקבלת התשובה.", math_expression: "x² - 81" }
        ],
        final_answer: "x² - 81"
    },

    // --- שאלה 4 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "נוסחאות הכפל המקוצר",
        question: `פשטו את הביטוי הבא הכולל מקדם לפני המשתנה:<br><br> (3x + 2)²<br><br>
        <svg viewBox="0 0 200 80" style="width:100%; max-width:200px; display:block; margin:0 auto;">
            <rect x="20" y="20" width="160" height="40" rx="10" fill="#f8fafc" stroke="#c5a059" stroke-width="2" stroke-dasharray="4,4"/>
            <text x="100" y="45" text-anchor="middle" font-size="16" fill="#0f172a" font-weight="bold">זהירות: העלו גם את ה-3 בריבוע!</text>
        </svg>`,
        options: ["9x² + 12x + 4", "3x² + 12x + 4", "9x² + 4", "9x² + 6x + 4"],
        correctAnswer: 0,
        hint: "כשמעלים את האיבר הראשון (3x) בריבוע, חובה להעלות גם את המספר 3 וגם את המשתנה x בריבוע.",
        solution_steps: [
            { verbal_explanation: "נשתמש בנוסחת סכום בריבוע.", math_expression: "a = 3x,  b = 2" },
            { verbal_explanation: "נציב בנוסחה. נכניס את ה-3x לתוך סוגריים כדי לא לשכוח ששניהם עולים בריבוע.", math_expression: "(3x)² + 2 × (3x) × 2 + 2²" },
            { verbal_explanation: "נחשב את האיבר הראשון: 3 בריבוע זה 9, ואיקס בריבוע.", math_expression: "9x²" },
            { verbal_explanation: "נחשב את האיבר האמצעי: 2 כפול 3 כפול 2 נותן 12, כפול איקס.", math_expression: "12x" },
            { verbal_explanation: "נחשב את האיבר האחרון ונחבר הכל יחד לטרינום.", math_expression: "9x² + 12x + 4" }
        ],
        final_answer: "9x² + 12x + 4"
    },

    // --- שאלה 5 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "נוסחאות הכפל המקוצר",
        question: "פתחו את הסוגריים של הביטוי הבא (הפרש של ביטוי עם מקדם):<br><br> (5x - 1)²",
        options: ["25x² - 10x + 1", "25x² - 1", "5x² - 10x + 1", "25x² - 5x + 1"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת ריבוע של הפרש. זכרו שהאיבר האמצעי הוא 2 כפול 5x כפול 1, והאיבר האחרון הוא 1 בריבוע (שהוא חיובי).",
        solution_steps: [
            { verbal_explanation: "נשתמש בנוסחה לריבוע של הפרש.", math_expression: "(a - b)² = a² - 2ab + b²" },
            { verbal_explanation: "במקרה זה, a הוא 5x ו-b הוא 1.", math_expression: "a = 5x,  b = 1" },
            { verbal_explanation: "נציב בנוסחה. את ה-5x נרשום בתוך סוגריים.", math_expression: "(5x)² - 2 × (5x) × 1 + 1²" },
            { verbal_explanation: "נחשב את שלושת חלקי הביטוי.", math_expression: "25x² - 10x + 1" }
        ],
        final_answer: "25x² - 10x + 1"
    },

    // --- שאלה 6 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "נוסחאות הכפל המקוצר",
        question: "פשטו את הביטוי הבא (הפרש ריבועים עם מקדמים):<br><br> (2x - 5)(2x + 5)",
        options: ["4x² - 25", "2x² - 25", "4x² + 25", "4x² - 20x - 25"],
        correctAnswer: 0,
        hint: "זוהי תבנית של הפרש ריבועים. הנוסחה היא (a-b)(a+b) = a² - b². עליכם להעלות את כל ה-2x בריבוע.",
        solution_steps: [
            { verbal_explanation: "נזהה תבנית של מכפלת סכום בהפרש, בה a הוא 2x ו-b הוא 5.", math_expression: "a = 2x,  b = 5" },
            { verbal_explanation: "נציב בנוסחת הפרש ריבועים.", math_expression: "(2x)² - 5²" },
            { verbal_explanation: "נחשב את החזקות. נזכור להעלות את ה-2 בריבוע.", math_expression: "4x² - 25" }
        ],
        final_answer: "4x² - 25"
    },

    // --- שאלה 7 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "נוסחאות הכפל המקוצר",
        question: "השלימו את המספר החסר כדי שהביטוי הבא יהפוך לנוסחת כפל מקוצר מושלמת (ריבוע של סכום):<br><br> x² + 14x + ___",
        options: ["49", "14", "28", "196"],
        correctAnswer: 0,
        hint: "האיבר האמצעי (14x) מייצג את הפעולה 'פעמיים הראשון כפול השני'. לכן, חלקו את 14 ב-2, ואת התוצאה העלו בריבוע כדי למצוא את המספר החסר.",
        solution_steps: [
            { verbal_explanation: "על פי הנוסחה a² + 2ab + b², האיבר האמצעי מורכב מ-2 כפול a (שהוא איקס) כפול b.", math_expression: "2 × x × b = 14x" },
            { verbal_explanation: "נחלק ב-2 כדי למצוא את האיבר השני (b).", math_expression: "b = 7" },
            { verbal_explanation: "האיבר החסר בקצה המשוואה הוא b בריבוע.", math_expression: "7² = 49" },
            { verbal_explanation: "הביטוי המלא הוא כעת ריבוע מושלם של סכום.", math_expression: "x² + 14x + 49 = (x + 7)²" }
        ],
        final_answer: "49"
    },

    // --- שאלה 8 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "נוסחאות הכפל המקוצר",
        question: "השלימו את המספר החסר בביטוי הבא כדי שיהווה ריבוע מושלם של הפרש:<br><br> x² - 20x + ___",
        options: ["100", "20", "40", "-100"],
        correctAnswer: 0,
        hint: "גם בריבוע של הפרש, האיבר האחרון (b²) תמיד חיובי. חלקו את 20 ב-2 והעלו בריבוע.",
        solution_steps: [
            { verbal_explanation: "האיבר האמצעי בנוסחת ההפרש הוא מינוס 2ab.", math_expression: "-2 × x × b = -20x" },
            { verbal_explanation: "נחלק במינוס 2 כדי למצוא את b.", math_expression: "b = 10" },
            { verbal_explanation: "האיבר החסר הוא תמיד חיובי ושווה ל-b בריבוע.", math_expression: "10² = 100" },
            { verbal_explanation: "הביטוי השלם.", math_expression: "x² - 20x + 100 = (x - 10)²" }
        ],
        final_answer: "100"
    },

    // --- שאלה 9 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "נוסחאות הכפל המקוצר",
        question: "פתרו את המשוואה הבאה בעזרת נוסחת הכפל המקוצר. שימו לב שהאיבר הריבועי צפוי להתבטל:<br><br> (x + 3)² = x² + 21",
        options: ["x = 2", "x = 3", "x = 0", "אין פתרון"],
        correctAnswer: 0,
        hint: "פתחו את האגף השמאלי בעזרת הנוסחה. לאחר מכן, חסרו את x² משני האגפים והמשיכו לפתור כמשוואה רגילה.",
        solution_steps: [
            { verbal_explanation: "נפתח את הסוגריים באגף השמאלי לפי הנוסחה של סכום בריבוע.", math_expression: "x² + 6x + 9 = x² + 21" },
            { verbal_explanation: "נחסר איקס בריבוע משני אגפי המשוואה (האיבר הריבועי מתבטל לחלוטין).", math_expression: "6x + 9 = 21" },
            { verbal_explanation: "נעביר את המספר 9 לאגף ימין בסימן הפוך.", math_expression: "6x = 21 - 9" },
            { verbal_explanation: "נחסר ונחלק את המשוואה ב-6.", math_expression: "6x = 12   =>   x = 2" }
        ],
        final_answer: "x = 2"
    },

    // --- שאלה 10 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "נוסחאות הכפל המקוצר",
        question: "פתרו משוואה המשלבת את נוסחת הפרש הריבועים:<br><br> (x - 4)(x + 4) = x² - 8x",
        options: ["x = 2", "x = 4", "x = -2", "x = 0"],
        correctAnswer: 0,
        hint: "פתחו את אגף שמאל בעזרת הנוסחה ל- x² - 16. ה-x² יתבטל משני האגפים.",
        solution_steps: [
            { verbal_explanation: "נזהה שאגף שמאל הוא תבנית של הפרש ריבועים, ולכן הסוגריים ייפתחו ל- a² - b².", math_expression: "x² - 16 = x² - 8x" },
            { verbal_explanation: "נחסר את איקס בריבוע משני האגפים, כך שהוא מתבטל כליל.", math_expression: "-16 = -8x" },
            { verbal_explanation: "נחלק את שני האגפים במינוס 8.", math_expression: "x = -16 / -8" },
            { verbal_explanation: "התוצאה היא חיובית מכיוון שמינוס חלקי מינוס שווה פלוס.", math_expression: "x = 2" }
        ],
        final_answer: "x = 2"
    },

    // --- שאלה 11 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "נוסחאות הכפל המקוצר",
        question: "פשטו את הביטוי הבא: סכום של שני ביטויים מעלי ריבוע:<br><br> (x + 2)² + (x - 2)²",
        options: ["2x² + 8", "2x²", "8", "2x² + 8x + 8"],
        correctAnswer: 0,
        hint: "פתחו כל זוג סוגריים בנפרד לפי הנוסחאות. לאחר מכן, חברו איברים דומים. שימו לב מה קורה לאיבר האמצעי בכל ביטוי.",
        solution_steps: [
            { verbal_explanation: "נפתח את החלק הראשון (סכום בריבוע).", math_expression: "x² + 4x + 4" },
            { verbal_explanation: "נפתח את החלק השני (הפרש בריבוע).", math_expression: "x² - 4x + 4" },
            { verbal_explanation: "נרשום הכל יחד כתרגיל חיבור אחד ארוך.", math_expression: "x² + 4x + 4  +  x² - 4x + 4" },
            { verbal_explanation: "נכנס איברים דומים: איקס בריבוע ועוד איקס בריבוע זה 2x². האיברים של ה-4x מבטלים זה את זה. ו-4 ועוד 4 זה 8.", math_expression: "2x² + 8" }
        ],
        final_answer: "2x² + 8"
    },

    // --- שאלה 12 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "נוסחאות הכפל המקוצר",
        question: `פשטו את הביטוי הבא. היזהרו מהמינוס המחבר ביניהם!<br><br> (x - 3)² - (x - 3)(x + 3)<br><br>
        <svg viewBox="0 0 200 80" style="width:100%; max-width:200px; display:block; margin:0 auto;">
            <rect x="20" y="20" width="160" height="40" rx="10" fill="#fee2e2" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,4"/>
            <text x="100" y="45" text-anchor="middle" font-size="14" fill="#0f172a" font-weight="bold">פתחו את החלק הימני בתוך סוגריים!</text>
        </svg>`,
        options: ["-6x + 18", "18", "-6x", "2x² - 6x + 18"],
        correctAnswer: 0,
        hint: "משמאל יש נוסחת הפרש בריבוע. מימין יש נוסחת הפרש ריבועים. פתחו את החלק הימני בתוך סוגריים כדי שהמינוס שלפניו יהפוך את כל הסימנים בצורה נכונה.",
        solution_steps: [
            { verbal_explanation: "נפתח את החלק הראשון לפי הנוסחה (הראשון בריבוע, פחות פעמיים המכפלה, פלוס השני בריבוע).", math_expression: "x² - 6x + 9" },
            { verbal_explanation: "נפתח את החלק השני לפי נוסחת הפרש ריבועים, אך נשמור את התוצאה בתוך סוגריים עקב המינוס שמלפנים.", math_expression: "-(x² - 9)" },
            { verbal_explanation: "נכתוב את הביטוי המלא ונפתח את סוגריים המינוס (פלוס הופך למינוס ומינוס הופך לפלוס).", math_expression: "x² - 6x + 9 - x² + 9" },
            { verbal_explanation: "נכנס איברים דומים. ה-x² מתבטל, ו-9 ועוד 9 מתחבר ל-18.", math_expression: "-6x + 18" }
        ],
        final_answer: "-6x + 18"
    },

    // --- שאלה 13 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "נוסחאות הכפל המקוצר",
        question: "איזה טריק חישובי פותר בקלות ובעל פה את התרגיל 61 × 59 ?",
        options: ["(60 + 1)(60 - 1) = 3600 - 1 = 3599", "61² - 59² = 2² = 4", "60² - 2 = 3598", "חישוב רגיל ללא טריק"],
        correctAnswer: 0,
        hint: "הבחינו ששני המספרים קרובים למספר עגול (60). אחד גדול ממנו ב-1, והשני קטן ממנו ב-1. זוהי נוסחת הפרש ריבועים.",
        solution_steps: [
            { verbal_explanation: "נבטא את המספר 61 כחיבור של 60 ו-1.", math_expression: "61 = 60 + 1" },
            { verbal_explanation: "נבטא את המספר 59 כחיסור של 1 מ-60.", math_expression: "59 = 60 - 1" },
            { verbal_explanation: "נכתוב את התרגיל כמכפלה של סוגריים. זוהי בדיוק התבנית של נוסחת הפרש ריבועים (a+b)(a-b).", math_expression: "(60 + 1)(60 - 1)" },
            { verbal_explanation: "לפי הנוסחה, התוצאה שווה לאיבר הראשון בריבוע פחות האיבר השני בריבוע.", math_expression: "60² - 1²" },
            { verbal_explanation: "נחשב בעל פה.", math_expression: "3600 - 1 = 3599" }
        ],
        final_answer: "(60 + 1)(60 - 1) = 3600 - 1 = 3599"
    },

    // --- שאלה 14 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "נוסחאות הכפל המקוצר",
        question: `נתון ריבוע שאורך צלעו הוא x. הגדילו את צלע הריבוע ב-3 ס"מ, ונוצר ריבוע חדש ששטחו גדול ב-39 סמ"ר משטח הריבוע המקורי.<br>
        בנו משוואה מתאימה ומצאו את אורך הצלע המקורית של הריבוע (x).<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:200px; display:block; margin:0 auto;">
            <rect x="50" y="50" width="60" height="60" fill="#f8fafc" stroke="#0f172a" stroke-width="2" />
            <rect x="50" y="50" width="100" height="100" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,4" />
            <text x="80" y="85" font-size="16" font-weight="bold">x²</text>
            <text x="40" y="80" font-size="12">x</text>
            <text x="100" y="140" font-size="12" fill="#dc2626">x+3</text>
        </svg>`,
        options: ["5 ס\"מ", "6 ס\"מ", "4 ס\"מ", "8 ס\"מ"],
        correctAnswer: 0,
        hint: "השטח המקורי הוא x². השטח החדש הוא הסוגריים (x+3) בריבוע. ידוע שהשטח החדש שווה לשטח הישן ועוד 39.",
        solution_steps: [
            { verbal_explanation: "נבטא את השטח של הריבוע המקורי.", math_expression: "שטח מקורי = x²" },
            { verbal_explanation: "נבטא את השטח של הריבוע החדש (אורך הצלע הוא x+3).", math_expression: "שטח חדש = (x + 3)²" },
            { verbal_explanation: "נבנה משוואה המבוססת על הנתון: השטח החדש גדול ב-39 מהשטח המקורי.", math_expression: "(x + 3)² = x² + 39" },
            { verbal_explanation: "נפתח את הסוגריים בעזרת נוסחת הכפל המקוצר.", math_expression: "x² + 6x + 9 = x² + 39" },
            { verbal_explanation: "ה-x² מתבטל משני האגפים. נעביר את 9 ימינה בסימן מינוס.", math_expression: "6x = 39 - 9" },
            { verbal_explanation: "נחשב ונחלק ב-6.", math_expression: "6x = 30   =>   x = 5" }
        ],
        final_answer: "5 ס\"מ"
    },

    // --- שאלה 15 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "נוסחאות הכפל המקוצר",
        question: "איזו מהטענות הבאות לגבי נוסחאות הכפל המקוצר היא שגויה?",
        options: ["(a - b)² = a² - b²", "(a + b)² = a² + 2ab + b²", "(a - b)² = a² - 2ab + b²", "(a - b)(a + b) = a² - b²"],
        correctAnswer: 0,
        hint: "זכרו תמיד שריבוע של הפרש אינו רק להעלות כל איבר בריבוע, אלא יש גם את האיבר האמצעי (פעמיים המכפלה).",
        solution_steps: [
            { verbal_explanation: "נבחן את הטענה הראשונה. רבים מתלמידים טועים לחשוב שאפשר 'לחלק' את החזקה פנימה.", math_expression: "(a - b)²  ?=?  a² - b²" },
            { verbal_explanation: "טענה זו שגויה לחלוטין. הנוסחה האמיתית מחייבת קיום של איבר אמצעי כתוצאה מפתיחת סוגריים מלאה.", math_expression: "(a - b)(a - b) = a² - ab - ab + b² = a² - 2ab + b²" },
            { verbal_explanation: "שאר הנוסחאות המופיעות בתשובות הן נוסחאות יסוד נכונות.", math_expression: "תשובה א' שגויה" }
        ],
        final_answer: "(a - b)² = a² - b²"
    },

    // =========================================================
    // תת נושא: פירוק לגורמים
    // =========================================================

    // --- שאלה 16 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה ומשוואות",
        subTopic: "פירוק לגורמים",
        question: `פרקו לגורמים את הביטוי הבא על ידי הוצאת גורם משותף הגדול ביותר:<br><br> 3x² - 12x<br><br>
        <svg viewBox="0 0 200 60" style="width:100%; max-width:200px; display:block; margin:0 auto;">
            <rect x="10" y="10" width="80" height="40" fill="#e0f2fe" stroke="#3b82f6" stroke-width="2" rx="5"/>
            <rect x="110" y="10" width="80" height="40" fill="#fee2e2" stroke="#dc2626" stroke-width="2" rx="5"/>
            <text x="50" y="35" text-anchor="middle" font-weight="bold" fill="#0f172a">3 · x · x</text>
            <text x="150" y="35" text-anchor="middle" font-weight="bold" fill="#0f172a">3 · 4 · x</text>
        </svg>`,
        options: ["3x(x - 4)", "3(x² - 4x)", "x(3x - 12)", "12x(x - 1)"],
        correctAnswer: 0,
        hint: "היעזרו באיור: חפשו מהם הגורמים המופיעים גם בתיבה הכחולה וגם בתיבה האדומה. המספר המשותף הגדול ביותר הוא 3, והמשתנה המשותף הוא x.",
        solution_steps: [
            { verbal_explanation: "נמצא את המחלק המשותף הגדול ביותר עבור המספרים 3 ו-12, שהוא 3.", math_expression: "גורם מספרי = 3" },
            { verbal_explanation: "נמצא את המשתנה המשותף לשני האיברים, שהוא x.", math_expression: "גורם משתנה = x" },
            { verbal_explanation: "הגורם המשותף השלם הוא 3x. נוציא אותו מחוץ לסוגריים.", math_expression: "3x(...)" },
            { verbal_explanation: "נחלק כל איבר במקורי ב-3x. חלוקת 3 איקס בריבוע ב-3 איקס נותנת איקס. חלוקת 12 איקס ב-3 איקס נותנת 4.", math_expression: "(x - 4)" },
            { verbal_explanation: "נרשום את התוצאה המלאה.", math_expression: "3x(x - 4)" }
        ],
        final_answer: "3x(x - 4)"
    },

    // --- שאלה 17 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה ומשוואות",
        subTopic: "פירוק לגורמים",
        question: "הוציאו גורם משותף מתוך ביטוי שמתחיל במספר שלילי:<br><br> -4x² + 8x",
        options: ["-4x(x - 2)", "-4x(x + 2)", "4x(-x - 2)", "2x(-2x + 4)"],
        correctAnswer: 0,
        hint: "כאשר האיבר הראשון שלילי, מקובל ונוח יותר להוציא גם את סימן המינוס החוצה כחלק מהגורם המשותף. אל תשכחו שזה יהפוך את הסימן של האיבר השני שבתוך הסוגריים.",
        solution_steps: [
            { verbal_explanation: "נוציא את המינוס, יחד עם המספר 4 והמשתנה x כגורם משותף.", math_expression: "גורם משותף = -4x" },
            { verbal_explanation: "נחלק את האיבר הראשון במינוס 4x. מינוס חלקי מינוס נותן פלוס.", math_expression: "(-4x²) / (-4x) = x" },
            { verbal_explanation: "נחלק את האיבר השני במינוס 4x. פלוס חלקי מינוס נותן מינוס.", math_expression: "(8x) / (-4x) = -2" },
            { verbal_explanation: "נרשום את התשובה הסופית כגורם משותף כפול הסוגריים.", math_expression: "-4x(x - 2)" }
        ],
        final_answer: "-4x(x - 2)"
    },

    // --- שאלה 18 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה ומשוואות",
        subTopic: "פירוק לגורמים",
        question: "פתרו את המשוואה הבאה בעזרת פירוק לגורמים (ללא שימוש בנוסחת השורשים הארוכה):<br><br> x² - 7x = 0",
        options: ["x = 0, x = 7", "x = 7, x = -7", "x = 0, x = -7", "x = 7 בלבד"],
        correctAnswer: 0,
        hint: "הוציאו את x כגורם משותף. כדי שמכפלה תהיה אפס, מספיק שאחד מהגורמים המוכפלים יהיה שווה לאפס.",
        solution_steps: [
            { verbal_explanation: "נוציא את x כגורם משותף מחוץ לסוגריים.", math_expression: "x(x - 7) = 0" },
            { verbal_explanation: "מכפלה שווה לאפס רק אם לפחות אחד מהגורמים הוא אפס. נשווה תחילה את האיבר הראשון לאפס.", math_expression: "x1 = 0" },
            { verbal_explanation: "לאחר מכן נשווה את הביטוי שבתוך הסוגריים לאפס.", math_expression: "x - 7 = 0" },
            { verbal_explanation: "נעביר אגף למציאת הפתרון השני.", math_expression: "x2 = 7" }
        ],
        final_answer: "x = 0, x = 7"
    },

    // --- שאלה 19 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה ומשוואות",
        subTopic: "פירוק לגורמים",
        question: "מהו הפירוק הנכון של הביטוי הבא (על פי נוסחת הפרש ריבועים הפוכה)?<br><br> x² - 81",
        options: ["(x - 9)(x + 9)", "(x - 9)²", "(x - 27)(x + 3)", "(x - 81)(x + 1)"],
        correctAnswer: 0,
        hint: "זהו הפרש בין שני מספרים שניתן להוציא להם שורש ריבועי. השורש של 81 הוא 9.",
        solution_steps: [
            { verbal_explanation: "נזהה שהביטוי הוא הפרש של שני איברים בריבוע.", math_expression: "a² - b²" },
            { verbal_explanation: "נמצא את השורש הריבועי של כל איבר. השורש של איקס בריבוע הוא איקס, והשורש של 81 הוא 9.", math_expression: "a = x,  b = 9" },
            { verbal_explanation: "נרשום כסכום והפרש בין שתי זוגות סוגריים המוכפלים זה בזה.", math_expression: "(x - 9)(x + 9)" }
        ],
        final_answer: "(x - 9)(x + 9)"
    },

    // --- שאלה 20 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה ומשוואות",
        subTopic: "פירוק לגורמים",
        question: "פרקו לגורמים את הביטוי הבא, המשלב מקדם חיובי ונוסחת הפרש ריבועים:<br><br> 9x² - 25",
        options: ["(3x - 5)(3x + 5)", "3(x - 5)(x + 5)", "9(x - 5)(x + 5)", "(3x - 25)(3x + 25)"],
        correctAnswer: 0,
        hint: "שימו לב שגם ל-9 וגם ל-25 יש שורש ריבועי שלם. אין צורך להוציא גורם משותף תחילה. פשוט הוציאו שורש לכל האיבר הראשון (9x²).",
        solution_steps: [
            { verbal_explanation: "נזהה כי מדובר בהפרש ריבועים. נוציא שורש ריבועי מהאיבר הראשון. השורש של 9 הוא 3, והשורש של איקס בריבוע הוא איקס.", math_expression: "a = √(9x²) = 3x" },
            { verbal_explanation: "נוציא שורש מהאיבר השני. השורש של 25 הוא 5.", math_expression: "b = √25 = 5" },
            { verbal_explanation: "נציב בנוסחת (a-b)(a+b).", math_expression: "(3x - 5)(3x + 5)" }
        ],
        final_answer: "(3x - 5)(3x + 5)"
    },

    // --- שאלה 21 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה ומשוואות",
        subTopic: "פירוק לגורמים",
        question: `איך נפרק לגורמים את הביטוי הבא, הדורש ביצוע שני שלבים?<br><br> 2x² - 18<br><br>
        <svg viewBox="0 0 200 60" style="width:100%; max-width:200px; display:block; margin:0 auto;">
            <line x1="20" y1="30" x2="180" y2="30" stroke="#0f172a" stroke-width="2" stroke-dasharray="2,2"/>
            <circle cx="50" cy="30" r="15" fill="#f59e0b" />
            <circle cx="150" cy="30" r="15" fill="#3b82f6" />
            <text x="50" y="35" font-size="12" fill="#fff" font-weight="bold" text-anchor="middle">שלב 1</text>
            <text x="150" y="35" font-size="12" fill="#fff" font-weight="bold" text-anchor="middle">שלב 2</text>
        </svg>`,
        options: ["2(x - 3)(x + 3)", "(2x - 9)(2x + 9)", "2x(x - 9)", "2(x - 9)(x + 9)"],
        correctAnswer: 0,
        hint: "היעזרו ברמז הויזואלי - יש כאן תהליך דו-שלבי. שלב 1: הוציאו גורם משותף (2). שלב 2: השתמשו בנוסחת הפרש ריבועים על מה שנותר בסוגריים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: נחפש גורם משותף כדי לפשט את הביטוי. שני המספרים מתחלקים ב-2. נוציא 2 מחוץ לסוגריים.", math_expression: "2(x² - 9)" },
            { verbal_explanation: "שלב 2: נביט במה שנשאר בתוך הסוגריים. זהו הפרש של שני ריבועים מושלמים (איקס ו-3).", math_expression: "x² - 3²" },
            { verbal_explanation: "נפרק את תוכן הסוגריים.", math_expression: "(x - 3)(x + 3)" },
            { verbal_explanation: "נרכיב הכל יחד חזרה עם המספר 2 שהוצאנו בהתחלה.", math_expression: "2(x - 3)(x + 3)" }
        ],
        final_answer: "2(x - 3)(x + 3)"
    },

    // --- שאלה 22 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה ומשוואות",
        subTopic: "פירוק לגורמים",
        question: "פרקו לגורמים את הביטוי הריבועי (כתיבתו כסוגריים בריבוע):<br><br> x² + 12x + 36",
        options: ["(x + 6)²", "(x - 6)²", "(x + 12)²", "(x + 6)(x - 6)"],
        correctAnswer: 0,
        hint: "בידקו האם האיבר הראשון והאחרון (36) הם ריבועים שלמים. אם כן, בדקו אם האיבר האמצעי הוא בדיוק פעמיים המכפלה של שורשיהם.",
        solution_steps: [
            { verbal_explanation: "נוציא שורש לאיבר הראשון ולשלישי כדי למצוא את המועמדים a ו-b.", math_expression: "a = x,  b = 6" },
            { verbal_explanation: "נבדוק האם האיבר האמצעי מקיים את התנאי: 2ab.", math_expression: "2 × x × 6 = 12x" },
            { verbal_explanation: "מכיוון שהתנאי מתקיים והסימן באמצע הוא חיובי, מדובר בנוסחת סכום בריבוע.", math_expression: "a² + 2ab + b² = (a + b)²" },
            { verbal_explanation: "נרשום את התשובה הסופית.", math_expression: "(x + 6)²" }
        ],
        final_answer: "(x + 6)²"
    },

    // --- שאלה 23 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה ומשוואות",
        subTopic: "פירוק לגורמים",
        question: "פרקו לגורמים את הביטוי הריבועי הבא, הכולל סימן מינוס:<br><br> x² - 16x + 64",
        options: ["(x - 8)²", "(x + 8)²", "(x - 16)²", "(x + 8)(x - 8)"],
        correctAnswer: 0,
        hint: "התהליך זהה לקודם, אך מכיוון שהסימן של האיבר האמצעי הוא מינוס, התוצאה תהיה (ריבוע של הפרש).",
        solution_steps: [
            { verbal_explanation: "השורש של איקס בריבוע הוא איקס, והשורש של 64 הוא 8.", math_expression: "a = x,  b = 8" },
            { verbal_explanation: "האיבר האמצעי הוא שלילי, לכן מדובר בנוסחה עם מינוס.", math_expression: "a² - 2ab + b² = (a - b)²" },
            { verbal_explanation: "נבדוק שהאיבר האמצעי מתאים: מינוס 2 כפול 8 כפול איקס שווה למינוס 16 איקס. התנאי מתקיים.", math_expression: "-2 × x × 8 = -16x" },
            { verbal_explanation: "נרשום את הפירוק.", math_expression: "(x - 8)²" }
        ],
        final_answer: "(x - 8)²"
    },

    // --- שאלה 24 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה ומשוואות",
        subTopic: "פירוק לגורמים",
        question: "פרקו לגורמים את הטרינום הריבועי הבא (כאשר אין כפל מקוצר מושלם):<br><br> x² + 7x + 10",
        options: ["(x + 2)(x + 5)", "(x - 2)(x - 5)", "(x + 1)(x + 10)", "(x + 3)(x + 4)"],
        correctAnswer: 0,
        hint: "בפירוק טרינום ממעלה שנייה, אנו מחפשים שני מספרים שמקיימים שני תנאים יחד: המכפלה שלהם היא 10 (המספר החופשי) והסכום שלהם הוא 7 (המקדם של איקס).",
        solution_steps: [
            { verbal_explanation: "נחפש שני מספרים שמכפלתם היא המספר החופשי בקצה, כלומר 10.", math_expression: "m × n = 10" },
            { verbal_explanation: "אותם שני מספרים צריכים גם להסתכם למקדם של האיבר האמצעי, שהוא 7.", math_expression: "m + n = 7" },
            { verbal_explanation: "המספרים העונים על שני התנאים יחד הם 2 ו-5. (2 כפול 5 שווה 10, ו-2 ועוד 5 שווה 7).", math_expression: "m = 2,  n = 5" },
            { verbal_explanation: "נכתוב את התשובה בצורת סוגריים כפולים המייצגים את הגורמים.", math_expression: "(x + 2)(x + 5)" }
        ],
        final_answer: "(x + 2)(x + 5)"
    },

    // --- שאלה 25 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה ומשוואות",
        subTopic: "פירוק לגורמים",
        question: "פרקו לגורמים את הטרינום הבא הכולל סימן מינוס:<br><br> x² - 5x + 6",
        options: ["(x - 2)(x - 3)", "(x + 2)(x + 3)", "(x - 1)(x - 6)", "(x - 6)(x + 1)"],
        correctAnswer: 0,
        hint: "חפשו שני מספרים שמכפלתם היא חיובית (6) אך סכומם הוא שלילי (מינוס 5). זה מרמז ששני המספרים חייבים להיות שליליים.",
        solution_steps: [
            { verbal_explanation: "נחפש שני מספרים שמכפלתם שווה למספר החופשי 6.", math_expression: "m × n = 6" },
            { verbal_explanation: "סכומם צריך להיות שווה למינוס 5.", math_expression: "m + n = -5" },
            { verbal_explanation: "מכיוון שהמכפלה חיובית והסכום שלילי, שני המספרים הם שליליים. המספרים הם מינוס 2 ומינוס 3.", math_expression: "m = -2,  n = -3" },
            { verbal_explanation: "נרשום את הסוגריים בהתאם.", math_expression: "(x - 2)(x - 3)" }
        ],
        final_answer: "(x - 2)(x - 3)"
    },

    // --- שאלה 26 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה ומשוואות",
        subTopic: "פירוק לגורמים",
        question: "פרקו לגורמים את הטרינום הבא בו המספר החופשי הוא שלילי:<br><br> x² + 2x - 8",
        options: ["(x + 4)(x - 2)", "(x - 4)(x + 2)", "(x + 8)(x - 1)", "(x - 8)(x + 1)"],
        correctAnswer: 0,
        hint: "מכיוון שהמכפלה שלילית (-8), סימן אחד מהמספרים חייב להיות פלוס והשני מינוס. הסכום החיובי (+2) מרמז שהמספר הגדול מביניהם הוא החיובי.",
        solution_steps: [
            { verbal_explanation: "המכפלה שווה למינוס 8.", math_expression: "m × n = -8" },
            { verbal_explanation: "הסכום שווה לפלוס 2.", math_expression: "m + n = 2" },
            { verbal_explanation: "המספרים הם 4 חיובי ו-2 שלילי (כי 4 כפול מינוס 2 זה מינוס 8, ו-4 פחות 2 זה 2).", math_expression: "m = 4,  n = -2" },
            { verbal_explanation: "נרשום את הפירוק.", math_expression: "(x + 4)(x - 2)" }
        ],
        final_answer: "(x + 4)(x - 2)"
    },

    // --- שאלה 27 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה ומשוואות",
        subTopic: "פירוק לגורמים",
        question: "מהו הפירוק לגורמים של הביטוי הבא, הדורש תחילה הוצאת גורם משותף:<br><br> 3x² + 15x + 18",
        options: ["3(x + 2)(x + 3)", "(3x + 6)(3x + 9)", "3(x² + 5x + 6)", "3x(x + 5) + 18"],
        correctAnswer: 0,
        hint: "ראשית, חלקו את כל שלושת האיברים ב-3 (הוציאו 3 מחוץ לסוגריים). לאחר מכן, בצעו פירוק טרינום למה שנשאר בתוך הסוגריים.",
        solution_steps: [
            { verbal_explanation: "כל המקדמים מתחלקים ב-3, לכן נוציא את 3 כגורם משותף ראשוני.", math_expression: "3(x² + 5x + 6)" },
            { verbal_explanation: "כעת, נביט בטרינום שבתוך הסוגריים ונפרק אותו. נחפש שני מספרים שמכפלתם 6 וסכומם 5.", math_expression: "m = 2,  n = 3" },
            { verbal_explanation: "נפרק את הטרינום לסוגריים פנימיים.", math_expression: "(x + 2)(x + 3)" },
            { verbal_explanation: "נצרף בחזרה את ה-3 שהוצאנו החוצה בהתחלה.", math_expression: "3(x + 2)(x + 3)" }
        ],
        final_answer: "3(x + 2)(x + 3)"
    },

    // --- שאלה 28 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה ומשוואות",
        subTopic: "פירוק לגורמים",
        question: `צמצמו את השבר האלגברי הבא (הניחו כי המכנה אינו אפס):<br><br>
        <svg viewBox="0 0 200 80" style="width:100%; max-width:180px; display:block; margin:10px auto;">
            <text x="100" y="30" text-anchor="middle" font-size="16" fill="#0f172a" font-weight="bold">x² - 49</text>
            <line x1="40" y1="40" x2="160" y2="40" stroke="#c5a059" stroke-width="3" />
            <text x="100" y="65" text-anchor="middle" font-size="16" fill="#0f172a" font-weight="bold">x - 7</text>
        </svg>`,
        options: ["x + 7", "x - 7", "x² - 7", "1"],
        correctAnswer: 0,
        hint: "במונה ישנה תבנית של הפרש ריבועים. פרקו את המונה לשני סוגריים ואז צמצמו (בטלו) את החלק שמופיע גם למטה וגם למעלה.",
        solution_steps: [
            { verbal_explanation: "נפרק את המונה לפי נוסחת הפרש ריבועים (השורש של 49 הוא 7).", math_expression: "x² - 49 = (x - 7)(x + 7)" },
            { verbal_explanation: "נכתוב את השבר מחדש עם המונה המפורק.", math_expression: "((x - 7)(x + 7)) / (x - 7)" },
            { verbal_explanation: "מכיוון שהמכנה אינו אפס, מותר לנו לצמצם את הביטוי הזהה.", math_expression: "צמצום של (x - 7)" },
            { verbal_explanation: "התוצאה היא החלק הנותר.", math_expression: "x + 7" }
        ],
        final_answer: "x + 7"
    },

    // --- שאלה 29 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה ומשוואות",
        subTopic: "פירוק לגורמים",
        question: "צמצמו את השבר האלגברי הבא שמכיל טרינום במונה (הניחו ש-x אינו מינוס 2):<br><br> (x² + 5x + 6) / (x + 2)",
        options: ["x + 3", "x + 2", "x² + 3", "x + 6"],
        correctAnswer: 0,
        hint: "פרקו את הטרינום שבמונה לגורמים על ידי חיפוש שני מספרים שמכפלתם 6 וסכומם 5. לאחר מכן, צמצמו את הביטוי המשותף.",
        solution_steps: [
            { verbal_explanation: "נפרק את הטרינום במונה. המספרים הם 2 ו-3.", math_expression: "x² + 5x + 6 = (x + 2)(x + 3)" },
            { verbal_explanation: "נרשום את השבר לאחר הפירוק.", math_expression: "((x + 2)(x + 3)) / (x + 2)" },
            { verbal_explanation: "נצמצם את הביטוי שזהה במונה ובמכנה.", math_expression: "מבטלים את (x + 2)" },
            { verbal_explanation: "הביטוי שנשאר הוא התשובה הסופית.", math_expression: "x + 3" }
        ],
        final_answer: "x + 3"
    },

    // --- שאלה 30 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה ומשוואות",
        subTopic: "פירוק לגורמים",
        question: "פתרו את המשוואה הבאה בעזרת צמצום שברים (תחום הצבה x שונה מ-4):<br><br> (x² - 16) / (x - 4) = 10",
        options: ["x = 6", "x = 10", "x = -6", "x = 4"],
        correctAnswer: 0,
        hint: "קודם כל צמצמו את השבר שבאגף שמאל בדיוק כפי שלמדנו. מה שנשאר יהיה שווה ל-10. זו תהפוך למשוואה קלה מאוד לפתרון.",
        solution_steps: [
            { verbal_explanation: "נפרק את המונה לפי הפרש ריבועים.", math_expression: "x² - 16 = (x - 4)(x + 4)" },
            { verbal_explanation: "נצמצם את (x - 4) המופיע למעלה ולמטה בשבר.", math_expression: "נשאר: x + 4" },
            { verbal_explanation: "כעת نבנה את המשוואה החדשה והפשוטה, השווה ל-10.", math_expression: "x + 4 = 10" },
            { verbal_explanation: "נעביר את 4 ימינה ונחסר.", math_expression: "x = 10 - 4 = 6" }
        ],
        final_answer: "x = 6"
    },
    // =========================================================
    // תת נושא: קריאת גרפים ותכונות של פונקציות (שאלות 1-15)
    // =========================================================

    // --- שאלה 1 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "קריאת גרפים ותכונות של פונקציות",
        question: `לפניכם גרף של פרבולה. מהם שיעורי קודקוד הפרבולה על פי השרטוט?<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:250px; display:block; margin:10px auto;">
            <line x1="20" y1="100" x2="180" y2="100" stroke="#cbd5e1" stroke-width="2" />
            <line x1="100" y1="140" x2="100" y2="10" stroke="#cbd5e1" stroke-width="2" />
            <text x="175" y="115" font-size="12" fill="#0f172a">x</text>
            <text x="105" y="20" font-size="12" fill="#0f172a">y</text>
            <path d="M 40 40 Q 140 180 180 20" fill="none" stroke="#dc2626" stroke-width="3" />
            <circle cx="120" cy="120" r="5" fill="#f59e0b" />
            <line x1="120" y1="100" x2="120" y2="120" stroke="#0f172a" stroke-width="1" stroke-dasharray="2,2" />
            <line x1="100" y1="120" x2="120" y2="120" stroke="#0f172a" stroke-width="1" stroke-dasharray="2,2" />
            <text x="125" y="95" font-size="12" font-weight="bold">2</text>
            <text x="80" y="125" font-size="12" font-weight="bold">-4</text>
        </svg>`,
        options: ["(2, -4)", "(-4, 2)", "(0, -4)", "(2, 0)"],
        correctAnswer: 0,
        hint: "הקודקוד הוא הנקודה הנמוכה ביותר (בפרבולה מחייכת). קראו תחילה את הערך שעל ציר ה-x האופקי, ולאחר מכן את הערך שעל ציר ה-y האנכי.",
        solution_steps: [
            { verbal_explanation: "נתבונן בגרף הפרבולה. אנו רואים פרבולה 'מחייכת' (פתוחה כלפי מעלה), לכן הקודקוד הוא נקודת מינימום.", math_expression: "קודקוד = הנקודה הנמוכה ביותר" },
            { verbal_explanation: "נוריד קו דמיוני (או מקווקו) מהקודקוד אל ציר ה-x האופקי. אנו רואים שהוא פוגע במספר 2.", math_expression: "x = 2" },
            { verbal_explanation: "נעביר קו דמיוני מהקודקוד אל ציר ה-y האנכי. אנו רואים שהוא פוגע במספר מינוס 4.", math_expression: "y = -4" },
            { verbal_explanation: "נרשום את התשובה כזוג סדור, כאשר ערך ה-x מופיע תמיד ראשון משמאל, וערך ה-y מימין.", math_expression: "(2, -4)" }
        ],
        final_answer: "(2, -4)"
    },

    // --- שאלה 2 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "קריאת גרפים ותכונות של פונקציות",
        question: `הגרף מתאר פונקציה ריבועית. סמנו את נקודות החיתוך (האפסים) של הפונקציה עם ציר ה-x לפי השרטוט.<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:250px; display:block; margin:10px auto;">
            <line x1="20" y1="80" x2="180" y2="80" stroke="#cbd5e1" stroke-width="2" />
            <line x1="100" y1="140" x2="100" y2="10" stroke="#cbd5e1" stroke-width="2" />
            <path d="M 40 10 Q 100 150 160 10" fill="none" stroke="#10b981" stroke-width="3" />
            <circle cx="60" cy="80" r="5" fill="#ef4444" />
            <circle cx="140" cy="80" r="5" fill="#ef4444" />
            <text x="45" y="70" font-size="14" fill="#0f172a" font-weight="bold">-2</text>
            <text x="145" y="70" font-size="14" fill="#0f172a" font-weight="bold">4</text>
        </svg>`,
        options: ["(-2, 0) ו- (4, 0)", "(0, -2) ו- (0, 4)", "(2, 0) ו- (-4, 0)", "(0, 0)"],
        correctAnswer: 0,
        hint: "נקודות חיתוך עם ציר ה-x (הציר האופקי) נמצאות בגובה אפס, ולכן ערך ה-y שלהן הוא תמיד 0.",
        solution_steps: [
            { verbal_explanation: "בנקודות המפגש של הפונקציה עם ציר ה-x, הגרף לא עולה ולא יורד, כלומר הגובה שלו שווה לאפס.", math_expression: "y = 0" },
            { verbal_explanation: "נסתכל על המספרים המסומנים על ציר ה-x האופקי היכן שהפרבולה חותכת אותו. המספרים הם מינוס 2 ו-4.", math_expression: "x1 = -2,  x2 = 4" },
            { verbal_explanation: "נרכיב את הנקודות כזוגות סדורים לפי המבנה התקני: ערך ה-x קודם, ואחריו פסיק ו-0.", math_expression: "(-2, 0) ו- (4, 0)" }
        ],
        final_answer: "(-2, 0) ו- (4, 0)"
    },

    // --- שאלה 3 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "קריאת גרפים ותכונות של פונקציות",
        question: "נתונה הפונקציה: y = -x² + 3x + 10. מהי נקודת החיתוך של גרף הפונקציה עם ציר ה-y?",
        options: ["(0, 10)", "(10, 0)", "(0, 3)", "לא ניתן לדעת ללא שרטוט"],
        correctAnswer: 0,
        hint: "נקודת החיתוך עם ציר ה-y מתרחשת בדיוק איפה שציר ה-x הוא 0. הציבו x = 0 במשוואת הפונקציה וחשבו את y.",
        solution_steps: [
            { verbal_explanation: "ציר ה-y הוא הקו האנכי שעובר בדיוק באמצע מערכת הצירים, במקום שבו ערך ה-x הוא אפס. לכן, תמיד נציב אפס במקום איקס.", math_expression: "x = 0" },
            { verbal_explanation: "נציב אפס בפונקציה הנתונה במקום כל הופעה של המשתנה x.", math_expression: "y = -(0)² + 3(0) + 10" },
            { verbal_explanation: "האיברים שמכילים x מתאפסים ונעלמים. נשאר רק האיבר החופשי (המספר שאין לו x צמוד).", math_expression: "y = 0 + 0 + 10 = 10" },
            { verbal_explanation: "נרשום את התשובה כנקודה סדורה במישור.", math_expression: "(0, 10)" }
        ],
        final_answer: "(0, 10)"
    },

    // --- שאלה 4 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "קריאת גרפים ותכונות של פונקציות",
        question: `על פי השרטוט הבא, מהו תחום העלייה של הפונקציה הריבועית? (ציר הסימטריה מסומן בקו מקווקו אדום).<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:250px; display:block; margin:10px auto;">
            <line x1="20" y1="120" x2="180" y2="120" stroke="#cbd5e1" stroke-width="2" />
            <line x1="50" y1="140" x2="50" y2="10" stroke="#cbd5e1" stroke-width="2" />
            <path d="M 60 20 Q 120 180 180 20" fill="none" stroke="#3b82f6" stroke-width="3" />
            <line x1="120" y1="10" x2="120" y2="140" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,5" />
            <text x="125" y="135" font-size="14" fill="#dc2626" font-weight="bold">x = 3</text>
        </svg>`,
        options: ["x > 3", "x < 3", "כל איקס", "y > 3"],
        correctAnswer: 0,
        hint: "תחום עלייה מתאר את ערכי ה-x שעבורם הגרף 'מטפס' (תמיד קוראים גרף משמאל לימין). הקודקוד הוא נקודת השינוי, והוא נמצא ב-x=3.",
        solution_steps: [
            { verbal_explanation: "כדי לדעת מתי פונקציה עולה או יורדת, אנו תמיד סורקים את הגרף משמאל לימין (כמו קריאת אנגלית).", math_expression: "כיוון הקריאה: ימינה ->" },
            { verbal_explanation: "הפרבולה שלפנינו 'מחייכת', לכן היא מתחילה בירידה עד לנקודת המינימום שלה (הקודקוד), ומאותה נקודה מתחילה לעלות.", math_expression: "מגמה: ירידה -> מינימום -> עלייה" },
            { verbal_explanation: "ציר הסימטריה העובר בקודקוד ממוקם ב-x = 3. לכן, השינוי במגמה קורה בנקודה זו.", math_expression: "קודקוד ב: x = 3" },
            { verbal_explanation: "החל ממספר 3 והלאה ימינה (המספרים הגדולים מ-3), הקו הכחול עולה כלפי מעלה.", math_expression: "x > 3" }
        ],
        final_answer: "x > 3"
    },

    // --- שאלה 5 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "קריאת גרפים ותכונות של פונקציות",
        question: `על פי השרטוט, מצאו את תחום השליליות של הפונקציה הריבועית.<br> (תחום בו הפונקציה נמצאת מתחת לציר ה-x).<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:250px; display:block; margin:10px auto;">
            <line x1="20" y1="80" x2="180" y2="80" stroke="#cbd5e1" stroke-width="2" />
            <line x1="100" y1="140" x2="100" y2="10" stroke="#cbd5e1" stroke-width="2" />
            <path d="M 40 20 Q 100 160 160 20" fill="none" stroke="#f59e0b" stroke-width="3" />
            <circle cx="70" cy="80" r="5" fill="#dc2626" />
            <circle cx="130" cy="80" r="5" fill="#dc2626" />
            <text x="60" y="70" font-size="14" fill="#0f172a" font-weight="bold">1</text>
            <text x="135" y="70" font-size="14" fill="#0f172a" font-weight="bold">5</text>
        </svg>`,
        options: ["בין 1 ל-5 (1 < x < 5)", "x < 1 או x > 5", "כל איקס", "x < 0"],
        correctAnswer: 0,
        hint: "תחום שליליות הוא החלק שבו קו הגרף מצויר פיזית מתחת לקו האופקי של ציר ה-x. הביטו בין אילו נקודות חיתוך 'צולל' הגרף למטה.",
        solution_steps: [
            { verbal_explanation: "תחום חיוביות ושליליות נקבע ביחס לציר ה-x. 'חיובי' אומר מעל הציר, ו'שלילי' אומר מתחת לציר.", math_expression: "f(x) < 0" },
            { verbal_explanation: "נמצא את נקודות הגבול - נקודות החיתוך עם הציר. מהגרף ניתן לראות שהן ב-1 וב-5.", math_expression: "שורשים: x=1, x=5" },
            { verbal_explanation: "החלק 'הקעור' של הפרבולה, שיורד מתחת לציר האופקי ולכן ערכי ה-y שלו שליליים, נמצא בדיוק בין שתי הנקודות הללו.", math_expression: "אזור תחתון" },
            { verbal_explanation: "מסקנה: הגרף שלילי לכל מספר שגדול מ-1 אך קטן מ-5.", math_expression: "1 < x < 5" }
        ],
        final_answer: "בין 1 ל-5 (1 < x < 5)"
    },

    // --- שאלה 6 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "קריאת גרפים ותכונות פונקציות",
        question: `מהי משמעותה האלגברית של נקודת החיתוך בין הגרף של הפונקציה f(x) והגרף של הפונקציה g(x)?<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:250px; display:block; margin:10px auto;">
            <line x1="20" y1="100" x2="180" y2="100" stroke="#cbd5e1" stroke-width="2" />
            <line x1="100" y1="140" x2="100" y2="10" stroke="#cbd5e1" stroke-width="2" />
            <path d="M 60 20 Q 100 150 140 20" fill="none" stroke="#3b82f6" stroke-width="3" />
            <line x1="40" y1="120" x2="160" y2="40" stroke="#dc2626" stroke-width="3" />
            <circle cx="123" cy="65" r="6" fill="#f59e0b" />
            <text x="135" y="60" font-size="12" font-weight="bold">נקודת חיתוך</text>
        </svg>`,
        options: ["זוהי הנקודה שבה שתי הפונקציות שוות (f(x) = g(x))", "זהו קודקוד הפרבולה בהכרח", "זוהי הנקודה שבה הפונקציות שוות לאפס", "המרחק המקסימלי בין הפונקציות"],
        correctAnswer: 0,
        hint: "כאשר שני קווים נפגשים (חותכים) זה את זה בשרטוט, פירוש הדבר הוא שיש להם את אותו ערך x ואותו ערך y בדיוק באותה נקודה במישור.",
        solution_steps: [
            { verbal_explanation: "גרף מורכב מאינספור נקודות של (x, y) המקיימות משוואה מסוימת.", math_expression: "f(x) ו- g(x)" },
            { verbal_explanation: "נקודת החיתוך היא הנקודה הפיזית היחידה (או אחת מכמה) שמשותפת במדויק לשני הגרפים גם יחד.", math_expression: "נקודה משותפת" },
            { verbal_explanation: "מבחינה אלגברית, מכיוון שהגובה (y) והמיקום האופקי (x) זהים בשני הגרפים באותו רגע, המשוואות שלהן שוות.", math_expression: "f(x) = g(x)" }
        ],
        final_answer: "זוהי הנקודה שבה שתי הפונקציות שוות (f(x) = g(x))"
    },

    // --- שאלה 7 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "קריאת גרפים ותכונות של פונקציות",
        question: "נתונים גרף של פרבולה f(x) וגרף של ישר g(x). הם נחתכים בנקודות x=2 ו-x=8. שרטוט מראה שבתחום שבין 2 ל-8, הישר עובר גבוה מעל הפרבולה. איך נרשום זאת בכתיב מתמטי?",
        options: ["בתחום 2 < x < 8 מתקיים g(x) > f(x)", "בתחום 2 < x < 8 מתקיים f(x) > g(x)", "g(x) = f(x) בכל התחום", "הישר תמיד עולה"],
        correctAnswer: 0,
        hint: "כשגרף אחד נמצא 'מעל' גרף שני בציור, המשמעות היא שהגובה שלו (ערך ה-y שלו) גדול יותר באותו אזור של איקסים.",
        solution_steps: [
            { verbal_explanation: "הנקודות שבהן x=2 ו-x=8 הן נקודות המפגש, ולכן שם הגרפים שווים זה לזה בגובהם.", math_expression: "f(2) = g(2),  f(8) = g(8)" },
            { verbal_explanation: "בתחום האמצעי שבין נקודות אלו, אנו מסתכלים איזה גרף גבוה יותר בציר ה-y.", math_expression: "השוואת גבהים" },
            { verbal_explanation: "נתון במפורש שהישר g(x) נמצא מעל הפרבולה. המשמעות היא שהפונקציה של הישר גדולה מהפונקציה של הפרבולה.", math_expression: "g(x) > f(x)" },
            { verbal_explanation: "התחום המדובר הוא כל איקס שגדול מ-2 וקטן מ-8. לכן נרשום זאת כאי-שוויון כפול.", math_expression: "2 < x < 8" }
        ],
        final_answer: "בתחום 2 < x < 8 מתקיים g(x) > f(x)"
    },

    // --- שאלה 8 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "קריאת גרפים ותכונות של פונקציות",
        question: "פונקציה קווית חותכת את ציר ה-y בנקודה (0, 4) ואת ציר ה-x בנקודה (2, 0). האם הפונקציה עולה או יורדת?",
        options: ["הפונקציה יורדת", "הפונקציה עולה", "הפונקציה קבועה (אופקית)", "לא ניתן לדעת ללא שרטוט המערכת"],
        correctAnswer: 0,
        hint: "דמיינו את שתי הנקודות על מערכת צירים. מתחילים בנקודה העליונה על ציר y, וכשזזים ימינה על ציר x, הגובה יורד לאפס. לכן זהו קו בירידה.",
        solution_steps: [
            { verbal_explanation: "כדי לדעת אם קו ישר עולה או יורד, עלינו לבדוק מה קורה לערך ה-y כאשר ערך ה-x גדל (זזים ימינה).", math_expression: "בדיקת מגמה" },
            { verbal_explanation: "כאשר x=0, הגובה הוא 4. כאשר התקדמנו ל-x=2, הגובה ירד ל-0.", math_expression: "מ-4 ל-0" },
            { verbal_explanation: "ניתן גם לחשב את שיפוע הישר בעזרת הנוסחה: הפרש ה-y לחלק להפרש ה-x.", math_expression: "m = (0 - 4) / (2 - 0)" },
            { verbal_explanation: "חישוב השיפוע נותן מינוס 4 חלקי 2, שזה מינוס 2. שיפוע שלילי מעיד באופן מוחלט על פונקציה יורדת.", math_expression: "m = -2  =>  יורדת" }
        ],
        final_answer: "הפונקציה יורדת"
    },

    // --- שאלה 9 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "קריאת גרפים ותכונות של פונקציות",
        question: "לפונקציה ריבועית מסוימת אין אף נקודת חיתוך עם ציר x. כמו כן, נתון שהפונקציה 'מחייכת' (המקדם של x² חיובי). באיזה תחום הפונקציה חיובית?",
        options: ["לכל x הפונקציה חיובית", "אין אף x שעבורו היא חיובית", "רק עבור איקסים חיוביים", "רק עבור איקסים שליליים"],
        correctAnswer: 0,
        hint: "דמיינו את הגרף בראש: פרבולה שפתוחה כלפי מעלה (צורת U) ואסור לה לגעת או לרדת מתחת לציר האופקי. זה אומר שהיא 'מרחפת' בשלמותה מעל הציר.",
        solution_steps: [
            { verbal_explanation: "הפרבולה 'מחייכת', כלומר הקרניים שלה ממשיכות לעלות כלפי מעלה עד אינסוף.", math_expression: "פרבולה בצורת U" },
            { verbal_explanation: "במקביל, נתון שהיא לא חותכת את ציר ה-x, כלומר אין לה נקודות שבהן ערך ה-y שווה לאפס או יורד מתחתיו.", math_expression: "אין פתרון ל- f(x) = 0" },
            { verbal_explanation: "המסקנה הגיאומטרית היחידה האפשרית היא שכל גוף הפרבולה (כולל הקודקוד הנמוך ביותר שלה) נמצא באוויר, מעל ציר ה-x.", math_expression: "הגרף נמצא כולו ברביע העליון" },
            { verbal_explanation: "לכן, לא משנה איזה מספר x נציב בפונקציה, תמיד נקבל תוצאת y חיובית (גדולה מאפס).", math_expression: "חיובית תמיד" }
        ],
        final_answer: "לכל x הפונקציה חיובית"
    },

    // --- שאלה 10 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "קריאת גרפים ותכונות של פונקציות",
        question: `מהו המרחק (באורך יחידות) בין שתי נקודות החיתוך של הפרבולה עם ציר ה-x, על פי השרטוט?<br><br>
        <svg viewBox="0 0 200 100" style="width:100%; max-width:250px; display:block; margin:10px auto;">
            <line x1="20" y1="50" x2="180" y2="50" stroke="#cbd5e1" stroke-width="2" />
            <path d="M 40 10 Q 100 130 160 10" fill="none" stroke="#10b981" stroke-width="3" />
            <circle cx="65" cy="50" r="5" fill="#ef4444" />
            <circle cx="135" cy="50" r="5" fill="#ef4444" />
            <line x1="65" y1="50" x2="135" y2="50" stroke="#ef4444" stroke-width="3" />
            <text x="65" y="40" font-size="14" fill="#0f172a" font-weight="bold">-3</text>
            <text x="135" y="40" font-size="14" fill="#0f172a" font-weight="bold">7</text>
            <text x="100" y="40" font-size="12" fill="#ef4444" font-weight="bold">מרחק = ?</text>
        </svg>`,
        options: ["10 יחידות", "4 יחידות", "7 יחידות", "3 יחידות"],
        correctAnswer: 0,
        hint: "מכיוון ששתי הנקודות נמצאות על קו ישר מאוזן (ציר x) ובאותו גובה (y=0), המרחק ביניהן הוא פשוט ההפרש החיובי בין ערכי ה-x שלהן.",
        solution_steps: [
            { verbal_explanation: "נזהה מהשרטוט את נקודות החיתוך. הפרבולה חותכת את הציר במספרים מינוס 3 ופלוס 7.", math_expression: "x1 = -3,  x2 = 7" },
            { verbal_explanation: "כדי למצוא אורך של קטע אופקי על ציר ה-x, תמיד מחסרים את המספר הקטן מהמספר הגדול (ימין פחות שמאל).", math_expression: "d = x2 - x1" },
            { verbal_explanation: "נציב את המספרים ונחשב את ההפרש. נשים לב שחיסור של מספר שלילי הופך לפלוס.", math_expression: "d = 7 - (-3)" },
            { verbal_explanation: "7 פלוס 3 נותן 10.", math_expression: "d = 10" }
        ],
        final_answer: "10 יחידות"
    },

    // --- שאלה 11 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "קריאת גרפים ותכונות של פונקציות",
        question: "נקודות החיתוך של פרבולה סימטרית עם ציר ה-x הן ב- x=2 ו- x=10. מהי משוואת ציר הסימטריה של פרבולה זו?",
        options: ["x = 6", "x = 8", "x = 4", "x = 12"],
        correctAnswer: 0,
        hint: "ציר הסימטריה הוא קו אנכי שחוצה את הפרבולה בדיוק במרכז. כדי למצוא אותו, פשוט חשבו את הממוצע החשבוני (האמצע) של שתי נקודות החיתוך.",
        solution_steps: [
            { verbal_explanation: "תכונת הסימטריה של הפרבולה קובעת שקודקוד הפרבולה נמצא בדיוק באמצע המרחק שבין שתי נקודות החיתוך שלה עם ציר ה-x (אם קיימות).", math_expression: "x_v = (x1 + x2) / 2" },
            { verbal_explanation: "נציב את הנתונים שלנו לתוך נוסחת האמצע: נקודה אחת ב-2 ונקודה שנייה ב-10.", math_expression: "x_v = (2 + 10) / 2" },
            { verbal_explanation: "נחבר את המספרים שבמונה.", math_expression: "x_v = 12 / 2" },
            { verbal_explanation: "נחלק ב-2 ונקבל את מיקום ציר הסימטריה.", math_expression: "x = 6" }
        ],
        final_answer: "x = 6"
    },

    // --- שאלה 12 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "קריאת גרפים ותכונות של פונקציות",
        question: "איך נראה הגרף של הפונקציה f(x) = 7 במערכת צירים? (פונקציה ללא המשתנה x)",
        options: ["קו ישר אופקי המקביל לציר ה-x", "קו ישר אנכי המקביל לציר ה-y", "פרבולה מחייכת", "נקודה בודדת במרחב"],
        correctAnswer: 0,
        hint: "פונקציה כזו נקראת 'פונקציה קבועה'. זה אומר שהגובה שלה (ה-y) נשאר תמיד 7, ולא משנה איזה איקס נציב. לכן היא לא עולה ולא יורדת.",
        solution_steps: [
            { verbal_explanation: "נבחן את משוואת הפונקציה. היא שווה למספר קבוע (7) ואין בה את המשתנה x.", math_expression: "y = 7" },
            { verbal_explanation: "המשמעות הפיזיקלית היא שלא משנה איזה x נבחר על הציר האופקי, ה-y יהיה תמיד בגובה 7.", math_expression: "f(1)=7, f(100)=7, f(-5)=7" },
            { verbal_explanation: "כאשר אנו מסמנים בגרף אוסף של נקודות שכולן באותו גובה ומחברים אותן, מתקבל קו שוכב, ישר לחלוטין.", math_expression: "קו אופקי" },
            { verbal_explanation: "מכיוון שהקו שוכב במקביל לאדמה, הוא למעשה מקביל לציר ה-x.", math_expression: "מקביל לציר ה-x" }
        ],
        final_answer: "קו ישר אופקי המקביל לציר ה-x"
    },

    // --- שאלה 13 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "קריאת גרפים ותכונות של פונקציות",
        question: "מצאו את נקודת החיתוך (המפגש) של שני הישרים הבאים בדרך אלגברית:<br><br> f(x) = 2x + 2<br> g(x) = -x + 8",
        options: ["(2, 6)", "(3, 5)", "(4, 4)", "(1, 7)"],
        correctAnswer: 0,
        hint: "בנקודת החיתוך, שתי הפונקציות שוות באותו גובה (אותו y). לכן, פשוט השוו את הביטויים זה לזה: 2x + 2 = -x + 8, ופתרו משוואה רגילה.",
        solution_steps: [
            { verbal_explanation: "כדי למצוא את המפגש, נשווה בין הפונקציות.", math_expression: "f(x) = g(x)" },
            { verbal_explanation: "נציב את הביטויים של שני הישרים למשוואה אחת.", math_expression: "2x + 2 = -x + 8" },
            { verbal_explanation: "נעביר את מינוס איקס שמאלה (יהפוך לפלוס איקס) ואת המספר 2 ימינה (יהפוך למינוס 2).", math_expression: "2x + x = 8 - 2" },
            { verbal_explanation: "נכנס איברים ונחלק ב-3 למציאת שיעור ה-x של הנקודה.", math_expression: "3x = 6   =>   x = 2" },
            { verbal_explanation: "נציב את ה-x שמצאנו באחת הפונקציות המקוריות (למשל f) כדי למצוא את הגובה (y) של הנקודה.", math_expression: "y = 2(2) + 2 = 4 + 2 = 6" }
        ],
        final_answer: "(2, 6)"
    },

    // --- שאלה 14 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "קריאת גרפים ותכונות של פונקציות",
        question: `הישר y = -3x + 12 יוצר משולש ישר זווית יחד עם מערכת הצירים (ציר ה-x וציר ה-y). מהו שטח המשולש שנוצר?<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <line x1="20" y1="120" x2="180" y2="120" stroke="#cbd5e1" stroke-width="2" />
            <line x1="40" y1="140" x2="40" y2="10" stroke="#cbd5e1" stroke-width="2" />
            <line x1="20" y1="20" x2="100" y2="140" stroke="#dc2626" stroke-width="3" />
            <polygon points="40,120 40,50 86,120" fill="#f59e0b" opacity="0.3" />
            <text x="50" y="100" font-size="14" fill="#0f172a" font-weight="bold">שטח?</text>
        </svg>`,
        options: ["24 יחידות ריבועיות", "12 יחידות ריבועיות", "48 יחידות ריבועיות", "6 יחידות ריבועיות"],
        correctAnswer: 0,
        hint: "כדי לחשב שטח משולש, עלינו לדעת את אורך הבסיס והגובה שלו. אלו הם למעשה נקודות החיתוך של הישר עם הצירים. מצאו חיתוך עם x ועם y והכפילו אותם לחלק ל-2.",
        solution_steps: [
            { verbal_explanation: "נמצא את החיתוך עם ציר ה-y על ידי הצבת איקס שווה לאפס. זה ייתן לנו את אורך הניצב האנכי (גובה).", math_expression: "y = -3(0) + 12 = 12" },
            { verbal_explanation: "הגובה של המשולש הוא 12 יחידות אורך.", math_expression: "גובה = 12" },
            { verbal_explanation: "נמצא את החיתוך עם ציר ה-x על ידי הצבת y שווה לאפס. זה ייתן לנו את אורך הניצב האופקי (בסיס).", math_expression: "0 = -3x + 12   =>   3x = 12   =>   x = 4" },
            { verbal_explanation: "הבסיס של המשולש הוא 4 יחידות אורך.", math_expression: "בסיס = 4" },
            { verbal_explanation: "נחשב את שטח המשולש ישר הזווית לפי הנוסחה: בסיס כפול גובה לחלק ב-2.", math_expression: "שטח = (12 × 4) / 2 = 48 / 2 = 24" }
        ],
        final_answer: "24 יחידות ריבועיות"
    },

    // --- שאלה 15 ---
    {
        subject: "מתמטיקה",
        topic: "אלגברה_172",
        subTopic: "קריאת גרפים ותכונות של פונקציות",
        question: "האם הנקודה (3, 10) נמצאת על גרף הפונקציה הריבועית f(x) = x² + 1 ?",
        options: ["כן, היא נמצאת על הגרף", "לא, הערך האמיתי צריך להיות 100", "לא, הפונקציה עוברת בנקודה (3, 9)", "הנקודה נמצאת מתחת לגרף"],
        correctAnswer: 0,
        hint: "כדי לדעת אם נקודה שייכת לגרף, כל מה שצריך לעשות הוא להציב את שיעור ה-x של הנקודה (3) בתוך הפונקציה. אם התוצאה שתקבלו היא בדיוק ה-y של הנקודה (10), הרי שהיא שייכת לגרף.",
        solution_steps: [
            { verbal_explanation: "אנו רוצים לבדוק האם הפונקציה באמת מחזירה את הערך 10 כאשר מזינים לה את הערך 3.", math_expression: "נבדוק האם: f(3) = 10" },
            { verbal_explanation: "נציב x = 3 לתוך הפונקציה.", math_expression: "f(3) = 3² + 1" },
            { verbal_explanation: "נחשב את החזקה והחיבור.", math_expression: "f(3) = 9 + 1 = 10" },
            { verbal_explanation: "קיבלנו בדיוק את ערך ה-y של הנקודה המקורית. משמע, הנקודה (3,10) היא חלק ממשוואת הפונקציה ולכן נמצאת פיזית על קו הגרף.", math_expression: "כן, הנקודה על הגרף" }
        ],
        final_answer: "כן, היא נמצאת על הגרף"
    }
];