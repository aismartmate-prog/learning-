const questionsDB = [
    // ==========================================
    // תת נושא 1: משפט פיתגורס (10 שאלות)
    // ==========================================
    {
        "topic": "geometry_grade_8",
        "subTopic": "משפט פיתגורס",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 150 150\" width=\"120\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"20,130 130,130 20,20\" fill=\"#e2e8f0\" stroke=\"#0f172a\" stroke-width=\"2\"/><rect x=\"20\" y=\"110\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\"/><text x=\"70\" y=\"145\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\">4</text><text x=\"5\" y=\"80\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\">3</text><text x=\"80\" y=\"70\" font-family=\"Arial\" font-size=\"14\" fill=\"#ef4444\">c</text></svg></div><br>במשולש ישר זווית, אורכי הניצבים הם 3 ס''מ ו-4 ס''מ. מהו אורך היתר (c)?&rlm;",
        "options": ["5", "7", "25", "12"],
        "correctAnswer": 0,
        "hint": "השתמשו במשפט פיתגורס: סכום ריבועי הניצבים שווה לריבוע היתר.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש במשפט פיתגורס המגדיר את הקשר בין צלעות משולש ישר זווית.", "math_expression": "a^2 + b^2 = c^2" },
            { "verbal_explanation": "נציב את אורכי הניצבים הידועים לנו לתוך המשוואה.", "math_expression": "3^2 + 4^2 = c^2" },
            { "verbal_explanation": "נחשב את החזקה השנייה של כל אחד מהניצבים.", "math_expression": "9 + 16 = c^2" },
            { "verbal_explanation": "נחבר את התוצאות באגף השמאלי.", "math_expression": "25 = c^2" },
            { "verbal_explanation": "נוציא שורש ריבועי כדי למצוא את אורך היתר עצמו.", "math_expression": "\\sqrt{25} = 5" },
            { "verbal_explanation": "אורך היתר הוא חמישה סנטימטרים.", "math_expression": "c = 5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "משפט פיתגורס",
        "question_text": "במשולש ישר זווית, אורכי הניצבים הם 6 ס''מ ו-8 ס''מ. חשבו את אורך היתר.&rlm;",
        "options": ["10", "14", "100", "48"],
        "correctAnswer": 0,
        "hint": "העלו את 6 בריבוע ואת 8 בריבוע, חברו אותם והוציאו שורש.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את נוסחת משפט פיתגורס.", "math_expression": "a^2 + b^2 = c^2" },
            { "verbal_explanation": "נציב את אורכי הניצבים שש ושמונה.", "math_expression": "6^2 + 8^2 = c^2" },
            { "verbal_explanation": "נחשב את ריבועי המספרים.", "math_expression": "36 + 64 = c^2" },
            { "verbal_explanation": "נחבר את התוצאות לקבלת ריבוע היתר.", "math_expression": "100 = c^2" },
            { "verbal_explanation": "נבצע פעולת שורש ריבועי למציאת היתר.", "math_expression": "\\sqrt{100} = 10" },
            { "verbal_explanation": "אורך היתר הוא עשרה סנטימטרים.", "math_expression": "c = 10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "משפט פיתגורס",
        "question_text": "במשולש ישר זווית, אורך היתר הוא 13 ס''מ ואורך אחד הניצבים הוא 5 ס''מ. מהו אורך הניצב השני?&rlm;",
        "options": ["12", "144", "18", "8"],
        "correctAnswer": 0,
        "hint": "הפעם היתר נתון. עליכם להחסיר את ריבוע הניצב מריבוע היתר.",
        "solution_steps": [
            { "verbal_explanation": "נציב את הנתונים בנוסחת פיתגורס. הפעם היתר ידוע לנו.", "math_expression": "5^2 + b^2 = 13^2" },
            { "verbal_explanation": "נחשב את החזקות של המספרים הנתונים.", "math_expression": "25 + b^2 = 169" },
            { "verbal_explanation": "נחסר עשרים וחמש משני האגפים כדי לבודד את ריבוע הניצב החסר.", "math_expression": "b^2 = 169 - 25" },
            { "verbal_explanation": "נחשב את ההפרש.", "math_expression": "b^2 = 144" },
            { "verbal_explanation": "נוציא שורש ריבועי למציאת אורך הניצב.", "math_expression": "\\sqrt{144} = 12" },
            { "verbal_explanation": "אורך הניצב השני הוא שנים עשר סנטימטרים.", "math_expression": "b = 12" }
        ],
        "final_answer": "12"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "משפט פיתגורס",
        "question_text": "אורך יתר במשולש ישר זווית הוא 10 ס''מ. אורך ניצב אחד הוא 8 ס''מ. מצאו את אורך הניצב השני.&rlm;",
        "options": ["6", "36", "2", "18"],
        "correctAnswer": 0,
        "hint": "העלו את 10 בריבוע (100) וחסרו את 8 בריבוע (64).",
        "solution_steps": [
            { "verbal_explanation": "נבנה משוואה לפי פיתגורס עם הניצב החסר.", "math_expression": "a^2 + 8^2 = 10^2" },
            { "verbal_explanation": "נחשב את ערכי החזקות.", "math_expression": "a^2 + 64 = 100" },
            { "verbal_explanation": "נחסר שישים וארבע משני הצדדים.", "math_expression": "a^2 = 100 - 64" },
            { "verbal_explanation": "ריבוע הניצב שווה לשלושים ושש.", "math_expression": "a^2 = 36" },
            { "verbal_explanation": "השורש הריבועי ייתן לנו את אורך הניצב.", "math_expression": "\\sqrt{36} = 6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "משפט פיתגורס",
        "question_text": "סולם באורך 5 מטרים נשען על קיר ישר. תחתית הסולם רחוקה 3 מטרים מבסיס הקיר. לאיזה גובה מגיע הסולם על הקיר?&rlm;",
        "options": ["4", "2", "8", "16"],
        "correctAnswer": 0,
        "hint": "הסולם הוא היתר. המרחק מהקיר והגובה על הקיר הם הניצבים.",
        "solution_steps": [
            { "verbal_explanation": "הסולם, הקיר והקרקע יוצרים משולש ישר זווית. אורך הסולם הוא היתר.", "math_expression": "a^2 + 3^2 = 5^2" },
            { "verbal_explanation": "נחשב את הריבועים של הניצב והיתר.", "math_expression": "a^2 + 9 = 25" },
            { "verbal_explanation": "נחסר תשע משני האגפים.", "math_expression": "a^2 = 25 - 9 = 16" },
            { "verbal_explanation": "נוציא שורש ריבועי.", "math_expression": "\\sqrt{16} = 4" },
            { "verbal_explanation": "הסולם מגיע לגובה של ארבעה מטרים.", "math_expression": "a = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "משפט פיתגורס",
        "question_text": "האם משולש שצלעותיו הן באורכים 5, 6, 7 ס''מ הוא משולש ישר זווית?&rlm;",
        "options": ["לא", "כן", "רק אם 7 הוא היתר", "אי אפשר לדעת"],
        "correctAnswer": 0,
        "hint": "בדקו האם סכום הריבועים של שתי הצלעות הקצרות שווה לריבוע של הצלע הארוכה ביותר.",
        "solution_steps": [
            { "verbal_explanation": "במשולש ישר זווית, ריבוע הצלע הארוכה חייב להיות שווה לסכום ריבועי שתי האחרות.", "math_expression": "5^2 + 6^2 = 7^2" },
            { "verbal_explanation": "נחשב את אגף שמאל.", "math_expression": "25 + 36 = 61" },
            { "verbal_explanation": "נחשב את אגף ימין (הצלע הארוכה בריבוע).", "math_expression": "7^2 = 49" },
            { "verbal_explanation": "נשווה בין התוצאות.", "math_expression": "61 \\neq 49" },
            { "verbal_explanation": "מכיוון שהתוצאות אינן שוות, המשולש אינו ישר זווית.", "math_expression": "\\times" }
        ],
        "final_answer": "לא"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "משפט פיתגורס",
        "question_text": "אורכי הניצבים במשולש ישר זווית הם 9 ס''מ ו-12 ס''מ. מהו אורך היתר?&rlm;",
        "options": ["15", "21", "225", "108"],
        "correctAnswer": 0,
        "hint": "זהו שילוש פיתגורי המבוסס על 3,4,5 שהורחב פי 3.",
        "solution_steps": [
            { "verbal_explanation": "נציב את הניצבים הנתונים במשוואת פיתגורס.", "math_expression": "9^2 + 12^2 = c^2" },
            { "verbal_explanation": "נחשב את החזקות.", "math_expression": "81 + 144 = c^2" },
            { "verbal_explanation": "נחבר את הערכים באגף שמאל.", "math_expression": "225 = c^2" },
            { "verbal_explanation": "השורש הריבועי של מאתיים עשרים וחמש הוא חמש עשרה.", "math_expression": "\\sqrt{225} = 15" },
            { "verbal_explanation": "לכן, אורך היתר הוא חמישה עשר.", "math_expression": "c = 15" }
        ],
        "final_answer": "15"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "משפט פיתגורס",
        "question_text": "האם משולש בעל צלעות באורכים 8, 15, 17 הוא משולש ישר זווית?&rlm;",
        "options": ["כן", "לא", "רק אם 8 הוא היתר", "אי אפשר לדעת"],
        "correctAnswer": 0,
        "hint": "בדקו את השוויון: 8 בריבוע ועוד 15 בריבוע שווה ל-17 בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק האם המשפט מתקיים עבור אורכי הצלעות הללו.", "math_expression": "8^2 + 15^2 = 17^2" },
            { "verbal_explanation": "נחשב את סכום הריבועים של שתי הצלעות הקצרות.", "math_expression": "64 + 225 = 289" },
            { "verbal_explanation": "נחשב את הריבוע של הצלע הארוכה ביותר.", "math_expression": "17^2 = 289" },
            { "verbal_explanation": "שני האגפים שווים לחלוטין. זהו אכן שילוש פיתגורי תקני.", "math_expression": "289 = 289" },
            { "verbal_explanation": "המסקנה היא שהמשולש ישר זווית.", "math_expression": "\\surd" }
        ],
        "final_answer": "כן"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "משפט פיתגורס",
        "question_text": "במלבן, אורך צלע אחת הוא 12 ס''מ ואורך הצלע השנייה הוא 5 ס''מ. מהו אורך האלכסון של המלבן?&rlm;",
        "options": ["13", "17", "60", "169"],
        "correctAnswer": 0,
        "hint": "אלכסון המלבן יוצר משולש ישר זווית יחד עם שתי צלעות המלבן.",
        "solution_steps": [
            { "verbal_explanation": "האלכסון ושתי צלעות סמוכות במלבן יוצרים משולש ישר זווית. האלכסון הוא היתר.", "math_expression": "5^2 + 12^2 = c^2" },
            { "verbal_explanation": "נחשב את הריבועים של אורכי הצלעות.", "math_expression": "25 + 144 = c^2" },
            { "verbal_explanation": "נחבר את התוצאות.", "math_expression": "169 = c^2" },
            { "verbal_explanation": "נוציא שורש ריבועי.", "math_expression": "\\sqrt{169} = 13" },
            { "verbal_explanation": "אורך אלכסון המלבן הוא שלושה עשר סנטימטרים.", "math_expression": "c = 13" }
        ],
        "final_answer": "13"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "משפט פיתגורס",
        "question_text": "ספינה שטה 6 קילומטרים מזרחה ולאחר מכן 8 קילומטרים צפונה. מהו המרחק בקו אווירי ישר מנקודת המוצא שלה?&rlm;",
        "options": ["10", "14", "48", "100"],
        "correctAnswer": 0,
        "hint": "התנועה למזרח ולצפון יוצרת זווית ישרה. המרחק האווירי הוא היתר.",
        "solution_steps": [
            { "verbal_explanation": "הכיוונים מזרח וצפון מאונכים זה לזה ויוצרים זווית של תשעים מעלות.", "math_expression": "90^{\\circ}" },
            { "verbal_explanation": "נשתמש במשפט פיתגורס למציאת המרחק הישיר המהווה יתר.", "math_expression": "6^2 + 8^2 = c^2" },
            { "verbal_explanation": "נחשב ונחבר את הריבועים.", "math_expression": "36 + 64 = 100" },
            { "verbal_explanation": "נוציא שורש ריבועי ממאה.", "math_expression": "\\sqrt{100} = 10" },
            { "verbal_explanation": "המרחק האווירי הוא עשרה קילומטרים.", "math_expression": "c = 10" }
        ],
        "final_answer": "10"
    },

    // ==========================================
    // תת נושא 2: מנסרה ישרה (שטח ונפח) (10 שאלות)
    // ==========================================
    {
        "topic": "geometry_grade_8",
        "subTopic": "מנסרה ישרה (שטח ונפח)",
        "question_text": "מנסרה מרובעת (תיבה) היא בעלת ממדים: אורך 3 ס''מ, רוחב 4 ס''מ, וגובה 5 ס''מ. מהו הנפח של התיבה?&rlm;",
        "options": ["60", "12", "47", "94"],
        "correctAnswer": 0,
        "hint": "נפח של תיבה הוא מכפלת שלושת הממדים שלה.",
        "solution_steps": [
            { "verbal_explanation": "נוסחת הנפח של מנסרה היא שטח הבסיס כפול גובה המנסרה.", "math_expression": "V = S \\times h" },
            { "verbal_explanation": "נחשב את שטח הבסיס המלבני על ידי כפל האורך ברוחב.", "math_expression": "3 \\times 4 = 12" },
            { "verbal_explanation": "נכפול את שטח הבסיס בגובה התיבה.", "math_expression": "12 \\times 5" },
            { "verbal_explanation": "תוצאת ההכפלה היא שישים.", "math_expression": "60" },
            { "verbal_explanation": "נפח התיבה הוא שישים סמ''ק.", "math_expression": "V = 60" }
        ],
        "final_answer": "60"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "מנסרה ישרה (שטח ונפח)",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"120\" height=\"90\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"50,120 150,120 100,50\" fill=\"#e2e8f0\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"100\" y1=\"50\" x2=\"100\" y2=\"120\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"4\"/><text x=\"105\" y=\"90\" font-family=\"Arial\" font-size=\"12\" fill=\"#ef4444\">4</text><text x=\"100\" y=\"135\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">6</text></svg></div><br>למנסרה משולשת ישרה יש בסיס בצורת משולש. אורך צלע הבסיס במשולש הוא 6 וגובה המשולש הוא 4. גובה המנסרה כולה הוא 10. מהו הנפח?&rlm;",
        "options": ["120", "240", "60", "200"],
        "correctAnswer": 0,
        "hint": "חשבו קודם את שטח משולש הבסיס (בסיס כפול גובה חלקי 2). לאחר מכן כפלו בגובה המנסרה.",
        "solution_steps": [
            { "verbal_explanation": "נחשב תחילה את שטח הבסיס, שהוא משולש. הנוסחה היא בסיס כפול גובה חלקי שתיים.", "math_expression": "\\frac{6 \\times 4}{2}" },
            { "verbal_explanation": "עשרים וארבע חלקי שתיים שווה לשנים עשר.", "math_expression": "12" },
            { "verbal_explanation": "נפח מנסרה מתקבל מהכפלת שטח הבסיס בגובה המנסרה.", "math_expression": "12 \\times 10" },
            { "verbal_explanation": "הנפח הכולל הוא מאה ועשרים.", "math_expression": "V = 120" }
        ],
        "final_answer": "120"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "מנסרה ישרה (שטח ונפח)",
        "question_text": "נפח של תיבה הוא 100 סמ''ק. שטח הבסיס שלה הוא 25 סמ''ר. מהו הגובה של התיבה?&rlm;",
        "options": ["4", "75", "2500", "5"],
        "correctAnswer": 0,
        "hint": "הנפח שווה לשטח הבסיס כפול הגובה. חלקו את הנפח בשטח הבסיס.",
        "solution_steps": [
            { "verbal_explanation": "הנוסחה המקשרת בין הנתונים היא נפח שווה לשטח הבסיס כפול הגובה.", "math_expression": "V = S \\times h" },
            { "verbal_explanation": "נציב את המספרים הידועים למשוואה.", "math_expression": "100 = 25 \\times h" },
            { "verbal_explanation": "כדי למצוא את הגובה, נבצע את הפעולה ההפוכה ונחלק מאה בעשרים וחמש.", "math_expression": "100 \\div 25" },
            { "verbal_explanation": "התוצאה היא ארבע.", "math_expression": "h = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "מנסרה ישרה (שטח ונפח)",
        "question_text": "קובייה היא סוג של מנסרה שכל מקצועותיה שווים. אורך מקצוע של קובייה הוא 4 ס''מ. מהו שטח הפנים שלה (השטח הכולל של כל הפאות)?&rlm;",
        "options": ["96", "64", "16", "24"],
        "correctAnswer": 0,
        "hint": "לקובייה יש 6 פאות ריבועיות שוות. חשבו שטח של פאה אחת והכפילו ב-6.",
        "solution_steps": [
            { "verbal_explanation": "שטח הפנים כולל את השטח של כל מעטפת הצורה החיצונית. בקובייה יש שש פאות ריבועיות זהות.", "math_expression": "6" },
            { "verbal_explanation": "נחשב את השטח של פאה אחת בודדת (ריבוע שאורך צלעו ארבע).", "math_expression": "4 \\times 4 = 16" },
            { "verbal_explanation": "כעת נכפול את שטח הפאה במספר הפאות הכולל.", "math_expression": "16 \\times 6" },
            { "verbal_explanation": "השטח הכולל הוא תשעים ושישה סנטימטרים רבועים.", "math_expression": "96" }
        ],
        "final_answer": "96"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "מנסרה ישרה (שטח ונפח)",
        "question_text": "אורך מקצוע קובייה הוא 3 ס''מ. מהו הנפח שלה?&rlm;",
        "options": ["27", "9", "54", "18"],
        "correctAnswer": 0,
        "hint": "העלו את אורך המקצוע בחזקת שלוש.",
        "solution_steps": [
            { "verbal_explanation": "נפח קובייה מתקבל מהכפלת אורך, רוחב וגובה. בקובייה כולם שווים.", "math_expression": "V = a^3" },
            { "verbal_explanation": "נציב את אורך המקצוע הנתון.", "math_expression": "3 \\times 3 \\times 3" },
            { "verbal_explanation": "נחשב את המכפלה הראשונה.", "math_expression": "9 \\times 3" },
            { "verbal_explanation": "נשלים את המכפלה לקבלת הנפח הכולל.", "math_expression": "27" }
        ],
        "final_answer": "27"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "מנסרה ישרה (שטח ונפח)",
        "question_text": "תיבה שמידות בסיסה הן 2 ס''מ ו-5 ס''מ. גובה התיבה הוא 10 ס''מ. מהו שטח המעטפת שלה (ללא שטחי שני הבסיסים העליון והתחתון)?&rlm;",
        "options": ["140", "100", "160", "20"],
        "correctAnswer": 0,
        "hint": "שטח המעטפת של מנסרה שווה להיקף הבסיס כפול גובה המנסרה.",
        "solution_steps": [
            { "verbal_explanation": "שטח המעטפת מחושב על ידי הכפלת היקף הבסיס בגובה הצורה.", "math_expression": "P \\times h" },
            { "verbal_explanation": "נחשב את היקף הבסיס המלבני. פעמיים אורך ופעמיים רוחב.", "math_expression": "2 \\times 2 + 2 \\times 5 = 4 + 10 = 14" },
            { "verbal_explanation": "כעת נכפול את ההיקף שמצאנו בגובה התיבה.", "math_expression": "14 \\times 10" },
            { "verbal_explanation": "שטח המעטפת בלבד הוא מאה וארבעים סמ''ר.", "math_expression": "140" }
        ],
        "final_answer": "140"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "מנסרה ישרה (שטח ונפח)",
        "question_text": "מנסרה משולשת ישרה. שטח משולש הבסיס הוא 15 סמ''ר. נפח המנסרה הוא 120 סמ''ק. מהו גובה המנסרה?&rlm;",
        "options": ["8", "4", "105", "1800"],
        "correctAnswer": 0,
        "hint": "חילוק של הנפח בשטח הבסיס ייתן לכם את הגובה.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בנוסחת הנפח הכללית לכל מנסרה.", "math_expression": "V = S \\times h" },
            { "verbal_explanation": "נציב את הנתונים הידועים: הנפח ושטח הבסיס.", "math_expression": "120 = 15 \\times h" },
            { "verbal_explanation": "נחלק את הנפח בשטח הבסיס כדי לחלץ את הגובה החסר.", "math_expression": "120 \\div 15" },
            { "verbal_explanation": "התוצאה של פעולת החילוק היא שמונה.", "math_expression": "h = 8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "מנסרה ישרה (שטח ונפח)",
        "question_text": "תיבה מידותיה: 1 ס''מ, 2 ס''מ, 3 ס''מ. מהו שטח הפנים הכולל של התיבה?&rlm;",
        "options": ["22", "6", "11", "12"],
        "correctAnswer": 0,
        "hint": "לתיבה יש 3 זוגות של פאות מלבניות שוות. מצאו את השטח של שלושת המלבנים (1x2, 1x3, 2x3) והכפילו כל תוצאה ב-2.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את השטח של כל אחד משלושת סוגי הפאות המרכיבים את התיבה.", "math_expression": "1 \\times 2 = 2 \\quad , \\quad 1 \\times 3 = 3 \\quad , \\quad 2 \\times 3 = 6" },
            { "verbal_explanation": "כל פאה כזו מופיעה פעמיים בתיבה (אחת מול השנייה). לכן נחבר את שלושת השטחים ונכפול בשתיים.", "math_expression": "2 \\times (2 + 3 + 6)" },
            { "verbal_explanation": "נחבר את המספרים שבתוך הסוגריים.", "math_expression": "2 + 3 + 6 = 11" },
            { "verbal_explanation": "נכפול באחת עשרה ונקבל את שטח הפנים המלא.", "math_expression": "2 \\times 11 = 22" }
        ],
        "final_answer": "22"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "מנסרה ישרה (שטח ונפח)",
        "question_text": "מנסרה ישרה שבסיסה הוא מחומש (מצולע בעל 5 צלעות). כמה פאות יש למנסרה זו בסך הכל (כולל הבסיסים)?&rlm;",
        "options": ["7", "5", "10", "15"],
        "correctAnswer": 0,
        "hint": "יש פאה צדדית אחת עבור כל צלע של הבסיס. בנוסף, יש את הבסיס העליון והבסיס התחתון.",
        "solution_steps": [
            { "verbal_explanation": "מספר הפאות הצדדיות (המעטפת) במנסרה ישרה תמיד שווה למספר הצלעות של צורת הבסיס.", "math_expression": "5" },
            { "verbal_explanation": "למנסרה יש תמיד שני בסיסים מקבילים (עליון ותחתון).", "math_expression": "2" },
            { "verbal_explanation": "נחבר את מספר פאות המעטפת עם שני הבסיסים כדי לקבל את מספר הפאות הכולל.", "math_expression": "5 + 2 = 7" },
            { "verbal_explanation": "בסך הכל ישנן שבע פאות.", "math_expression": "7" }
        ],
        "final_answer": "7"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "מנסרה ישרה (שטח ונפח)",
        "question_text": "נפח של תיבה הוא 40 סמ''ק. אם נגדיל רק את הגובה של התיבה פי 2 (ונשאיר את שאר הממדים זהים), מה יהיה הנפח החדש?&rlm;",
        "options": ["80", "40", "160", "20"],
        "correctAnswer": 0,
        "hint": "הנפח תלוי ישירות בגובה. אם מכפילים ממד אחד פי 2, גם התוצאה כולה תוכפל פי 2.",
        "solution_steps": [
            { "verbal_explanation": "נוסחת הנפח היא מכפלה של שטח הבסיס בגובה. אנו שומרים את שטח הבסיס קבוע.", "math_expression": "V = S \\times h" },
            { "verbal_explanation": "הגובה החדש גדול פי שניים מהגובה הישן.", "math_expression": "h_{new} = 2h" },
            { "verbal_explanation": "לכן, גם התוצאה הסופית של המכפלה (הנפח) תוכפל בדיוק פי שניים.", "math_expression": "V_{new} = 40 \\times 2" },
            { "verbal_explanation": "הנפח החדש יעמוד על שמונים סמ''ק.", "math_expression": "80" }
        ],
        "final_answer": "80"
    },

    // ==========================================
    // תת נושא 3: גליל ישר (שטח ונפח) (10 שאלות)
    // ==========================================
    {
        "topic": "geometry_grade_8",
        "subTopic": "גליל ישר (שטח ונפח)",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 150 200\" width=\"90\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"75\" cy=\"30\" rx=\"50\" ry=\"15\" fill=\"#e2e8f0\" stroke=\"#0f172a\" stroke-width=\"2\"/><ellipse cx=\"75\" cy=\"170\" rx=\"50\" ry=\"15\" fill=\"#e2e8f0\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"25\" y1=\"30\" x2=\"25\" y2=\"170\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"125\" y1=\"30\" x2=\"125\" y2=\"170\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"75\" y1=\"170\" x2=\"125\" y2=\"170\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"4\"/><text x=\"95\" y=\"165\" font-family=\"Arial\" font-size=\"14\" fill=\"#ef4444\">2</text><text x=\"5\" y=\"105\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\">10</text></svg></div><br>גליל ישר בעל רדיוס בסיס 2 ס''מ וגובה 10 ס''מ. מהו נפח הגליל? (השאירו את פאי בתשובה)&rlm;",
        "options": ["40π", "20π", "40", "10π"],
        "correctAnswer": 0,
        "hint": "נפח גליל הוא שטח הבסיס העגול (רדיוס בריבוע כפול פאי) מוכפל בגובה.",
        "solution_steps": [
            { "verbal_explanation": "נוסחת הנפח לגליל ישר מבוססת על שטח העיגול בבסיס כפול הגובה.", "math_expression": "V = \\pi \\times r^2 \\times h" },
            { "verbal_explanation": "נציב את הנתונים שלנו: הרדיוס הוא שתיים והגובה עשר.", "math_expression": "V = \\pi \\times 2^2 \\times 10" },
            { "verbal_explanation": "נחשב את חזקת הרדיוס.", "math_expression": "2^2 = 4" },
            { "verbal_explanation": "נכפול את התוצאה בגובה.", "math_expression": "4 \\times 10 = 40" },
            { "verbal_explanation": "נוסיף את סמל הפאי לתשובה הסופית.", "math_expression": "40\\pi" }
        ],
        "final_answer": "40π"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "גליל ישר (שטח ונפח)",
        "question_text": "נפח של גליל הוא 100π. רדיוס הבסיס שלו הוא 5. מהו גובה הגליל?&rlm;",
        "options": ["4", "10", "20", "50"],
        "correctAnswer": 0,
        "hint": "שטח הבסיס הוא 25 פאי. חלקו את הנפח בשטח הבסיס.",
        "solution_steps": [
            { "verbal_explanation": "נחשב תחילה את שטח הבסיס המעגלי של הגליל.", "math_expression": "\\pi \\times 5^2 = 25\\pi" },
            { "verbal_explanation": "הנפח הוא תוצאה של שטח הבסיס כפול הגובה.", "math_expression": "100\\pi = 25\\pi \\times h" },
            { "verbal_explanation": "כדי למצוא את הגובה, נחלק את הנפח הכללי בשטח הבסיס שחישבנו.", "math_expression": "100\\pi \\div 25\\pi" },
            { "verbal_explanation": "סמלי הפאי מצטמצמים, ומאה חלקי עשרים וחמש שווה ארבע.", "math_expression": "h = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "גליל ישר (שטח ונפח)",
        "question_text": "גליל ישר שרדיוס הבסיס שלו 3 ס''מ וגובהו 5 ס''מ. מהו שטח המעטפת שלו (ללא הבסיסים)?&rlm;",
        "options": ["30π", "15π", "45π", "90π"],
        "correctAnswer": 0,
        "hint": "שטח מעטפת גליל הוא היקף הבסיס העגול (שתיים כפול פאי כפול רדיוס) כפול הגובה.",
        "solution_steps": [
            { "verbal_explanation": "נוסחת שטח מעטפת הגליל מסתמכת על היקף העיגול בבסיס מוכפל בגובה.", "math_expression": "2 \\times \\pi \\times r \\times h" },
            { "verbal_explanation": "נחשב תחילה את היקף הבסיס בעזרת הרדיוס הנתון.", "math_expression": "2 \\times \\pi \\times 3 = 6\\pi" },
            { "verbal_explanation": "כעת נכפול את ההיקף בגובה הגליל.", "math_expression": "6\\pi \\times 5" },
            { "verbal_explanation": "שש כפול חמש שווה שלושים. נוסיף את הפאי ונקבל את התוצאה.", "math_expression": "30\\pi" }
        ],
        "final_answer": "30π"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "גליל ישר (שטח ונפח)",
        "question_text": "מהי הנוסחה לשטח פנים מלא של גליל (כולל המעטפת ושני הבסיסים)?&rlm;",
        "options": ["2πr² + 2πrh", "πr²h", "2πrh", "πr² + 2πrh"],
        "correctAnswer": 0,
        "hint": "הוסיפו לשטח המעטפת את השטח של שני העיגולים (העליון והתחתון).",
        "solution_steps": [
            { "verbal_explanation": "שטח הפנים המלא מורכב משלושה חלקים: מעטפת צדדית, בסיס תחתון ובסיס עליון.", "math_expression": "S_{\\text{total}} = S_{\\text{lateral}} + 2 \\times S_{\\text{base}}" },
            { "verbal_explanation": "שטח המעטפת מחושב על ידי היקף כפול גובה.", "math_expression": "2\\pi rh" },
            { "verbal_explanation": "שטח של בסיס אחד הוא שטח עיגול רגיל.", "math_expression": "\\pi r^2" },
            { "verbal_explanation": "מכיוון שיש שני בסיסים, נכפול את השטח שלהם בשתיים ונחבר הכל יחד.", "math_expression": "2\\pi r^2 + 2\\pi rh" }
        ],
        "final_answer": "2πr² + 2πrh"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "גליל ישר (שטח ונפח)",
        "question_text": "גליל שבו קוטר הבסיס הוא 10 ס''מ (כלומר הרדיוס הוא 5) והגובה הוא 2 ס''מ. מהו הנפח?&rlm;",
        "options": ["50π", "100π", "200π", "25π"],
        "correctAnswer": 0,
        "hint": "רדיוס שווה לחצי מהקוטר. חלצו את הרדיוס, העלו בריבוע והכפילו בגובה ובפאי.",
        "solution_steps": [
            { "verbal_explanation": "הקוטר נתון כעשר, ולכן הרדיוס הוא בדיוק החצי שלו, חמש.", "math_expression": "r = 10 \\div 2 = 5" },
            { "verbal_explanation": "נחשב את שטח הבסיס המעגלי עם הרדיוס החדש.", "math_expression": "\\pi \\times 5^2 = 25\\pi" },
            { "verbal_explanation": "נכפול את שטח הבסיס בגובה הנתון כדי למצוא את הנפח.", "math_expression": "25\\pi \\times 2" },
            { "verbal_explanation": "התוצאה הסופית של המכפלה היא חמישים פאי.", "math_expression": "50\\pi" }
        ],
        "final_answer": "50π"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "גליל ישר (שטח ונפח)",
        "question_text": "נפח של גליל הוא 90π. הרדיוס הוא 3. מהו גובה הגליל?&rlm;",
        "options": ["10", "30", "9", "15"],
        "correctAnswer": 0,
        "hint": "שטח הבסיס הוא פאי כפול שלוש בריבוע (9 פאי). חלקו את 90 פאי ב-9 פאי.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את שטח עיגול הבסיס באמצעות הרדיוס הנתון.", "math_expression": "\\pi \\times 3^2 = 9\\pi" },
            { "verbal_explanation": "הנפח הכולל מורכב משטח הבסיס מוכפל בגובה שאנו מחפשים.", "math_expression": "90\\pi = 9\\pi \\times h" },
            { "verbal_explanation": "נחלק את הנפח בשטח הבסיס.", "math_expression": "90\\pi \\div 9\\pi" },
            { "verbal_explanation": "התשובה המתקבלת היא עשר.", "math_expression": "10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "גליל ישר (שטח ונפח)",
        "question_text": "גליל שבו הרדיוס הוא 1 מטר והגובה הוא 10 מטר. מהו נפח הגליל?&rlm;",
        "options": ["10π", "20π", "100π", "π"],
        "correctAnswer": 0,
        "hint": "1 בריבוע נשאר 1. כפלו ב-10.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בנוסחת הנפח ונציב את הנתונים הפשוטים.", "math_expression": "V = \\pi \\times 1^2 \\times 10" },
            { "verbal_explanation": "אחד בריבוע הוא פשוט אחד.", "math_expression": "1^2 = 1" },
            { "verbal_explanation": "נכפול את התוצאה בעשר ובפאי.", "math_expression": "1 \\times 10 \\times \\pi" },
            { "verbal_explanation": "הנפח הוא עשרה פאי.", "math_expression": "10\\pi" }
        ],
        "final_answer": "10π"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "גליל ישר (שטח ונפח)",
        "question_text": "גליל בעל גובה של 1 ס''מ ורדיוס של 10 ס''מ. מהו נפחו?&rlm;",
        "options": ["100π", "10π", "20π", "200π"],
        "correctAnswer": 0,
        "hint": "כאן הרדיוס גדול. 10 בריבוע זה 100.",
        "solution_steps": [
            { "verbal_explanation": "נציב את הנתונים החדשים בנוסחת הנפח. שימו לב שהפעם הרדיוס גדול והגובה קטן.", "math_expression": "V = \\pi \\times 10^2 \\times 1" },
            { "verbal_explanation": "נחשב את ריבוע הרדיוס.", "math_expression": "10^2 = 100" },
            { "verbal_explanation": "נכפול את המאה בגובה שאורכו רק אחד.", "math_expression": "100 \\times 1 = 100" },
            { "verbal_explanation": "הנפח הסופי הוא מאה פאי.", "math_expression": "100\\pi" }
        ],
        "final_answer": "100π"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "גליל ישר (שטח ונפח)",
        "question_text": "מהו שטח המעטפת של גליל שבו הקוטר הוא 4 ס''מ (רדיוס 2) והגובה הוא 5 ס''מ?&rlm;",
        "options": ["20π", "10π", "40π", "16π"],
        "correctAnswer": 0,
        "hint": "היקף הבסיס הוא פאי כפול הקוטר. כפלו את ההיקף בגובה.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את היקף הבסיס בעזרת נתון הקוטר (שתי פאי אר או פאי כפול קוטר).", "math_expression": "\\pi \\times 4 = 4\\pi" },
            { "verbal_explanation": "כדי למצוא את שטח המעטפת, נכפול את ההיקף בגובה הגליל.", "math_expression": "4\\pi \\times 5" },
            { "verbal_explanation": "ארבע כפול חמש שווה עשרים.", "math_expression": "20" },
            { "verbal_explanation": "שטח המעטפת הוא עשרים פאי.", "math_expression": "20\\pi" }
        ],
        "final_answer": "20π"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "גליל ישר (שטח ונפח)",
        "question_text": "יש לכם שני גלילים. בגליל הראשון, הרדיוס הוא 2 והגובה 4. בגליל השני, הרדיוס הוא 4 והגובה 2. איזה גליל בעל נפח גדול יותר?&rlm;",
        "options": ["הגליל השני גדול יותר", "הגליל הראשון גדול יותר", "הם שווים בדיוק בנפחם", "אי אפשר לדעת"],
        "correctAnswer": 0,
        "hint": "חשבו את הנפח של שניהם. שימו לב שהרדיוס מועלה בריבוע, ולכן השפעתו על התוצאה גדולה יותר מזו של הגובה.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את נפח הגליל הראשון.", "math_expression": "V_1 = \\pi \\times 2^2 \\times 4 = 16\\pi" },
            { "verbal_explanation": "נחשב את נפח הגליל השני.", "math_expression": "V_2 = \\pi \\times 4^2 \\times 2 = 32\\pi" },
            { "verbal_explanation": "נשווה בין שני הנפחים שחישבנו.", "math_expression": "32\\pi > 16\\pi" },
            { "verbal_explanation": "אנו רואים שהגליל השני, בעל הרדיוס הגדול יותר, מכיל נפח כפול מהראשון.", "math_expression": "V_2 > V_1" }
        ],
        "final_answer": "הגליל השני גדול יותר"
    },

    // ==========================================
    // תת נושא 4: זוויות במצולע וסכום זוויות (10 שאלות)
    // ==========================================
    {
        "topic": "geometry_grade_8",
        "subTopic": "זוויות במצולע וסכום זוויות",
        "question_text": "מהו סכום הזוויות הפנימיות במחומש (מצולע בעל 5 צלעות)?&rlm;",
        "options": ["540", "360", "720", "900"],
        "correctAnswer": 0,
        "hint": "הנוסחה לסכום זוויות היא: 180 כפול (מספר הצלעות פחות 2).",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בנוסחה הכללית למציאת סכום הזוויות הפנימיות במצולע.", "math_expression": "180 \\times (n - 2)" },
            { "verbal_explanation": "במחומש יש חמש צלעות, לכן נציב חמש במקום האות.", "math_expression": "180 \\times (5 - 2)" },
            { "verbal_explanation": "נחשב את ערך הסוגריים.", "math_expression": "5 - 2 = 3" },
            { "verbal_explanation": "נכפול מאה ושמונים בשלוש.", "math_expression": "180 \\times 3 = 540" },
            { "verbal_explanation": "הסכום הוא חמש מאות וארבעים מעלות.", "math_expression": "540" }
        ],
        "final_answer": "540"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "זוויות במצולע וסכום זוויות",
        "question_text": "מהו סכום הזוויות במשושה (מצולע בעל 6 צלעות)?&rlm;",
        "options": ["720", "540", "900", "1080"],
        "correctAnswer": 0,
        "hint": "הפעילו את אותה נוסחה: 180 כפול (6 פחות 2).",
        "solution_steps": [
            { "verbal_explanation": "במשושה יש שש צלעות. נחסר שתיים כדי לגלות כמה משולשים הוא מכיל.", "math_expression": "6 - 2 = 4" },
            { "verbal_explanation": "כל משולש תורם מאה ושמונים מעלות לסכום הכולל. נכפול בארבע.", "math_expression": "180 \\times 4" },
            { "verbal_explanation": "נחשב את המכפלה למציאת הסכום המלא.", "math_expression": "720" },
            { "verbal_explanation": "סכום הזוויות הוא שבע מאות ועשרים מעלות.", "math_expression": "720" }
        ],
        "final_answer": "720"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "זוויות במצולע וסכום זוויות",
        "question_text": "מהו סכום הזוויות במתומן (מצולע בעל 8 צלעות)?&rlm;",
        "options": ["1080", "1440", "720", "900"],
        "correctAnswer": 0,
        "hint": "חשבו 180 כפול (8 פחות 2).",
        "solution_steps": [
            { "verbal_explanation": "נציב את מספר הצלעות, שמונה, לתוך הנוסחה שלנו.", "math_expression": "180 \\times (8 - 2)" },
            { "verbal_explanation": "נפתור את הסוגריים. ישנם שישה משולשים פנימיים במתומן.", "math_expression": "180 \\times 6" },
            { "verbal_explanation": "נבצע את הכפל כדי למצוא את כמות המעלות הכללית.", "math_expression": "1080" },
            { "verbal_explanation": "הסכום הוא אלף ושמונים מעלות.", "math_expression": "1080" }
        ],
        "final_answer": "1080"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "זוויות במצולע וסכום זוויות",
        "question_text": "במחומש משוכלל, כל הזוויות שוות זו לזו. מהו הגודל של כל זווית פנימית אחת במחומש כזה?&rlm;",
        "options": ["108", "120", "90", "72"],
        "correctAnswer": 0,
        "hint": "סכום הזוויות במחומש הוא 540 (כמו שחישבנו קודם). חלקו את הסכום הזה ל-5 זוויות שוות.",
        "solution_steps": [
            { "verbal_explanation": "במחומש משוכלל כל חמש הזוויות חולקות את הסכום הכולל באופן שווה.", "math_expression": "\\text{Equal Angles}" },
            { "verbal_explanation": "ידוע לנו שהסכום הכולל במחומש הוא חמש מאות וארבעים מעלות.", "math_expression": "540" },
            { "verbal_explanation": "נחלק את הסכום הזה בחמש למציאת זווית בודדת.", "math_expression": "540 \\div 5" },
            { "verbal_explanation": "תוצאת החילוק היא מאה ושמונה.", "math_expression": "108" },
            { "verbal_explanation": "גודל כל זווית הוא מאה ושמונה מעלות.", "math_expression": "108" }
        ],
        "final_answer": "108"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "זוויות במצולע וסכום זוויות",
        "question_text": "מהו הגודל של זווית פנימית אחת במשושה משוכלל (שכל צלעותיו וזוויותיו שוות)?&rlm;",
        "options": ["120", "108", "135", "150"],
        "correctAnswer": 0,
        "hint": "סכום הזוויות במשושה הוא 720. חלקו את זה ב-6.",
        "solution_steps": [
            { "verbal_explanation": "סכום כלל הזוויות במשושה מחושב והוא שבע מאות ועשרים.", "math_expression": "720" },
            { "verbal_explanation": "כדי למצוא זווית בודדת במשושה משוכלל, נחלק את הסכום במספר הפינות, שהוא שש.", "math_expression": "720 \\div 6" },
            { "verbal_explanation": "נבצע את פעולת החילוק.", "math_expression": "120" },
            { "verbal_explanation": "כל זווית במשושה משוכלל היא בת מאה ועשרים מעלות.", "math_expression": "120" }
        ],
        "final_answer": "120"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "זוויות במצולע וסכום זוויות",
        "question_text": "חשבו את הגודל של זווית פנימית אחת במתומן משוכלל.&rlm;",
        "options": ["135", "120", "150", "144"],
        "correctAnswer": 0,
        "hint": "סכום הזוויות במתומן הוא 1080. חלקו ב-8.",
        "solution_steps": [
            { "verbal_explanation": "הסכום המלא במתומן הוא אלף ושמונים מעלות.", "math_expression": "1080" },
            { "verbal_explanation": "נחלק את הסכום לשמונה זוויות שוות בגודלן.", "math_expression": "1080 \\div 8" },
            { "verbal_explanation": "נבצע את החישוב ונגלה את הפתרון.", "math_expression": "135" },
            { "verbal_explanation": "גודלה של כל זווית הוא מאה שלושים וחמש מעלות.", "math_expression": "135" }
        ],
        "final_answer": "135"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "זוויות במצולע וסכום זוויות",
        "question_text": "סכום הזוויות הפנימיות של מצולע מסוים הוא 900 מעלות. כמה צלעות יש למצולע הזה?&rlm;",
        "options": ["7", "8", "6", "9"],
        "correctAnswer": 0,
        "hint": "הפעם עובדים לאחור עם המשוואה: חלוקה ב-180 תיתן לכם (n-2). הוסיפו 2 לתוצאה.",
        "solution_steps": [
            { "verbal_explanation": "נרכיב משוואה שבה סכום הזוויות הידוע שווה לנוסחה הכללית.", "math_expression": "180(n - 2) = 900" },
            { "verbal_explanation": "נחלק את שני האגפים במאה ושמונים.", "math_expression": "n - 2 = 900 \\div 180" },
            { "verbal_explanation": "תוצאת החילוק היא חמש.", "math_expression": "n - 2 = 5" },
            { "verbal_explanation": "נוסיף שתיים לשני הצדדים כדי למצוא את כמות הצלעות.", "math_expression": "n = 5 + 2 = 7" },
            { "verbal_explanation": "למצולע יש שבע צלעות. זהו משובע.", "math_expression": "n = 7" }
        ],
        "final_answer": "7"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "זוויות במצולע וסכום זוויות",
        "question_text": "מהו סכום כל הזוויות החיצוניות של מחומש? (זווית חיצונית נוצרת מהארכת אחת הצלעות).&rlm;",
        "options": ["360", "540", "180", "720"],
        "correctAnswer": 0,
        "hint": "כלל יסוד בגאומטריה: סכום הזוויות החיצוניות של *כל מצולע קמור* תמיד נשאר קבוע ואינו תלוי במספר הצלעות.",
        "solution_steps": [
            { "verbal_explanation": "זווית חיצונית היא הזווית שמשלימה את הזווית הפנימית למאה ושמונים מעלות.", "math_expression": "180 - \\text{Internal}" },
            { "verbal_explanation": "יש משפט גאומטרי שמוכיח שעבור כל סוג של מצולע, הסכום של כלל הזוויות החיצוניות יחד הוא קבוע.", "math_expression": "\\text{Constant Sum}" },
            { "verbal_explanation": "סכום זה שווה תמיד לסיבוב שלם, כלומר שלוש מאות ושישים מעלות.", "math_expression": "360" },
            { "verbal_explanation": "לכן, למרות שזהו מחומש, התשובה נשארת שלוש מאות ושישים.", "math_expression": "360" }
        ],
        "final_answer": "360"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "זוויות במצולע וסכום זוויות",
        "question_text": "מהו הגודל של זווית חיצונית אחת במשושה משוכלל?&rlm;",
        "options": ["60", "120", "90", "72"],
        "correctAnswer": 0,
        "hint": "הזווית הפנימית במשושה היא 120. החיצונית משלימה אותה ל-180. או פשוט חלקו את הסכום הקבוע (360) ב-6.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בדרך המהירה. אנו יודעים שסכום כל הזוויות החיצוניות הוא שלוש מאות ושישים.", "math_expression": "360" },
            { "verbal_explanation": "מכיוון שהמשושה משוכלל, כל שש הזוויות החיצוניות שלו שוות זו לזו.", "math_expression": "\\text{Equal Angles}" },
            { "verbal_explanation": "נחלק את הסכום הקבוע במספר הפינות.", "math_expression": "360 \\div 6" },
            { "verbal_explanation": "התוצאה היא שישים מעלות.", "math_expression": "60" }
        ],
        "final_answer": "60"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "זוויות במצולע וסכום זוויות",
        "question_text": "מהו סכום הזוויות הפנימיות במצולע בעל 10 צלעות (מעושר)?&rlm;",
        "options": ["1440", "1800", "1080", "360"],
        "correctAnswer": 0,
        "hint": "הציבו את המספר 10 בנוסחה: 180 כפול (10 פחות 2).",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בנוסחה לחישוב סכום זוויות פנימיות.", "math_expression": "180(n - 2)" },
            { "verbal_explanation": "נציב עשר במקום מספר הצלעות ונחסר שתיים.", "math_expression": "10 - 2 = 8" },
            { "verbal_explanation": "נכפול מאה ושמונים במספר המשולשים שמצאנו.", "math_expression": "180 \\times 8" },
            { "verbal_explanation": "נבצע את הכפל ונגיע לתוצאה.", "math_expression": "1440" },
            { "verbal_explanation": "הסכום הוא אלף ארבע מאות וארבעים מעלות.", "math_expression": "1440" }
        ],
        "final_answer": "1440"
    },

    // ==========================================
    // תת נושא 5: אלכסונים במצולע (10 שאלות)
    // ==========================================
    {
        "topic": "geometry_grade_8",
        "subTopic": "אלכסונים במצולע",
        "question_text": "כמה אלכסונים ניתן להעביר מקודקוד אחד (פינה אחת) בתוך מחומש?&rlm;",
        "options": ["2", "5", "3", "4"],
        "correctAnswer": 0,
        "hint": "מקודקוד אחד אי אפשר להעביר אלכסון לעצמו ולשני הקודקודים שלידו. לכן מחסרים 3 ממספר הצלעות.",
        "solution_steps": [
            { "verbal_explanation": "אלכסון הוא קו המחבר קודקוד לקודקוד אחר שאינו סמוך אליו.", "math_expression": "\\text{Diagonal}" },
            { "verbal_explanation": "הנוסחה למספר האלכסונים היוצאים מקודקוד יחיד היא מספר הצלעות פחות שלוש.", "math_expression": "n - 3" },
            { "verbal_explanation": "במחומש יש חמש צלעות, נציב זאת בנוסחה.", "math_expression": "5 - 3" },
            { "verbal_explanation": "נחשב את ההפרש. מצאנו שאפשר למתוח שני אלכסונים מאותה פינה.", "math_expression": "2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "אלכסונים במצולע",
        "question_text": "כמה אלכסונים בסך הכל (מכל הקודקודים יחד) יש במחומש?&rlm;",
        "options": ["5", "10", "2", "6"],
        "correctAnswer": 0,
        "hint": "הנוסחה לסך כל האלכסונים היא כמות הקודקודים (n) כפול האלכסונים היוצאים מכל אחד (n-3), וכל זה לחלק ל-2.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בנוסחה לחישוב המספר הכולל של אלכסונים במצולע.", "math_expression": "\\frac{n(n - 3)}{2}" },
            { "verbal_explanation": "נציב את המספר חמש במקום המשתנה המתאר את צלעות המחומש.", "math_expression": "\\frac{5(5 - 3)}{2}" },
            { "verbal_explanation": "נפתור את החיסור שבסוגריים.", "math_expression": "\\frac{5 \\times 2}{2}" },
            { "verbal_explanation": "שתיים יצטמצם עם שתיים. התוצאה היא חמישה אלכסונים בסך הכל.", "math_expression": "5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "אלכסונים במצולע",
        "question_text": "כמה אלכסונים ניתן להעביר מקודקוד אחד במשושה (מצולע בעל 6 צלעות)?&rlm;",
        "options": ["3", "4", "2", "6"],
        "correctAnswer": 0,
        "hint": "חסרו 3 ממספר הצלעות.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בנוסחה הפשוטה עבור אלכסונים מקודקוד אחד.", "math_expression": "n - 3" },
            { "verbal_explanation": "מספר הצלעות במשושה הוא שש. נציב בנוסחה.", "math_expression": "6 - 3" },
            { "verbal_explanation": "נחשב את ההפרש ונקבל שלוש.", "math_expression": "3" },
            { "verbal_explanation": "מכל קודקוד יוצאים שלושה אלכסונים.", "math_expression": "3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "אלכסונים במצולע",
        "question_text": "כמה אלכסונים בסך הכל יש במשושה?&rlm;",
        "options": ["9", "18", "6", "12"],
        "correctAnswer": 0,
        "hint": "הציבו את המספר 6 בנוסחה n(n-3)/2.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בנוסחה הכללית לאלכסונים.", "math_expression": "\\frac{n(n - 3)}{2}" },
            { "verbal_explanation": "נציב את הנתון שש במקום המשתנה.", "math_expression": "\\frac{6(6 - 3)}{2}" },
            { "verbal_explanation": "נחשב את הסוגריים.", "math_expression": "\\frac{6 \\times 3}{2}" },
            { "verbal_explanation": "נכפול במונה ונקבל שמונה עשרה.", "math_expression": "\\frac{18}{2}" },
            { "verbal_explanation": "נחלק בשתיים לקבלת הפתרון הסופי.", "math_expression": "9" }
        ],
        "final_answer": "9"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "אלכסונים במצולע",
        "question_text": "כמה אלכסונים בסך הכל יש במתומן (8 צלעות)?&rlm;",
        "options": ["20", "24", "40", "16"],
        "correctAnswer": 0,
        "hint": "שמונה כפול (שמונה פחות שלוש) לחלק לשתיים.",
        "solution_steps": [
            { "verbal_explanation": "נציב שמונה בנוסחת האלכסונים הכוללת.", "math_expression": "\\frac{8(8 - 3)}{2}" },
            { "verbal_explanation": "נפתור את הסוגריים המראים את מספר האלכסונים היוצאים מקודקוד אחד (חמש).", "math_expression": "\\frac{8 \\times 5}{2}" },
            { "verbal_explanation": "נכפול את המספרים במונה לקבלת ארבעים.", "math_expression": "\\frac{40}{2}" },
            { "verbal_explanation": "נחלק בשתיים ונקבל עשרים.", "math_expression": "20" },
            { "verbal_explanation": "במתומן יש עשרים אלכסונים.", "math_expression": "20" }
        ],
        "final_answer": "20"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "אלכסונים במצולע",
        "question_text": "כאשר מעבירים את כל האלכסונים מקודקוד אחד בתוך משובע (7 צלעות), המצולע מתחלק למספר משולשים. לכמה משולשים הוא מתחלק?&rlm;",
        "options": ["5", "7", "4", "6"],
        "correctAnswer": 0,
        "hint": "מספר המשולשים שנוצרים שווה למספר הצלעות פחות 2.",
        "solution_steps": [
            { "verbal_explanation": "יש נוסחה לחישוב מספר המשולשים שנוצרים כתוצאה ממתיחת אלכסונים מקודקוד יחיד.", "math_expression": "n - 2" },
            { "verbal_explanation": "נציב את מספר הצלעות של המשובע, שהוא שבע.", "math_expression": "7 - 2" },
            { "verbal_explanation": "נבצע את החיסור הפשוט.", "math_expression": "5" },
            { "verbal_explanation": "המשובע יחולק לחמישה משולשים פנימיים.", "math_expression": "5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "אלכסונים במצולע",
        "question_text": "כמה אלכסונים בסך הכל יש בריבוע (או כל מרובע אחר)?&rlm;",
        "options": ["2", "4", "1", "0"],
        "correctAnswer": 0,
        "hint": "הציבו 4 בנוסחה, או פשוט דמיינו ריבוע ותחשבו כמה קווים חוצים אותו בפנים.",
        "solution_steps": [
            { "verbal_explanation": "בריבוע יש ארבע צלעות.", "math_expression": "n = 4" },
            { "verbal_explanation": "נוכל להציב בנוסחת האלכסונים.", "math_expression": "\\frac{4(4 - 3)}{2}" },
            { "verbal_explanation": "נחשב את הסוגריים. מקודקוד אחד יוצא רק אלכסון אחד.", "math_expression": "\\frac{4 \\times 1}{2}" },
            { "verbal_explanation": "נפתור ונגלה שבכל המרובע ישנם שני אלכסונים.", "math_expression": "2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "אלכסונים במצולע",
        "question_text": "כמה אלכסונים יש במצולע בעל 10 צלעות (מעושר)?&rlm;",
        "options": ["35", "70", "40", "20"],
        "correctAnswer": 0,
        "hint": "חשבו: 10 כפול 7, ואז חלקו בשתיים.",
        "solution_steps": [
            { "verbal_explanation": "נציב עשר בנוסחה למציאת כלל האלכסונים במצולע.", "math_expression": "\\frac{10(10 - 3)}{2}" },
            { "verbal_explanation": "נפתור את הסוגריים: עשר פחות שלוש שווה שבע.", "math_expression": "\\frac{10 \\times 7}{2}" },
            { "verbal_explanation": "נכפול עשר בשבע לקבלת שבעים.", "math_expression": "\\frac{70}{2}" },
            { "verbal_explanation": "נחלק בשתיים. המספר הוא שלושים וחמש.", "math_expression": "35" }
        ],
        "final_answer": "35"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "אלכסונים במצולע",
        "question_text": "ידוע שבמצולע מסוים יש בסך הכל 14 אלכסונים. כמה צלעות יש למצולע הזה?&rlm;",
        "options": ["7", "6", "8", "14"],
        "correctAnswer": 0,
        "hint": "אפשר לבנות משוואה n(n-3)/2 = 14, או פשוט לנסות להציב את התשובות בנוסחה ולראות מי נותנת 14.",
        "solution_steps": [
            { "verbal_explanation": "נבנה משוואה על פי הנוסחה ונשווה אותה לארבע עשרה.", "math_expression": "\\frac{n(n - 3)}{2} = 14" },
            { "verbal_explanation": "נכפול בשתיים כדי להעלים את השבר.", "math_expression": "n(n - 3) = 28" },
            { "verbal_explanation": "נחפש מספר שלם שכשנכפול אותו במספר שקטן ממנו בשלוש, נקבל עשרים ושמונה. אפשר לבדוק אפשרויות.", "math_expression": "7 \\times 4 = 28" },
            { "verbal_explanation": "מכיוון ששבע וארבע מקיימים את התנאי, נסיק שמספר הצלעות הוא שבע.", "math_expression": "n = 7" }
        ],
        "final_answer": "7"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "אלכסונים במצולע",
        "question_text": "באיזה מצולע אי אפשר להעביר אפילו אלכסון אחד? (מספר האלכסונים הוא 0).&rlm;",
        "options": ["משולש", "מרובע", "מחומש", "עיגול"],
        "correctAnswer": 0,
        "hint": "אלכסון מחבר שני קודקודים שאינם סמוכים. בצורה זו, כל הקודקודים סמוכים זה לזה.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק מתי נוסחת האלכסונים שווה לאפס.", "math_expression": "\\frac{n(n - 3)}{2} = 0" },
            { "verbal_explanation": "כדי שהשבר יתאפס, המונה צריך להיות אפס.", "math_expression": "n - 3 = 0" },
            { "verbal_explanation": "נפתור ונגלה שמספר הצלעות חייב להיות שלוש.", "math_expression": "n = 3" },
            { "verbal_explanation": "מצולע בעל שלוש צלעות הוא משולש. אין בו קודקודים נגדיים אלא רק סמוכים, לכן אין לו אלכסונים כלל.", "math_expression": "\\text{Triangle}" }
        ],
        "final_answer": "משולש"
    },

    // ==========================================
    // תת נושא 6: מעגל ועיגול (היקף ושטח) (10 שאלות)
    // ==========================================
    {
        "topic": "geometry_grade_8",
        "subTopic": "מעגל ועיגול (היקף ושטח)",
        "question_text": "מעגל בעל רדיוס של 5 סנטימטרים. מהו שטח העיגול החסום בו? (כתבו את התשובה עם האות פאי π).&rlm;",
        "options": ["25π", "10π", "5π", "100π"],
        "correctAnswer": 0,
        "hint": "נוסחת שטח עיגול היא פאי כפול הרדיוס בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בנוסחת שטח העיגול המקובלת.", "math_expression": "S = \\pi \\times r^2" },
            { "verbal_explanation": "נציב את הרדיוס הנתון, שהוא חמש, לתוך הנוסחה.", "math_expression": "S = \\pi \\times 5^2" },
            { "verbal_explanation": "נחשב את ריבוע המספר חמש.", "math_expression": "5 \\times 5 = 25" },
            { "verbal_explanation": "נצרף את המספר שקיבלנו לסמל הפאי לקבלת התשובה המדויקת.", "math_expression": "25\\pi" }
        ],
        "final_answer": "25π"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "מעגל ועיגול (היקף ושטח)",
        "question_text": "קוטרו של מעגל (המרחק מצד לצד דרך המרכז) הוא 12 סנטימטרים. מהו השטח שלו?&rlm;",
        "options": ["36π", "144π", "12π", "24π"],
        "correctAnswer": 0,
        "hint": "הרדיוס הוא תמיד חצי מהקוטר. מצאו את הרדיוס קודם, ורק אז חשבו שטח לפי הנוסחה.",
        "solution_steps": [
            { "verbal_explanation": "הקוטר נתון כשנים עשר. הרדיוס שווה בדיוק לחצי מהקוטר.", "math_expression": "r = 12 \\div 2 = 6" },
            { "verbal_explanation": "נשתמש ברדיוס שמצאנו ונציב אותו בנוסחת השטח.", "math_expression": "S = \\pi \\times 6^2" },
            { "verbal_explanation": "נחשב את המכפלה של שש בעצמו.", "math_expression": "6 \\times 6 = 36" },
            { "verbal_explanation": "השטח הוא שלושים ושישה פאי.", "math_expression": "36\\pi" }
        ],
        "final_answer": "36π"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "מעגל ועיגול (היקף ושטח)",
        "question_text": "מהו היקף המעגל (אורך הקו החיצוני בלבד) אם הרדיוס שלו הוא 4 סנטימטרים?&rlm;",
        "options": ["8π", "16π", "4π", "2π"],
        "correctAnswer": 0,
        "hint": "נוסחת היקף מעגל היא 2 כפול פאי כפול הרדיוס.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בנוסחת היקף מעגל המקובלת.", "math_expression": "P = 2 \\times \\pi \\times r" },
            { "verbal_explanation": "נציב את הרדיוס הידוע למשוואה.", "math_expression": "P = 2 \\times \\pi \\times 4" },
            { "verbal_explanation": "נכפול את המספרים בלבד (שתיים כפול ארבע).", "math_expression": "2 \\times 4 = 8" },
            { "verbal_explanation": "נקבל שההיקף הוא שמונה פאי.", "math_expression": "8\\pi" }
        ],
        "final_answer": "8π"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "מעגל ועיגול (היקף ושטח)",
        "question_text": "קוטרו של מעגל הוא 10 סנטימטרים. מהו היקף המעגל?&rlm;",
        "options": ["10π", "20π", "25π", "5π"],
        "correctAnswer": 0,
        "hint": "אפשר למצוא את הרדיוס (5) ולהכפיל ב-2, או פשוט להשתמש בנוסחה הקצרה יותר: היקף שווה לפאי כפול הקוטר.",
        "solution_steps": [
            { "verbal_explanation": "היקף מעגל ניתן לחישוב ישיר באמצעות הקוטר. הנוסחה היא קוטר כפול פאי.", "math_expression": "P = d \\times \\pi" },
            { "verbal_explanation": "הקוטר נתון לנו והוא עשר.", "math_expression": "d = 10" },
            { "verbal_explanation": "נציב את הערך במקום האות המייצגת את הקוטר.", "math_expression": "P = 10 \\times \\pi" },
            { "verbal_explanation": "היקף המעגל הוא עשרה פאי.", "math_expression": "10\\pi" }
        ],
        "final_answer": "10π"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "מעגל ועיגול (היקף ושטח)",
        "question_text": "שטחו של מעגל הוא \\( 49\\pi \\) סמ''ר. מהו אורך הרדיוס שלו?&rlm;",
        "options": ["7", "49", "98", "24.5"],
        "correctAnswer": 0,
        "hint": "השטח הוא הרדיוס בריבוע (כפול פאי). איזה מספר כפול עצמו שווה ל-49?",
        "solution_steps": [
            { "verbal_explanation": "נרשום את נוסחת השטח ונשווה לנתון שבשאלה.", "math_expression": "\\pi \\times r^2 = 49\\pi" },
            { "verbal_explanation": "סמל הפאי מופיע בשני הצדדים, לכן נוכל לצמצם אותו מן המשוואה.", "math_expression": "r^2 = 49" },
            { "verbal_explanation": "נחפש מספר חיובי שכשנכפול אותו בעצמו, ייתן לנו ארבעים ותשע.", "math_expression": "7 \\times 7 = 49" },
            { "verbal_explanation": "לכן, אורך הרדיוס הוא שבעה סנטימטרים.", "math_expression": "r = 7" }
        ],
        "final_answer": "7"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "מעגל ועיגול (היקף ושטח)",
        "question_text": "היקף של מעגל הוא \\( 20\\pi \\) סנטימטרים. מהו קוטר המעגל?&rlm;",
        "options": ["20", "10", "40", "100"],
        "correctAnswer": 0,
        "hint": "ההיקף שווה תמיד לקוטר כפול פאי. לכן המספר המופיע לפני הפאי הוא בדיוק הקוטר.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בנוסחת ההיקף המבוססת על הקוטר במקום על הרדיוס.", "math_expression": "P = d \\times \\pi" },
            { "verbal_explanation": "נציב את ההיקף שניתן לנו אל תוך המשוואה.", "math_expression": "20\\pi = d \\times \\pi" },
            { "verbal_explanation": "נצמצם את הפאי משני הצדדים של המשוואה להשאיר את המשתנה לבדו.", "math_expression": "d = 20" },
            { "verbal_explanation": "גילינו שהקוטר שווה לעשרים סנטימטרים.", "math_expression": "20" }
        ],
        "final_answer": "20"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "מעגל ועיגול (היקף ושטח)",
        "question_text": "לפניכם חצי עיגול. רדיוסו הוא 4 סנטימטרים. מהו שטח חצי העיגול הזה?&rlm;",
        "options": ["8π", "16π", "4π", "32π"],
        "correctAnswer": 0,
        "hint": "חשבו קודם את שטח העיגול המלא (עם רדיוס 4), ולאחר מכן חלקו את התוצאה בשתיים.",
        "solution_steps": [
            { "verbal_explanation": "נחשב קודם את השטח של עיגול שלם בעל אותו רדיוס בדיוק.", "math_expression": "S = \\pi \\times 4^2" },
            { "verbal_explanation": "ארבע בריבוע שווה לשש עשרה. שטח העיגול המלא הוא שש עשרה פאי.", "math_expression": "16\\pi" },
            { "verbal_explanation": "מכיוון שביקשו רק חצי עיגול, נחלק את השטח המלא שמצאנו בשתיים.", "math_expression": "16\\pi \\div 2" },
            { "verbal_explanation": "השטח של החצי הוא שמונה פאי.", "math_expression": "8\\pi" }
        ],
        "final_answer": "8π"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "מעגל ועיגול (היקף ושטח)",
        "question_text": "ציירנו חצי מעגל שהרדיוס שלו 3 סנטימטרים. מהו היקף הצורה כולה (הכולל גם את הקשת החצי-מעגלית וגם את הקו הישר הסוגר אותה למטה)?&rlm;",
        "options": ["3π + 6", "3π", "6π + 6", "1.5π + 3"],
        "correctAnswer": 0,
        "hint": "ההיקף מורכב משני חלקים. החלק הראשון הוא חצי מהיקף מעגל מלא. החלק השני הוא הקוטר (שני רדיוסים) שסוגר את הצורה מלמטה.",
        "solution_steps": [
            { "verbal_explanation": "נחשב תחילה את היקף המעגל השלם שרדיוסו שלוש.", "math_expression": "2 \\times \\pi \\times 3 = 6\\pi" },
            { "verbal_explanation": "הקשת שלנו היא רק חצי מעגל, לכן נחלק את ההיקף השלם בשתיים.", "math_expression": "6\\pi \\div 2 = 3\\pi" },
            { "verbal_explanation": "זהו רק אורך הקשת. נותר להוסיף את הבסיס הישר שסוגר את הצורה. הוא מורכב משני רדיוסים, כלומר קוטר שלם.", "math_expression": "3 + 3 = 6" },
            { "verbal_explanation": "נחבר את שני החלקים ליצירת הביטוי המייצג את ההיקף הכולל.", "math_expression": "3\\pi + 6" }
        ],
        "final_answer": "3π + 6"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "מעגל ועיגול (היקף ושטח)",
        "question_text": "למעגל ענק יש רדיוס של 10 מטרים. מה יהיה שטחו?&rlm;",
        "options": ["100π", "20π", "50π", "1000π"],
        "correctAnswer": 0,
        "hint": "העלו את עשר בריבוע והכפילו בפאי.",
        "solution_steps": [
            { "verbal_explanation": "כמו תמיד, שטח מחושב על ידי הכפלת הפאי בריבוע הרדיוס.", "math_expression": "S = \\pi \\times 10^2" },
            { "verbal_explanation": "עשר בריבוע שווה למאה.", "math_expression": "10 \\times 10 = 100" },
            { "verbal_explanation": "נחבר את המספר לסמל המתמטי לקבלת התשובה.", "math_expression": "100\\pi" }
        ],
        "final_answer": "100π"
    },
    {
        "topic": "geometry_grade_8",
        "subTopic": "מעגל ועיגול (היקף ושטח)",
        "question_text": "מעגל קטן מאוד בעל רדיוס של סנטימטר אחד (1 ס''מ). מהו ההיקף שלו?&rlm;",
        "options": ["2π", "1π", "0.5π", "4π"],
        "correctAnswer": 0,
        "hint": "הציבו 1 בנוסחת ההיקף.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בנוסחת ההיקף, ונציב בה את המספר אחד במקום המשתנה אר.", "math_expression": "P = 2 \\times \\pi \\times 1" },
            { "verbal_explanation": "נכפול שתיים באחד, והתוצאה כמובן נשארת שתיים.", "math_expression": "2 \\times 1 = 2" },
            { "verbal_explanation": "ההיקף הוא שני פאי.", "math_expression": "2\\pi" }
        ],
        "final_answer": "2π"
    }
];