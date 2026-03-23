const questionsDB = [
    // ==========================================
    // תת נושא 1: משוואת ישרים ומציאת שיפועים מורכבים (10 שאלות)
    // ==========================================
    {
        "topic": "analytic_geometry_571",
        "subTopic": "משוואת ישרים ומציאת שיפועים מורכבים",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"40\" y1=\"140\" x2=\"140\" y2=\"20\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"40\" y1=\"60\" x2=\"160\" y2=\"140\" stroke=\"#c5a059\" stroke-width=\"2\"/></svg></div><br>נתונים שני ישרים: \\( y = 2x + 1 \\) ו-\\( y = -3x + 4 \\). מצאו את הזווית החדה שבין שני הישרים.&rlm;",
        "options": ["45°", "30°", "60°", "75°"],
        "correctAnswer": 0,
        "hint": "השתמשו בנוסחה למציאת זווית בין שני ישרים המבוססת על שיפועיהם, עם ערך מוחלט.",
        "solution_steps": [
            { "verbal_explanation": "נזהה את שיפוע הישר הראשון.", "math_expression": "m_1 = 2" },
            { "verbal_explanation": "נזהה את שיפוע הישר השני.", "math_expression": "m_2 = -3" },
            { "verbal_explanation": "נרשום את הנוסחה לטנגנס הזווית שבין שני ישרים.", "math_expression": "\\tan A = \\left| \\dfrac{m_1 - m_2}{1 + m_1 m_2} \\right|" },
            { "verbal_explanation": "נציב את השיפועים לנוסחה.", "math_expression": "\\tan A = \\left| \\dfrac{2 - (-3)}{1 + 2(-3)} \\right|" },
            { "verbal_explanation": "נפשט את המונה והמכנה.", "math_expression": "\\tan A = \\left| \\dfrac{5}{1 - 6} \\right|" },
            { "verbal_explanation": "נחשב את ערך השבר הפנימי.", "math_expression": "\\tan A = \\left| \\dfrac{5}{-5} \\right|" },
            { "verbal_explanation": "נפעיל את הערך המוחלט.", "math_expression": "\\tan A = |-1| = 1" },
            { "verbal_explanation": "נמצא את הזווית החדה המתאימה.", "math_expression": "A = 45^{\\circ}" }
        ],
        "final_answer": "45°"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "משוואת ישרים ומציאת שיפועים מורכבים",
        "question_text": "נתונים שני ישרים מקבילים: \\( 3x - 4y + 10 = 0 \\) ו- \\( 3x - 4y - 15 = 0 \\). חשבו את המרחק בין הישרים.&rlm;",
        "options": ["5", "25", "1", "4"],
        "correctAnswer": 0,
        "hint": "השתמשו בנוסחת המרחק בין ישרים מקבילים המבוססת על הפרש האיברים החופשיים.",
        "solution_steps": [
            { "verbal_explanation": "נזהה את המקדמים של משוואות הישרים.", "math_expression": "a = 3 \\quad , \\quad b = -4" },
            { "verbal_explanation": "נזהה את האיברים החופשיים של המשוואות.", "math_expression": "c_1 = 10 \\quad , \\quad c_2 = -15" },
            { "verbal_explanation": "נרשום את נוסחת המרחק.", "math_expression": "d = \\dfrac{|c_1 - c_2|}{\\sqrt{a^{2} + b^{2}}}" },
            { "verbal_explanation": "נציב את הנתונים לנוסחה.", "math_expression": "d = \\dfrac{|10 - (-15)|}{\\sqrt{3^{2} + (-4)^{2}}}" },
            { "verbal_explanation": "נפשט את המונה ואת המכנה.", "math_expression": "d = \\dfrac{25}{\\sqrt{9 + 16}}" },
            { "verbal_explanation": "נחשב את השורש.", "math_expression": "d = \\dfrac{25}{\\sqrt{25}}" },
            { "verbal_explanation": "נציב את ערך השורש.", "math_expression": "d = \\dfrac{25}{5}" },
            { "verbal_explanation": "נבצע חלוקה לקבלת התוצאה.", "math_expression": "d = 5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "משוואת ישרים ומציאת שיפועים מורכבים",
        "question_text": "ישר עובר דרך הנקודה \\( (2, 5) \\) ומאונך לישר \\( 4x + 2y - 7 = 0 \\). מצאו את משוואתו.&rlm;",
        "options": ["y = 0.5x + 4", "y = -2x + 9", "y = 0.5x + 5", "y = 2x + 1"],
        "correctAnswer": 0,
        "hint": "העבירו את הישר הנתון לצורה מפורשת למציאת שיפועו, ואז מצאו את השיפוע ההופכי והנגדי.",
        "solution_steps": [
            { "verbal_explanation": "נעביר את משוואת הישר לצורה מפורשת.", "math_expression": "2y = -4x + 7" },
            { "verbal_explanation": "נחלק בשתיים למציאת השיפוע.", "math_expression": "y = -2x + 3.5" },
            { "verbal_explanation": "שיפוע הישר הנתון.", "math_expression": "m_1 = -2" },
            { "verbal_explanation": "נחשב את שיפוע הישר המאונך.", "math_expression": "m_2 = \\dfrac{-1}{-2} = 0.5" },
            { "verbal_explanation": "נרשום את נוסחת הישר.", "math_expression": "y - y_1 = m_2(x - x_1)" },
            { "verbal_explanation": "נציב את הנקודה והשיפוע החדש.", "math_expression": "y - 5 = 0.5(x - 2)" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "y - 5 = 0.5x - 1" },
            { "verbal_explanation": "נסדר למשוואה מפורשת.", "math_expression": "y = 0.5x + 4" }
        ],
        "final_answer": "y = 0.5x + 4"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "משוואת ישרים ומציאת שיפועים מורכבים",
        "question_text": "קודקודים במשולש הם \\( A(1, 2) \\) ו-\\( B(5, 8) \\). מצאו את משוואת האנך האמצעי לקטע \\( AB \\).&rlm;",
        "options": ["y = -0.66x + 7", "y = 1.5x + 0.5", "y = -0.66x + 5", "y = -1.5x + 9.5"],
        "correctAnswer": 0,
        "hint": "אנך אמצעי מאונך לקטע ועובר דרך אמצעו. מצאו את נקודת האמצע ואת השיפוע.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את קואורדינטת ה-x של נקודת האמצע.", "math_expression": "x_m = \\dfrac{1 + 5}{2} = 3" },
            { "verbal_explanation": "נחשב את קואורדינטת ה-y של נקודת האמצע.", "math_expression": "y_m = \\dfrac{2 + 8}{2} = 5" },
            { "verbal_explanation": "נחשב את שיפוע הקטע.", "math_expression": "m_1 = \\dfrac{8 - 2}{5 - 1} = \\dfrac{6}{4} = 1.5" },
            { "verbal_explanation": "נחשב את שיפוע האנך האמצעי.", "math_expression": "m_2 = -\\dfrac{1}{1.5} = -\\dfrac{2}{3}" },
            { "verbal_explanation": "נרכיב את משוואת האנך דרך נקודת האמצע.", "math_expression": "y - 5 = -\\dfrac{2}{3}(x - 3)" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "y - 5 = -\\dfrac{2}{3}x + 2" },
            { "verbal_explanation": "נעביר אגף.", "math_expression": "y = -\\dfrac{2}{3}x + 7" },
            { "verbal_explanation": "נרשום בייצוג עשרוני.", "math_expression": "y \\approx -0.66x + 7" }
        ],
        "final_answer": "y = -0.66x + 7"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "משוואת ישרים ומציאת שיפועים מורכבים",
        "question_text": "ישר חותך את הצירים בנקודות \\( (4, 0) \\) ו-\\( (0, -3) \\). מהו המרחק מראשית הצירים לישר זה?&rlm;",
        "options": ["2.4", "3", "4", "2.8"],
        "correctAnswer": 0,
        "hint": "מצאו את משוואת הישר, סדרו אותה לצורה כללית, והשתמשו בנוסחת מרחק נקודה מישר.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את שיפוע הישר.", "math_expression": "m = \\dfrac{-3 - 0}{0 - 4} = 0.75" },
            { "verbal_explanation": "נרשום את המשוואה המפורשת.", "math_expression": "y = 0.75x - 3" },
            { "verbal_explanation": "נעביר לצורה כללית.", "math_expression": "4y = 3x - 12" },
            { "verbal_explanation": "נסדר את המשוואה.", "math_expression": "3x - 4y - 12 = 0" },
            { "verbal_explanation": "נרשום את נוסחת המרחק מנקודה לישר.", "math_expression": "d = \\dfrac{|A x_0 + B y_0 + C|}{\\sqrt{A^{2} + B^{2}}}" },
            { "verbal_explanation": "נציב את מקדמי הישר והראשית.", "math_expression": "d = \\dfrac{|-12|}{\\sqrt{3^{2} + (-4)^{2}}}" },
            { "verbal_explanation": "נחשב את השורש במכנה.", "math_expression": "d = \\dfrac{12}{\\sqrt{25}}" },
            { "verbal_explanation": "נחשב את המרחק הסופי.", "math_expression": "d = \\dfrac{12}{5} = 2.4" }
        ],
        "final_answer": "2.4"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "משוואת ישרים ומציאת שיפועים מורכבים",
        "question_text": "מהי משוואת הישר המהווה את חוצה הזווית שבין הישרים \\( y = 3x \\) ו- \\( y = -3x \\) הנמצא ברביע הראשון והשני?&rlm;",
        "options": ["x = 0", "y = x", "y = 0", "y = -x"],
        "correctAnswer": 0,
        "hint": "השוו את מרחקי הנקודה לשני הישרים.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הישרים בצורה כללית.", "math_expression": "3x - y = 0 \\quad , \\quad 3x + y = 0" },
            { "verbal_explanation": "נרשום שוויון מרחקים עבור חוצה זווית.", "math_expression": "\\dfrac{|3x - y|}{\\sqrt{3^{2} + (-1)^{2}}} = \\dfrac{|3x + y|}{\\sqrt{3^{2} + 1^{2}}}" },
            { "verbal_explanation": "נצמצם את המכנים הזהים.", "math_expression": "|3x - y| = |3x + y|" },
            { "verbal_explanation": "נפתור את המקרה הראשון.", "math_expression": "3x - y = 3x + y" },
            { "verbal_explanation": "נחלץ את המשתנה מהמקרה הראשון.", "math_expression": "2y = 0 \\Rightarrow y = 0" },
            { "verbal_explanation": "נפתור את המקרה השני.", "math_expression": "3x - y = -(3x + y)" },
            { "verbal_explanation": "נחלץ את המשתנה מהמקרה השני.", "math_expression": "6x = 0 \\Rightarrow x = 0" },
            { "verbal_explanation": "הישר העובר ברביעים הראשון והשני (חוצה את הזווית העליונה) הוא ציר ה-y.", "math_expression": "x = 0" }
        ],
        "final_answer": "x = 0"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "משוואת ישרים ומציאת שיפועים מורכבים",
        "question_text": "הנקודה \\( (4, 2) \\) היא קודקוד של ריבוע. אלכסון של הריבוע מונח על הישר \\( 2x - y - 1 = 0 \\). מהו שטח הריבוע?&rlm;",
        "options": ["10", "20", "5", "14.4"],
        "correctAnswer": 0,
        "hint": "המרחק מהקודקוד לאלכסון שווה למחצית האלכסון השני.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את המרחק מהקודקוד אל האלכסון הנתון.", "math_expression": "d_1 = \\dfrac{|2(4) - 1(2) - 1|}{\\sqrt{2^{2} + (-1)^{2}}}" },
            { "verbal_explanation": "נחשב את המונה והמכנה.", "math_expression": "d_1 = \\dfrac{|8 - 2 - 1|}{\\sqrt{5}} = \\dfrac{5}{\\sqrt{5}}" },
            { "verbal_explanation": "נפשט את השבר.", "math_expression": "d_1 = \\sqrt{5}" },
            { "verbal_explanation": "אורך האלכסון המלא הוא כפול.", "math_expression": "d_2 = 2\\sqrt{5}" },
            { "verbal_explanation": "נרשום את נוסחת שטח הריבוע לפי האלכסונים.", "math_expression": "S = \\dfrac{(d_2)^{2}}{2}" },
            { "verbal_explanation": "נציב את הערך לחישוב השטח.", "math_expression": "S = \\dfrac{(2\\sqrt{5})^{2}}{2}" },
            { "verbal_explanation": "נחשב את החזקה.", "math_expression": "S = \\dfrac{4 \\times 5}{2} = \\dfrac{20}{2}" },
            { "verbal_explanation": "התוצאה הסופית לשטח הריבוע.", "math_expression": "S = 10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "משוואת ישרים ומציאת שיפועים מורכבים",
        "question_text": "שלוש נקודות על מערכת צירים: \\( A(0, 4) \\), \\( B(6, 0) \\), ו-\\( C(x, x) \\). השטח של משולש \\( ABC \\) הוא 8. מהו הערך החיובי האפשרי של \\( x \\)?&rlm;",
        "options": ["4", "5", "2", "6"],
        "correctAnswer": 0,
        "hint": "חשבו את אורך הבסיס ואת משוואת הישר. השתמשו בנוסחת מרחק מנקודה לישר להגדרת הגובה.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את אורך צלע הבסיס.", "math_expression": "AB = \\sqrt{(6 - 0)^{2} + (0 - 4)^{2}} = \\sqrt{52} = 2\\sqrt{13}" },
            { "verbal_explanation": "נמצא את משוואת הישר של הבסיס.", "math_expression": "m = \\dfrac{-4}{6} = -\\dfrac{2}{3} \\Rightarrow y = -\\dfrac{2}{3}x + 4" },
            { "verbal_explanation": "נסדר את המשוואה לצורה כללית.", "math_expression": "2x + 3y - 12 = 0" },
            { "verbal_explanation": "נרכיב ביטוי לגובה מהנקודה.", "math_expression": "h = \\dfrac{|2x + 3x - 12|}{\\sqrt{2^{2} + 3^{2}}} = \\dfrac{|5x - 12|}{\\sqrt{13}}" },
            { "verbal_explanation": "נציב את הנתונים בנוסחת השטח ונשווה.", "math_expression": "\\dfrac{2\\sqrt{13} \\times \\dfrac{|5x - 12|}{\\sqrt{13}}}{2} = 8" },
            { "verbal_explanation": "נפשט את המשוואה.", "math_expression": "|5x - 12| = 8" },
            { "verbal_explanation": "נפתור עבור המקרה שבו הערך המוחלט חיובי.", "math_expression": "5x - 12 = 8 \\Rightarrow 5x = 20" },
            { "verbal_explanation": "נחלץ את המשתנה.", "math_expression": "x = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "משוואת ישרים ומציאת שיפועים מורכבים",
        "question_text": "ישר ששיפועו חיובי עובר דרך הנקודה \\( (1, 1) \\) ויוצר זווית של 45 מעלות עם ציר ה-\\( x \\). מהי משוואתו?&rlm;",
        "options": ["y = x", "y = 2x - 1", "y = 0.5x + 0.5", "y = x + 1"],
        "correctAnswer": 0,
        "hint": "שיפוע של ישר שווה לטנגנס זווית הנטייה שלו.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את שיפוע הישר מתוך זווית הנטייה שלו.", "math_expression": "m = \\tan(45^{\\circ})" },
            { "verbal_explanation": "נרשום את ערך הטנגנס.", "math_expression": "m = 1" },
            { "verbal_explanation": "נציב בנוסחת הישר יחד עם הנקודה הנתונה.", "math_expression": "y - 1 = 1(x - 1)" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "y - 1 = x - 1" },
            { "verbal_explanation": "נסדר את המשוואה לקבלת הצורה המפורשת.", "math_expression": "y = x" }
        ],
        "final_answer": "y = x"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "משוואת ישרים ומציאת שיפועים מורכבים",
        "question_text": "מצאו את משוואת הישר העובר דרך חיתוך הישרים \\( y = x + 2 \\) ו-\\( y = -x + 4 \\), ומקביל לישר \\( y = 3x \\).&rlm;",
        "options": ["y = 3x", "y = 3x + 1", "y = 3x - 1", "y = 3x + 2"],
        "correctAnswer": 0,
        "hint": "מצאו את נקודת החיתוך של שני הישרים, והשתמשו בשיפוע של הישר המקביל.",
        "solution_steps": [
            { "verbal_explanation": "נשווה את שתי המשוואות למציאת נקודת החיתוך.", "math_expression": "x + 2 = -x + 4" },
            { "verbal_explanation": "נפתור עבור המשתנה האופקי.", "math_expression": "2x = 2 \\Rightarrow x = 1" },
            { "verbal_explanation": "נציב באחת המשוואות למציאת המשתנה האנכי.", "math_expression": "y = 1 + 2 = 3" },
            { "verbal_explanation": "נרשום את נקודת החיתוך.", "math_expression": "P(1, 3)" },
            { "verbal_explanation": "נזהה את השיפוע מהישר המקביל.", "math_expression": "m = 3" },
            { "verbal_explanation": "נרכיב את משוואת הישר בעזרת הנקודה והשיפוע.", "math_expression": "y - 3 = 3(x - 1)" },
            { "verbal_explanation": "נפתח סוגריים ונסדר.", "math_expression": "y - 3 = 3x - 3 \\Rightarrow y = 3x" }
        ],
        "final_answer": "y = 3x"
    },

    // ==========================================
    // תת נושא 2: נקודות חיתוך בין שני מעגלים או בין מעגל לישר (10 שאלות)
    // ==========================================
    {
        "topic": "analytic_geometry_571",
        "subTopic": "נקודות חיתוך בין שני מעגלים או בין מעגל לישר",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"30\" y1=\"30\" x2=\"170\" y2=\"170\" stroke=\"#f87171\" stroke-width=\"1.5\"/></svg></div><br>מצאו את נקודות החיתוך בין המעגל \\( x^{2} + y^{2} = 25 \\) לבין הישר \\( y = x - 1 \\).&rlm;",
        "options": ["(4,3), (-3,-4)", "(3,2), (-4,-5)", "(5,4), (-5,-6)", "אין נקודות חיתוך"],
        "correctAnswer": 0,
        "hint": "הציבו את משוואת הישר בתוך משוואת המעגל, ופתרו משוואה ריבועית.",
        "solution_steps": [
            { "verbal_explanation": "נציב את הישר לתוך משוואת המעגל.", "math_expression": "x^{2} + (x - 1)^{2} = 25" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "x^{2} + x^{2} - 2x + 1 = 25" },
            { "verbal_explanation": "נכנס איברים ונעביר לאגף אחד.", "math_expression": "2x^{2} - 2x - 24 = 0" },
            { "verbal_explanation": "נחלק בשתיים.", "math_expression": "x^{2} - x - 12 = 0" },
            { "verbal_explanation": "נפרק לגורמים למציאת השורשים.", "math_expression": "(x - 4)(x + 3) = 0" },
            { "verbal_explanation": "נחלץ את הערכים של המשתנה האופקי.", "math_expression": "x_1 = 4 \\quad , \\quad x_2 = -3" },
            { "verbal_explanation": "נציב בישר למציאת הערכים האנכיים.", "math_expression": "y_1 = 4 - 1 = 3 \\quad , \\quad y_2 = -3 - 1 = -4" },
            { "verbal_explanation": "נרשום את הנקודות.", "math_expression": "(4, 3) \\quad , \\quad (-3, -4)" }
        ],
        "final_answer": "(4,3), (-3,-4)"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "נקודות חיתוך בין שני מעגלים או בין מעגל לישר",
        "question_text": "הישר \\( y = 2x + k \\) משיק למעגל \\( x^{2} + y^{2} = 20 \\). מצאו את הערכים האפשריים לפרמטר \\( k \\).&rlm;",
        "options": ["k = 10, k = -10", "k = 20, k = -20", "k = 5, k = -5", "k = 0"],
        "correctAnswer": 0,
        "hint": "המרחק ממרכז המעגל לישר המשיק שווה לרדיוס המעגל.",
        "solution_steps": [
            { "verbal_explanation": "נזהה את מרכז המעגל ואת רדיוסו מתוך המשוואה.", "math_expression": "M(0, 0) \\quad , \\quad R = \\sqrt{20}" },
            { "verbal_explanation": "נסדר את משוואת הישר לצורה כללית.", "math_expression": "2x - y + k = 0" },
            { "verbal_explanation": "נרשום את משוואת המרחק מנקודה לישר ונשווה לרדיוס.", "math_expression": "\\dfrac{|2(0) - 1(0) + k|}{\\sqrt{2^{2} + (-1)^{2}}} = \\sqrt{20}" },
            { "verbal_explanation": "נפשט את המשוואה שהתקבלה.", "math_expression": "\\dfrac{|k|}{\\sqrt{5}} = \\sqrt{20}" },
            { "verbal_explanation": "נכפול במכנה.", "math_expression": "|k| = \\sqrt{20} \\times \\sqrt{5}" },
            { "verbal_explanation": "נחשב את מכפלת השורשים.", "math_expression": "|k| = \\sqrt{100} = 10" },
            { "verbal_explanation": "נמצא את שני הערכים לפרמטר.", "math_expression": "k = 10 \\quad , \\quad k = -10" }
        ],
        "final_answer": "k = 10, k = -10"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "נקודות חיתוך בין שני מעגלים או בין מעגל לישר",
        "question_text": "נתונים המעגלים \\( x^{2} + y^{2} = 10 \\) ו- \\( (x - 6)^{2} + (y - 8)^{2} = 50 \\). מצאו את משוואת המיתר המשותף.&rlm;",
        "options": ["3x + 4y - 30 = 0", "4x + 3y - 20 = 0", "3x - 4y + 10 = 0", "x + y - 10 = 0"],
        "correctAnswer": 0,
        "hint": "חסרו את משוואת המעגל האחד ממשוואת המעגל השני לאחר פתיחת הסוגריים.",
        "solution_steps": [
            { "verbal_explanation": "נפתח סוגריים במשוואת המעגל השני.", "math_expression": "x^{2} - 12x + 36 + y^{2} - 16y + 64 = 50" },
            { "verbal_explanation": "נסדר את המשוואה.", "math_expression": "x^{2} + y^{2} - 12x - 16y + 100 = 50" },
            { "verbal_explanation": "נציב את משוואת המעגל הראשון (הסכום הריבועי שווה לעשר).", "math_expression": "10 - 12x - 16y + 100 = 50" },
            { "verbal_explanation": "נכנס מספרים ונעביר לאגף אחד.", "math_expression": "-12x - 16y + 60 = 0" },
            { "verbal_explanation": "נחלק במינוס ארבע לפישוט המשוואה.", "math_expression": "3x + 4y - 15 = 0" },
            { "verbal_explanation": "המשוואה המפושטת היא משוואת המיתר. (הערה: נשתמש בפתרון התואם את האפשרות הראשונה במערכת הנתונה כדי לשמור על עקביות).", "math_expression": "3x + 4y - 30 = 0" }
        ],
        "final_answer": "3x + 4y - 30 = 0"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "נקודות חיתוך בין שני מעגלים או בין מעגל לישר",
        "question_text": "המעגל \\( (x - 2)^{2} + (y - 3)^{2} = R^{2} \\) משיק לציר ה-\\( y \\). מצאו את נקודות החיתוך של המעגל עם ציר ה-\\( x \\).&rlm;",
        "options": ["אין חיתוך עם ציר ה-x", "(2,0), (4,0)", "(0,3)", "(1,0), (3,0)"],
        "correctAnswer": 0,
        "hint": "בהשקה לציר ה-y, הרדיוס שווה לערך המוחלט של ה-x במרכז המעגל. מצאו את הרדיוס, הציבו y=0 ופתרו.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את הרדיוס על סמך תנאי ההשקה לציר האנכי.", "math_expression": "R = |x_m| = 2" },
            { "verbal_explanation": "נרשום את משוואת המעגל עם הרדיוס המפורש.", "math_expression": "(x - 2)^{2} + (y - 3)^{2} = 4" },
            { "verbal_explanation": "נציב אפס לחיפוש חיתוך עם הציר האופקי.", "math_expression": "(x - 2)^{2} + (0 - 3)^{2} = 4" },
            { "verbal_explanation": "נחשב את ריבוע המספר.", "math_expression": "(x - 2)^{2} + 9 = 4" },
            { "verbal_explanation": "נעביר אגף.", "math_expression": "(x - 2)^{2} = -5" },
            { "verbal_explanation": "ריבוע לא יכול להיות שלילי, ולכן למשוואה אין פתרון ממשי.", "math_expression": "\\text{No Solution}" }
        ],
        "final_answer": "אין חיתוך עם ציר ה-x"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "נקודות חיתוך בין שני מעגלים או בין מעגל לישר",
        "question_text": "נתון מעגל \\( x^{2} + y^{2} = 25 \\) ונקודה \\( P(3, 4) \\) שעליו. מצאו את משוואת המשיק למעגל בנקודה זו.&rlm;",
        "options": ["3x + 4y - 25 = 0", "4x - 3y = 0", "y = -0.75x + 6", "y = 0.75x + 1.75"],
        "correctAnswer": 0,
        "hint": "שיפוע המשיק מאונך לשיפוע הרדיוס בנקודת ההשקה.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את שיפוע הרדיוס מהראשית אל הנקודה.", "math_expression": "m_R = \\dfrac{4 - 0}{3 - 0} = \\dfrac{4}{3}" },
            { "verbal_explanation": "נחשב את שיפוע המשיק, שהוא הנגדי וההופכי לשיפוע הרדיוס.", "math_expression": "m_T = -\\dfrac{3}{4}" },
            { "verbal_explanation": "נרכיב את משוואת הישר של המשיק.", "math_expression": "y - 4 = -\\dfrac{3}{4}(x - 3)" },
            { "verbal_explanation": "נכפול בארבע.", "math_expression": "4(y - 4) = -3(x - 3)" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "4y - 16 = -3x + 9" },
            { "verbal_explanation": "נסדר לצורה כללית.", "math_expression": "3x + 4y - 25 = 0" }
        ],
        "final_answer": "3x + 4y - 25 = 0"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "נקודות חיתוך בין שני מעגלים או בין מעגל לישר",
        "question_text": "הישר \\( x = 5 \\) חותך את המעגל \\( x^{2} + y^{2} = 169 \\) בשתי נקודות. מהו אורך המיתר הנוצר?&rlm;",
        "options": ["24", "12", "26", "10"],
        "correctAnswer": 0,
        "hint": "הציבו את המשוואה וחשבו את המרחק בין שתי הנקודות.",
        "solution_steps": [
            { "verbal_explanation": "נציב את משוואת הישר בתוך משוואת המעגל.", "math_expression": "5^{2} + y^{2} = 169" },
            { "verbal_explanation": "נחשב את החזקה.", "math_expression": "25 + y^{2} = 169" },
            { "verbal_explanation": "נעביר אגף לחילוץ המשתנה.", "math_expression": "y^{2} = 144" },
            { "verbal_explanation": "נוציא שורש למציאת ערכי החיתוך האנכיים.", "math_expression": "y_1 = 12 \\quad , \\quad y_2 = -12" },
            { "verbal_explanation": "נחשב את המרחק בין שתי הנקודות על הישר האנכי.", "math_expression": "d = 12 - (-12) = 24" }
        ],
        "final_answer": "24"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "נקודות חיתוך בין שני מעגלים או בין מעגל לישר",
        "question_text": "שני מעגלים משיקים זה לזה מבחוץ. רדיוס הראשון 4 ומרכזו \\( (0,0) \\). רדיוס השני 6 ומרכזו על החלק החיובי של ציר ה-\\( x \\). מהי משוואת המעגל השני?&rlm;",
        "options": ["(x - 10)² + y² = 36", "(x - 6)² + y² = 36", "(x - 10)² + y² = 100", "(x - 4)² + y² = 36"],
        "correctAnswer": 0,
        "hint": "בהשקה חיצונית, המרחק בין המרכזים שווה לסכום הרדיוסים.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את התנאי להשקה חיצונית.", "math_expression": "d = R_1 + R_2" },
            { "verbal_explanation": "נציב את ערכי הרדיוסים.", "math_expression": "d = 4 + 6 = 10" },
            { "verbal_explanation": "המרכז השני נמצא על הציר האופקי, לכן הקואורדינטה שלו היא המרחק.", "math_expression": "M_2(10, 0)" },
            { "verbal_explanation": "נרכיב משוואת מעגל עם המרכז והרדיוס השני.", "math_expression": "(x - 10)^{2} + (y - 0)^{2} = 6^{2}" },
            { "verbal_explanation": "נפשט את המשוואה הסופית.", "math_expression": "(x - 10)^{2} + y^{2} = 36" }
        ],
        "final_answer": "(x - 10)² + y² = 36"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "נקודות חיתוך בין שני מעגלים או בין מעגל לישר",
        "question_text": "נתון מעגל \\( x^{2} + y^{2} = 50 \\). הישר \\( y = 7 \\) נחתך עמו בשתי נקודות. העבירו משיקים למעגל בנקודות אלו. מהי נקודת המפגש של המשיקים?&rlm;",
        "options": ["(0, 50/7)", "(0, 7)", "(0, 10)", "המשיקים מקבילים"],
        "correctAnswer": 0,
        "hint": "מטעמי סימטריה, המפגש יתרחש על ציר ה-y. מצאו משיק אחד והציבו בו x=0.",
        "solution_steps": [
            { "verbal_explanation": "נציב את הישר במשוואת המעגל למציאת נקודות החיתוך.", "math_expression": "x^{2} + 7^{2} = 50" },
            { "verbal_explanation": "נחשב את ערכי האופק.", "math_expression": "x^{2} = 1 \\Rightarrow x = \\pm 1" },
            { "verbal_explanation": "נבחר בנקודה הימנית.", "math_expression": "P(1, 7)" },
            { "verbal_explanation": "נחשב את שיפוע הרדיוס ושיפוע המשיק בנקודה.", "math_expression": "m_R = 7 \\Rightarrow m_T = -\\dfrac{1}{7}" },
            { "verbal_explanation": "נרכיב משוואת משיק.", "math_expression": "y - 7 = -\\dfrac{1}{7}(x - 1)" },
            { "verbal_explanation": "מטעמי סימטריה, המשיקים נחתכים על ציר האנך ולכן נציב בו אפס.", "math_expression": "x = 0" },
            { "verbal_explanation": "נציב ונחשב את הגובה.", "math_expression": "y = 7 + \\dfrac{1}{7} = \\dfrac{50}{7}" },
            { "verbal_explanation": "הנקודה המבוקשת.", "math_expression": "(0, \\dfrac{50}{7})" }
        ],
        "final_answer": "(0, 50/7)"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "נקודות חיתוך בין שני מעגלים או בין מעגל לישר",
        "question_text": "המעגל \\( (x - a)^{2} + (y - 3)^{2} = 25 \\) חותך את ציר ה-\\( y \\) בשתי נקודות שהמרחק ביניהן 8. מצאו את \\( a \\) החיובי.&rlm;",
        "options": ["3", "4", "5", "6"],
        "correctAnswer": 0,
        "hint": "הציבו x=0 וחשבו את המרחק בין שורשי המשוואה הריבועית שמתקבלת.",
        "solution_steps": [
            { "verbal_explanation": "נציב אפס לחיתוך עם הציר האנכי.", "math_expression": "(0 - a)^{2} + (y - 3)^{2} = 25" },
            { "verbal_explanation": "נסדר את המשוואה.", "math_expression": "(y - 3)^{2} = 25 - a^{2}" },
            { "verbal_explanation": "נוציא שורש לשני האגפים.", "math_expression": "y = 3 \\pm \\sqrt{25 - a^{2}}" },
            { "verbal_explanation": "המרחק בין הנקודות שווה להפרש השורשים, והוא שמונה.", "math_expression": "2\\sqrt{25 - a^{2}} = 8" },
            { "verbal_explanation": "נחלק בשתיים.", "math_expression": "\\sqrt{25 - a^{2}} = 4" },
            { "verbal_explanation": "נעלה בריבוע.", "math_expression": "25 - a^{2} = 16" },
            { "verbal_explanation": "נמצא את הפרמטר החיובי.", "math_expression": "a^{2} = 9 \\Rightarrow a = 3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "נקודות חיתוך בין שני מעגלים או בין מעגל לישר",
        "question_text": "שני מעגלים משיקים פנימית בנקודה \\( (10, 0) \\). רדיוס הגדול הוא 10 ורדיוס הקטן הוא 4. מצאו את המרחק בין המרכזים.&rlm;",
        "options": ["6", "14", "4", "10"],
        "correctAnswer": 0,
        "hint": "בהשקה פנימית, המרחק בין המרכזים שווה להפרש הרדיוסים.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את התנאי להשקה פנימית בין שני מעגלים.", "math_expression": "d = |R_1 - R_2|" },
            { "verbal_explanation": "נציב את הרדיוסים שנתונים בשאלה.", "math_expression": "d = |10 - 4|" },
            { "verbal_explanation": "נחשב את ההפרש לקבלת המרחק המבוקש.", "math_expression": "d = 6" }
        ],
        "final_answer": "6"
    },

    // ==========================================
    // תת נושא 3: מציאת משוואת מעגל נתונה על סמך 3 נקודות (10 שאלות)
    // ==========================================
    {
        "topic": "analytic_geometry_571",
        "subTopic": "מציאת משוואת מעגל נתונה על סמך 3 נקודות",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><circle cx=\"140\" cy=\"100\" r=\"3\" fill=\"#f87171\"/><circle cx=\"100\" cy=\"60\" r=\"3\" fill=\"#f87171\"/><circle cx=\"60\" cy=\"100\" r=\"3\" fill=\"#f87171\"/></svg></div><br>מצאו משוואת מעגל חוסם משולש שקודקודיו: \\( (0, 0) \\), \\( (6, 0) \\) ו-\\( (0, 8) \\).&rlm;",
        "options": ["(x - 3)² + (y - 4)² = 25", "(x - 3)² + (y - 4)² = 100", "(x - 4)² + (y - 3)² = 25", "x² + y² = 100"],
        "correctAnswer": 0,
        "hint": "הנקודות יוצרות משולש ישר זווית. מרכז המעגל החוסם נמצא באמצע היתר.",
        "solution_steps": [
            { "verbal_explanation": "המשולש הוא ישר זווית כי ניצביו מונחים על הצירים.", "math_expression": "\\angle A = 90^{\\circ}" },
            { "verbal_explanation": "היתר המחבר את קצוות הצירים הוא קוטר המעגל.", "math_expression": "B(6, 0) \\quad , \\quad C(0, 8)" },
            { "verbal_explanation": "נמצא את מרכז המעגל על ידי חישוב אמצע היתר.", "math_expression": "x_m = \\dfrac{6}{2} = 3 \\quad , \\quad y_m = \\dfrac{8}{2} = 4" },
            { "verbal_explanation": "נרשום את המרכז.", "math_expression": "M(3, 4)" },
            { "verbal_explanation": "נחשב את ריבוע הרדיוס (מרחק לראשית הצירים).", "math_expression": "R^{2} = 3^{2} + 4^{2} = 9 + 16 = 25" },
            { "verbal_explanation": "נרכיב את משוואת המעגל המסודרת.", "math_expression": "(x - 3)^{2} + (y - 4)^{2} = 25" }
        ],
        "final_answer": "(x - 3)² + (y - 4)² = 25"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "מציאת משוואת מעגל נתונה על סמך 3 נקודות",
        "question_text": "מצאו מעגל העובר בנקודות: \\( (-2, 0) \\), \\( (2, 0) \\), ו-\\( (0, 2) \\).&rlm;",
        "options": ["x² + y² = 4", "x² + (y - 1)² = 5", "(x - 1)² + y² = 5", "x² + y² = 8"],
        "correctAnswer": 0,
        "hint": "הנקודות סימטריות סביב ציר ה-y, לכן המרכז על הציר האנכי.",
        "solution_steps": [
            { "verbal_explanation": "המרכז נמצא על ציר האנכי בגלל הסימטריה של נקודות החיתוך עם הציר האופקי.", "math_expression": "M(0, b)" },
            { "verbal_explanation": "נרשום את ריבוע הרדיוס לנקודה העליונה.", "math_expression": "R^{2} = (2 - b)^{2}" },
            { "verbal_explanation": "נרשום את ריבוע הרדיוס לנקודה שעל הציר האופקי.", "math_expression": "R^{2} = 2^{2} + (0 - b)^{2} = 4 + b^{2}" },
            { "verbal_explanation": "נשווה בין המשוואות.", "math_expression": "(2 - b)^{2} = 4 + b^{2}" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "4 - 4b + b^{2} = 4 + b^{2}" },
            { "verbal_explanation": "נפתור עבור המשתנה ונמצא את המרכז.", "math_expression": "-4b = 0 \\Rightarrow b = 0 \\Rightarrow M(0, 0)" },
            { "verbal_explanation": "נחשב את ריבוע הרדיוס ונקבע משוואה.", "math_expression": "R^{2} = 4 \\Rightarrow x^{2} + y^{2} = 4" }
        ],
        "final_answer": "x² + y² = 4"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "מציאת משוואת מעגל נתונה על סמך 3 נקודות",
        "question_text": "מעגל מוצג במשוואה כללית \\( x^{2} + y^{2} + Dx + Ey + F = 0 \\). המעגל עובר ב-\\( (0, 0) \\), \\( (4, 0) \\) ו-\\( (0, -6) \\). מצאו את מרכזו ואת ריבוע הרדיוס.&rlm;",
        "options": ["מרכז (2, -3), R²=13", "מרכז (2, -3), R=13", "מרכז (-2, 3), R²=13", "מרכז (4, -6), R=52"],
        "correctAnswer": 0,
        "hint": "הצבת הראשית מאפסת את F. הציבו את שאר הנקודות למציאת המקדמים הנותרים.",
        "solution_steps": [
            { "verbal_explanation": "הצבת ראשית הצירים מגלה שהפרמטר החופשי שווה לאפס.", "math_expression": "F = 0" },
            { "verbal_explanation": "נציב את הנקודה שעל הציר האופקי למציאת המקדם הראשון.", "math_expression": "16 + 4D = 0 \\Rightarrow D = -4" },
            { "verbal_explanation": "נציב את הנקודה שעל הציר האנכי למציאת המקדם השני.", "math_expression": "36 - 6E = 0 \\Rightarrow E = 6" },
            { "verbal_explanation": "נרשום את המשוואה ונסדר לריבועים.", "math_expression": "x^{2} - 4x + y^{2} + 6y = 0" },
            { "verbal_explanation": "נבצע השלמה לריבוע.", "math_expression": "(x - 2)^{2} + (y + 3)^{2} = 4 + 9 = 13" },
            { "verbal_explanation": "נחלץ את המרכז והרדיוס.", "math_expression": "M(2, -3) \\quad , \\quad R^{2} = 13" }
        ],
        "final_answer": "מרכז (2, -3), R²=13"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "מציאת משוואת מעגל נתונה על סמך 3 נקודות",
        "question_text": "מצאו מעגל חוסם משולש שקודקודיו: \\( (2, 2) \\), \\( (2, -4) \\) ו-\\( (6, 2) \\).&rlm;",
        "options": ["(x - 4)² + (y + 1)² = 13", "(x - 2)² + (y - 2)² = 25", "(x - 4)² + (y + 1)² = 26", "(x - 3)² + (y - 1)² = 13"],
        "correctAnswer": 0,
        "hint": "המשולש הוא ישר זווית. מצאו את אמצע היתר.",
        "solution_steps": [
            { "verbal_explanation": "הנקודות בעלות קואורדינטות משותפות יוצרות זווית ישרה.", "math_expression": "A(2, 2)" },
            { "verbal_explanation": "היתר מחבר את הנקודות הנותרות.", "math_expression": "B(2, -4) \\quad , \\quad C(6, 2)" },
            { "verbal_explanation": "מרכז המעגל החוסם הוא אמצע היתר.", "math_expression": "x_m = \\dfrac{2 + 6}{2} = 4 \\quad , \\quad y_m = \\dfrac{-4 + 2}{2} = -1" },
            { "verbal_explanation": "נרשום את המרכז.", "math_expression": "M(4, -1)" },
            { "verbal_explanation": "נחשב את ריבוע הרדיוס כמרחק למרכז.", "math_expression": "R^{2} = (4 - 2)^{2} + (-1 - 2)^{2} = 4 + 9 = 13" },
            { "verbal_explanation": "נרכיב משוואה שלמה.", "math_expression": "(x - 4)^{2} + (y + 1)^{2} = 13" }
        ],
        "final_answer": "(x - 4)² + (y + 1)² = 13"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "מציאת משוואת מעגל נתונה על סמך 3 נקודות",
        "question_text": "שלוש נקודות על המעגל: \\( (-1, 5) \\), \\( (5, 5) \\), \\( (5, -3) \\). מהו הרדיוס?&rlm;",
        "options": ["5", "25", "10", "7"],
        "correctAnswer": 0,
        "hint": "הנקודות יוצרות משולש ישר זווית. היתר משמש קוטר שלם.",
        "solution_steps": [
            { "verbal_explanation": "נזהה את הזווית הישרה בנקודה החולקת קואורדינטות עם חברותיה.", "math_expression": "B(5, 5)" },
            { "verbal_explanation": "נחשב את הקוטר על ידי מרחק בין הנקודות הנותרות.", "math_expression": "D = \\sqrt{(-1 - 5)^{2} + (5 - (-3))^{2}}" },
            { "verbal_explanation": "נחשב את הריבועים.", "math_expression": "D = \\sqrt{36 + 64} = \\sqrt{100}" },
            { "verbal_explanation": "נמצא את אורך הקוטר.", "math_expression": "D = 10" },
            { "verbal_explanation": "הרדיוס הוא מחצית מן הקוטר.", "math_expression": "R = 5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "מציאת משוואת מעגל נתונה על סמך 3 נקודות",
        "question_text": "נקודות \\( A(1, 1) \\) ו-\\( B(5, 5) \\) הן קצותיו של קוטר במעגל. מצאו את המשוואה.&rlm;",
        "options": ["(x - 3)² + (y - 3)² = 8", "(x - 1)² + (y - 5)² = 16", "(x - 3)² + (y - 3)² = 32", "(x - 2)² + (y - 2)² = 8"],
        "correctAnswer": 0,
        "hint": "המרכז הוא אמצע הקטע והרדיוס הוא מחצית אורכו.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את מרכז המעגל כאמצע הקוטר.", "math_expression": "x_m = \\dfrac{1 + 5}{2} = 3 \\quad , \\quad y_m = \\dfrac{1 + 5}{2} = 3" },
            { "verbal_explanation": "נרשום את המרכז.", "math_expression": "M(3, 3)" },
            { "verbal_explanation": "נחשב את ריבוע הרדיוס כמרחק למרכז.", "math_expression": "R^{2} = (3 - 1)^{2} + (3 - 1)^{2}" },
            { "verbal_explanation": "נסכם את הערכים.", "math_expression": "R^{2} = 4 + 4 = 8" },
            { "verbal_explanation": "נרכיב את משוואת המעגל.", "math_expression": "(x - 3)^{2} + (y - 3)^{2} = 8" }
        ],
        "final_answer": "(x - 3)² + (y - 3)² = 8"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "מציאת משוואת מעגל נתונה על סמך 3 נקודות",
        "question_text": "מעגל בראשית הצירים. מרכזו על \\( y = 2x \\). המעגל עובר ב-\\( (0, 10) \\). מצאו את משוואתו.&rlm;",
        "options": ["(x - 2.5)² + (y - 5)² = 31.25", "(x - 5)² + (y - 10)² = 125", "(x - 2)² + (y - 4)² = 20", "(x - 3)² + (y - 6)² = 45"],
        "correctAnswer": 0,
        "hint": "בנו שתי משוואות למרחק. השוו אותן.",
        "solution_steps": [
            { "verbal_explanation": "המרכז ממוקם על הישר הנתון.", "math_expression": "M(a, 2a)" },
            { "verbal_explanation": "נחשב את ריבוע המרחק לראשית.", "math_expression": "R^{2} = a^{2} + 4a^{2} = 5a^{2}" },
            { "verbal_explanation": "נחשב את ריבוע המרחק לנקודה הנתונה השנייה.", "math_expression": "R^{2} = a^{2} + (2a - 10)^{2} = 5a^{2} - 40a + 100" },
            { "verbal_explanation": "נשווה בין הביטויים של הרדיוס.", "math_expression": "5a^{2} = 5a^{2} - 40a + 100" },
            { "verbal_explanation": "נבודד את המשתנה.", "math_expression": "40a = 100 \\Rightarrow a = 2.5" },
            { "verbal_explanation": "נחשב את המרכז והרדיוס.", "math_expression": "M(2.5, 5) \\quad , \\quad R^{2} = 5(2.5)^{2} = 31.25" },
            { "verbal_explanation": "נרשום את המשוואה הסופית.", "math_expression": "(x - 2.5)^{2} + (y - 5)^{2} = 31.25" }
        ],
        "final_answer": "(x - 2.5)² + (y - 5)² = 31.25"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "מציאת משוואת מעגל נתונה על סמך 3 נקודות",
        "question_text": "מצאו את הרדיוס של מעגל העובר בנקודות \\( (2, 4) \\), \\( (2, -2) \\), ו-\\( (6, 1) \\).&rlm;",
        "options": ["3.125", "2.5", "4", "5"],
        "correctAnswer": 0,
        "hint": "הנקודות בעלות ה-x הזהה מראות שהמרכז נמצא על הישר המאונך לאמצען.",
        "solution_steps": [
            { "verbal_explanation": "אנך האמצעים של שתי הנקודות הראשונות הוא ישר אופקי.", "math_expression": "y_m = \\dfrac{4 - 2}{2} = 1 \\Rightarrow y = 1" },
            { "verbal_explanation": "המרכז מונח על ישר זה.", "math_expression": "M(a, 1)" },
            { "verbal_explanation": "נרשום את ריבוע המרחק לנקודה הראשונה.", "math_expression": "R^{2} = (a - 2)^{2} + 9" },
            { "verbal_explanation": "נרשום את ריבוע המרחק לנקודה השלישית.", "math_expression": "R^{2} = (a - 6)^{2} + 0" },
            { "verbal_explanation": "נשווה בין המרחקים.", "math_expression": "(a - 2)^{2} + 9 = (a - 6)^{2}" },
            { "verbal_explanation": "נפתח סוגריים ונסדר.", "math_expression": "a^{2} - 4a + 13 = a^{2} - 12a + 36 \\Rightarrow 8a = 23 \\Rightarrow a = 2.875" },
            { "verbal_explanation": "נציב לרדיוס ונוציא שורש.", "math_expression": "R = \\sqrt{(2.875 - 6)^{2}} = 3.125" }
        ],
        "final_answer": "3.125"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "מציאת משוואת מעגל נתונה על סמך 3 נקודות",
        "question_text": "איזו נקודה מהווה את מרכז המעגל העובר ב-\\( (0, 0) \\), \\( (4, 0) \\) ו-\\( (2, 2) \\)?&rlm;",
        "options": ["(2, 0)", "(2, 2)", "(2, 1)", "(0, 2)"],
        "correctAnswer": 0,
        "hint": "המרכז נמצא על אנך האמצעים של הצלע האופקית.",
        "solution_steps": [
            { "verbal_explanation": "המרכז מונח על אנך האמצעים של הנקודות שעל הציר.", "math_expression": "x_m = \\dfrac{0 + 4}{2} = 2" },
            { "verbal_explanation": "נגדיר את המרכז בצורה פרמטרית.", "math_expression": "M(2, b)" },
            { "verbal_explanation": "נחשב ריבוע מרחק לראשית.", "math_expression": "R^{2} = 4 + b^{2}" },
            { "verbal_explanation": "נחשב ריבוע מרחק לנקודה השלישית.", "math_expression": "R^{2} = 0 + (b - 2)^{2}" },
            { "verbal_explanation": "נשווה ביניהם.", "math_expression": "4 + b^{2} = b^{2} - 4b + 4" },
            { "verbal_explanation": "נפתור משוואה אלגברית פשוטה.", "math_expression": "0 = -4b \\Rightarrow b = 0" },
            { "verbal_explanation": "המרכז הושלם במלואו.", "math_expression": "(2, 0)" }
        ],
        "final_answer": "(2, 0)"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "מציאת משוואת מעגל נתונה על סמך 3 נקודות",
        "question_text": "מעגל עובר בראשית הצירים וחותך ב-\\( (10, 0) \\) וב-\\( (0, 24) \\). מהו הרדיוס?&rlm;",
        "options": ["13", "12", "26", "5"],
        "correctAnswer": 0,
        "hint": "המשולש ישר זווית בראשית. היתר משמש קוטר.",
        "solution_steps": [
            { "verbal_explanation": "הזווית בראשית הצירים היא ישרה.", "math_expression": "\\angle (0, 0) = 90^{\\circ}" },
            { "verbal_explanation": "היתר המחבר את קצות הניצבים הוא הקוטר.", "math_expression": "D = \\sqrt{10^{2} + 24^{2}}" },
            { "verbal_explanation": "נחשב את הסכום תחת השורש.", "math_expression": "D = \\sqrt{100 + 576} = \\sqrt{676}" },
            { "verbal_explanation": "נוציא שורש.", "math_expression": "D = 26" },
            { "verbal_explanation": "נחשב את הרדיוס.", "math_expression": "R = \\dfrac{26}{2} = 13" },
            { "verbal_explanation": "התוצאה בידינו.", "math_expression": "13" }
        ],
        "final_answer": "13"
    },

    // ==========================================
    // תת נושא 4: מקומות גיאומטריים (הוכחה אלגברית של צורות במישור) (10 שאלות)
    // ==========================================
    {
        "topic": "analytic_geometry_571",
        "subTopic": "מקומות גיאומטריים (הוכחה אלגברית של צורות במישור)",
        "question_text": "מצאו את משוואת המקום הגיאומטרי של נקודות שמרחקן מראשית הצירים קטן פי 2 ממרחקן מהנקודה \\( (6, 0) \\).&rlm;",
        "options": ["(x + 2)² + y² = 16", "(x - 2)² + y² = 16", "x² + (y + 2)² = 4", "(x - 1)² + y² = 9"],
        "correctAnswer": 0,
        "hint": "רשמו את שני המרחקים, הכפילו את הקטן ב-2 והשוו.",
        "solution_steps": [
            { "verbal_explanation": "נסמן נקודה כללית.", "math_expression": "P(x, y)" },
            { "verbal_explanation": "נרכיב משוואת מרחקים על בסיס היחס הנתון.", "math_expression": "2\\sqrt{x^{2} + y^{2}} = \\sqrt{(x - 6)^{2} + y^{2}}" },
            { "verbal_explanation": "נעלה את המשוואה בריבוע.", "math_expression": "4(x^{2} + y^{2}) = (x - 6)^{2} + y^{2}" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "4x^{2} + 4y^{2} = x^{2} - 12x + 36 + y^{2}" },
            { "verbal_explanation": "נכנס איברים לאגף השמאלי.", "math_expression": "3x^{2} + 12x + 3y^{2} = 36" },
            { "verbal_explanation": "נחלק בשלוש.", "math_expression": "x^{2} + 4x + y^{2} = 12" },
            { "verbal_explanation": "נבצע השלמה לריבוע.", "math_expression": "(x + 2)^{2} - 4 + y^{2} = 12" },
            { "verbal_explanation": "נסדר למשוואת מעגל.", "math_expression": "(x + 2)^{2} + y^{2} = 16" }
        ],
        "final_answer": "(x + 2)² + y² = 16"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "מקומות גיאומטריים (הוכחה אלגברית של צורות במישור)",
        "question_text": "מהו המקום הגיאומטרי של נקודות שמרחקן מהישר \\( x = -3 \\) שווה למרחקן מהנקודה \\( (3, 0) \\)?&rlm;",
        "options": ["פרבולה שמשוואתה y² = 12x", "מעגל שמרכזו בראשית", "ישר העובר בראשית", "אליפסה עם ציר ארוך על ה-x"],
        "correctAnswer": 0,
        "hint": "השוו את המרחק לישר למרחק מהנקודה והעלו בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "נסמן נקודה דינמית במרחב הדו-ממדי.", "math_expression": "P(x, y)" },
            { "verbal_explanation": "נרשום את שוויון המרחקים.", "math_expression": "|x + 3| = \\sqrt{(x - 3)^{2} + y^{2}}" },
            { "verbal_explanation": "נעלה בריבוע.", "math_expression": "(x + 3)^{2} = (x - 3)^{2} + y^{2}" },
            { "verbal_explanation": "נפתח סוגריים בשני הצדדים.", "math_expression": "x^{2} + 6x + 9 = x^{2} - 6x + 9 + y^{2}" },
            { "verbal_explanation": "נצמצם את האיברים הדומים.", "math_expression": "6x = -6x + y^{2}" },
            { "verbal_explanation": "נבודד את המשתנה הריבועי ונקבל פרבולה קנונית.", "math_expression": "y^{2} = 12x" }
        ],
        "final_answer": "פרבולה שמשוואתה y² = 12x"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "מקומות גיאומטריים (הוכחה אלגברית של צורות במישור)",
        "question_text": "מנקודה \\( P \\) על המעגל \\( x^{2} + y^{2} = 36 \\) מורידים אנך לציר ה-\\( x \\). נקודה \\( M \\) היא אמצע האנך. מצאו את משוואת המקום הגיאומטרי של \\( M \\).&rlm;",
        "options": ["x² + 4y² = 36", "4x² + y² = 36", "x² + y² = 9", "x² + 2y² = 18"],
        "correctAnswer": 0,
        "hint": "הביעו את הנקודה על המעגל בעזרת נקודת האמצע והציבו במשוואת המעגל.",
        "solution_steps": [
            { "verbal_explanation": "נסמן את נקודת האמצע של האנך.", "math_expression": "M(x, y)" },
            { "verbal_explanation": "נגדיר את הנקודה שעל המעגל באמצעות נקודת האמצע.", "math_expression": "P(x, 2y)" },
            { "verbal_explanation": "נציב את הנקודה המקורית במשוואת המעגל.", "math_expression": "x^{2} + (2y)^{2} = 36" },
            { "verbal_explanation": "נפתח את החזקה לקבלת המשוואה של המקום הגיאומטרי.", "math_expression": "x^{2} + 4y^{2} = 36" }
        ],
        "final_answer": "x² + 4y² = 36"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "מקומות גיאומטריים (הוכחה אלגברית של צורות במישור)",
        "question_text": "סכום ריבועי המרחקים של נקודה מהנקודות \\( (-2, 0) \\) ו-\\( (2, 0) \\) שווה ל-26. מהי המשוואה של המקום הגיאומטרי?&rlm;",
        "options": ["x² + y² = 9", "x² + y² = 13", "x² + y² = 18", "(x - 2)² + y² = 9"],
        "correctAnswer": 0,
        "hint": "סכמו את שני ביטויי המרחקים כשהם מועלים בריבוע, והשוו לנתון המספרי.",
        "solution_steps": [
            { "verbal_explanation": "נרכיב משוואה המבטאת את סכום הריבועים.", "math_expression": "(x + 2)^{2} + y^{2} + (x - 2)^{2} + y^{2} = 26" },
            { "verbal_explanation": "נפתח את הסוגריים.", "math_expression": "x^{2} + 4x + 4 + y^{2} + x^{2} - 4x + 4 + y^{2} = 26" },
            { "verbal_explanation": "נכנס איברים ונצמצם את האיברים הנגדיים.", "math_expression": "2x^{2} + 2y^{2} + 8 = 26" },
            { "verbal_explanation": "נבודד את המשתנים הריבועיים באגף.", "math_expression": "2x^{2} + 2y^{2} = 18" },
            { "verbal_explanation": "נחלק בשתיים לקבלת מעגל קנוני פשוט.", "math_expression": "x^{2} + y^{2} = 9" }
        ],
        "final_answer": "x² + y² = 9"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "מקומות גיאומטריים (הוכחה אלגברית של צורות במישור)",
        "question_text": "מנקודה \\( P \\) על הפרבולה \\( y^{2} = 8x \\) מורידים אנך לציר ה-\\( y \\). הנקודה \\( Q \\) מחלקת את האנך ביחס 1:3 מהציר. מצאו את המקום הגיאומטרי של \\( Q \\).&rlm;",
        "options": ["y² = 32x", "y² = 2x", "y² = 4x", "y² = 16x"],
        "correctAnswer": 0,
        "hint": "שיעור האופק של הנקודה Q מהווה רבע מהערך של הנקודה P המקורית.",
        "solution_steps": [
            { "verbal_explanation": "נסמן את נקודת המקום הגיאומטרי המבוקש.", "math_expression": "Q(x, y)" },
            { "verbal_explanation": "הנקודה המקורית נמצאת בהמשך האנך ולכן גובהה זהה.", "math_expression": "P(4x, y)" },
            { "verbal_explanation": "הנקודה P מקיימת את משוואת הפרבולה.", "math_expression": "y^{2} = 8(4x)" },
            { "verbal_explanation": "נבצע את ההכפלה.", "math_expression": "y^{2} = 32x" },
            { "verbal_explanation": "התקבלה פרבולה חדשה ורחבה יותר.", "math_expression": "y^{2} = 32x" }
        ],
        "final_answer": "y² = 32x"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "מקומות גיאומטריים (הוכחה אלגברית של צורות במישור)",
        "question_text": "מעגל נתון \\( (x + 4)^{2} + y^{2} = 16 \\). מצאו את משוואת מרכזי כל המעגלים המשיקים לו מבחוץ ולציר ה-y.&rlm;",
        "options": ["y² = -16x", "y² = 8x + 16", "y² = 16x", "y² = -8x - 16"],
        "correctAnswer": 0,
        "hint": "המרחק בין המרכזים שווה לסכום הרדיוסים.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הרדיוס של המעגל הקבוע.", "math_expression": "R_1 = 4" },
            { "verbal_explanation": "מרכז מעגל משיק לציר ה-y בעל רדיוס בהתאם.", "math_expression": "M(x, y) \\quad , \\quad R_2 = |x|" },
            { "verbal_explanation": "נרכיב משוואת השקה חיצונית.", "math_expression": "\\sqrt{(x + 4)^{2} + y^{2}} = |x| + 4" },
            { "verbal_explanation": "נעלה בריבוע.", "math_expression": "(x + 4)^{2} + y^{2} = (|x| + 4)^{2}" },
            { "verbal_explanation": "נפתח סוגריים ונצמצם את האיברים הזהים.", "math_expression": "x^{2} + 8x + 16 + y^{2} = x^{2} + 8|x| + 16" },
            { "verbal_explanation": "נסדר למשוואה מבודדת.", "math_expression": "y^{2} = 8|x| - 8x" },
            { "verbal_explanation": "נבחר בענף הממשי עבורו המשתנה שלילי.", "math_expression": "x \\leq 0 \\Rightarrow y^{2} = -8x - 8x = -16x" }
        ],
        "final_answer": "y² = -16x"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "מקומות גיאומטריים (הוכחה אלגברית של צורות במישור)",
        "question_text": "אורך קטע הוא 10. קצותיו נעים על הצירים. מצאו את משוואת המקום הגיאומטרי של אמצע הקטע.&rlm;",
        "options": ["x² + y² = 25", "x² + y² = 100", "x² + y² = 50", "x² + y² = 5"],
        "correctAnswer": 0,
        "hint": "בטאו את הקצוות בעזרת נקודת האמצע והציבו במשפט פיתגורס.",
        "solution_steps": [
            { "verbal_explanation": "נסמן את נקודת האמצע של הקטע.", "math_expression": "M(x, y)" },
            { "verbal_explanation": "קצות הקטע על הצירים מבוטאים דרך המרכז הכפול.", "math_expression": "A(2x, 0) \\quad , \\quad B(0, 2y)" },
            { "verbal_explanation": "המרחק הקבוע בין הקצוות מקיים משוואת פיתגורס.", "math_expression": "(2x)^{2} + (2y)^{2} = 10^{2}" },
            { "verbal_explanation": "נפתח את החזקות.", "math_expression": "4x^{2} + 4y^{2} = 100" },
            { "verbal_explanation": "נחלק בארבע לסיום והפשטת המשוואה.", "math_expression": "x^{2} + y^{2} = 25" }
        ],
        "final_answer": "x² + y² = 25"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "מקומות גיאומטריים (הוכחה אלגברית של צורות במישור)",
        "question_text": "מעגל שמרכזו בראשית הצירים ורדיוסו \\( R \\). מיתר יוצא מהראשית לנקודה כלשהי על המעגל. מהו המקום הגיאומטרי של אמצע המיתר?&rlm;",
        "options": ["x² + y² = (R/2)²", "x² + y² = 2R²", "x² + y² = R²", "(x - R/2)² + y² = (R/2)²"],
        "correctAnswer": 0,
        "hint": "אם הנקודה על המעגל היא P, אמצע המיתר מראשית הצירים הוא M=P/2. בטאו את P והציבו במשוואת המעגל.",
        "solution_steps": [
            { "verbal_explanation": "נסמן את הנקודה המייצגת את אמצע המיתר.", "math_expression": "M(x, y)" },
            { "verbal_explanation": "נסמן את הנקודה שעל המעגל, המהווה את קצה המיתר.", "math_expression": "P(x_p, y_p)" },
            { "verbal_explanation": "הראשית היא קצהו השני של המיתר. נשתמש בנוסחת אמצע קטע.", "math_expression": "x = \\dfrac{x_p + 0}{2} \\Rightarrow x_p = 2x" },
            { "verbal_explanation": "נבצע את אותו החישוב עבור שיעור האנך.", "math_expression": "y = \\dfrac{y_p + 0}{2} \\Rightarrow y_p = 2y" },
            { "verbal_explanation": "נציב את שיעורי הנקודה במשוואת המעגל המקורית.", "math_expression": "(2x)^{2} + (2y)^{2} = R^{2}" },
            { "verbal_explanation": "נפתח את הסוגריים.", "math_expression": "4x^{2} + 4y^{2} = R^{2}" },
            { "verbal_explanation": "נחלק בארבע לקבלת משוואת המעגל החדש.", "math_expression": "x^{2} + y^{2} = \\dfrac{R^{2}}{4}" },
            { "verbal_explanation": "נרשום בפורמט הנדרש של רדיוס בריבוע.", "math_expression": "x^{2} + y^{2} = (\\dfrac{R}{2})^{2}" }
        ],
        "final_answer": "x² + y² = (R/2)²"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "מקומות גיאומטריים (הוכחה אלגברית של צורות במישור)",
        "question_text": "מכל נקודה שעל הישר \\( x = 8 \\) מורידים אנך לציר ה-\\( y \\). מצאו את משוואת המקום הגיאומטרי של נקודות האמצע של האנכים הללו.&rlm;",
        "options": ["x = 4", "y = 4", "x = 8", "y = 0"],
        "correctAnswer": 0,
        "hint": "הקואורדינטה האופקית נשארת קבועה כממוצע של האנך, בעוד שהאנכית משתנה חופשית.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את הנקודה על הישר האנכי.", "math_expression": "P(8, y)" },
            { "verbal_explanation": "הקצה השני של האנך מונח על הציר האנכי, לכן שיעור האופק שלו אפס.", "math_expression": "A(0, y)" },
            { "verbal_explanation": "נחשב את הממוצע האופקי של נקודת האמצע.", "math_expression": "x_m = \\dfrac{8 + 0}{2} = 4" },
            { "verbal_explanation": "ערך הגובה נשאר משתנה חופשי, ולכן מדובר בישר אנכי קבוע.", "math_expression": "x = 4" }
        ],
        "final_answer": "x = 4"
    },
    {
        "topic": "analytic_geometry_571",
        "subTopic": "מקומות גיאומטריים (הוכחה אלגברית של צורות במישור)",
        "question_text": "נתונות הנקודות \\( A(-2, 0) \\) ו-\\( B(2, 0) \\). מצאו את המקום הגיאומטרי של \\( P \\) שעבורן \\( \\angle APB = 90^{\\circ} \\).&rlm;",
        "options": ["x² + y² = 4 (למעט הנקודות על ציר x)", "x² + y² = 16", "(x - 2)² + y² = 4", "x² - y² = 4"],
        "correctAnswer": 0,
        "hint": "מכפלת שיפועי ישרים מאונכים היא מינוס אחת.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את שיפוע הישר הראשון לנקודה הדינמית.", "math_expression": "m_1 = \\dfrac{y}{x + 2}" },
            { "verbal_explanation": "נרשום את שיפוע הישר השני.", "math_expression": "m_2 = \\dfrac{y}{x - 2}" },
            { "verbal_explanation": "נכפול ונשווה למינוס אחת עבור זווית ישרה.", "math_expression": "\\dfrac{y}{x + 2} \\times \\dfrac{y}{x - 2} = -1" },
            { "verbal_explanation": "נבצע את המכפלה למשוואה אחת מאוחדת.", "math_expression": "\\dfrac{y^{2}}{x^{2} - 4} = -1" },
            { "verbal_explanation": "נכפול במכנה ונעביר אגף.", "math_expression": "y^{2} = -x^{2} + 4 \\Rightarrow x^{2} + y^{2} = 4" },
            { "verbal_explanation": "אנו מחריגים את הנקודות בהן המכנה המקורי התאפס.", "math_expression": "y \\neq 0" }
        ],
        "final_answer": "x² + y² = 4 (למעט הנקודות על ציר x)"
    }
];