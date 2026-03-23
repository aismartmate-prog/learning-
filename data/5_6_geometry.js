const questionsDB = [
    // ==========================================
    // תת נושא 1: היקפים ושטחים (10 שאלות)
    // ==========================================

    {
        topic: "math_5_6",
        subTopic: "היקפים ושטחים",
        question_text: "נתון מלבן שאורכו 8 סנטימטרים ורוחבו 5 סנטימטרים. מהו שטח המלבן?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 100' style='max-width:200px; width:100%; border-radius:8px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='40' y='20' width='120' height='60' fill='#3b82f6' fill-opacity='0.2' stroke='#3b82f6' stroke-width='2'/><text x='100' y='15' font-size='14' font-family='Arial'>8</text><text x='25' y='55' font-size='14' font-family='Arial'>5</text></svg></div>",
        options: ["40", "13", "26", "45"],
        correctAnswer: 0,
        hint: "כדי למצוא שטח של מלבן, צריך פשוט להכפיל את האורך שלו ברוחב שלו.",
        solution_steps: [
            { verbal_explanation: "נבדוק מהו האורך של המלבן מתוך הנתונים בשאלה.", math_expression: "אורך = 8" },
            { verbal_explanation: "נבדוק מהו הרוחב של המלבן מתוך הנתונים.", math_expression: "רוחב = 5" },
            { verbal_explanation: "ניזכר בכלל החשוב: שטח של מלבן שווה לאורך כפול הרוחב.", math_expression: "שטח = אורך \\times רוחב" },
            { verbal_explanation: "נציב את המספרים שלנו בתרגיל כפל פשוט.", math_expression: "8 \\times 5" },
            { verbal_explanation: "נפתור את התרגיל כדי לקבל את השטח המלא.", math_expression: "40" }
        ],
        final_answer: "40"
    },
    {
        topic: "math_5_6",
        subTopic: "היקפים ושטחים",
        question_text: "מהו ההיקף של מלבן שאורכו 10 סנטימטרים ורוחבו 4 סנטימטרים?&rlm;",
        options: ["28", "40", "14", "24"],
        correctAnswer: 0,
        hint: "היקף הוא המסגרת שמסביב למלבן. למלבן יש שתי צלעות ארוכות ושתי צלעות קצרות. חברו את כל ארבע הצלעות ביחד.",
        solution_steps: [
            { verbal_explanation: "נרשום את האורך והרוחב הידועים לנו.", math_expression: "אורך = 10 \\quad , \\quad רוחב = 4" },
            { verbal_explanation: "נזכור שלמלבן יש פעמיים את האורך ופעמיים את הרוחב.", math_expression: "היקף = אורך + אורך + רוחב + רוחב" },
            { verbal_explanation: "נרשום את התרגיל עם המספרים שלנו.", math_expression: "10 + 10 + 4 + 4" },
            { verbal_explanation: "נחבר קודם את שתי הצלעות הארוכות.", math_expression: "10 + 10 = 20" },
            { verbal_explanation: "נחבר את שתי הצלעות הקצרות.", math_expression: "4 + 4 = 8" },
            { verbal_explanation: "נחבר את הכל יחד כדי למצוא את ההיקף המלא.", math_expression: "20 + 8 = 28" }
        ],
        final_answer: "28"
    },
    {
        topic: "math_5_6",
        subTopic: "היקפים ושטחים",
        question_text: "נתון ריבוע שאורך כל צלע שלו הוא 7 סנטימטרים. מהו שטח הריבוע?&rlm;",
        options: ["49", "28", "14", "42"],
        correctAnswer: 0,
        hint: "בריבוע, כל הצלעות שוות. שטח של ריבוע מחושב על ידי הכפלת הצלע בעצמה.",
        solution_steps: [
            { verbal_explanation: "נבדוק מהו אורך הצלע של הריבוע שלנו.", math_expression: "צלע = 7" },
            { verbal_explanation: "ניזכר ששטח ריבוע הוא הצלע כפול עצמה.", math_expression: "שטח = צלע \\times צלע" },
            { verbal_explanation: "נרשום את תרגיל הכפל לפי המספרים שלנו.", math_expression: "7 \\times 7" },
            { verbal_explanation: "נפתור את התרגיל לפי לוח הכפל.", math_expression: "49" }
        ],
        final_answer: "49"
    },
    {
        topic: "math_5_6",
        subTopic: "היקפים ושטחים",
        question_text: "מהו ההיקף של ריבוע ששטחו הוא 36 סנטימטרים רבועים?&rlm;",
        options: ["24", "12", "36", "18"],
        correctAnswer: 0,
        hint: "קודם צריך למצוא את הצלע של הריבוע. איזה מספר כפול עצמו שווה ל-36? אחרי שתמצאו את הצלע, חברו אותה 4 פעמים כדי למצוא את ההיקף.",
        solution_steps: [
            { verbal_explanation: "אנחנו יודעים שהשטח הוא שלושים ושש.", math_expression: "שטח = 36" },
            { verbal_explanation: "נשאל את עצמנו: איזה מספר כפול עצמו שווה שלושים ושש?", math_expression: "6 \\times 6 = 36" },
            { verbal_explanation: "מכאן הבנו שאורך כל צלע של הריבוע הוא שש.", math_expression: "צלע = 6" },
            { verbal_explanation: "כדי למצוא את ההיקף, נחבר את כל ארבע הצלעות של הריבוע.", math_expression: "היקף = 6 + 6 + 6 + 6" },
            { verbal_explanation: "אפשר גם לעשות תרגיל כפל פשוט.", math_expression: "4 \\times 6" },
            { verbal_explanation: "נפתור ונגיע לתשובה הסופית.", math_expression: "24" }
        ],
        final_answer: "24"
    },
    {
        topic: "math_5_6",
        subTopic: "היקפים ושטחים",
        question_text: "במשולש ישר זווית אורך ניצב אחד (הבסיס) הוא 6 סנטימטרים ואורך הניצב השני (הגובה) הוא 8 סנטימטרים. מהו שטח המשולש?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 120' style='max-width:200px; width:100%; border-radius:8px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='40,100 160,100 40,20' fill='#10b981' fill-opacity='0.2' stroke='#10b981' stroke-width='2'/><polyline points='40,90 50,90 50,100' fill='none' stroke='#1e293b' stroke-width='1.5'/><text x='100' y='115' font-size='14' font-family='Arial'>8</text><text x='25' y='60' font-size='14' font-family='Arial'>6</text></svg></div>",
        options: ["24", "48", "14", "20"],
        correctAnswer: 0,
        hint: "שטח משולש שווה לבסיס כפול הגובה, ואת התוצאה מחלקים בשתיים.",
        solution_steps: [
            { verbal_explanation: "נרשום את אורך הבסיס של המשולש.", math_expression: "בסיס = 8" },
            { verbal_explanation: "נרשום את אורך הגובה של המשולש.", math_expression: "גובה = 6" },
            { verbal_explanation: "ניזכר בכלל לחישוב שטח משולש: מכפילים את הבסיס בגובה ואז מחלקים בשתיים.", math_expression: "שטח = (בסיס \\times גובה) \\div 2" },
            { verbal_explanation: "נכפיל את הבסיס בגובה.", math_expression: "8 \\times 6 = 48" },
            { verbal_explanation: "כעת נחלק את התוצאה שקיבלנו בשתיים.", math_expression: "48 \\div 2" },
            { verbal_explanation: "נקבל את השטח המדויק.", math_expression: "24" }
        ],
        final_answer: "24"
    },
    {
        topic: "math_5_6",
        subTopic: "היקפים ושטחים",
        question_text: "מהו ההיקף של משולש שאורכי הצלעות שלו הם 5 סנטימטרים, 12 סנטימטרים ו-13 סנטימטרים?&rlm;",
        options: ["30", "60", "20", "25"],
        correctAnswer: 0,
        hint: "היקף של כל צורה הוא פשוט החיבור של כל הצלעות שלה מסביב.",
        solution_steps: [
            { verbal_explanation: "נקרא שוב את הנתונים ונסדר את אורכי שלוש הצלעות.", math_expression: "5 \\quad , \\quad 12 \\quad , \\quad 13" },
            { verbal_explanation: "כדי למצוא את ההיקף, נרכיב תרגיל חיבור של כל הצלעות.", math_expression: "היקף = 5 + 12 + 13" },
            { verbal_explanation: "נחבר קודם את שני המספרים הראשונים.", math_expression: "5 + 12 = 17" },
            { verbal_explanation: "כעת נוסיף את הצלע השלישית לתוצאה.", math_expression: "17 + 13" },
            { verbal_explanation: "נסיים את פעולת החיבור ונקבל את התשובה.", math_expression: "30" }
        ],
        final_answer: "30"
    },
    {
        topic: "math_5_6",
        subTopic: "היקפים ושטחים",
        question_text: "ההיקף של מלבן הוא 30 סנטימטרים. אורך צלע אחת שלו הוא 10 סנטימטרים. מהו אורך הצלע השנייה של המלבן?&rlm;",
        options: ["5", "10", "20", "15"],
        correctAnswer: 0,
        hint: "למלבן יש שתי צלעות ארוכות ושתי קצרות. אם צלע אחת היא 10, אז גם הצלע שממולה היא 10. חסרו אותן מההיקף הכולל וחלקו את השארית לשתיים.",
        solution_steps: [
            { verbal_explanation: "ההיקף הכולל של המלבן ידוע לנו והוא שלושים.", math_expression: "היקף = 30" },
            { verbal_explanation: "אנחנו יודעים שיש צלע שאורכה עשר. במלבן יש שתי צלעות כאלה (אחת מול השנייה). נחבר אותן.", math_expression: "10 + 10 = 20" },
            { verbal_explanation: "נחסר את הסכום הזה מההיקף הכולל כדי לראות כמה נשאר לשתי הצלעות האחרות.", math_expression: "30 - 20 = 10" },
            { verbal_explanation: "נשארו לנו עשרה סנטימטרים שאותם נחלק שווה בשווה בין שתי הצלעות הנותרות.", math_expression: "10 \\div 2" },
            { verbal_explanation: "נקבל את אורך הצלע השנייה.", math_expression: "5" }
        ],
        final_answer: "5"
    },
    {
        topic: "math_5_6",
        subTopic: "היקפים ושטחים",
        question_text: "השטח של מלבן הוא 50 סנטימטרים רבועים. רוחב המלבן הוא 5 סנטימטרים. מהו ההיקף של המלבן?&rlm;",
        options: ["30", "20", "50", "25"],
        correctAnswer: 0,
        hint: "קודם צריך למצוא את האורך. כדי למצוא את האורך, חלקו את השטח ברוחב. אחרי שיש לכם אורך ורוחב, חשבו את ההיקף בקלות.",
        solution_steps: [
            { verbal_explanation: "אנחנו יודעים שהשטח הוא חמישים והרוחב הוא חמש.", math_expression: "שטח = 50 \\quad , \\quad רוחב = 5" },
            { verbal_explanation: "נחשב את האורך על ידי חלוקת השטח ברוחב.", math_expression: "אורך = 50 \\div 5" },
            { verbal_explanation: "נפתור ונגלה שהאורך שווה לעשר.", math_expression: "אורך = 10" },
            { verbal_explanation: "כעת נחשב את ההיקף שמורכב מפעמיים האורך ופעמיים הרוחב.", math_expression: "היקף = 10 + 10 + 5 + 5" },
            { verbal_explanation: "נחבר את כל המספרים.", math_expression: "20 + 10" },
            { verbal_explanation: "נקבל את ההיקף השלם.", math_expression: "30" }
        ],
        final_answer: "30"
    },
    {
        topic: "math_5_6",
        subTopic: "היקפים ושטחים",
        question_text: "במקבילית, אורך הבסיס הוא 12 סנטימטרים והגובה לבסיס הוא 4 סנטימטרים. מהו שטח המקבילית?&rlm;",
        options: ["48", "24", "16", "32"],
        correctAnswer: 0,
        hint: "שטח מקבילית שווה לאורך הבסיס כפול הגובה שלו (בדיוק כמו שמחשבים שטח מלבן).",
        solution_steps: [
            { verbal_explanation: "נרשום את אורך הבסיס ואת הגובה שקיבלנו בשאלה.", math_expression: "בסיס = 12 \\quad , \\quad גובה = 4" },
            { verbal_explanation: "הכלל לחישוב שטח מקבילית הוא להכפיל את הבסיס בגובה.", math_expression: "שטח = בסיס \\times גובה" },
            { verbal_explanation: "נרכיב את התרגיל עם המספרים שלנו.", math_expression: "12 \\times 4" },
            { verbal_explanation: "נפתור את תרגיל הכפל כדי להגיע לתשובה.", math_expression: "48" }
        ],
        final_answer: "48"
    },
    {
        topic: "math_5_6",
        subTopic: "היקפים ושטחים",
        question_text: "צירו צורה מורכבת שבנויה ממלבן שהמידות שלו הן 10 על 4 סנטימטרים, וצמוד אליו ריבוע שאורך הצלע שלו הוא 3 סנטימטרים. מהו השטח הכולל של כל הצורה יחד?&rlm;",
        options: ["49", "40", "19", "52"],
        correctAnswer: 0,
        hint: "חשבו את שטח המלבן בנפרד ואת שטח הריבוע בנפרד, ולאחר מכן חברו את שני השטחים למספר אחד.",
        solution_steps: [
            { verbal_explanation: "נתחיל בחישוב השטח של המלבן לפי המידות שלו.", math_expression: "שטח מלבן = 10 \\times 4" },
            { verbal_explanation: "נפתור ונשמור את התוצאה בצד.", math_expression: "40" },
            { verbal_explanation: "כעת נחשב את השטח של הריבוע שמוצמד למלבן.", math_expression: "שטח ריבוע = 3 \\times 3" },
            { verbal_explanation: "נפתור ונשמור גם את התוצאה הזו.", math_expression: "9" },
            { verbal_explanation: "נחבר את שני השטחים כדי לגלות את השטח הכולל של הצורה השלמה.", math_expression: "40 + 9" },
            { verbal_explanation: "נקבל את התשובה הסופית.", math_expression: "49" }
        ],
        final_answer: "49"
    },

    // ==========================================
    // תת נושא 2: הכרת הגופים (10 שאלות)
    // ==========================================

    {
        topic: "math_5_6",
        subTopic: "הכרת הגופים",
        question_text: "כמה פאות (הצדדים השטוחים) סך הכל יש בקובייה?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 150' style='max-width:200px; width:100%; border-radius:8px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='60,110 120,110 160,80 100,80' fill='none' stroke='#3b82f6' stroke-width='2'/><polygon points='60,50 120,50 160,20 100,20' fill='#cbd5e1' fill-opacity='0.4' stroke='#3b82f6' stroke-width='2'/><line x1='60' y1='110' x2='60' y2='50' stroke='#3b82f6' stroke-width='2'/><line x1='120' y1='110' x2='120' y2='50' stroke='#3b82f6' stroke-width='2'/><line x1='160' y1='80' x2='160' y2='20' stroke='#3b82f6' stroke-width='2'/><line x1='100' y1='110' x2='160' y2='110' stroke='none'/><line x1='100' y1='110' x2='100' y2='80' stroke='#3b82f6' stroke-dasharray='4,4' stroke-width='2'/><line x1='60' y1='110' x2='100' y2='80' stroke='#3b82f6' stroke-dasharray='4,4' stroke-width='2'/><line x1='100' y1='80' x2='100' y2='20' stroke='#3b82f6' stroke-dasharray='4,4' stroke-width='2'/></svg></div>",
        options: ["6", "4", "8", "12"],
        correctAnswer: 0,
        hint: "חישבו על קוביית משחק רגילה (כמו שמטילים במשחקי קופסה). אילו מספרים מופיעים עליה מכל הצדדים?",
        solution_steps: [
            { verbal_explanation: "לקובייה יש צד אחד למעלה שהוא התקרה.", math_expression: "למעלה = 1" },
            { verbal_explanation: "יש לה צד אחד למטה שהוא הרצפה או הבסיס.", math_expression: "למטה = 1" },
            { verbal_explanation: "מסביב יש לקובייה עוד צדדים שמקיפים אותה.", math_expression: "מסביב = 4" },
            { verbal_explanation: "נחבר את כל הצדדים (הפאות) יחד.", math_expression: "1 + 1 + 4" },
            { verbal_explanation: "נקבל את המספר הכולל של הפאות.", math_expression: "6" }
        ],
        final_answer: "6"
    },
    {
        topic: "math_5_6",
        subTopic: "הכרת הגופים",
        question_text: "כמה קודקודים (הפינות השפיציות) יש לתיבה?&rlm;",
        options: ["8", "6", "12", "4"],
        correctAnswer: 0,
        hint: "לתיבה יש שתי שכבות של פינות: הפינות בבסיס העליון והפינות בבסיס התחתון. ספרו כמה פינות יש למלבן ותכפילו בשתיים.",
        solution_steps: [
            { verbal_explanation: "תיבה היא כמו קופסת נעליים. יש לה בסיס למעלה (מלבן) ובסיס למטה (מלבן).", math_expression: "שני בסיסים" },
            { verbal_explanation: "נספור כמה פינות שפיציות יש במלבן העליון.", math_expression: "למעלה = 4" },
            { verbal_explanation: "נספור כמה פינות יש במלבן התחתון.", math_expression: "למטה = 4" },
            { verbal_explanation: "נחבר את הפינות העליונות והתחתונות יחד.", math_expression: "4 + 4" },
            { verbal_explanation: "התוצאה היא סך כל הקודקודים.", math_expression: "8" }
        ],
        final_answer: "8"
    },
    {
        topic: "math_5_6",
        subTopic: "הכרת הגופים",
        question_text: "כמה מקצועות (הקווים הישרים שמחברים את הפינות) יש למנסרה משולשת?&rlm;",
        options: ["9", "6", "12", "5"],
        correctAnswer: 0,
        hint: "מנסרה משולשת מורכבת משני משולשים (למעלה ולמטה) ושלושה קווים שעומדים ומחברים ביניהם.",
        solution_steps: [
            { verbal_explanation: "נתחיל לספור את הקווים שמציירים את המשולש העליון.", math_expression: "למעלה = 3" },
            { verbal_explanation: "נספור את הקווים שמציירים את המשולש התחתון.", math_expression: "למטה = 3" },
            { verbal_explanation: "נוסיף את הקווים שעומדים זקוף ומחברים את המשולש למעלה למשולש למטה.", math_expression: "עומדים = 3" },
            { verbal_explanation: "נחבר את כל הקווים (המקצועות) ביחד.", math_expression: "3 + 3 + 3" },
            { verbal_explanation: "נקבל את סך כל המקצועות בגוף הזה.", math_expression: "9" }
        ],
        final_answer: "9"
    },
    {
        topic: "math_5_6",
        subTopic: "הכרת הגופים",
        question_text: "כמה פאות (הצדדים השטוחים) יש בסך הכל לפירמידה מרובעת?&rlm;",
        options: ["5", "4", "6", "8"],
        correctAnswer: 0,
        hint: "פירמידה מרובעת מורכבת מבסיס אחד שהוא ריבוע או מלבן, ומסביבו עומדים משולשים שנפגשים למעלה בפינה אחת.",
        solution_steps: [
            { verbal_explanation: "לפירמידה יש רצפה שעליה היא עומדת, והיא מרובעת.", math_expression: "בסיס = 1" },
            { verbal_explanation: "מכל צלע של הרצפה עולה משולש כלפי מעלה. מכיוון שיש ארבע צלעות ברצפה, יש ארבעה משולשים.", math_expression: "משולשים בצדדים = 4" },
            { verbal_explanation: "נחבר את הבסיס יחד עם המשולשים שמרכיבים את הדפנות.", math_expression: "1 + 4" },
            { verbal_explanation: "נגלה את המספר הכולל של הפאות של הפירמידה.", math_expression: "5" }
        ],
        final_answer: "5"
    },
    {
        topic: "math_5_6",
        subTopic: "הכרת הגופים",
        question_text: "איזה גוף תלת-ממדי אפשר לקפל ולהרכיב מהפריסה המופיעה בציור?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 150' style='max-width:200px; width:100%; border-radius:8px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='80' y='10' width='40' height='40' fill='none' stroke='#3b82f6' stroke-width='2'/><rect x='80' y='50' width='40' height='40' fill='#cbd5e1' fill-opacity='0.4' stroke='#3b82f6' stroke-width='2'/><rect x='80' y='90' width='40' height='40' fill='none' stroke='#3b82f6' stroke-width='2'/><rect x='40' y='50' width='40' height='40' fill='none' stroke='#3b82f6' stroke-width='2'/><rect x='120' y='50' width='40' height='40' fill='none' stroke='#3b82f6' stroke-width='2'/><rect x='160' y='50' width='40' height='40' fill='none' stroke='#3b82f6' stroke-width='2'/></svg></div>",
        options: ["קובייה", "תיבה", "פירמידה", "מנסרה משולשת"],
        correctAnswer: 0,
        hint: "הביטו בציור. הפריסה מורכבת מ-6 ריבועים שווים לחלוטין. איזה גוף בנוי מ-6 ריבועים?",
        solution_steps: [
            { verbal_explanation: "נסתכל על האיור ונראה שהוא מורכב מריבועים בלבד.", math_expression: "רק ריבועים" },
            { verbal_explanation: "נספור את כמות הריבועים שיש בציור.", math_expression: "יש 6 ריבועים" },
            { verbal_explanation: "נחשוב: איזה צורה תלת ממדית עשויה אך ורק משישה ריבועים שווים?", math_expression: "קובייה" },
            { verbal_explanation: "לכן אם נקפל את הקווים, תצא לנו קובייה מושלמת.", math_expression: "קובייה" }
        ],
        final_answer: "קובייה"
    },
    {
        topic: "math_5_6",
        subTopic: "הכרת הגופים",
        question_text: "איזה גוף מתקבל כאשר מקפלים פריסה שמורכבת משני עיגולים שווים ומלבן אחד גדול?&rlm;",
        options: ["גליל", "חרוט", "כדור", "מנסרה משולשת"],
        correctAnswer: 0,
        hint: "חשבו על קופסת שימורים או פחית שתייה. יש להם מכסה עגול, תחתית עגולה, וגוף שאפשר לגלגל מתוך מלבן.",
        solution_steps: [
            { verbal_explanation: "נדמיין את המלבן מתגלגל ונסגר למעין צינור או קופסה.", math_expression: "צורת צינור" },
            { verbal_explanation: "שני העיגולים משמשים בתור המכסה והרצפה שסוגרים את הצינור הזה מכל כיוון.", math_expression: "בסיסים עגולים" },
            { verbal_explanation: "גוף שיש לו שני בסיסים עגולים ומעטפת עגולה שעוטפת אותם נקרא בשם מתמטי מסוים.", math_expression: "גליל" },
            { verbal_explanation: "הגוף הוא גליל.", math_expression: "גליל" }
        ],
        final_answer: "גליל"
    },
    {
        topic: "math_5_6",
        subTopic: "הכרת הגופים",
        question_text: "לאיזה מבין הגופים הבאים אין קודקודים (פינות) בכלל, ויש לו בדיוק שתי פאות (צדדים) שטוחות?&rlm;",
        options: ["גליל", "כדור", "חרוט", "קובייה"],
        correctAnswer: 0,
        hint: "כדור אין לו פאות שטוחות בכלל. לחרוט יש פינה אחת למעלה. גליל עשוי ממעטפת עגולה ושני בסיסים שטוחים בלי פינות.",
        solution_steps: [
            { verbal_explanation: "נבדוק את הכדור: אין לו פינות, אבל גם אין לו שום צד שטוח.", math_expression: "לא כדור" },
            { verbal_explanation: "נבדוק את הקובייה: יש לה המון פינות שפיציות.", math_expression: "לא קובייה" },
            { verbal_explanation: "נבדוק את החרוט: יש לו צד אחד שטוח למטה, ופינה אחת חדה למעלה (כמו כובע ליצן).", math_expression: "לא חרוט" },
            { verbal_explanation: "נבדוק את הגליל: המכסה והרצפה הם עיגולים שטוחים, והגוף שלו עגול וחלק בלי שום פינה או שפיץ.", math_expression: "הגוף הוא גליל" },
            { verbal_explanation: "לכן התשובה היא גליל.", math_expression: "גליל" }
        ],
        final_answer: "גליל"
    },
    {
        topic: "math_5_6",
        subTopic: "הכרת הגופים",
        question_text: "מהו ההבדל העיקרי בין קובייה לבין תיבה רגילה?&rlm;",
        options: ["בקובייה כל הפאות הן ריבועים שווים, ובתיבה יש גם מלבנים", "לתיבה יש יותר פינות מאשר לקובייה", "בקובייה אין מקצועות, ובתיבה יש", "קובייה היא שטוחה ותיבה היא גוף תלת-ממדי"],
        correctAnswer: 0,
        hint: "גם לקובייה וגם לתיבה יש אותו מספר בדיוק של פינות, צלעות ופאות. ההבדל הוא רק בצורת הפאות עצמן.",
        solution_steps: [
            { verbal_explanation: "נזכור שגם קובייה וגם תיבה הם גופים שדומים מאוד אחד לשני עם אותה כמות של חלקים.", math_expression: "אותה צורה כללית" },
            { verbal_explanation: "בקובייה, כל הצדדים מוכרחים להיות בדיוק באותו גודל ובאותה צורה - ריבוע.", math_expression: "קובייה = רק ריבועים" },
            { verbal_explanation: "בתיבה רגילה, הצדדים יכולים להיות ארוכים יותר או קצרים יותר, כמו למשל מלבנים.", math_expression: "תיבה = גם מלבנים" },
            { verbal_explanation: "לכן ההבדל הוא שבקובייה הכל ריבועים שווים, ובתיבה לא.", math_expression: "הפאות שונות" }
        ],
        final_answer: "בקובייה כל הפאות הן ריבועים שווים, ובתיבה יש גם מלבנים"
    },
    {
        topic: "math_5_6",
        subTopic: "הכרת הגופים",
        question_text: "כמה מקצועות (קווים המחברים את הפינות) יש במנסרה משושה (שהבסיס שלה הוא מצולע עם 6 צלעות)?&rlm;",
        options: ["18", "12", "6", "24"],
        correctAnswer: 0,
        hint: "למנסרה משושה יש בסיס עליון עם 6 צלעות, בסיס תחתון עם 6 צלעות, ועוד 6 קווים עומדים שמחברים את הבסיסים.",
        solution_steps: [
            { verbal_explanation: "נתחיל לספור את הקווים שמרכיבים את הבסיס העליון. הבסיס הוא משושה, לכן יש לו שישה קווים.", math_expression: "למעלה = 6" },
            { verbal_explanation: "נספור את הקווים שמרכיבים את הבסיס התחתון שעליו עומד הגוף.", math_expression: "למטה = 6" },
            { verbal_explanation: "כדי לחבר את הבסיס העליון והתחתון יחד, יש קווים שעומדים לאורך. יש קו כזה לכל פינה.", math_expression: "עומדים = 6" },
            { verbal_explanation: "נחבר את כל הקווים יחד כדי לגלות את סך הכל.", math_expression: "6 + 6 + 6" },
            { verbal_explanation: "אפשר גם לעשות תרגיל כפל מהיר.", math_expression: "3 \\times 6" },
            { verbal_explanation: "הגענו לתשובה.", math_expression: "18" }
        ],
        final_answer: "18"
    },
    {
        topic: "math_5_6",
        subTopic: "הכרת הגופים",
        question_text: "לאיזה גוף תלת-ממדי יש בסיס אחד שטוח ופינה חדה אחת ויחידה בקצה העליון שלו (קודקוד אחד)?&rlm;",
        options: ["חרוט", "גליל", "קובייה", "פירמידה משולשת"],
        correctAnswer: 0,
        hint: "חשבו על כובע של מסיבת יום הולדת, או על גביע של גלידה. הגוף הזה עגול למטה ויש לו שפיץ אחד למעלה.",
        solution_steps: [
            { verbal_explanation: "נבדוק את הגליל: יש לו שני בסיסים שטוחים ואין לו בכלל פינות שפיציות.", math_expression: "לא גליל" },
            { verbal_explanation: "נבדוק את הקובייה: יש לה המון פינות שפיציות.", math_expression: "לא קובייה" },
            { verbal_explanation: "נבדוק את הפירמידה המשולשת: יש לה שפיץ למעלה, אבל גם בבסיס יש לה כמה פינות.", math_expression: "לא פירמידה" },
            { verbal_explanation: "נבדוק את החרוט: הבסיס שלו הוא עיגול חלק לגמרי, ויש לו רק פינה אחת בשפיץ למעלה.", math_expression: "הגוף הוא חרוט" },
            { verbal_explanation: "התשובה הנכונה היא חרוט.", math_expression: "חרוט" }
        ],
        final_answer: "חרוט"
    },

    // ==========================================
    // תת נושא 3: חישובי נפחים (10 שאלות)
    // ==========================================

    {
        topic: "math_5_6",
        subTopic: "חישובי נפחים",
        question_text: "מהו הנפח של קובייה שאורך כל צלע (מקצוע) שלה הוא 4 סנטימטרים?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 180' style='max-width:200px; width:100%; border-radius:8px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='60,140 120,140 160,100 100,100' fill='none' stroke='#94a3b8' stroke-width='2'/><polygon points='60,80 120,80 160,40 100,40' fill='#3b82f6' fill-opacity='0.2' stroke='#3b82f6' stroke-width='2'/><line x1='60' y1='140' x2='60' y2='80' stroke='#3b82f6' stroke-width='2'/><line x1='120' y1='140' x2='120' y2='80' stroke='#3b82f6' stroke-width='2'/><line x1='160' y1='100' x2='160' y2='40' stroke='#3b82f6' stroke-width='2'/><line x1='100' y1='100' x2='100' y2='40' stroke='#94a3b8' stroke-dasharray='4,4' stroke-width='2'/><text x='85' y='160' font-size='14' font-family='Arial'>4</text><text x='40' y='115' font-size='14' font-family='Arial'>4</text></svg></div>",
        options: ["64", "16", "12", "48"],
        correctAnswer: 0,
        hint: "כדי למצוא נפח של קובייה, מכפילים את האורך ברוחב ובגובה. בקובייה כל המידות שוות, אז מכפילים את הצלע בעצמה 3 פעמים.",
        solution_steps: [
            { verbal_explanation: "בקובייה, כל הצלעות (אורך, רוחב וגובה) הן באותו האורך.", math_expression: "אורך = רוחב = גובה = 4" },
            { verbal_explanation: "ניזכר בכלל לחישוב נפח: מכפילים את שלושת המידות אחת בשנייה.", math_expression: "נפח = אורך \\times רוחב \\times גובה" },
            { verbal_explanation: "נרשום את התרגיל עם המספרים שלנו.", math_expression: "4 \\times 4 \\times 4" },
            { verbal_explanation: "נכפיל קודם את שני המספרים הראשונים.", math_expression: "4 \\times 4 = 16" },
            { verbal_explanation: "כעת נכפיל את התוצאה במספר האחרון.", math_expression: "16 \\times 4" },
            { verbal_explanation: "נקבל את הנפח הסופי של הקובייה.", math_expression: "64" }
        ],
        final_answer: "64"
    },
    {
        topic: "math_5_6",
        subTopic: "חישובי נפחים",
        question_text: "נתונה תיבה שהאורך שלה הוא 5 סנטימטרים, הרוחב הוא 4 סנטימטרים והגובה הוא 10 סנטימטרים. מהו נפח התיבה?&rlm;",
        options: ["200", "100", "40", "150"],
        correctAnswer: 0,
        hint: "נפח של תיבה הוא תמיד המכפלה של שלוש המידות שלה יחד: אורך כפול רוחב כפול גובה.",
        solution_steps: [
            { verbal_explanation: "נרשום לעצמנו את כל המידות של התיבה מתוך השאלה.", math_expression: "אורך = 5 \\quad , \\quad רוחב = 4 \\quad , \\quad גובה = 10" },
            { verbal_explanation: "הכלל לחישוב הנפח הוא להכפיל את כל שלוש המידות.", math_expression: "נפח = 5 \\times 4 \\times 10" },
            { verbal_explanation: "נכפיל קודם את האורך ברוחב (ככה בעצם אנחנו מוצאים את שטח הבסיס של התיבה).", math_expression: "5 \\times 4 = 20" },
            { verbal_explanation: "נכפיל את מה שקיבלנו בגובה של התיבה.", math_expression: "20 \\times 10" },
            { verbal_explanation: "נקבל את הנפח המלא.", math_expression: "200" }
        ],
        final_answer: "200"
    },
    {
        topic: "math_5_6",
        subTopic: "חישובי נפחים",
        question_text: "שטח הבסיס (הרצפה) של מנסרה הוא 15 סנטימטרים רבועים. הנפח הכולל של המנסרה הוא 60 סנטימטרים מעוקבים. מהו הגובה של המנסרה?&rlm;",
        options: ["4", "5", "10", "3"],
        correctAnswer: 0,
        hint: "נפח שווה לשטח הבסיס כפול הגובה. לכן, כדי למצוא את הגובה שחסר לנו, נחלק את הנפח בשטח הבסיס.",
        solution_steps: [
            { verbal_explanation: "אנו יודעים שהנפח שווה לשטח הרצפה כפול הגובה.", math_expression: "נפח = שטח בסיס \\times גובה" },
            { verbal_explanation: "נרשום את המספרים שאנחנו יודעים מתוך השאלה.", math_expression: "60 = 15 \\times גובה" },
            { verbal_explanation: "כדי לגלות מהו הגובה החסר, נעשה פעולת חילוק הפוכה.", math_expression: "גובה = 60 \\div 15" },
            { verbal_explanation: "נשאל את עצמנו: כמה פעמים חמש עשרה נכנס בשישים?", math_expression: "15 \\times 4 = 60" },
            { verbal_explanation: "לכן הגובה חייב להיות שווה לארבע.", math_expression: "4" }
        ],
        final_answer: "4"
    },
    {
        topic: "math_5_6",
        subTopic: "חישובי נפחים",
        question_text: "קובייה גדולה מורכבת מהמון קוביות קטנות שאורך כל אחת מהן הוא סנטימטר אחד. ידוע ששטח הבסיס של הקובייה הגדולה הוא 25 סנטימטרים רבועים. מהו הנפח שלה?&rlm;",
        options: ["125", "100", "50", "25"],
        correctAnswer: 0,
        hint: "בקובייה, כל המידות שוות. אם שטח הבסיס (אורך כפול רוחב) הוא 25, אז האורך והרוחב הם שניהם 5. זה אומר שגם הגובה הוא 5.",
        solution_steps: [
            { verbal_explanation: "הבסיס של הקובייה הוא ריבוע. ידוע לנו שהשטח שלו הוא עשרים וחמש.", math_expression: "שטח בסיס = 25" },
            { verbal_explanation: "נמצא מה אורך הצלע של הבסיס הזה (איזה מספר כפול עצמו שווה עשרים וחמש?).", math_expression: "5 \\times 5 = 25" },
            { verbal_explanation: "גילינו שהאורך והרוחב של הקובייה הם חמש. בקובייה, גם הגובה שווה לאותו מספר.", math_expression: "גובה = 5" },
            { verbal_explanation: "כדי למצוא את הנפח, נכפיל את שטח הרצפה בגובה שלה.", math_expression: "נפח = 25 \\times 5" },
            { verbal_explanation: "נפתור את תרגיל הכפל כדי להגיע לתשובה.", math_expression: "125" }
        ],
        final_answer: "125"
    },
    {
        topic: "math_5_6",
        subTopic: "חישובי נפחים",
        question_text: "מהו הנפח של קופסת קורנפלקס (תיבה) שהאורך שלה הוא 2 סנטימטרים, הרוחב שלה הוא 3 סנטימטרים והגובה שלה הוא 6 סנטימטרים?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 150' style='max-width:200px; width:100%; border-radius:8px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='80,120 160,120 120,90 40,90' fill='none' stroke='#94a3b8' stroke-width='2'/><polygon points='80,40 160,40 120,10 40,10' fill='none' stroke='#94a3b8' stroke-width='2'/><line x1='80' y1='120' x2='80' y2='40' stroke='#3b82f6' stroke-width='2'/><line x1='160' y1='120' x2='160' y2='40' stroke='#3b82f6' stroke-width='2'/><line x1='120' y1='90' x2='120' y2='10' stroke='#3b82f6' stroke-dasharray='4,4' stroke-width='2'/><line x1='40' y1='90' x2='40' y2='10' stroke='#3b82f6' stroke-dasharray='4,4' stroke-width='2'/><text x='115' y='140' font-size='14' font-family='Arial'>2</text><text x='50' y='115' font-size='14' font-family='Arial'>3</text><text x='170' y='80' font-size='14' font-family='Arial'>6</text></svg></div>",
        options: ["36", "30", "11", "24"],
        correctAnswer: 0,
        hint: "הנפח הוא פשוט הכפל של שלושת המספרים האלה אחד בשני.",
        solution_steps: [
            { verbal_explanation: "נאסוף את המידות שקיבלנו עבור הקופסה.", math_expression: "2 \\quad , \\quad 3 \\quad , \\quad 6" },
            { verbal_explanation: "נזכור שחוק הנפח לתיבות הוא להכפיל את המידות זו בזו.", math_expression: "נפח = 2 \\times 3 \\times 6" },
            { verbal_explanation: "נכפיל את שני המספרים הראשונים.", math_expression: "2 \\times 3 = 6" },
            { verbal_explanation: "את מה שיצא נכפיל במספר האחרון.", math_expression: "6 \\times 6" },
            { verbal_explanation: "התשובה שנקבל היא הנפח של הקופסה.", math_expression: "36" }
        ],
        final_answer: "36"
    },
    {
        topic: "math_5_6",
        subTopic: "חישובי נפחים",
        question_text: "דנה בנתה קופסה. אורך הקופסה הוא 2 סנטימטרים, הרוחב הוא 2 סנטימטרים והגובה הוא 2 סנטימטרים. כמה קוביות קטנות של 1 סנטימטר מעוקב ייכנסו לתוך הקופסה בדיוק?&rlm;",
        options: ["8", "6", "4", "12"],
        correctAnswer: 0,
        hint: "השאלה בעצם שואלת מהו הנפח של הקופסה של דנה. הכפילו אורך, רוחב וגובה.",
        solution_steps: [
            { verbal_explanation: "מכיוון שכל המידות של הקופסה של דנה שוות, הרי שזו קובייה.", math_expression: "אורך = 2 \\quad , \\quad רוחב = 2 \\quad , \\quad גובה = 2" },
            { verbal_explanation: "נחשב את הנפח, שזה בעצם בודק כמה קוביות קטנות נכנסות פנימה.", math_expression: "נפח = 2 \\times 2 \\times 2" },
            { verbal_explanation: "נבצע את תרגיל הכפל שלב אחרי שלב.", math_expression: "2 \\times 2 = 4" },
            { verbal_explanation: "נכפיל את התוצאה בגובה הקובייה.", math_expression: "4 \\times 2 = 8" },
            { verbal_explanation: "לכן ייכנסו לקופסה בדיוק שמונה קוביות קטנות.", math_expression: "8" }
        ],
        final_answer: "8"
    },
    {
        topic: "math_5_6",
        subTopic: "חישובי נפחים",
        question_text: "לתיבה מסוימת יש נפח של 100 סנטימטרים מעוקבים. אורך התיבה הוא 5 סנטימטרים והגובה שלה הוא 2 סנטימטרים. מהו הרוחב של התיבה?&rlm;",
        options: ["10", "5", "20", "8"],
        correctAnswer: 0,
        hint: "הכפילו קודם את האורך בגובה כדי לראות כמה זה יוצא. אחר כך, נסו לחשוב: איזה מספר צריך להכפיל בתוצאה כדי להגיע לנפח של 100?",
        solution_steps: [
            { verbal_explanation: "נרשום את חוק הנפח המלא עם הנתונים הידועים לנו.", math_expression: "100 = 5 \\times רוחב \\times 2" },
            { verbal_explanation: "נכפיל קודם את שני המספרים שאנחנו כבר מכירים (האורך והגובה).", math_expression: "5 \\times 2 = 10" },
            { verbal_explanation: "עכשיו נשנה את המשוואה כדי שתהיה פשוטה יותר.", math_expression: "100 = 10 \\times רוחב" },
            { verbal_explanation: "נשאל את עצמנו: איזה מספר כפול עשר ייתן לנו מאה?", math_expression: "100 \\div 10 = 10" },
            { verbal_explanation: "גילינו שהרוחב של התיבה חייב להיות עשר.", math_expression: "10" }
        ],
        final_answer: "10"
    },
    {
        topic: "math_5_6",
        subTopic: "חישובי נפחים",
        question_text: "אקווריום ריק בצורת תיבה באורך 10 סנטימטרים, רוחב 5 סנטימטרים וגובה 4 סנטימטרים. ממלאים אותו במים עד לחצי מהגובה שלו בדיוק. מהו הנפח של המים באקווריום?&rlm;",
        options: ["100", "200", "50", "40"],
        correctAnswer: 0,
        hint: "חשבו קודם את הנפח של כל האקווריום. מכיוון שהוא רק חצי מלא, חלקו את התוצאה שקיבלתם לשתיים.",
        solution_steps: [
            { verbal_explanation: "קודם נבדוק מה הנפח של האקווריום כשהוא מלא לגמרי עד הסוף.", math_expression: "נפח מלא = 10 \\times 5 \\times 4" },
            { verbal_explanation: "נכפיל את המספרים.", math_expression: "10 \\times 5 = 50" },
            { verbal_explanation: "נכפיל את חמישים בארבע לקבלת הנפח הכולל.", math_expression: "50 \\times 4 = 200" },
            { verbal_explanation: "האקווריום מלא רק עד החצי, לכן נחלק את הנפח הכולל בשתיים.", math_expression: "200 \\div 2" },
            { verbal_explanation: "נקבל את נפח המים האמיתי שיש באקווריום עכשיו.", math_expression: "100" }
        ],
        final_answer: "100"
    },
    {
        topic: "math_5_6",
        subTopic: "חישובי נפחים",
        question_text: "עומר בנה מגדל משתי קוביות שהדביק אחת על השנייה. אורך צלע של כל קובייה הוא 3 סנטימטרים. מהו הנפח הכולל של המגדל שעומר בנה?&rlm;",
        options: ["54", "27", "18", "45"],
        correctAnswer: 0,
        hint: "חשבו את הנפח של קובייה אחת בלבד. בגלל שהמגדל מורכב משתי קוביות כאלה, פשוט הכפילו את הנפח שיצא לכם בשתיים.",
        solution_steps: [
            { verbal_explanation: "נתחיל בחישוב הנפח של קובייה אחת בלבד שעומר השתמש בה.", math_expression: "נפח קובייה = 3 \\times 3 \\times 3" },
            { verbal_explanation: "נפתור את התרגיל. שלוש כפול שלוש זה תשע. ותשע כפול שלוש זה עשרים ושבע.", math_expression: "3 \\times 3 = 9 \\quad , \\quad 9 \\times 3 = 27" },
            { verbal_explanation: "עכשיו אנחנו יודעים שכל קובייה תופסת נפח של עשרים ושבע.", math_expression: "קובייה אחת = 27" },
            { verbal_explanation: "המגדל בנוי משתי קוביות זהות כאלה, אז נחבר אותן יחד או נכפיל בשתיים.", math_expression: "27 + 27" },
            { verbal_explanation: "נקבל את הנפח המלא של המגדל השלם.", math_expression: "54" }
        ],
        final_answer: "54"
    },
    {
        topic: "math_5_6",
        subTopic: "חישובי נפחים",
        question_text: "קופסה א' היא קובייה שאורך הצלע שלה הוא 2 סנטימטרים. קופסה ב' היא תיבה שאורכה 4, רוחבה 1 וגובהה 2 סנטימטרים. איזו קופסה גדולה יותר מבחינת הנפח שלה?&rlm;",
        options: ["הן שוות בנפח שלהן", "קופסה א' גדולה יותר", "קופסה ב' גדולה יותר", "לא ניתן לדעת"],
        correctAnswer: 0,
        hint: "חשבו את הנפח של קופסה א' (2 כפול 2 כפול 2). אחר כך חשבו את הנפח של קופסה ב' (4 כפול 1 כפול 2). השוו בין שתי התוצאות.",
        solution_steps: [
            { verbal_explanation: "נחשב קודם את הנפח של קופסה א', שהיא בצורת קובייה.", math_expression: "נפח א = 2 \\times 2 \\times 2" },
            { verbal_explanation: "נפתור את התרגיל.", math_expression: "2 \\times 2 = 4 \\quad , \\quad 4 \\times 2 = 8" },
            { verbal_explanation: "עכשיו נחשב את הנפח של קופסה ב', שהיא בצורת תיבה.", math_expression: "נפח ב = 4 \\times 1 \\times 2" },
            { verbal_explanation: "נפתור גם את התרגיל הזה.", math_expression: "4 \\times 1 = 4 \\quad , \\quad 4 \\times 2 = 8" },
            { verbal_explanation: "קיבלנו את המספר שמונה גם בקופסה הראשונה וגם בשנייה.", math_expression: "8 = 8" },
            { verbal_explanation: "לכן המסקנה היא ששתי הקופסאות תופסות בדיוק את אותו המקום (אותו נפח).", math_expression: "שוות בנפח" }
        ],
        final_answer: "הן שוות בנפח שלהן"
    },

    // ==========================================
    // תת נושא 4: מעגל ועיגול (10 שאלות)
    // ==========================================

    {
        topic: "math_5_6",
        subTopic: "מעגל ועיגול",
        question_text: "הרדיוס של מעגל הוא 5 סנטימטרים. מהו אורך הקוטר של המעגל הזה?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 100 100' style='max-width:150px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><circle cx='50' cy='50' r='40' fill='none' stroke='#3b82f6' stroke-width='2'/><circle cx='50' cy='50' r='2' fill='#1e293b'/><line x1='50' y1='50' x2='90' y2='50' stroke='#ef4444' stroke-width='2'/><text x='65' y='45' font-size='12' font-family='Arial'>5</text></svg></div>",
        options: ["10", "2.5", "15", "25"],
        correctAnswer: 0,
        hint: "הקוטר הוא הקו שעובר מצד אחד של המעגל לצד השני דרך המרכז. הוא בדיוק כפול מהרדיוס.",
        solution_steps: [
            { verbal_explanation: "אנו יודעים שהרדיוס הוא המרחק מהמרכז ועד הקצה של המעגל.", math_expression: "רדיוס = 5" },
            { verbal_explanation: "הקוטר בנוי משני רדיוסים שמחוברים יחד בקו ישר.", math_expression: "קוטר = פעמיים הרדיוס" },
            { verbal_explanation: "כדי למצוא את הקוטר, ניקח את הרדיוס ונכפיל אותו בשתיים.", math_expression: "קוטר = 5 \\times 2" },
            { verbal_explanation: "נפתור את התרגיל הקטן.", math_expression: "10" }
        ],
        final_answer: "10"
    },
    {
        topic: "math_5_6",
        subTopic: "מעגל ועיגול",
        question_text: "אורך הקוטר של מעגל הוא 14 סנטימטרים. מהו הרדיוס של המעגל?&rlm;",
        options: ["7", "28", "3.5", "21"],
        correctAnswer: 0,
        hint: "הרדיוס הוא בדיוק חצי מהקוטר. לכן, צריך פשוט לחלק את הקוטר בשתיים.",
        solution_steps: [
            { verbal_explanation: "אנחנו יודעים שהקוטר הוא הקו הארוך ביותר במעגל והוא שווה לארבע עשרה.", math_expression: "קוטר = 14" },
            { verbal_explanation: "הרדיוס הוא רק חצי מהקוטר הזה, כי הוא מגיע רק מהמרכז ועד הקצה.", math_expression: "רדיוס = קוטר \\div 2" },
            { verbal_explanation: "נרשום את תרגיל החילוק.", math_expression: "14 \\div 2" },
            { verbal_explanation: "התוצאה שנקבל היא אורך הרדיוס.", math_expression: "7" }
        ],
        final_answer: "7"
    },
    {
        topic: "math_5_6",
        subTopic: "מעגל ועיגול",
        question_text: "קוטר של מעגל הוא 10 סנטימטרים. מהו בערך ההיקף של המעגל? (זכרו שהמספר 'פאי' שווה בערך ל-3.14).&rlm;",
        options: ["31.4", "15.7", "314", "3.14"],
        correctAnswer: 0,
        hint: "היקף מעגל מחושב על ידי הכפלת הקוטר שלו במספר פאי (3.14).",
        solution_steps: [
            { verbal_explanation: "נסתכל על הנתון שלנו, אנחנו יודעים מהו הקוטר.", math_expression: "קוטר = 10" },
            { verbal_explanation: "חוק החישוב של היקף מעגל הוא קוטר כפול המספר המיוחד פאי.", math_expression: "היקף = קוטר \\times פאי" },
            { verbal_explanation: "נציב את המספרים שאנחנו מכירים.", math_expression: "10 \\times 3.14" },
            { verbal_explanation: "כשאנחנו מכפילים מספר עשרוני בעשר, הנקודה קופצת מקום אחד ימינה.", math_expression: "31.4" }
        ],
        final_answer: "31.4"
    },
    {
        topic: "math_5_6",
        subTopic: "מעגל ועיגול",
        question_text: "רדיוס של עיגול הוא 10 סנטימטרים. מהו השטח המשוער של העיגול? (השתמשו בפאי שווה 3.14 בערך).&rlm;",
        options: ["314", "31.4", "62.8", "628"],
        correctAnswer: 0,
        hint: "שטח עיגול שווה לרדיוס כפול עצמו, ואת התוצאה מכפילים בפאי (3.14).",
        solution_steps: [
            { verbal_explanation: "השטח של עיגול תלוי ברדיוס שלו.", math_expression: "רדיוס = 10" },
            { verbal_explanation: "קודם נכפיל את הרדיוס בעצמו כמו ריבוע.", math_expression: "10 \\times 10 = 100" },
            { verbal_explanation: "עכשיו נכפיל את התוצאה הזו במספר פאי (3.14) כדי לקבל את השטח המלא.", math_expression: "שטח = 100 \\times 3.14" },
            { verbal_explanation: "הכפלה במאה מזיזה את הנקודה העשרונית שני צעדים ימינה.", math_expression: "314" }
        ],
        final_answer: "314"
    },
    {
        topic: "math_5_6",
        subTopic: "מעגל ועיגול",
        question_text: "מה הקשר הנכון בין הרדיוס לבין הקוטר בכל מעגל?&rlm;",
        options: ["הקוטר כפול מהרדיוס", "הרדיוס כפול מהקוטר", "הקוטר שווה לרדיוס כפול פאי", "הם שווים באורכם תמיד"],
        correctAnswer: 0,
        hint: "חשבו על גלגל של אופניים. המרכז הוא האמצע. הרדיוס הולך מהאמצע לקצה. הקוטר הולך מקצה לקצה ועובר דרך האמצע.",
        solution_steps: [
            { verbal_explanation: "הרדיוס נמדד ממרכז המעגל ועד הקו שמקיף אותו.", math_expression: "רדיוס הוא חצי קו" },
            { verbal_explanation: "הקוטר נמדד מקצה אחד של המעגל אל הקצה השני וחוצה את המרכז.", math_expression: "קוטר הוא קו שלם" },
            { verbal_explanation: "משמעות הדבר היא שבתוך כל קוטר נכנסים בדיוק שני רדיוסים מחוברים.", math_expression: "קוטר = רדיוס + רדיוס" },
            { verbal_explanation: "ולכן, הקוטר גדול פי שתיים מהרדיוס.", math_expression: "הקוטר כפול מהרדיוס" }
        ],
        final_answer: "הקוטר כפול מהרדיוס"
    },
    {
        topic: "math_5_6",
        subTopic: "מעגל ועיגול",
        question_text: "רדיוס של מעגל הוא 5 סנטימטרים. מהו בערך ההיקף שלו? (השתמשו בפאי שווה 3.14).&rlm;",
        options: ["31.4", "15.7", "78.5", "10"],
        correctAnswer: 0,
        hint: "כדי למצוא היקף, צריך קודם את הקוטר. הכפילו את הרדיוס בשתיים כדי לקבל את הקוטר, ואז הכפילו ב-3.14.",
        solution_steps: [
            { verbal_explanation: "נמצא קודם את הקוטר בעזרת הרדיוס שניתן לנו.", math_expression: "קוטר = 5 \\times 2 = 10" },
            { verbal_explanation: "עכשיו כשיש לנו את הקוטר, נוכל להשתמש בנוסחת ההיקף.", math_expression: "היקף = קוטר \\times פאי" },
            { verbal_explanation: "נציב את המספרים שאנחנו יודעים לתוך התרגיל.", math_expression: "10 \\times 3.14" },
            { verbal_explanation: "נפתור ונגיע לתשובה.", math_expression: "31.4" }
        ],
        final_answer: "31.4"
    },
    {
        topic: "math_5_6",
        subTopic: "מעגל ועיגול",
        question_text: "איך נקרא הקו הישר שמחבר שתי נקודות על המעגל, אבל לא בהכרח עובר דרך המרכז?&rlm;",
        options: ["מיתר", "קוטר", "רדיוס", "היקף"],
        correctAnswer: 0,
        hint: "זהו מושג חשוב בגיאומטריה של מעגל. קו שפשוט חותך את המעגל משתי קצוות נקרא בשם קצר.",
        solution_steps: [
            { verbal_explanation: "רדיוס הוא קו מהמרכז אל הקצה, לכן זה לא מתאים לתיאור.", math_expression: "לא רדיוס" },
            { verbal_explanation: "היקף הוא המסגרת העגולה של המעגל עצמו מבחוץ, ולא קו ישר בפנים.", math_expression: "לא היקף" },
            { verbal_explanation: "קוטר הוא אכן קו שמחבר שתי נקודות, אבל הוא תמיד חייב לעבור במרכז המעגל.", math_expression: "לא קוטר בהכרח" },
            { verbal_explanation: "השם הכללי לקו שמחבר שתי נקודות על שפת המעגל הוא מיתר.", math_expression: "מיתר" }
        ],
        final_answer: "מיתר"
    },
    {
        topic: "math_5_6",
        subTopic: "מעגל ועיגול",
        question_text: "איזה משפט נכון לגבי הקוטר של המעגל?&rlm;",
        options: ["הקוטר הוא המיתר הכי ארוך במעגל", "הקוטר שווה לפאי", "הקוטר נוגע רק בנקודה אחת במעגל", "הקוטר הוא תמיד חצי מהרדיוס"],
        correctAnswer: 0,
        hint: "חשבו על כל הקווים שאפשר לצייר מצד לצד בתוך מעגל. איזה מהם יהיה הארוך ביותר?",
        solution_steps: [
            { verbal_explanation: "קוטר הוא קו שמחבר שתי נקודות, לכן הוא סוג של מיתר.", math_expression: "קוטר הוא מיתר" },
            { verbal_explanation: "ככל שקו קרוב יותר למרכז המעגל, כך הוא רחב וארוך יותר.", math_expression: "במרכז יותר רחב" },
            { verbal_explanation: "מכיוון שהקוטר עובר בדיוק במרכז, במקום הכי רחב שיש, הוא הכי ארוך שאפשר.", math_expression: "הכי ארוך שיש" },
            { verbal_explanation: "לכן, הקוטר הוא המיתר הארוך ביותר שאפשר לצייר במעגל.", math_expression: "המיתר הכי ארוך במעגל" }
        ],
        final_answer: "הקוטר הוא המיתר הכי ארוך במעגל"
    },
    {
        topic: "math_5_6",
        subTopic: "מעגל ועיגול",
        question_text: "רדיוס של עיגול שלם הוא 10 סנטימטרים. חותכים את העיגול לחצי בדיוק. מה השטח של חצי העיגול הזה בערך? (פאי שווה 3.14).&rlm;",
        options: ["157", "314", "31.4", "62.8"],
        correctAnswer: 0,
        hint: "חשבו את השטח של כל העיגול כאילו הוא שלם. אחר כך פשוט חלקו את מה שקיבלתם לשתיים.",
        solution_steps: [
            { verbal_explanation: "נחשב את השטח של עיגול שלם שיש לו רדיוס של עשר.", math_expression: "שטח שלם = 10 \\times 10 \\times 3.14" },
            { verbal_explanation: "עשר כפול עשר שווה למאה.", math_expression: "10 \\times 10 = 100" },
            { verbal_explanation: "מאה כפול פאי נותן לנו את השטח המלא.", math_expression: "100 \\times 3.14 = 314" },
            { verbal_explanation: "עכשיו נחשב את השטח של חצי מהעיגול על ידי חלוקה בשתיים.", math_expression: "314 \\div 2" },
            { verbal_explanation: "נפתור ונגיע לתשובה הסופית.", math_expression: "157" }
        ],
        final_answer: "157"
    },
    {
        topic: "math_5_6",
        subTopic: "מעגל ועיגול",
        question_text: "מה ההבדל בין מעגל לעיגול בשפה של מתמטיקה?&rlm;",
        options: ["המעגל הוא רק הקו שמסביב, והעיגול כולל גם את השטח שבפנים", "עיגול הוא רק הקו שמסביב, והמעגל כולל גם את השטח שבפנים", "אין שום הבדל, אלו שתי מילים לאותו דבר בדיוק", "למעגל יש רדיוס ולעיגול אין רדיוס"],
        correctAnswer: 0,
        hint: "חשבו על טבעת ועל צלחת. טבעת היא חלולה באמצע, צלחת היא מלאה. איך קוראים לכל אחד מהם?",
        solution_steps: [
            { verbal_explanation: "מעגל מתאר את החישוק או את הטבעת. זה רק הקו הדק שמקיף את הכל מבחוץ.", math_expression: "מעגל = קו" },
            { verbal_explanation: "עיגול מתאר את כל מה שנמצא גם בפנים, כמו צלחת או מטבע. יש לו שטח אמיתי.", math_expression: "עיגול = קו + תוכן" },
            { verbal_explanation: "לכן אפשר לחשב שטח של עיגול, ואפשר לחשב אורך (היקף) של מעגל.", math_expression: "שטח לעיגול, היקף למעגל" },
            { verbal_explanation: "המסקנה היא שמעגל הוא רק הקו, ועיגול כולל את השטח.", math_expression: "המעגל הוא רק הקו שמסביב, והעיגול כולל גם את השטח שבפנים" }
        ],
        final_answer: "המעגל הוא רק הקו שמסביב, והעיגול כולל גם את השטח שבפנים"
    }
];