const questionsDB = [
    // ==========================================
    // מאגר הכנה לבגרות (שאלון 35372) - 20 שאלות רב-שלביות
    // ==========================================

    // שאלה מספר 1: גיאומטריה אנליטית - מעגל
    {
        topic: "bagrut_prep_372",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "שאלון 35372, מועד קיץ 2023 א'&rlm;<br>מעגל שמרכזו בנקודה M(4, 5) עובר דרך הנקודה A(1, 1).&rlm;<br>א. מצאו את רדיוס המעגל.&rlm;<br>ב. כתבו את משוואת המעגל.&rlm;<br>ג. האם הנקודה B(4, 0) נמצאת על המעגל, בתוכו או מחוצה לו?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='180' x2='180' y2='180' stroke='#64748b' stroke-width='2'/><line x1='20' y1='20' x2='20' y2='180' stroke='#64748b' stroke-width='2'/><circle cx='100' cy='80' r='50' fill='none' stroke='#8b5cf6' stroke-width='2'/><line x1='100' y1='80' x2='60' y2='110' stroke='#f59e0b' stroke-dasharray='4,4' stroke-width='2'/><circle cx='100' cy='80' r='4' fill='#ef4444'/><circle cx='60' cy='110' r='4' fill='#ef4444'/><text x='110' y='75' font-size='12'>M</text><text x='45' y='125' font-size='12'>A</text></svg></div>",
        options: ["א. 5 | ב. (x-4)²+(y-5)²=25 | ג. על המעגל", "א. 25 | ב. (x-4)²+(y-5)²=25 | ג. בתוכו", "א. 5 | ב. (x+4)²+(y+5)²=25 | ג. מחוצה לו", "א. 5 | ב. (x-4)²+(y-5)²=5 | ג. על המעגל"],
        correctAnswer: 0,
        hint: "רדיוס הוא המרחק מ-M ל-A. כדי לבדוק מיקום נקודה ביחס למעגל, הציבו אותה במשוואת המעגל והשוו לרדיוס בריבוע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הרדיוס כמרחק בין הנקודות.", math_expression: "R = \\sqrt{(4 - 1)^{2} + (5 - 1)^{2}}" },
            { verbal_explanation: "שלב 2: סיום חישוב הרדיוס (תשובה לא').", math_expression: "R = \\sqrt{9 + 16} = 5" },
            { verbal_explanation: "שלב 3: כתיבת משוואת המעגל עם הרדיוס והמרכז (תשובה לב').", math_expression: "(x - 4)^{2} + (y - 5)^{2} = 25" },
            { verbal_explanation: "שלב 4: הצבת הנקודה הנוספת (4,0) במשוואה לבדיקת מיקומה.", math_expression: "(4 - 4)^{2} + (0 - 5)^{2} = 0 + 25 = 25" },
            { verbal_explanation: "שלב 5: התקבל שוויון מדויק, ולכן הנקודה מונחת בדיוק על היקף המעגל (תשובה לג').", math_expression: "25 = 25" }
        ],
        final_answer: "א. 5 | ב. (x-4)²+(y-5)²=25 | ג. על המעגל"
    },

    // שאלה מספר 2: הנדסת המרחב - פירמידה
    {
        topic: "bagrut_prep_372",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "שאלון 35372, מועד חורף 2022&rlm;<br>נתונה פירמידה ישרה שבסיסה ריבוע. אורך צלע הבסיס 6 ס''מ. גובה הפירמידה 4 ס''מ.&rlm;<br>א. מהו נפח הפירמידה?&rlm;<br>ב. מהו אורך גובה הפאה הצדדית?&rlm;<br>ג. מהו שטח המעטפת של הפירמידה?&rlm;",
        options: ["א. 48 | ב. 5 | ג. 60", "א. 144 | ב. 5 | ג. 120", "א. 48 | ב. 6 | ג. 72", "א. 144 | ב. 4 | ג. 60"],
        correctAnswer: 0,
        hint: "נפח הוא שטח בסיס כפול גובה לחלק ל-3. גובה הפאה (המשולש) מחושב בפיתגורס עם גובה הפירמידה וחצי צלע הבסיס. המעטפת היא 4 משולשים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הנפח, שטח הבסיס הריבועי מוכפל בגובה ומחולק בשלוש (תשובה לא').", math_expression: "V = \\dfrac{6^{2} \\times 4}{3} = \\dfrac{36 \\times 4}{3} = 48" },
            { verbal_explanation: "שלב 2: בניית פיתגורס למציאת גובה הפאה הצדדית. הניצבים הם גובה הפירמידה (4) וחצי מצלע הבסיס (3).", math_expression: "h = \\sqrt{4^{2} + 3^{2}}" },
            { verbal_explanation: "שלב 3: התוצאה לגובה הפאה (תשובה לב').", math_expression: "h = \\sqrt{16 + 9} = 5" },
            { verbal_explanation: "שלב 4: חישוב שטח המעטפת הכולל ארבעה משולשים.", math_expression: "M = 4 \\times \\dfrac{6 \\times 5}{2}" },
            { verbal_explanation: "שלב 5: התוצאה למעטפת (תשובה לג').", math_expression: "M = 60" }
        ],
        final_answer: "א. 48 | ב. 5 | ג. 60"
    },

    // שאלה מספר 3: התפלגות נורמלית
    {
        topic: "bagrut_prep_372",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "שאלון 35372, מועד קיץ 2021 ב'&rlm;<br>ציונים במבחן ארצי מתפלגים נורמלית עם ממוצע 72 וסטיית תקן 6.&rlm;<br>א. מהו אחוז התלמידים שקיבלו ציון בין 66 ל-84?&rlm;<br>ב. מתוך 2000 נבחנים, כמה תלמידים צפויים לקבל ציון מעל 84?&rlm;",
        options: ["א. 81.5% | ב. 50", "א. 81.5% | ב. 40", "א. 68% | ב. 40", "א. 95% | ב. 100"],
        correctAnswer: 1,
        hint: "תרגמו את הציונים לסטיות תקן. 66 זה סטייה אחת למטה. 84 זה שתי סטיות למעלה. חברו את האחוזים מהטבלה. מעל 84 זה הזנב הימני קיצוני.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מיפוי הציונים על ציר הפעמון.", math_expression: "66 = \\bar{x} - S \\quad , \\quad 84 = \\bar{x} + 2S" },
            { verbal_explanation: "שלב 2: סכימת הפרוסות בתחום זה (משמאל אחת ומימין שתיים).", math_expression: "P_{1} = 19 + 15 + 19 + 15 + 9 + 4.5" },
            { verbal_explanation: "שלב 3: סליחה, הפרוסות התקניות למטה עד מינוס 1 ולמעלה עד פלוס 2 הן: משמאל 19+15=34. מימין 19+15+9+4.5=47.5. סך הכל (תשובה לא').", math_expression: "P_{1} = 34 + 47.5 = 81.5" },
            { verbal_explanation: "שלב 4: מציאת האחוז מעל 84 (מעל שתי סטיות תקן). זהו הזנב הכולל את ה-2.5 הנותרים.", math_expression: "P_{2} = 1.5 + 0.5 = 2" },
            { verbal_explanation: "שלב 5: הכפלת האחוז בכמות הנבחנים (תשובה לב').", math_expression: "n = \\dfrac{2}{100} \\times 2000 = 40" }
        ],
        final_answer: "א. 81.5% | ב. 40"
    },

    // שאלה מספר 4: הסתברות (טבלה)
    {
        topic: "bagrut_prep_372",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "שאלון 35372, מועד חורף 2024&rlm;<br>בכיתה יש 30 בנים ו-20 בנות. 12 מהבנים לומדים פיזיקה. 14 מהבנות לא לומדות פיזיקה.&rlm;<br>א. מהי ההסתברות לבחור תלמיד (בן או בת) שלומד פיזיקה?&rlm;<br>ב. נבחר תלמיד שלומד פיזיקה. מה ההסתברות שזו בת?&rlm;",
        options: ["א. 0.36 | ב. 1/3", "א. 0.36 | ב. 1/2", "א. 0.5 | ב. 1/3", "א. 0.4 | ב. 1/4"],
        correctAnswer: 0,
        hint: "השלימו טבלה. מצאו כמה בנות לומדות פיזיקה. חברו לבנים שלומדים פיזיקה כדי לקבל את הסך הכל. לסעיף ב' חשבו הסתברות מותנית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב מספר התלמידים הכולל בכיתה.", math_expression: "n = 30 + 20 = 50" },
            { verbal_explanation: "שלב 2: מציאת כמות הבנות שלומדות פיזיקה על ידי השלמה מסך הבנות.", math_expression: "x = 20 - 14 = 6" },
            { verbal_explanation: "שלב 3: מציאת ההסתברות הכוללת לתלמיד פיזיקה מתוך כלל השכבה (תשובה לא').", math_expression: "P_{1} = \\dfrac{12 + 6}{50} = \\dfrac{18}{50} = 0.36" },
            { verbal_explanation: "שלב 4: מציאת ההסתברות המותנית לבחירת בת מתוך קבוצת הפיזיקה (תשובה לב').", math_expression: "P_{2} = \\dfrac{6}{18}" },
            { verbal_explanation: "שלב 5: צמצום השבר.", math_expression: "P_{2} = \\dfrac{1}{3}" }
        ],
        final_answer: "א. 0.36 | ב. 1/3"
    },

    // שאלה מספר 5: סדרות חשבוניות
    {
        topic: "bagrut_prep_372",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "שאלון 35372, מועד קיץ 2020&rlm;<br>בסדרה חשבונית האיבר השלישי הוא 17 והאיבר השביעי הוא 37.&rlm;<br>א. מצאו את הפרש הסדרה ואת האיבר הראשון.&rlm;<br>ב. חשבו את סכום 15 האיברים הראשונים.&rlm;",
        options: ["א. d=5, a1=7 | ב. 630", "א. d=4, a1=9 | ב. 580", "א. d=5, a1=2 | ב. 600", "א. d=5, a1=7 | ב. 650"],
        correctAnswer: 0,
        hint: "ההפרש בין האיבר ה-7 ל-3 הוא 4d. מצאו את d. חזרו אחורה למצוא את a1. בסוף, השתמשו בנוסחת הסכום.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואה להפרש בין האיברים הנתונים.", math_expression: "a_{7} - a_{3} = 4d" },
            { verbal_explanation: "שלב 2: הצבת הערכים ומציאת ההפרש.", math_expression: "37 - 17 = 4d \\Rightarrow d = 5" },
            { verbal_explanation: "שלב 3: מציאת האיבר הראשון דרך האיבר השלישי (תשובה לא').", math_expression: "17 = a_{1} + 2 \\times 5 \\Rightarrow a_{1} = 7" },
            { verbal_explanation: "שלב 4: הצבת הנתונים בנוסחת הסכום ל-15 איברים.", math_expression: "S_{15} = \\dfrac{15 \\times (2 \\times 7 + 14 \\times 5)}{2}" },
            { verbal_explanation: "שלב 5: ביצוע פעולות החשבון בסוגריים וקבלת התוצאה (תשובה לב').", math_expression: "S_{15} = \\dfrac{15 \\times 84}{2} = 630" }
        ],
        final_answer: "א. d=5, a1=7 | ב. 630"
    },

    // שאלה מספר 6: הנדסת המרחב - גליל
    {
        topic: "bagrut_prep_372",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "שאלון 35372, מועד חורף 2021 א'&rlm;<br>נפח גליל ישר הוא \\( 250\\pi \\) סמ''ק. גובה הגליל הוא 10 ס''מ.&rlm;<br>א. מצאו את רדיוס הבסיס.&rlm;<br>ב. מהו שטח המעטפת של הגליל?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><ellipse cx='100' cy='40' rx='40' ry='15' fill='#f59e0b' opacity='0.3' stroke='#f59e0b' stroke-width='2'/><ellipse cx='100' cy='160' rx='40' ry='15' fill='#f59e0b' opacity='0.3' stroke='#f59e0b' stroke-width='2'/><line x1='60' y1='40' x2='60' y2='160' stroke='#f59e0b' stroke-width='2'/><line x1='140' y1='40' x2='140' y2='160' stroke='#f59e0b' stroke-width='2'/><text x='35' y='105' font-size='12'>10</text></svg></div>",
        options: ["א. 5 | ב. 100\\pi", "א. 25 | ב. 50\\pi", "א. 5 | ב. 50\\pi", "א. 10 | ב. 200\\pi"],
        correctAnswer: 0,
        hint: "הציבו את הנפח והגובה בנוסחת הנפח (פאי כפול רדיוס בריבוע כפול גובה) ובודדו את הרדיוס. שטח המעטפת הוא היקף הבסיס כפול הגובה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואת הנפח לחילוץ הרדיוס.", math_expression: "250\\pi = \\pi \\times R^{2} \\times 10" },
            { verbal_explanation: "שלב 2: צמצום ובידוד המשתנה (תשובה לא').", math_expression: "R^{2} = 250 : 10 = 25 \\Rightarrow R = 5" },
            { verbal_explanation: "שלב 3: כתיבת משוואת שטח המעטפת.", math_expression: "M = 2\\pi \\times 5 \\times 10" },
            { verbal_explanation: "שלב 4: ביצוע המכפלה (תשובה לב').", math_expression: "M = 100\\pi" },
            { verbal_explanation: "שלב 5: התשובה הישירה בחלופות.", math_expression: "5 \\quad , \\quad 100\\pi" }
        ],
        final_answer: "א. 5 | ב. 100\\pi"
    },

    // שאלה מספר 7: גיאומטריה אנליטית - ריבוע
    {
        topic: "bagrut_prep_372",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "שאלון 35372, מועד קיץ 2019 ב'&rlm;<br>בריבוע ABCD, קודקוד A הוא (1, 2) וקודקוד C הנגדי לו הוא (7, 10).&rlm;<br>א. מהו אורך אלכסון הריבוע?&rlm;<br>ב. מהו שטח הריבוע?&rlm;",
        options: ["א. 10 | ב. 50", "א. 14 | ב. 100", "א. 10 | ב. 100", "א. 8 | ב. 32"],
        correctAnswer: 0,
        hint: "האלכסון הוא המרחק בין הקודקודים הנגדיים. שטח ריבוע אפשר לחשב גם על ידי אלכסון כפול אלכסון חלקי 2.",
        solution_steps: [
            { verbal_explanation: "שלב 1: שימוש בנוסחת המרחק למציאת האלכסון המחבר קודקודים נגדיים.", math_expression: "d = \\sqrt{(7 - 1)^{2} + (10 - 2)^{2}}" },
            { verbal_explanation: "שלב 2: סיום החישוב (תשובה לא').", math_expression: "d = \\sqrt{6^{2} + 8^{2}} = \\sqrt{100} = 10" },
            { verbal_explanation: "שלב 3: הפעלת נוסחת שטח למרובעים בעלי אלכסונים מאונכים (כמו הריבוע).", math_expression: "S = \\dfrac{10 \\times 10}{2}" },
            { verbal_explanation: "שלב 4: תוצאת השטח (תשובה לב').", math_expression: "S = 50" },
            { verbal_explanation: "שלב 5: הרישום לבדיקה.", math_expression: "10 \\quad , \\quad 50" }
        ],
        final_answer: "א. 10 | ב. 50"
    },

    // שאלה מספר 8: הסתברות - עץ
    {
        topic: "bagrut_prep_372",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "שאלון 35372, מועד חורף 2018&rlm;<br>בכד 6 כדורים צהובים ו-4 שחורים. מוציאים כדור, לא מחזירים, ומוציאים כדור שני.&rlm;<br>א. מה ההסתברות ששני הכדורים צהובים?&rlm;<br>ב. מה ההסתברות שהכדורים בצבעים שונים?&rlm;",
        options: ["א. 1/3 | ב. 8/15", "א. 9/25 | ב. 12/25", "א. 1/3 | ב. 1/2", "א. 0.36 | ב. 0.48"],
        correctAnswer: 0,
        hint: "ללא החזרה, כמות הכדורים קטנה ב-1 בהוצאה השנייה. 'צבעים שונים' זה מסלול צהוב-שחור ועוד מסלול שחור-צהוב.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המסלול של שני כדורים צהובים ללא החזרה (תשובה לא').", math_expression: "P_{1} = \\dfrac{6}{10} \\times \\dfrac{5}{9} = \\dfrac{30}{90} = \\dfrac{1}{3}" },
            { verbal_explanation: "שלב 2: חישוב המסלול הראשון לצבעים שונים (צהוב ואז שחור).", math_expression: "P_{2} = \\dfrac{6}{10} \\times \\dfrac{4}{9} = \\dfrac{24}{90}" },
            { verbal_explanation: "שלב 3: חישוב המסלול השני לצבעים שונים (שחור ואז צהוב).", math_expression: "P_{3} = \\dfrac{4}{10} \\times \\dfrac{6}{9} = \\dfrac{24}{90}" },
            { verbal_explanation: "שלב 4: חיבור המסלולים לקבלת ההסתברות הכוללת לצבעים שונים (תשובה לב').", math_expression: "P_{4} = \\dfrac{24}{90} + \\dfrac{24}{90} = \\dfrac{48}{90} = \\dfrac{8}{15}" }
        ],
        final_answer: "א. 1/3 | ב. 8/15"
    },

    // שאלה מספר 9: בעיות גידול ודעיכה
    {
        topic: "bagrut_prep_372",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "שאלון 35372, מועד קיץ 2022 א'&rlm;<br>מספר התושבים בעיר גדל ב-5% בכל שנה. כיום יש בעיר 40,000 תושבים.&rlm;<br>א. כמה תושבים יהיו בעיר בעוד שנתיים?&rlm;<br>ב. כמה תושבים היו בעיר לפני שנה? (עגלו לשלם).&rlm;",
        options: ["א. 44100 | ב. 38095", "א. 44000 | ב. 38000", "א. 44100 | ב. 37500", "א. 42000 | ב. 38095"],
        correctAnswer: 0,
        hint: "מקדם הגידול הוא 1.05. כדי לחשב קדימה מכפילים, כדי לחשב אחורה (לפני שנה) מחלקים במקדם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: קביעת מקדם הגדילה.", math_expression: "q = 1 + \\dfrac{5}{100} = 1.05" },
            { verbal_explanation: "שלב 2: הפעלת מודל הגדילה קדימה לשנתיים (תשובה לא').", math_expression: "M_{2} = 40000 \\times 1.05^{2} = 40000 \\times 1.1025 = 44100" },
            { verbal_explanation: "שלב 3: הפעלת המודל אחורה בזמן דורשת חלוקה במקדם.", math_expression: "M_{-1} = 40000 : 1.05" },
            { verbal_explanation: "שלב 4: ביצוע החלוקה ועיגול (תשובה לב').", math_expression: "M_{-1} \\approx 38095" }
        ],
        final_answer: "א. 44100 | ב. 38095"
    },

    // שאלה מספר 10: התפלגות נורמלית
    {
        topic: "bagrut_prep_372",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "שאלון 35372, מועד חורף 2023&rlm;<br>משקל שקיות קמח מתפלג נורמלית. 84% מהשקיות שוקלות פחות מ-1020 גרם. 16% מהשקיות שוקלות פחות מ-980 גרם.&rlm;<br>א. מהו הממוצע?&rlm;<br>ב. מהי סטיית התקן?&rlm;",
        options: ["א. 1000 | ב. 20", "א. 1000 | ב. 40", "א. 1010 | ב. 10", "א. 990 | ב. 30"],
        correctAnswer: 0,
        hint: "84% מלמטה מביא אותנו לסטיית תקן אחת מעל הממוצע. 16% מלמטה משאיר אותנו סטיית תקן אחת מתחת לממוצע. הממוצע באמצע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: תרגום האחוזים למיקום התקני על הציר. האחוז הראשון (שמונים וארבע) נמצא במרחק של סטיית תקן חיובית אחת מהממוצע.", math_expression: "P = 84 \\Rightarrow \\bar{x} + S = 1020" },
            { verbal_explanation: "שלב 2: תרגום האחוז השני (שש עשרה) לנקודה על הציר.", math_expression: "P = 16 \\Rightarrow \\bar{x} - S = 980" },
            { verbal_explanation: "שלב 3: חיבור שתי המשוואות מבטל את הסטייה ומאפשר למצוא ממוצע (תשובה לא').", math_expression: "2\\bar{x} = 2000 \\Rightarrow \\bar{x} = 1000" },
            { verbal_explanation: "שלב 4: הצבת הממוצע למציאת סטיית התקן (תשובה לב').", math_expression: "1000 + S = 1020 \\Rightarrow S = 20" }
        ],
        final_answer: "א. 1000 | ב. 20"
    },

    // שאלה מספר 11: הנדסת המרחב - תיבה
    {
        topic: "bagrut_prep_372",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "שאלון 35372, מועד קיץ 2017&rlm;<br>בתיבה, אורך הבסיס הוא 8 ורוחבו 6. גובה התיבה הוא 5.&rlm;<br>א. מצאו את אלכסון הבסיס.&rlm;<br>ב. מצאו את הזווית שבין האלכסון הראשי של התיבה לבין בסיס התיבה.&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 250 150' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='50,120 150,120 180,90 80,90' fill='#10b981' opacity='0.2' stroke='#10b981' stroke-width='2'/><line x1='50' y1='120' x2='50' y2='40' stroke='#64748b' stroke-width='2'/><line x1='150' y1='120' x2='150' y2='40' stroke='#64748b' stroke-width='2'/><line x1='50' y1='120' x2='180' y2='90' stroke='#ef4444' stroke-dasharray='4,4' stroke-width='2'/><line x1='50' y1='40' x2='180' y2='90' stroke='#f59e0b' stroke-width='2'/><text x='95' y='135' font-size='12'>8</text><text x='170' y='115' font-size='12'>6</text><text x='30' y='85' font-size='12'>5</text></svg></div>",
        options: ["א. 10 | ב. 26.56°", "א. 10 | ב. 30°", "א. 14 | ב. 45°", "א. 10 | ב. 53.1°"],
        correctAnswer: 0,
        hint: "האלכסון של הבסיס הוא פיתגורס של 8 ו-6. הזווית מחושבת על ידי טנגנס של הגובה (מול) חלקי אלכסון הבסיס (ליד).",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת אלכסון הבסיס בעזרת משפט פיתגורס (תשובה לא').", math_expression: "d = \\sqrt{8^{2} + 6^{2}} = \\sqrt{100} = 10" },
            { verbal_explanation: "שלב 2: הגדרת המשולש הפנימי במרחב למציאת הזווית.", math_expression: "\\tan(\\alpha) = \\dfrac{5}{10} = 0.5" },
            { verbal_explanation: "שלב 3: מציאת הזווית דרך הפונקציה ההפוכה (תשובה לב').", math_expression: "\\alpha = \\tan^{-1}(0.5) \\approx 26.56^{\\circ}" }
        ],
        final_answer: "א. 10 | ב. 26.56°"
    },

    // שאלה מספר 12: גיאומטריה אנליטית - משולש
    {
        topic: "bagrut_prep_372",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "שאלון 35372, מועד חורף 2019&rlm;<br>במשולש קודקודים A(0, 8), B(0, 0), C(6, 0).&rlm;<br>א. מצאו את משוואת התיכון לצלע AC.&rlm;<br>ב. מה שטח המשולש שנוצר על ידי התיכון הנ''ל, ציר ה-x וציר ה-y?&rlm;",
        options: ["א. y = (4/3)x | ב. 6", "א. y = 1.5x | ב. 12", "א. y = (4/3)x | ב. 12", "א. y = 0.75x | ב. 6"],
        correctAnswer: 0,
        hint: "התיכון יוצא מ-B (ראשית הצירים) אל אמצע AC. מצאו את נקודת האמצע, חשבו שיפוע ובנו משוואה. השטח המבוקש הוא של משולש ישר זווית קטן שנוצר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת אמצע הצלע אליה מגיע התיכון.", math_expression: "M = (\\dfrac{0 + 6}{2}, \\dfrac{8 + 0}{2}) = (3, 4)" },
            { verbal_explanation: "שלב 2: חישוב שיפוע התיכון שיוצא מראשית הצירים.", math_expression: "m = \\dfrac{4 - 0}{3 - 0} = \\dfrac{4}{3}" },
            { verbal_explanation: "שלב 3: משוואת התיכון העובר בראשית הצירים (תשובה לא').", math_expression: "y = \\dfrac{4}{3}x" },
            { verbal_explanation: "שלב 4: המשולש החדש שנוצר נתחם על ידי הצירים והתיכון, לכן קודקודיו הם ראשית הצירים, הנקודה שעל ציר האיקס והנקודה M. הבסיס הוא 3 והגובה הוא 4.", math_expression: "S = \\dfrac{3 \\times 4}{2}" },
            { verbal_explanation: "שלב 5: קבלת השטח המבוקש (תשובה לב').", math_expression: "S = 6" }
        ],
        final_answer: "א. y = (4/3)x | ב. 6"
    },

    // שאלה מספר 13: סדרות חשבוניות
    {
        topic: "bagrut_prep_372",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "שאלון 35372, מועד קיץ 2018&rlm;<br>סכום 10 האיברים הראשונים בסדרה חשבונית הוא 250. האיבר העשירי הוא 43.&rlm;<br>א. מצאו את האיבר הראשון בסדרה.&rlm;<br>ב. מצאו את הפרש הסדרה.&rlm;",
        options: ["א. 7 | ב. 4", "א. 5 | ב. 4", "א. 7 | ב. 5", "א. 3 | ב. 6"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת הסכום השנייה (זו שמשלבת את האיבר הראשון והאחרון) כדי למצוא את a1 בקלות. לאחר מכן הציבו בנוסחת האיבר הכללי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: שימוש בנוסחת הסכום בה נתון האיבר האחרון למציאת האיבר הראשון.", math_expression: "250 = \\dfrac{10 \\times (a_{1} + 43)}{2}" },
            { verbal_explanation: "שלב 2: חלוקת המקדם החיצוני ופתיחת משוואה.", math_expression: "250 = 5 \\times (a_{1} + 43)" },
            { verbal_explanation: "שלב 3: חלוקה בחמש ובידוד האיבר הראשון (תשובה לא').", math_expression: "50 = a_{1} + 43 \\Rightarrow a_{1} = 7" },
            { verbal_explanation: "שלב 4: שימוש בנוסחת האיבר הכללי למציאת ההפרש.", math_expression: "43 = 7 + (10 - 1) \\times d" },
            { verbal_explanation: "שלב 5: חילוץ ההפרש (תשובה לב').", math_expression: "36 = 9d \\Rightarrow d = 4" }
        ],
        final_answer: "א. 7 | ב. 4"
    },

    // שאלה מספר 14: הסתברות מותנית
    {
        topic: "bagrut_prep_372",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "שאלון 35372, מועד קיץ 2024 א'&rlm;<br>בעיר מסוימת, 70% מהתושבים מנויים לעיתון. 40% מכלל התושבים הם מנויים שגם מרכיבים משקפיים. נבחר אקראית תושב שמנוי לעיתון.&rlm;<br>א. מה ההסתברות שהוא מרכיב משקפיים?&rlm;<br>ב. האם המאורעות 'מנוי לעיתון' ו'מרכיב משקפיים' הם בלתי תלויים, אם ידוע ש-50% מהעיר מרכיבים משקפיים?&rlm;",
        options: ["א. 4/7 | ב. לא תלויים", "א. 4/7 | ב. תלויים", "א. 3/7 | ב. לא תלויים", "א. 0.4 | ב. תלויים"],
        correctAnswer: 1,
        hint: "לסעיף א', ההסתברות המותנית היא החיתוך לחלק בתנאי (המנויים). לסעיף ב', בדקו אם מכפלת ההסתברויות השוליות נותנת את החיתוך (0.4).",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום הנתונים למשוואות.", math_expression: "P(A) = 0.7 \\quad , \\quad P(A \\cap B) = 0.4" },
            { verbal_explanation: "שלב 2: הצבה בנוסחת הסתברות מותנית לבקשת סעיף א'.", math_expression: "P(B|A) = \\dfrac{0.4}{0.7} = \\dfrac{4}{7}" },
            { verbal_explanation: "שלב 3: בדיקת אי תלות על ידי הכפלת הסתברויות שוליות (שבע עשיריות כפול חמש עשיריות).", math_expression: "0.7 \\times 0.5 = 0.35" },
            { verbal_explanation: "שלב 4: המכפלה לא שווה להסתברות החיתוך, ולכן המאורעות תלויים זה בזה (תשובה לב').", math_expression: "0.35 \\neq 0.4 \\Rightarrow Dependent" }
        ],
        final_answer: "א. 4/7 | ב. תלויים"
    },

    // שאלה מספר 15: הנדסת המרחב - חרוט
    {
        topic: "bagrut_prep_372",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "שאלון 35372, מועד חורף 2020&rlm;<br>שטח מעטפת של חרוט הוא \\( 60\\pi \\). רדיוס הבסיס הוא 6.&rlm;<br>א. מהו אורך הקו היוצר של החרוט?&rlm;<br>ב. מהו גובה החרוט?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><ellipse cx='100' cy='150' rx='60' ry='15' fill='#f59e0b' opacity='0.3' stroke='#f59e0b' stroke-width='2'/><path d='M 40 150 L 100 20 L 160 150' fill='none' stroke='#f59e0b' stroke-width='2'/><line x1='100' y1='20' x2='100' y2='150' stroke='#64748b' stroke-dasharray='4,4' stroke-width='2'/><line x1='100' y1='150' x2='160' y2='150' stroke='#ef4444' stroke-width='2'/><text x='125' y='145' font-size='12'>6</text></svg></div>",
        options: ["א. 10 | ב. 8", "א. 12 | ב. 10", "א. 10 | ב. 6", "א. 8 | ב. 10"],
        correctAnswer: 0,
        hint: "שטח מעטפת חרוט הוא פאי כפול רדיוס כפול אורך הקו היוצר. לאחר מכן השתמשו בפיתגורס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת נתוני השטח והרדיוס בנוסחת המעטפת.", math_expression: "\\pi \\times 6 \\times l = 60\\pi" },
            { verbal_explanation: "שלב 2: בידוד הקו היוצר (תשובה לא').", math_expression: "6l = 60 \\Rightarrow l = 10" },
            { verbal_explanation: "שלב 3: הפעלת משפט פיתגורס במשולש הפנימי למציאת הגובה.", math_expression: "h^{2} + 6^{2} = 10^{2}" },
            { verbal_explanation: "שלב 4: חילוץ הגובה מתוך פיתגורס (תשובה לב').", math_expression: "h^{2} = 100 - 36 = 64 \\Rightarrow h = 8" }
        ],
        final_answer: "א. 10 | ב. 8"
    },

    // שאלה מספר 16: התפלגות נורמלית - שאלת אחוזים מתקדמת
    {
        topic: "bagrut_prep_372",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "שאלון 35372, מועד קיץ 2023 ב'&rlm;<br>אורך חיי סוללות מתפלג נורמלית. 2% מהסוללות מחזיקות מעל 50 שעות. 16% מהסוללות מחזיקות פחות מ-38 שעות.&rlm;<br>א. מה הממוצע?&rlm;<br>ב. מה סטיית התקן?&rlm;",
        options: ["א. 42 | ב. 4", "א. 44 | ב. 3", "א. 40 | ב. 5", "א. 42 | ב. 6"],
        correctAnswer: 0,
        hint: "2% עליונים מתחילים ב-2 סטיות תקן מעל הממוצע. 16% תחתונים מתחילים ב-1 סטיית תקן מתחת לממוצע. המרחק בין 38 ל-50 הוא 3 סטיות תקן.",
        solution_steps: [
            { verbal_explanation: "שלב 1: תרגום הנתון העליון למיקום על הציר (2% מהווים את קצה הזנב הימני המרוחק שתי סטיות מעל הממוצע).", math_expression: "P_{1} = 2 \\Rightarrow \\bar{x} + 2S = 50" },
            { verbal_explanation: "שלב 2: תרגום הנתון התחתון (16% מהווים את הזנב השמאלי המרוחק סטייה אחת מתחת לממוצע).", math_expression: "P_{2} = 16 \\Rightarrow \\bar{x} - S = 38" },
            { verbal_explanation: "שלב 3: חיסור המשוואות לביטול הממוצע ומציאת מספר הסטיות (הפרש של שלוש סטיות).", math_expression: "3S = 50 - 38 = 12" },
            { verbal_explanation: "שלב 4: מציאת ערך סטיית התקן (תשובה לב').", math_expression: "S = 4" },
            { verbal_explanation: "שלב 5: הצבת סטיית התקן במשוואה השנייה לחילוץ הממוצע (תשובה לא').", math_expression: "\\bar{x} - 4 = 38 \\Rightarrow \\bar{x} = 42" }
        ],
        final_answer: "א. 42 | ב. 4"
    },

    // שאלה מספר 17: גידול ודעיכה
    {
        topic: "bagrut_prep_372",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "שאלון 35372, מועד חורף 2021&rlm;<br>חומר רדיואקטיבי מאבד 20% ממשקלו כל שעה. כעת יש 500 גרם מהחומר.&rlm;<br>א. כמה חומר יהיה בעוד שעתיים?&rlm;<br>ב. כמה חומר נעלם במהלך השעתיים הללו?&rlm;",
        options: ["א. 320 | ב. 180", "א. 300 | ב. 200", "א. 320 | ב. 80", "א. 400 | ב. 100"],
        correctAnswer: 0,
        hint: "מקדם הדעיכה הוא 0.8. הכפילו את הכמות ההתחלתית ב-0.8 בחזקת 2.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב מקדם הדעיכה ממשקל החומר.", math_expression: "q = 1 - \\dfrac{20}{100} = 0.8" },
            { verbal_explanation: "שלב 2: הצבה במודל המעריכי למשך שעתיים (תשובה לא').", math_expression: "M = 500 \\times 0.8^{2} = 500 \\times 0.64 = 320" },
            { verbal_explanation: "שלב 3: הפחתת הכמות הסופית מהכמות ההתחלתית למציאת המשקל שאבד (תשובה לב').", math_expression: "x = 500 - 320 = 180" }
        ],
        final_answer: "א. 320 | ב. 180"
    },

    // שאלה מספר 18: גיאומטריה אנליטית (אמצע ומשוואת מעגל)
    {
        topic: "bagrut_prep_372",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "שאלון 35372, מועד קיץ 2022 ב'&rlm;<br>קצותיו של קוטר במעגל הם A(-2, 5) ו- B(6, -1).&rlm;<br>א. מצאו את משוואת המעגל.&rlm;<br>ב. האם ראשית הצירים בתוך המעגל?&rlm;",
        options: ["א. (x-2)²+(y-2)²=25 | ב. כן", "א. (x-2)²+(y-2)²=25 | ב. לא", "א. (x+2)²+(y+2)²=25 | ב. כן", "א. (x-4)²+(y-2)²=25 | ב. לא"],
        correctAnswer: 0,
        hint: "המרכז הוא אמצע הקוטר. הרדיוס הוא המרחק מהמרכז לאחד הקצוות. לבדיקת ראשית הצירים (0,0), הציבו במשוואה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת מרכז המעגל ממוצע הקצוות.", math_expression: "M = (\\dfrac{-2+6}{2}, \\dfrac{5-1}{2}) = (2, 2)" },
            { verbal_explanation: "שלב 2: מציאת הרדיוס בעזרת משוואת המרחק לאחד הקצוות.", math_expression: "R = \\sqrt{(6-2)^{2} + (-1-2)^{2}} = \\sqrt{16+9} = 5" },
            { verbal_explanation: "שלב 3: הרכבת המשוואה (תשובה לא').", math_expression: "(x-2)^{2} + (y-2)^{2} = 25" },
            { verbal_explanation: "שלב 4: הצבת ראשית הצירים לבדיקת מיקום.", math_expression: "(0-2)^{2} + (0-2)^{2} = 4 + 4 = 8" },
            { verbal_explanation: "שלב 5: התוצאה קטנה מהרדיוס בריבוע ולכן הנקודה בתוך המעגל (תשובה לב').", math_expression: "8 < 25 \\Rightarrow Yes" }
        ],
        final_answer: "א. (x-2)²+(y-2)²=25 | ב. כן"
    },

    // שאלה מספר 19: הסתברות מותנית בטבלה
    {
        topic: "bagrut_prep_372",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "שאלון 35372, מועד קיץ 2021 א'&rlm;<br>מטבלה עולה ש- 60% מהעובדים הם גברים, ו- 30% מכלל העובדים הם מנהלים. כמו כן, 20% מהעובדים הם גברים מנהלים.&rlm;<br>א. נבחרה אישה. מה ההסתברות שהיא מנהלת?&rlm;<br>ב. האם המאורעות 'גבר' ו'מנהל' הם בלתי תלויים?&rlm;",
        options: ["א. 0.25 | ב. לא", "א. 0.25 | ב. כן", "א. 0.1 | ב. לא", "א. 0.4 | ב. כן"],
        correctAnswer: 0,
        hint: "אם 60% גברים, אז 40% נשים. נשים מנהלות הן המשלים של גברים מנהלים מתוך סך המנהלים (30-20=10). חילקו 10% ב-40%.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב אחוז הנשים באוכלוסייה.", math_expression: "P_{W} = 1 - 0.6 = 0.4" },
            { verbal_explanation: "שלב 2: חישוב אחוז הנשים המנהלות.", math_expression: "P_{W \\cap M} = 0.3 - 0.2 = 0.1" },
            { verbal_explanation: "שלב 3: הסתברות מותנית: מנהלת מתוך הנשים (תשובה לא').", math_expression: "P_{M|W} = \\dfrac{0.1}{0.4} = 0.25" },
            { verbal_explanation: "שלב 4: בדיקת אי תלות למאורע השני.", math_expression: "0.6 \\times 0.3 = 0.18" },
            { verbal_explanation: "שלב 5: התוצאה אינה שווה לחיתוך ולכן הם תלויים (תשובה לב').", math_expression: "0.18 \\neq 0.2 \\Rightarrow No" }
        ],
        final_answer: "א. 0.25 | ב. לא"
    },

    // שאלה מספר 20: הנדסת המרחב (יחס וגופים)
    {
        topic: "bagrut_prep_372",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "שאלון 35372, מועד חורף 2024&rlm;<br>תיבה וקובייה בעלות אותו נפח. מקצוע הקובייה הוא 4. בסיס התיבה הוא ריבוע שאורך צלעותיו 2.&rlm;<br>א. מהו נפח התיבה?&rlm;<br>ב. מהו גובה התיבה?&rlm;",
        options: ["א. 64 | ב. 16", "א. 64 | ב. 8", "א. 16 | ב. 4", "א. 64 | ב. 32"],
        correctAnswer: 0,
        hint: "נפח התיבה שווה לנפח הקובייה (חשבו אותו קודם). לאחר מכן, הציבו את הנפח ואת שטח הבסיס של התיבה בנוסחת הנפח ומצאו את הגובה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הנפח המשותף דרך נתוני הקובייה (תשובה לא').", math_expression: "V = 4^{3} = 64" },
            { verbal_explanation: "שלב 2: בניית משוואת נפח לתיבה עם הנתונים שלה.", math_expression: "64 = 2 \\times 2 \\times h" },
            { verbal_explanation: "שלב 3: כפל מידות הבסיס.", math_expression: "64 = 4 \\times h" },
            { verbal_explanation: "שלב 4: בידוד הגובה (תשובה לב').", math_expression: "h = 16" }
        ],
        final_answer: "א. 64 | ב. 16"
    }
];