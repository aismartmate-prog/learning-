const questionsDB = [
    // ==========================================
    // תת נושא 1: סכום זוויות במשולש (10 שאלות)
    // ==========================================
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "סכום זוויות במשולש",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"180\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"20,130 180,130 70,30\" fill=\"#e2e8f0\" stroke=\"#0f172a\" stroke-width=\"2\"/><text x=\"40\" y=\"120\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\">50°</text><text x=\"140\" y=\"120\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\">60°</text><text x=\"65\" y=\"60\" font-family=\"Arial\" font-size=\"14\" fill=\"#f87171\">?</text></svg></div><br>במשולש שלפניכם שתי זוויות ידועות: האחת בת 50 מעלות והשנייה בת 60 מעלות. מהו הגודל של הזווית השלישית החסרה?&rlm;",
        "options": ["70", "80", "60", "90"],
        "correctAnswer": 0,
        "hint": "סכום כל שלוש הזוויות בתוך משולש הוא תמיד מאה ושמונים מעלות. חברו את שתי הזוויות הידועות וחסרו אותן מהסכום הכולל.",
        "solution_steps": [
            { "verbal_explanation": "בכל משולש, סכום שלוש הזוויות הפנימיות קבוע ותמיד שווה למאה ושמונים מעלות.", "math_expression": "180" },
            { "verbal_explanation": "נחבר את שתי הזוויות הנתונות לנו בשאלה.", "math_expression": "50 + 60 = 110" },
            { "verbal_explanation": "נחסר את הסכום שחישבנו מתוך מאה ושמונים כדי למצוא את הזווית שנותרה.", "math_expression": "180 - 110 = 70" }
        ],
        "final_answer": "70"
    },
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "סכום זוויות במשולש",
        "question_text": "במשולש ישר זווית (שיש בו זווית אחת ישרה), זווית חדה אחת היא בת 40 מעלות. מהו הגודל של הזווית החדה השנייה?&rlm;",
        "options": ["50", "60", "40", "90"],
        "correctAnswer": 0,
        "hint": "זווית ישרה שווה לתשעים מעלות. חברו אותה לזווית הנתונה, וחסרו ממאה ושמונים.",
        "solution_steps": [
            { "verbal_explanation": "במשולש ישר זווית יש תמיד זווית אחת שגודלה בדיוק תשעים מעלות.", "math_expression": "90" },
            { "verbal_explanation": "נחבר את הזווית הישרה עם הזווית הנוספת הנתונה לנו.", "math_expression": "90 + 40 = 130" },
            { "verbal_explanation": "נחסר את התוצאה מסכום הזוויות הכולל במשולש (מאה ושמונים) למציאת הזווית השלישית.", "math_expression": "180 - 130 = 50" }
        ],
        "final_answer": "50"
    },
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "סכום זוויות במשולש",
        "question_text": "במשולש שווה שוקיים, זווית הראש (הזווית שבין שתי השוקיים השוות) היא בת 80 מעלות. מהו הגודל של כל אחת מזוויות הבסיס?&rlm;",
        "options": ["50", "100", "40", "60"],
        "correctAnswer": 0,
        "hint": "במשולש שווה שוקיים שתי זוויות הבסיס שוות זו לזו. חסרו את זווית הראש ממאה ושמונים, וחלקו את השארית לשתיים.",
        "solution_steps": [
            { "verbal_explanation": "נחסר את זווית הראש מתוך הסכום הכולל של זוויות המשולש כדי למצוא כמה נשאר לשתי הזוויות האחרות יחד.", "math_expression": "180 - 80 = 100" },
            { "verbal_explanation": "במשולש שווה שוקיים, שתי זוויות הבסיס שוות בדיוק זו לזו. לכן נחלק את השארית שקיבלנו לשתיים.", "math_expression": "100 \\div 2" },
            { "verbal_explanation": "נבצע את החילוק ונגלה את הגודל של כל אחת מזוויות הבסיס בנפרד.", "math_expression": "50" }
        ],
        "final_answer": "50"
    },
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "סכום זוויות במשולש",
        "question_text": "במשולש שווה שוקיים, אחת מזוויות הבסיס היא בת 55 מעלות. מהו הגודל של זווית הראש?&rlm;",
        "options": ["70", "55", "125", "110"],
        "correctAnswer": 0,
        "hint": "אם זווית בסיס אחת היא 55 מעלות, גם זווית הבסיס השנייה היא 55 מעלות. חברו אותן וחסרו ממאה ושמונים.",
        "solution_steps": [
            { "verbal_explanation": "מכיוון שזהו משולש שווה שוקיים, שתי זוויות הבסיס זהות. לכן יש לנו פעמיים חמישים וחמש.", "math_expression": "55 + 55 = 110" },
            { "verbal_explanation": "כדי למצוא את הזווית השלישית (זווית הראש), נחסר את סכום זוויות הבסיס ממאה ושמונים מעלות.", "math_expression": "180 - 110" },
            { "verbal_explanation": "נקבל את גודל זווית הראש.", "math_expression": "70" }
        ],
        "final_answer": "70"
    },
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "סכום זוויות במשולש",
        "question_text": "מהו הגודל של כל זווית בתוך משולש שווה צלעות?&rlm;",
        "options": ["60", "90", "45", "180"],
        "correctAnswer": 0,
        "hint": "במשולש שווה צלעות, כל שלוש הזוויות שוות זו לזו בדיוק. חלקו את הסכום הכולל בשלוש.",
        "solution_steps": [
            { "verbal_explanation": "הסכום הכולל של הזוויות במשולש הוא מאה ושמונים מעלות.", "math_expression": "180" },
            { "verbal_explanation": "במשולש שווה צלעות, יש שלוש צלעות שוות ושלוש זוויות שוות. לכן נחלק את הסכום לשלושה חלקים שווים.", "math_expression": "180 \\div 3" },
            { "verbal_explanation": "נבצע את פעולת החילוק כדי למצוא את הגודל הקבוע של כל זווית במשולש מסוג זה.", "math_expression": "60" }
        ],
        "final_answer": "60"
    },
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "סכום זוויות במשולש",
        "question_text": "במשולש מסוים, זווית אחת שווה בדיוק לסכום של שתי הזוויות האחרות גם יחד. מהו הגודל של זווית זו?&rlm;",
        "options": ["90", "60", "120", "45"],
        "correctAnswer": 0,
        "hint": "אם זווית אחת שווה לשתיים האחרות, סימן שהיא מהווה בדיוק חצי מסכום כל הזוויות במשולש.",
        "solution_steps": [
            { "verbal_explanation": "כל שלוש הזוויות יחד שוות למאה ושמונים מעלות.", "math_expression": "180" },
            { "verbal_explanation": "אם זווית אחת שווה לשתי האחרות יחד, ניתן לחלק את כלל הזוויות לשתי קבוצות שוות (הזווית הגדולה לחוד, ושתי הקטנות לחוד).", "math_expression": "180 \\div 2" },
            { "verbal_explanation": "נבצע את החילוק בשתיים ונקבל את גודלה של הזווית הגדולה, שהיא זווית ישרה.", "math_expression": "90" }
        ],
        "final_answer": "90"
    },
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "סכום זוויות במשולש",
        "question_text": "במשולש ישר זווית ושווה שוקיים, מהו הגודל של כל אחת מהזוויות החדות?&rlm;",
        "options": ["45", "60", "30", "90"],
        "correctAnswer": 0,
        "hint": "זווית אחת היא 90 מעלות. השתיים האחרות שוות זו לזו.",
        "solution_steps": [
            { "verbal_explanation": "המשולש הוא ישר זווית, לכן נוריד תשעים מעלות מסכום הזוויות הכולל.", "math_expression": "180 - 90 = 90" },
            { "verbal_explanation": "המשולש הוא גם שווה שוקיים, מה שאומר ששתי הזוויות החדות שוות בגודלן. נחלק את מה שנשאר בשתיים.", "math_expression": "90 \\div 2" },
            { "verbal_explanation": "כל אחת מהזוויות החדות תהיה בת ארבעים וחמש מעלות.", "math_expression": "45" }
        ],
        "final_answer": "45"
    },
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "סכום זוויות במשולש",
        "question_text": "שתי זוויות במשולש הן בנות 30 מעלות ו-110 מעלות. מהו הגודל של הזווית השלישית?&rlm;",
        "options": ["40", "50", "70", "140"],
        "correctAnswer": 0,
        "hint": "חברו את שתי הזוויות הנתונות וחסרו אותן ממאה ושמונים.",
        "solution_steps": [
            { "verbal_explanation": "נחבר את שתי הזוויות הידועות לנו.", "math_expression": "110 + 30 = 140" },
            { "verbal_explanation": "נחסר את הסכום שחישבנו מתוך סכום הזוויות המלא של משולש.", "math_expression": "180 - 140" },
            { "verbal_explanation": "נקבל את גודל הזווית האחרונה שנשארה.", "math_expression": "40" }
        ],
        "final_answer": "40"
    },
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "סכום זוויות במשולש",
        "question_text": "במשולש ישנן שלוש זוויות. הזווית הראשונה היא 40 מעלות. הזווית השנייה גדולה ממנה ב-20 מעלות. מהו הגודל של הזווית השלישית?&rlm;",
        "options": ["80", "100", "60", "120"],
        "correctAnswer": 0,
        "hint": "חשבו קודם את הזווית השנייה. לאחר מכן חברו את שתיהן וחסרו ממאה ושמונים.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את הזווית השנייה על ידי הוספת עשרים לזווית הראשונה.", "math_expression": "40 + 20 = 60" },
            { "verbal_explanation": "נחבר את הזווית הראשונה והשנייה יחד.", "math_expression": "40 + 60 = 100" },
            { "verbal_explanation": "נחסר את הסכום ממאה ושמונים למציאת הזווית השלישית.", "math_expression": "180 - 100 = 80" }
        ],
        "final_answer": "80"
    },
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "סכום זוויות במשולש",
        "question_text": "סכום של שתי זוויות בתוך משולש הוא 105 מעלות. מהו גודלה של הזווית השלישית במשולש זה?&rlm;",
        "options": ["75", "85", "105", "180"],
        "correctAnswer": 0,
        "hint": "הסכום של כל השלוש הוא 180. אם שתיים מהן יחד שוות ל-105, פשוט חסרו זאת מהסכום הכולל.",
        "solution_steps": [
            { "verbal_explanation": "סכום שלוש הזוויות הוא תמיד מאה ושמונים. שתיים מהן יחד שוות למאה וחמש.", "math_expression": "180" },
            { "verbal_explanation": "אין צורך לדעת כל זווית בנפרד, אלא רק את הסכום שלהן. נחסר את הסכום הזה מהשלם.", "math_expression": "180 - 105" },
            { "verbal_explanation": "נקבל את הזווית השלישית הנותרת.", "math_expression": "75" }
        ],
        "final_answer": "75"
    },

    // ==========================================
    // תת נושא 2: שטח משולש (10 שאלות)
    // ==========================================
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "שטח משולש",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 120\" width=\"180\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"20,100 180,100 100,20\" fill=\"#e2e8f0\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"100\" stroke=\"#f87171\" stroke-width=\"2\" stroke-dasharray=\"4\"/><text x=\"100\" y=\"115\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\">12</text><text x=\"105\" y=\"60\" font-family=\"Arial\" font-size=\"14\" fill=\"#f87171\">5</text></svg></div><br>אורך הבסיס של משולש הוא 12 ס''מ, והגובה היורד אל הבסיס הזה הוא 5 ס''מ. מהו שטח המשולש?&rlm;",
        "options": ["30", "60", "17", "24"],
        "correctAnswer": 0,
        "hint": "שטח משולש מחושב על ידי הכפלת הבסיס בגובה, וחלוקת התוצאה בשתיים.",
        "solution_steps": [
            { "verbal_explanation": "נכפול את הבסיס באורך הגובה כדי למצוא את שטח המלבן הדמיוני שעוטף את המשולש.", "math_expression": "12 \\times 5 = 60" },
            { "verbal_explanation": "שטח המשולש הוא בדיוק חצי משטח המלבן הזה. לכן נחלק בשתיים.", "math_expression": "60 \\div 2" },
            { "verbal_explanation": "נקבל את שטח המשולש בסנטימטרים רבועים.", "math_expression": "30" }
        ],
        "final_answer": "30"
    },
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "שטח משולש",
        "question_text": "במשולש ישר זווית, אורך הניצב האחד הוא 6 ס''מ ואורך הניצב השני הוא 8 ס''מ. מהו שטח המשולש?&rlm;",
        "options": ["24", "48", "14", "10"],
        "correctAnswer": 0,
        "hint": "במשולש ישר זווית, הניצבים משמשים כבסיס וכגובה זה לזה.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בשני הניצבים כבסיס וגובה, ונכפול אותם זה בזה.", "math_expression": "6 \\times 8 = 48" },
            { "verbal_explanation": "נחלק את המכפלה בשתיים כדי לקבל את השטח של המשולש.", "math_expression": "48 \\div 2" },
            { "verbal_explanation": "השטח הוא עשרים וארבע.", "math_expression": "24" }
        ],
        "final_answer": "24"
    },
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "שטח משולש",
        "question_text": "שטחו של משולש הוא 40 סמ''ר. אורך הבסיס שלו הוא 10 ס''מ. מהו אורך הגובה היורד אל הבסיס?&rlm;",
        "options": ["8", "4", "80", "15"],
        "correctAnswer": 0,
        "hint": "כיוון שהשטח הוא חצי ממכפלת הבסיס והגובה, הכפילו את השטח פי שתיים קודם כל.",
        "solution_steps": [
            { "verbal_explanation": "נכפול את השטח הנתון בשתיים כדי למצוא את המכפלה המלאה של הבסיס והגובה.", "math_expression": "40 \\times 2 = 80" },
            { "verbal_explanation": "כעת יש לנו את מכפלת הבסיס בגובה. נחלק בבסיס הידוע כדי למצוא את הגובה החסר.", "math_expression": "80 \\div 10" },
            { "verbal_explanation": "אורך הגובה הוא שמונה סנטימטרים.", "math_expression": "8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "שטח משולש",
        "question_text": "שטחו של משולש הוא 15 סמ''ר. הגובה במשולש הוא 3 ס''מ. מהו אורך הבסיס שאליו יורד הגובה?&rlm;",
        "options": ["10", "5", "30", "45"],
        "correctAnswer": 0,
        "hint": "פעלו בדיוק כמו בשאלה הקודמת: הכפילו את השטח בשתיים, וחלקו בגובה הנתון.",
        "solution_steps": [
            { "verbal_explanation": "נכפול את השטח בשתיים כדי לבטל את החלוקה שבנוסחת השטח.", "math_expression": "15 \\times 2 = 30" },
            { "verbal_explanation": "נחלק את התוצאה בגובה הידוע לנו כדי למצוא את הבסיס המלא.", "math_expression": "30 \\div 3" },
            { "verbal_explanation": "הבסיס הוא באורך עשרה סנטימטרים.", "math_expression": "10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "שטח משולש",
        "question_text": "במשולש קהה זווית, אורך הבסיס הוא 12 ס''מ. הגובה לאותו בסיס יורד מחוץ למשולש (על המשך הבסיס) ואורכו הוא 4 ס''מ. מהו שטח המשולש?&rlm;",
        "options": ["24", "48", "16", "36"],
        "correctAnswer": 0,
        "hint": "העובדה שהגובה נופל מחוץ למשולש לא משנה את צורת החישוב. השתמשו באותה הנוסחה המוכרת.",
        "solution_steps": [
            { "verbal_explanation": "הנוסחה לחישוב השטח נשארת זהה גם כשהגובה חיצוני. נכפול את הבסיס המקורי בגובה החיצוני.", "math_expression": "12 \\times 4 = 48" },
            { "verbal_explanation": "נחלק את התוצאה בשתיים כרגיל.", "math_expression": "48 \\div 2" },
            { "verbal_explanation": "השטח הוא עשרים וארבע.", "math_expression": "24" }
        ],
        "final_answer": "24"
    },
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "שטח משולש",
        "question_text": "במשולש ישר זווית ושווה שוקיים, אורך אחד הניצבים הוא 10 ס''מ. מהו שטח המשולש?&rlm;",
        "options": ["50", "100", "20", "25"],
        "correctAnswer": 0,
        "hint": "אם המשולש ישר זווית ושווה שוקיים, שני הניצבים שלו שווים זה לזה באורכם.",
        "solution_steps": [
            { "verbal_explanation": "המשולש שווה שוקיים, ולכן שני הניצבים שלו שווים באורכם. הניצב השני הוא גם כן עשר.", "math_expression": "10" },
            { "verbal_explanation": "נכפול את שני הניצבים זה בזה.", "math_expression": "10 \\times 10 = 100" },
            { "verbal_explanation": "נחלק בשתיים למציאת השטח של המשולש הישר זווית.", "math_expression": "100 \\div 2 = 50" }
        ],
        "final_answer": "50"
    },
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "שטח משולש",
        "question_text": "במשולש, אורך הגובה שווה בדיוק לפעמיים אורך הבסיס. אורך הבסיס הוא 8 ס''מ. מהו שטח המשולש?&rlm;",
        "options": ["64", "128", "32", "16"],
        "correctAnswer": 0,
        "hint": "חשבו קודם את הגובה (כפול שתיים מהבסיס), ואז חשבו את השטח לפי הנוסחה.",
        "solution_steps": [
            { "verbal_explanation": "נחשב תחילה את הגובה, שהוא כפול מאורך הבסיס.", "math_expression": "8 \\times 2 = 16" },
            { "verbal_explanation": "נחשב את השטח על ידי הכפלת הבסיס בגובה שמצאנו.", "math_expression": "8 \\times 16 = 128" },
            { "verbal_explanation": "נחלק את התוצאה בשתיים כדי לקבל את השטח.", "math_expression": "128 \\div 2 = 64" }
        ],
        "final_answer": "64"
    },
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "שטח משולש",
        "question_text": "במשולש אחר, אורך הגובה שווה בדיוק לחצי מאורך הבסיס. אורך הבסיס הוא 20 ס''מ. מהו שטח המשולש?&rlm;",
        "options": ["100", "200", "50", "40"],
        "correctAnswer": 0,
        "hint": "מצאו את הגובה (חצי מהבסיס), ואז חשבו את השטח.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את אורך הגובה על ידי חלוקת הבסיס לשניים.", "math_expression": "20 \\div 2 = 10" },
            { "verbal_explanation": "נכפול את הבסיס בגובה שמצאנו הרגע.", "math_expression": "20 \\times 10 = 200" },
            { "verbal_explanation": "נחלק בשתיים לקבלת שטח המשולש.", "math_expression": "200 \\div 2 = 100" }
        ],
        "final_answer": "100"
    },
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "שטח משולש",
        "question_text": "ציירו שני משולשים זהים לחלוטין. לכל משולש יש בסיס באורך 5 ס''מ וגובה באורך 4 ס''מ. מהו השטח הכולל של שני המשולשים יחד?&rlm;",
        "options": ["20", "10", "40", "18"],
        "correctAnswer": 0,
        "hint": "כיוון ששני משולשים מרכיבים מלבן (או מקבילית), השטח המשותף הוא פשוט בסיס כפול גובה ללא חלוקה בשתיים (או שתחשבו לאחד ותכפילו).",
        "solution_steps": [
            { "verbal_explanation": "נחשב שטח של משולש בודד.", "math_expression": "5 \\times 4 \\div 2 = 20 \\div 2 = 10" },
            { "verbal_explanation": "יש לנו שני משולשים זהים, ולכן נכפול את השטח בשתיים.", "math_expression": "10 \\times 2" },
            { "verbal_explanation": "השטח הכולל הוא עשרים.", "math_expression": "20" }
        ],
        "final_answer": "20"
    },
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "שטח משולש",
        "question_text": "שטחו של משולש הוא 50 סמ''ר. אורך הבסיס של המשולש שווה בדיוק לאורך הגובה היורד אליו. מהו אורך הבסיס?&rlm;",
        "options": ["10", "25", "5", "100"],
        "correctAnswer": 0,
        "hint": "הכפילו את השטח פי שתיים. איזה מספר כפול עצמו נותן את התוצאה שקיבלתם?",
        "solution_steps": [
            { "verbal_explanation": "נכפול את השטח בשתיים כדי לקבל את מכפלת הבסיס והגובה.", "math_expression": "50 \\times 2 = 100" },
            { "verbal_explanation": "הבסיס והגובה שווים. אנו מחפשים מספר שכאשר כופלים אותו בעצמו, התוצאה היא מאה.", "math_expression": "10 \\times 10 = 100" },
            { "verbal_explanation": "לכן, גם הבסיס וגם הגובה הם באורך עשרה סנטימטרים.", "math_expression": "10" }
        ],
        "final_answer": "10"
    },

    // ==========================================
    // תת נושא 3: סוגי משולשים (10 שאלות)
    // ==========================================
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "סוגי משולשים",
        "question_text": "במשולש מסוים כל שלוש הזוויות שוות ל-60 מעלות. איזה סוג משולש זה לפי צלעותיו?&rlm;",
        "options": ["שווה צלעות", "שווה שוקיים", "שונה צלעות", "ישר זווית"],
        "correctAnswer": 0,
        "hint": "כאשר כל הזוויות במשולש שוות, גם כל הצלעות שלו שוות בהתאמה.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק את זוויות המשולש. נתון שכולן בנות שישים מעלות.", "math_expression": "60 = 60 = 60" },
            { "verbal_explanation": "כלל בגאומטריה קובע שמשולש בו כל הזוויות שוות הוא משולש שכל צלעותיו שוות.", "math_expression": "180 \\div 3 = 60" },
            { "verbal_explanation": "השם המדויק למשולש כזה הוא משולש שווה צלעות.", "math_expression": "1" }
        ],
        "final_answer": "שווה צלעות"
    },
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "סוגי משולשים",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"20,130 140,130 20,30\" fill=\"#e2e8f0\" stroke=\"#0f172a\" stroke-width=\"2\"/><rect x=\"20\" y=\"110\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"1.5\"/><text x=\"110\" y=\"120\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\">45°</text></svg></div><br>במשולש נתון יש זווית אחת של 90 מעלות, וזווית שנייה של 45 מעלות. כיצד נקרא המשולש הזה? (בחרו את התיאור המדויק והמלא ביותר).&rlm;",
        "options": ["ישר זווית ושווה שוקיים", "ישר זווית בלבד", "שווה שוקיים בלבד", "שונה צלעות"],
        "correctAnswer": 0,
        "hint": "חשבו קודם מהי הזווית השלישית. אם תגלו שתי זוויות שוות, אז המשולש הוא גם שווה שוקיים.",
        "solution_steps": [
            { "verbal_explanation": "המשולש מכיל זווית של תשעים מעלות, לכן הוא בהחלט ישר זווית.", "math_expression": "90" },
            { "verbal_explanation": "נחשב את הזווית השלישית על ידי חיסור ממאה ושמונים.", "math_expression": "180 - 90 - 45 = 45" },
            { "verbal_explanation": "גילינו שיש בו שתי זוויות שוות של ארבעים וחמש מעלות. לכן הוא גם שווה שוקיים.", "math_expression": "45 = 45" }
        ],
        "final_answer": "ישר זווית ושווה שוקיים"
    },
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "סוגי משולשים",
        "question_text": "במשולש ישנן שלוש זוויות: 120 מעלות, 30 מעלות ו-30 מעלות. כיצד נקרא משולש זה?&rlm;",
        "options": ["קהה זווית ושווה שוקיים", "חד זווית ושווה שוקיים", "קהה זווית ושונה צלעות", "ישר זווית ושווה שוקיים"],
        "correctAnswer": 0,
        "hint": "יש לו זווית שגדולה מ-90 מעלות, ויש לו שתי זוויות שוות.",
        "solution_steps": [
            { "verbal_explanation": "הזווית הגדולה במשולש היא מאה ועשרים. מכיוון שהיא גדולה מתשעים, המשולש הוא קהה זווית.", "math_expression": "120 > 90" },
            { "verbal_explanation": "שתי הזוויות האחרות שוות כל אחת לשלושים מעלות.", "math_expression": "30 = 30" },
            { "verbal_explanation": "בגלל שיש שתי זוויות שוות, המשולש הוא שווה שוקיים. לכן השם המלא הוא קהה זווית ושווה שוקיים.", "math_expression": "2" }
        ],
        "final_answer": "קהה זווית ושווה שוקיים"
    },
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "סוגי משולשים",
        "question_text": "האם ייתכן משולש שיש בו שתי זוויות ישרות (שתי זוויות של 90 מעלות)?&rlm;",
        "options": ["לא, כי סכום הזוויות במשולש מוגבל", "כן, זהו משולש ישר זווית כפול", "כן, אם הצלע השלישית מאוד קצרה", "רק אם המשולש גדול מספיק"],
        "correctAnswer": 0,
        "hint": "חברו שתי זוויות של 90 מעלות. כמה הגעתם? האם נשאר מקום לזווית השלישית?",
        "solution_steps": [
            { "verbal_explanation": "נניח שיש לנו שתי זוויות של תשעים מעלות. נחבר אותן יחד.", "math_expression": "90 + 90 = 180" },
            { "verbal_explanation": "הגענו למאה ושמונים מעלות רק משתי זוויות. במשולש, כל השלוש יחד חייבות להיות שוות למאה ושמונים.", "math_expression": "180" },
            { "verbal_explanation": "לכן, לא נשארות מעלות לזווית השלישית. המסקנה היא שאי אפשר לצייר משולש כזה.", "math_expression": "0" }
        ],
        "final_answer": "לא, כי סכום הזוויות במשולש מוגבל"
    },
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "סוגי משולשים",
        "question_text": "אורכי הצלעות של משולש הם 5 ס''מ, 5 ס''מ ו-8 ס''מ. איזה סוג משולש זה?&rlm;",
        "options": ["שווה שוקיים", "שווה צלעות", "שונה צלעות", "ישר זווית"],
        "correctAnswer": 0,
        "hint": "בדקו כמה צלעות שוות יש לו.",
        "solution_steps": [
            { "verbal_explanation": "נתבונן באורכי הצלעות שניתנו לנו. ישנן שתי צלעות שאורכן חמש.", "math_expression": "5 = 5" },
            { "verbal_explanation": "הצלע השלישית שונה באורכה והיא שמונה.", "math_expression": "8" },
            { "verbal_explanation": "משולש בעל שתי צלעות שוות נקרא משולש שווה שוקיים.", "math_expression": "2" }
        ],
        "final_answer": "שווה שוקיים"
    },
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "סוגי משולשים",
        "question_text": "זוויותיו של משולש מסוים הן 40 מעלות, 50 מעלות ו-90 מעלות. מה סוג המשולש?&rlm;",
        "options": ["ישר זווית ושונה צלעות", "ישר זווית ושווה שוקיים", "חד זווית ושונה צלעות", "קהה זווית"],
        "correctAnswer": 0,
        "hint": "בדקו אם יש זווית של 90, ובדקו אם יש זוויות שוות.",
        "solution_steps": [
            { "verbal_explanation": "המשולש מכיל זווית ישרה אחת של תשעים מעלות. לכן הוא ישר זווית.", "math_expression": "90" },
            { "verbal_explanation": "נבחן את שאר הזוויות. הן שונות זו מזו (ארבעים וחמישים).", "math_expression": "40 \\neq 50" },
            { "verbal_explanation": "מכיוון שאין זוויות שוות, גם אין צלעות שוות. לכן הוא שונה צלעות.", "math_expression": "3" }
        ],
        "final_answer": "ישר זווית ושונה צלעות"
    },
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "סוגי משולשים",
        "question_text": "האם משולש שווה צלעות יכול להיות גם משולש ישר זווית?&rlm;",
        "options": ["לא, כי הזוויות שלו חייבות להיות 60 מעלות", "כן, אם הצלעות שלו גדולות מ-10", "כן, זה מצב שכיח מאוד", "לא, כי הצלעות יהיו ארוכות מדי"],
        "correctAnswer": 0,
        "hint": "חשבו על הגודל הקבוע של הזוויות במשולש שווה צלעות.",
        "solution_steps": [
            { "verbal_explanation": "במשולש שווה צלעות, כל שלוש הזוויות חייבות להיות שוות בדיוק זו לזו.", "math_expression": "180 \\div 3 = 60" },
            { "verbal_explanation": "לכן, אף זווית בו אינה יכולה להיות שווה לתשעים מעלות כפי שנדרש ממשולש ישר זווית.", "math_expression": "60 \\neq 90" },
            { "verbal_explanation": "מכאן שלא ייתכן שילוב של השניים.", "math_expression": "0" }
        ],
        "final_answer": "לא, כי הזוויות שלו חייבות להיות 60 מעלות"
    },
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "סוגי משולשים",
        "question_text": "אורכי צלעות המשולש הם 3, 4 ו-5. כל הזוויות שונות זו מזו בגודלן. איזה סוג משולש זה לפי צלעותיו?&rlm;",
        "options": ["שונה צלעות", "שווה שוקיים", "שווה צלעות", "אי אפשר לדעת"],
        "correctAnswer": 0,
        "hint": "כל צלע היא באורך שונה, ויש גם רמז בזוויות שכולן שונות.",
        "solution_steps": [
            { "verbal_explanation": "נסתכל על אורכי הצלעות שניתנו. הם שלוש, ארבע וחמש.", "math_expression": "3 \\neq 4 \\neq 5" },
            { "verbal_explanation": "אף צלע אינה שווה לאחרת. כל אחת באורך שונה לגמרי.", "math_expression": "3" },
            { "verbal_explanation": "משולש כזה מוגדר כמשולש שונה צלעות.", "math_expression": "1" }
        ],
        "final_answer": "שונה צלעות"
    },
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "סוגי משולשים",
        "question_text": "במשולש יש זווית אחת קהה (שגדולה מ-90 מעלות). מה אפשר לומר בוודאות על שתי הזוויות האחרות במשולש?&rlm;",
        "options": ["שהן חדות (קטנות מ-90)", "שאחת ישרה ואחת חדה", "שגם הן קהות", "שהן שוות זו לזו"],
        "correctAnswer": 0,
        "hint": "אם זווית אחת כבר לקחה יותר מחצי מהסכום הכולל (שזה 180), לא נשאר הרבה מקום לשאר.",
        "solution_steps": [
            { "verbal_explanation": "נניח שהזווית הקהה שווה למאה מעלות.", "math_expression": "100 > 90" },
            { "verbal_explanation": "נחסר אותה ממאה ושמונים כדי לראות כמה נשאר לשתי הזוויות האחרות יחד.", "math_expression": "180 - 100 = 80" },
            { "verbal_explanation": "מכיוון שהסכום שלהן יחד קטן מתשעים, כל אחת מהן בנפרד חייבת להיות קטנה מתשעים מעלות. כלומר, חדה.", "math_expression": "< 90" }
        ],
        "final_answer": "שהן חדות (קטנות מ-90)"
    },
    {
        "topic": "geometry_triangles_grade_7",
        "subTopic": "סוגי משולשים",
        "question_text": "במשולש מסוים, ידוע שסכום שתיים מהזוויות הוא בדיוק 90 מעלות. איזה סוג משולש זה מבחינת זוויות?&rlm;",
        "options": ["ישר זווית", "קהה זווית", "חד זווית", "שווה צלעות"],
        "correctAnswer": 0,
        "hint": "אם שתיים ביחד שוות ל-90, כמה נשאר לזווית השלישית לבדה?",
        "solution_steps": [
            { "verbal_explanation": "הסכום של שתי זוויות מתוך השלוש הוא תשעים מעלות.", "math_expression": "90" },
            { "verbal_explanation": "כדי לגלות את הזווית השלישית, נחסר את הסכום הזה מהסכום הכולל של המשולש.", "math_expression": "180 - 90" },
            { "verbal_explanation": "התוצאה היא תשעים מעלות. מכאן שיש במשולש זווית ישרה אחת, ולכן הוא משולש ישר זווית.", "math_expression": "90" }
        ],
        "final_answer": "ישר זווית"
    }
];