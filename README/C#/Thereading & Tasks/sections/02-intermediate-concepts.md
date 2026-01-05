# مفاهیم میانی: یادگیری مدیریت همزمانی (Intermediate Concepts: Learning to Manage Concurrency)

## فهرست مطالب

### بخش 1: همگام‌سازی پیشرفته (Advanced Synchronization)
- [2.1.1 قفل‌ها و قفل مرگ (Locks and Deadlocks)](#211-قفلها-و-قفل-مرگ-locks-and-deadlocks)
  - [قفل مرگ چیست و چطور رخ می‌دهد؟](#2111-قفل-مرگ-چیست-و-چطور-رخ-می‌دهد)
  - [راه‌حل‌های جلوگیری از قفل مرگ](#2112-راهحلهای-جلوگیری-از-قفل-مرگ)
  - [تشخیص قفل مرگ در زمان اجرا](#2113-تشخیص-قفل-مرگ-در-زمان-اجرا)
  - [نکات کلیدی برای جلوگیری از قفل مرگ](#2114-نکات-کلیدی-برای-جلوگیری-از-قفل-مرگ)
  - [ساختارهای بدون قفل (Lock-Free Structures)](#2115-ساختارهای-بدون-قفل)
    - [ساختارهای بدون قفل چیست؟](#21151-ساختارهای-بدون-قفل-چیست)
    - [مزایای ساختارهای بدون قفل](#21152-مزایای-ساختارهای-بدون-قفل)
    - [معایب و چالش‌های ساختارهای بدون قفل](#21153-معایب-و-چالشهای-ساختارهای-بدون-قفل)
    - [کلاس Interlocked](#21154-کلاس-interlocked)
    - [مثال عملی: صف بدون قفل](#21155-مثال-عملی-صف-بدون-قفل)
    - [مثال پیشرفته: شمارنده بدون قفل](#21156-مثال-پیشرفته-شمارنده-بدون-قفل)
    - [مقایسه: چه زمانی از Lock-Free استفاده کنیم؟](#21157-مقایسه-چه-زمانی-از-lock-free-استفاده-کنیم)
    - [نکات مهم برای استفاده از Lock-Free](#21158-نکات-مهم-برای-استفاده-از-lock-free)
    - [خلاصه ساختارهای بدون قفل](#21159-خلاصه-ساختارهای-بدون-قفل)
  - [تأثیرات و عواقب قفل مرگ](#2116-تأثیرات-و-عواقب-قفل-مرگ)
  - [خلاصه](#2117-خلاصه-قفل-مرگ)
- [2.1.2 کلاس Monitor، Mutex، Semaphore و SemaphoreSlim](#212-کلاس-monitor-mutex-semaphore-و-semaphoreslim)
  - [کلاس Monitor پیشرفته: Wait، Pulse و PulseAll](#2121-کلاس-monitor-پیشرفته)
  - [Monitor.TryEnter و کنترل زمان انتظار](#2122-monitor-tryenter-و-timeout)
  - [کلاس Mutex پیشرفته: Named Mutex و همگام‌سازی بین فرآیندی](#2123-کلاس-mutex-پیشرفته)
  - [مفهوم Semaphore: کنترل دسترسی چندین نخ](#2124-مفهوم-semaphore)
  - [SemaphoreSlim: نسخه بهینه برای استفاده درون فرآیندی](#2125-semaphoreslim-نسخه-بهینه)
  - [مقایسه و انتخاب ابزار مناسب](#2126-مقایسه-و-انتخاب-ابزار-مناسب)
  - [نکات مهم و بهترین روش‌ها](#2127-نکات-مهم-و-بهترین-روشها)
- [2.1.3 کلاس Interlocked برای عملیات اتمی](#213-کلاس-interlocked-برای-عملیات-اتمی)
  - [عملیات اتمی چیست؟](#2131-عملیات-اتمی-چیست)
  - [متدهای اساسی Interlocked](#2132-متدهای-اساسی-interlocked)
  - [متدهای پیشرفته Interlocked](#2133-متدهای-پیشرفته-interlocked)
  - [مثال‌های کاربردی و الگوهای رایج](#2134-مثالهای-کاربردی-و-الگوهای-رایج)
  - [مقایسه Interlocked با lock](#2135-مقایسه-interlocked-با-lock)
  - [نکات مهم و اشتباهات رایج](#2136-نکات-مهم-و-اشتباهات-رایج)
  - [بهترین روش‌ها و الگوها](#2137-بهترین-روشها-و-الگوها)
- [2.1.4 ReaderWriterLockSlim برای قفل خواندن-نوشتن](#214-readerwriterlockslim-برای-قفل-خواندن-نوشتن)
  - [مفهوم قفل خواندن-نوشتن](#2141-مفهوم-قفل-خواندن-نوشتن)
  - [متدهای اصلی ReaderWriterLockSlim](#2142-متدهای-اصلی-readerwriterlockslim)
  - [مثال کاربردی: کش داده](#2143-مثال-کاربردی-کش-داده)
  - [مزایا و معایب](#2144-مزایا-و-معایب)
  - [مقایسه با lock معمولی](#2145-مقایسه-با-lock-معمولی)
  - [نکات مهم و اشتباهات رایج](#2146-نکات-مهم-و-اشتباهات-رایج)
  - [مثال پیشرفته: سیستم فایل مجازی](#2147-مثال-پیشرفته-سیستم-فایل-مجازی)
  - [بهترین روش‌ها](#2148-بهترین-روشها)

### بخش 2: مدیریت نخ‌ها (Managing Threads)
- [2.2.1 استخر نخ (Thread Pool) با ThreadPool و Task Parallel Library (TPL)](#221-استخر-نخ-thread-pool-با-threadpool-و-task-parallel-library-tpl)
  - [مفهوم استخر نخ(Thread Pool)](#2211-مفهوم-استخر-نخ-thread-pool)
  - [نحوه کار Thread Pool](#2212-نحوه-کار-thread-pool)
  - [مدیریت خودکار تعداد نخ‌ها](#2213-مدیریت-خودکار-تعداد-نخها)
  - [Task Parallel Library (TPL)](#2214-task-parallel-library-tpl)
  - [مزایا و معایب Thread Pool](#2215-مزایا-و-معایب-thread-pool)
  - [مثال کاربردی: پردازش موازی فایل‌ها](#2216-مثال-کاربردی-پردازش-موازی-فایلها)
  - [بهترین روش‌ها](#2217-بهترین-روشها)
- [2.2.2 استفاده از ThreadPool.QueueUserWorkItem()](#222-استفاده-از-threadpoolqueueuserworkitem)
  - [مقدمه و استفاده پایه](#2221-مقدمه-و-استفاده-پایه)
  - [نوع WaitCallback](#2222-نوع-waitcallback)
  - [ارسال چند کار همزمان](#2223-ارسال-چند-کار-همزمان)
  - [منتظر ماندن برای اتمام کار](#2224-منتظر-ماندن-برای-اتمام-کار)
  - [مدیریت استثناها](#2225-مدیریت-استثناها)
  - [مقایسه با Task.Run](#2226-مقایسه-با-task-run)
  - [مثال کاربردی: پردازش فایل پس‌زمینه](#2227-مثال-کاربردی-پردازش-فایل-پسزمینه)
  - [بهترین روش‌ها و نکات](#2228-بهترین-روشها-و-نکات)
- [2.2.3 تفاوت‌های بین Thread و ThreadPool](#223-تفاوتهای-بین-thread-و-threadpool)
  - [تفاوت‌های اساسی](#2231-تفاوتهای-اساسی)
  - [مقایسه جزئیات](#2232-مقایسه-جزئیات)
  - [مثال مقایسه عملکرد](#2233-مثال-مقایسه-عملکرد)
  - [کنترل ویژگی‌های نخ](#2234-کنترل-ویژگیهای-نخ)
  - [زمان استفاده از هر کدام](#2235-زمان-استفاده-از-هر-کدام)
  - [مثال کاربردی: انتخاب ابزار مناسب](#2236-مثال-کاربردی-انتخاب-ابزار)
  - [هزینه و عملکرد](#2237-هزینه-و-عملکرد)
  - [نکات مهم](#2238-نکات-مهم)
- [2.2.4 مدیریت دستی اولویت‌های نخ](#224-مدیریت-دستی-اولویتها-نخ)
  - [مقادیر اولویت نخ](#2241-مقادیر-اولویت-نخ)
  - [نحوه کار اولویت نخ](#2242-نحوه-کار-اولویت-نخ)
  - [مثال کاربردی: پردازش بحرانی](#2243-مثال-کاربردی-پردازش-بحرانی)
  - [نکات مهم و هشدارها](#2244-نکات-مهم-و-هشدارها)
  - [بهترین روش‌ها](#2245-بهترین-روشها)
  - [مثال پیشرفته: مدیریت چند سطح اولویت](#2246-مثال-پیشرفته-مدیریت-چند-سطح-اولویت)
- [2.2.5 CancellationToken و لغو همکارانه (Cooperative Cancellation)](#225-cancellationtoken-و-لغو-همکارانه-cooperative-cancellation)
  - [مفهوم لغو همکارانه](#2251-مفهوم-لغو-همکارانه)
  - [CancellationTokenSource و CancellationToken](#2252-cancellationtokensource-و-cancellationtoken)
  - [بررسی لغو در کار](#2253-بررسی-لغو-در-کار)
  - [زمان لغو (CancelAfter)](#2254-زمان-لغو)
  - [استفاده با Task.Run](#2255-استفاده-با-task-run)
  - [استفاده با async/await](#2256-استفاده-با-async-await)
  - [لغو چند تسک](#2257-لغو-چند-تسک)
  - [ادغام چند Token (Token Linking)](#2258-ادغام-چند-token)
  - [استفاده در حلقه‌ها](#2259-استفاده-در-حلقه-ها)
  - [مدیریت منابع و Dispose](#22510-مدیریت-منابع-و-dispose)
  - [مثال کاربردی: دانلود با لغو](#22511-مثال-کاربردی-دانلود-با-لغو)
  - [بهترین روش‌ها](#22512-بهترین-روشها)

### بخش 3: برنامه‌نویسی ناهمزمان (Asynchronous Programming)
- [2.3.1 الگوهای ناهمزمان با Task، async و await](#231-الگوهای-ناهمزمان-با-task-async-و-await)
  - [بازبینی مفاهیم پایه](#2311-بازبینی-مفاهیم-پایه)
  - [الگوی پایه async/await](#2312-الگوی-پایه-async-await)
  - [تفاوت void، Task و Task<T>](#2313-تفاوت-void-task-و-taskt)
  - [الگوی زنجیره‌ای async](#2314-الگوی-زنجیره-ای-async)
  - [الگوی موازی با Task.WhenAll](#2315-الگوی-موازی-با-taskwhenall)
  - [الگوی اولین پاسخ با Task.WhenAny](#2316-الگوی-اولین-پاسخ-با-taskwhenany)
  - [الگوی ترکیبی](#2317-الگوی-ترکیبی)
  - [مثال کاربردی: پردازش داده Pipeline](#2318-مثال-کاربردی-پردازش-داده-پایپلاین)
  - [بهترین روش‌ها و نکات](#2319-بهترین-روشها-و-نکات)
- [2.3.2 ConfigureAwait(false) برای جلوگیری از قفل مرگ در برنامه‌های UI](#232-configureawaitfalse-برای-جلوگیری-از-قفل-مرگ-در-برنامههای-ui)
  - [مفهوم SynchronizationContext](#2321-مفهوم-synchronizationcontext)
  - [مشکل قفل مرگ (Deadlock)](#2322-مشکل-قفل-مرگ-deadlock)
  - [راه‌حل: ConfigureAwait(false)](#2323-راه-حل-configureawaitfalse)
  - [زمان استفاده از ConfigureAwait(false)](#2324-زمان-استفاده-از-configureawaitfalse)
  - [مثال کاربردی: Library Code](#2325-مثال-کاربردی-library)
  - [مثال کاربردی: UI Code](#2326-مثال-کاربردی-ui-code)
  - [بهبود عملکرد](#2327-بهبود-عملکرد)
  - [قوانین طلا](#2328-قوانین-طلا)
  - [مثال کامل: Library با ConfigureAwait](#2329-مثال-کامل-library)
  - [نکات مهم](#23210-نکات-مهم)
- [2.3.3 Task.Delay() در مقابل Thread.Sleep()](#233-taskdelay-در-مقابل-threadsleep)
  - [تفاوت‌های اساسی](#2331-تفاوت-های-اساسی)
  - [مشکل Thread.Sleep() در async](#2332-مشکل-threadsleep-در-async)
  - [مثال عملی تفاوت](#2333-مثال-عملی-تفاوت)
  - [استفاده صحیح Task.Delay()](#2334-استفاده-صحیح-taskdelay)
  - [استفاده صحیح Thread.Sleep()](#2335-استفاده-صحیح-threadsleep)
  - [مقایسه عملکرد](#2336-مقایسه-عملکرد)
  - [مثال کاربردی: Timeout](#2337-مثال-کاربردی-timeout)
  - [مثال کاربردی: Polling](#2338-مثال-کاربردی-polling)
  - [قوانین طلا](#2339-قوانین-طلا)
  - [نکات مهم](#23310-نکات-مهم)
- [2.3.4 مدیریت استثناها در متدهای ناهمزمان](#234-مدیریت-استثناها-در-متدهای-ناهمزمان)
  - [اساس مدیریت استثنا در async](#2341-اساس-مدیریت-استثنا-در-async)
  - [تفاوت با متدهای همزمان](#2342-تفاوت-با-متدهای-همزمان)
  - [استثنا در Task.WhenAll](#2343-استثنا-در-taskwhenall)
  - [مدیریت استثنا در Task.WhenAny](#2344-مدیریت-استثنا-در-taskwhenany)
  - [استثنا در async void](#2345-استثنا-در-void-async)
  - [مدیریت چند استثنا](#2346-مدیریت-چند-استثنا)
  - [مثال کاربردی: مدیریت استثنا در API Calls](#2347-مثال-کاربردی-مدیریت-استثنا)
  - [استثنا در ContinueWith](#2348-استثنا-در-continuewith)
  - [بهترین روش‌ها](#2349-بهترین-روشها)
  - [مثال کامل: مدیریت استثنا در Pipeline](#23410-مثال-کامل)
- [2.3.5 تکمیل و ادامه تسک با ContinueWith()](#235-تکمیل-و-ادامه-تسک-با-continuewith)
  - [مفهوم ContinueWith](#2351-مفهوم-continuewith)
  - [استفاده پایه](#2352-استفاده-پایه)
  - [انواع ContinueWith](#2353-انواع-continuewith)
  - [مدیریت استثنا](#2354-مدیریت-استثنا)
  - [مقایسه با async/await](#2355-مقایسه-با-async-await)
  - [مثال کاربردی: پردازش Pipeline](#2356-مثال-کاربردی-پردازش-پایپلاین)
  - [مثال کاربردی: Retry Logic](#2357-مثال-کاربردی-retry-logic)
  - [TaskContinuationOptions](#2358-taskcontinuationoptions)
  - [مثال پیشرفته: چند ادامه](#2359-مثال-پیشرفته-چند-ادامه)
  - [بهترین روش‌ها](#23510-بهترین-روشها)
  - [نکات مهم](#23511-نکات-مهم)
- [2.3.6 استفاده از TaskCompletionSource برای سناریوهای تکمیل تسک سفارشی](#236-استفاده-از-taskcompletionsource-برای-سناریوهای-تکمیل-تسک-سفارشی)
  - [مفهوم TaskCompletionSource](#2361-مفهوم-taskcompletionsource)
  - [استفاده پایه](#2362-استفاده-پایه)
  - [تبدیل Event به Task](#2363-تبدیل-event-به-task)
  - [تبدیل Callback به Task](#2364-تبدیل-callback-به-task)
  - [مدیریت لغو](#2365-مدیریت-لغو)
  - [مثال کاربردی: Queue با Task](#2366-مثال-کاربردی-queue-با-task)
  - [مثال کاربردی: Signal](#2367-مثال-کاربردی-signal)
  - [مثال کاربردی: Promise Pattern](#2368-مثال-کاربردی-promise-pattern)
  - [مثال پیشرفته: Race Condition](#2369-مثال-پیشرفته-race-condition)
  - [بهترین روش‌ها](#23610-بهترین-روشها)
  - [نکات مهم](#23611-نکات-مهم)

### بخش 4: برنامه‌نویسی موازی (Parallel Programming)
- [2.4.1 مقدمه‌ای بر برنامه‌نویسی موازی در C#](#241-مقدمهای-بر-برنامهنویسی-موازی-در-c)
  - [مفهوم برنامه‌نویسی موازی](#2411-مفهوم-برنامه‌نویسی-موازی)
  - [تفاوت موازی و همزمان](#2412-تفاوت-موازی-و-همزمان)
  - [مزایای برنامه‌نویسی موازی](#2413-مزایای-برنامه‌نویسی-موازی)
  - [معایب و چالش‌ها](#2414-معایب-و-چالش‌ها)
  - [زمان استفاده از موازی‌سازی](#2415-زمان-استفاده-از-موازی‌سازی)
  - [معرفی Parallel Class](#2416-معرفی-parallel-class)
  - [مثال کاربردی: پردازش تصویر](#2417-مثال-کاربردی-پردازش-تصویر)
  - [مثال کاربردی: محاسبه ریاضی](#2418-مثال-کاربردی-محاسبه-ریاضی)
  - [نکات مهم](#2419-نکات-مهم)
  - [بهترین روش‌ها](#24110-بهترین-روشها)
- [2.4.2 حلقه‌های موازی: Parallel.For() و Parallel.ForEach()](#242-حلقههای-موازی-parallelfor-و-parallelforeach)
  - [Parallel.For() پایه](#2421-parallelfor-پایه)
  - [Parallel.ForEach() پایه](#2422-parallelforeach-پایه)
  - [تفاوت با حلقه‌های عادی](#2423-تفاوت-با-حلقه-های-عادی)
  - [Overload های Parallel.For](#2424-overload-های-parallelfor)
  - [Overload های Parallel.ForEach](#2425-overload-های-parallelforeach)
  - [استفاده از ParallelLoopState](#2426-استفاده-از-parallelloopstate)
  - [Local State برای بهینه‌سازی](#2427-local-state-برای-بهینه-سازی)
  - [مثال کاربردی: پردازش فایل‌ها](#2428-مثال-کاربردی-پردازش-فایل-ها)
  - [مثال کاربردی: پردازش داده بزرگ](#2429-مثال-کاربردی-پردازش-داده-بزرگ)
  - [محدود کردن درجه موازی‌سازی](#24210-محدود-کردن-درجه-موازی‌سازی)
  - [مقایسه عملکرد](#24211-مقایسه-عملکرد)
  - [بهترین روش‌ها](#24212-بهترین-روشها)
  - [نکات مهم](#24213-نکات-مهم)
- [2.4.3 مدیریت استثناها در حلقه‌های موازی](#243-مدیریت-استثناها-در-حلقههای-موازی)
  - [مشکل استثنا در حلقه‌های موازی](#2431-مشکل-استثنا-در-حلقه-های-موازی)
  - [AggregateException](#2432-aggregateexception)
  - [مدیریت استثنا در هر تکرار](#2433-مدیریت-استثنا-در-هر-تکرار)
  - [استفاده از Handle](#2434-استفاده-از-handle)
  - [استثنا در Local State](#2435-استثنا-در-local-state)
  - [مثال کاربردی: پردازش فایل با مدیریت خطا](#2436-مثال-کاربردی-پردازش-فایل-با-مدیریت-خطا)
  - [استفاده از Flatten](#2437-استفاده-از-flatten)
  - [بهترین روش‌ها](#2438-بهترین-روشها)
  - [مثال کامل: سیستم پردازش با مدیریت خطا](#2439-مثال-کامل)
- [2.4.4 محدود کردن موازی‌سازی با ParallelOptions](#244-محدود-کردن-موازیسازی-با-paralleloptions)
  - [معرفی ParallelOptions](#2441-معرفی-paralleloptions)
  - [MaxDegreeOfParallelism](#2442-maxdegreeofparallelism)
  - [CancellationToken](#2443-cancellationtoken)
  - [TaskScheduler](#2444-taskscheduler)
  - [مثال کاربردی: کنترل درجه موازی‌سازی](#2445-مثال-کاربردی-کنترل-درجه-موازی‌سازی)
  - [مثال کاربردی: پردازش با کنترل دقیق](#2446-مثال-کاربردی-پردازش-با-کنترل-دقیق)
  - [محدود کردن برای منابع محدود](#2447-محدود-کردن-برای-منابع-محدود)
  - [مقایسه عملکرد](#2448-مقایسه-عملکرد)
  - [بهترین روش‌ها](#2449-بهترین-روشها)
  - [نکات مهم](#24410-نکات-مهم)

---

پس از یادگیری اصول پایه‌ای `Threading` و `Tasks`، زمان آن رسیده است که به مفاهیم میانی بپردازیم. در این بخش، شما یاد خواهید گرفت که چگونه همزمانی(Concurrency) را به صورت حرفه‌ای مدیریت کنید و از مشکلات رایج در برنامه‌نویسی چندنخی جلوگیری نمایید.

## 2.1. همگام‌سازی پیشرفته (Advanced Synchronization)

همگام‌سازی(Synchronization) یکی از مهم‌ترین جنبه‌های برنامه‌نویسی چندنخی است. در سطح میانی، باید علاوه بر آشنایی با `lock` و `Monitor` پایه، با تکنیک‌های پیشرفته‌تر و خطرات احتمالی مانند قفل مرگ(Deadlock) آشنا شوید.

<a id="211-قفلها-و-قفل-مرگ-locks-and-deadlocks"></a>
### 2.1.1 قفل‌ها و قفل مرگ (Locks and Deadlocks)

قفل مرگ(Deadlock) یکی از جدی‌ترین مشکلات در برنامه‌نویسی چندنخی است که می‌تواند باعث شود برنامه شما به طور کامل متوقف شود. درک نحوه جلوگیری از قفل مرگ(Deadlock) برای هر توسعه‌دهنده چندنخی ضروری است.

<a id="2111-قفل-مرگ-چیست-و-چطور-رخ-می‌دهد"></a>
#### قفل مرگ(Deadlock) چیست و چطور رخ می‌دهد؟

قفل مرگ(Deadlock) زمانی رخ می‌دهد که دو یا چند نخ به طور نامحدود منتظر یکدیگر می‌مانند تا یک منبع را آزاد کنند. هر نخ قفلی دارد که دیگری نیاز دارد، و هیچ یک نمی‌تواند پیش برود.

**سناریوی کلاسیک قفل مرگ(Deadlock):**

```csharp
object lock1 = new object();
object lock2 = new object();

// نخ اول
Thread thread1 = new Thread(() => {
    lock (lock1)
    {
        Console.WriteLine("نخ 1: قفل 1 را گرفت");
        Thread.Sleep(100); // شبیه‌سازی کار
        lock (lock2) // منتظر قفل 2 می‌ماند
        {
            Console.WriteLine("نخ 1: قفل 2 را گرفت");
        }
    }
});

// نخ دوم
Thread thread2 = new Thread(() => {
    lock (lock2)
    {
        Console.WriteLine("نخ 2: قفل 2 را گرفت");
        Thread.Sleep(100); // شبیه‌سازی کار
        lock (lock1) // منتظر قفل 1 می‌ماند - قفل مرگ(Deadlock)!
        {
            Console.WriteLine("نخ 2: قفل 1 را گرفت");
        }
    }
});

thread1.Start();
thread2.Start();
thread1.Join();
thread2.Join();
```

**تحلیل قفل مرگ(Deadlock) در این مثال:**

1. نخ 1 قفل 1 را می‌گیرد و سپس منتظر قفل 2 می‌ماند
2. نخ 2 قفل 2 را می‌گیرد و سپس منتظر قفل 1 می‌ماند
3. نخ 1 نمی‌تواند قفل 2 را بگیرد چون نخ 2 آن را دارد
4. نخ 2 نمی‌تواند قفل 1 را بگیرد چون نخ 1 آن را دارد
5. هر دو نخ برای همیشه منتظر می‌مانند - قفل مرگ(Deadlock) رخ داده است

<a id="2112-راهحلهای-جلوگیری-از-قفل-مرگ"></a>
#### راه‌حل‌های جلوگیری از قفل مرگ(Deadlock)

**راه‌حل 1: همیشه قفل‌ها را به همان ترتیب بگیرید**

مهم‌ترین و ساده‌ترین راه برای جلوگیری از قفل مرگ(Deadlock)، این است که همیشه قفل‌ها را به ترتیب یکسان بگیرید:

```csharp
object lock1 = new object();
object lock2 = new object();

// نخ اول - همیشه ابتدا lock1 سپس lock2
Thread thread1 = new Thread(() => {
    lock (lock1)
    {
        Console.WriteLine("نخ 1: قفل 1 را گرفت");
        Thread.Sleep(100);
        lock (lock2) // همیشه بعد از lock1
        {
            Console.WriteLine("نخ 1: قفل 2 را گرفت");
        }
    }
});

// نخ دوم - همیشه ابتدا lock1 سپس lock2 (همان ترتیب!)
Thread thread2 = new Thread(() => {
    lock (lock1) // همیشه ابتدا lock1
    {
        Console.WriteLine("نخ 2: قفل 1 را گرفت");
        Thread.Sleep(100);
        lock (lock2) // سپس lock2
        {
            Console.WriteLine("نخ 2: قفل 2 را گرفت");
        }
    }
});

thread1.Start();
thread2.Start();
thread1.Join();
thread2.Join();
// قفل مرگ(Deadlock) رخ نخواهد داد!
```

**چرا این روش کار می‌کند؟**

- اگر هر دو نخ همیشه قفل‌ها را به ترتیب یکسان بگیرند (مثلاً همیشه ابتدا lock1 سپس lock2)، یکی از نخ‌ها باید منتظر دیگری بماند
- نخ اولی که lock1 را بگیرد، می‌تواند lock2 را هم بگیرد و کارش را تمام کند
- سپس نخ دوم می‌تواند lock1 و سپس lock2 را بگیرد
- هیچ قفل مرگی(Deadlock) رخ نمی‌دهد

**راه‌حل 2: استفاده از Monitor.TryEnter با زمان انتظار**

می‌توانید از `Monitor.TryEnter` استفاده کنید که با یک زمان انتظار مشخص، اگر نتوانست قفل را بگیرد، از تلاش دست بکشد:

```csharp
object lock1 = new object();
object lock2 = new object();

Thread thread1 = new Thread(() => {
    lock (lock1)
    {
        Console.WriteLine("نخ 1: قفل 1 را گرفت");
        Thread.Sleep(100);
        
        // تلاش برای گرفتن قفل 2 با زمان انتظار
        if (Monitor.TryEnter(lock2, TimeSpan.FromMilliseconds(500)))
        {
            try
            {
                Console.WriteLine("نخ 1: قفل 2 را گرفت");
            }
            finally
            {
                Monitor.Exit(lock2);
            }
        }
        else
        {
            Console.WriteLine("نخ 1: نتوانست قفل 2 را بگیرد - آزاد کردن قفل 1");
            // می‌توانید استراتژی دیگری را پیاده‌سازی کنید
        }
    }
});
```

**راه‌حل 3: استفاده از timeout در lock**

در C# می‌توانید از یک الگوی ترکیبی استفاده کنید:

```csharp
private readonly object lock1 = new object();
private readonly object lock2 = new object();

public void SafeOperation()
{
    bool lock1Taken = false;
    bool lock2Taken = false;
    
    try
    {
        // تلاش برای گرفتن قفل 1
        Monitor.TryEnter(lock1, TimeSpan.FromSeconds(5), ref lock1Taken);
        if (!lock1Taken)
        {
            throw new TimeoutException("نتوانست قفل 1 را بگیرد");
        }
        
        // تلاش برای گرفتن قفل 2
        Monitor.TryEnter(lock2, TimeSpan.FromSeconds(5), ref lock2Taken);
        if (!lock2Taken)
        {
            throw new TimeoutException("نتوانست قفل 2 را بگیرد");
        }
        
        // انجام عملیات در بخش بحرانی(Critical Section)
        // ...
    }
    finally
    {
        // آزاد کردن قفل‌ها به ترتیب معکوس
        if (lock2Taken) Monitor.Exit(lock2);
        if (lock1Taken) Monitor.Exit(lock1);
    }
}
```

<a id="2113-تشخیص-قفل-مرگ-در-زمان-اجرا"></a>
#### تشخیص قفل مرگ(Deadlock) در زمان اجرا

گاهی اوقات تشخیص قفل مرگ(Deadlock) در کد واقعی دشوار است. می‌توانید از ابزارهایی مثل Visual Studio Diagnostic Tools استفاده کنید:

```csharp
// برای تست و تشخیص قفل مرگ(Deadlock)
public class DeadlockDetector
{
    private static readonly Dictionary<int, string> lockOwners = new Dictionary<int, string>();
    private static readonly object detectionLock = new object();
    
    public static void EnterLock(object lockObject, string threadName)
    {
        int lockHash = lockObject.GetHashCode();
        lock (detectionLock)
        {
            if (lockOwners.ContainsKey(lockHash))
            {
                Console.WriteLine($"⚠️ هشدار: نخ {threadName} منتظر قفلی است که {lockOwners[lockHash]} دارد");
            }
            else
            {
                lockOwners[lockHash] = threadName;
            }
        }
    }
    
    public static void ExitLock(object lockObject, string threadName)
    {
        int lockHash = lockObject.GetHashCode();
        lock (detectionLock)
        {
            lockOwners.Remove(lockHash);
        }
    }
}
```

<a id="2114-نکات-کلیدی-برای-جلوگیری-از-قفل-مرگ"></a>
#### نکات کلیدی برای جلوگیری از قفل مرگ(Deadlock)

1. **همیشه ترتیب یکسان:** همیشه قفل‌ها را به ترتیب یکسان بگیرید
2. **استفاده از timeout:** از `Monitor.TryEnter` با زمان انتظار استفاده کنید
3. **کاهش تعداد قفل‌ها:** تا حد ممکن تعداد قفل‌ها را کاهش دهید
4. **عدم نگه‌داری قفل در مدت طولانی:** سعی کنید مدت زمان نگه‌داری قفل را کوتاه کنید
5. **استفاده از lock-free structures:** در صورت امکان از ساختارهای بدون قفل استفاده کنید

<a id="2115-ساختارهای-بدون-قفل"></a>
#### ساختارهای بدون قفل(Lock-Free Structures): راهکار پیشرفته برای جلوگیری از قفل مرگ(Deadlock)

ساختارهای بدون قفل(Lock-Free Structures) یکی از پیشرفته‌ترین تکنیک‌ها برای نوشتن کدهای چندنخی هستند که از قفل‌های سنتی استفاده نمی‌کنند. این ساختارها با استفاده از عملیات اتمی(Atomic Operations) و مقایسه و تعویض(Compare-And-Swap) کار می‌کنند.

<a id="21151-ساختارهای-بدون-قفل-چیست"></a>
#### ساختارهای بدون قفل(Lock-Free) چیست؟

ساختارهای بدون قفل(Lock-Free Structures) به ساختارهای داده‌ای گفته می‌شود که برای دسترسی همزمان(Concurrent Access) از قفل(Lock) استفاده نمی‌کنند. به جای استفاده از قفل، این ساختارها از عملیات اتمی(Atomic Operations) استفاده می‌کنند که در سطح سخت‌افزار پشتیبانی می‌شوند.

**تفاوت کلیدی با ساختارهای مبتنی بر قفل(Lock-Based):**

```csharp
// روش مبتنی بر قفل(Lock-Based) - سنتی
private readonly object lockObject = new object();
private int counter = 0;

public void IncrementLockBased()
{
    lock (lockObject) // نخ‌ها منتظر یکدیگر می‌مانند
    {
        counter++; // بخش بحرانی(Critical Section)
    }
}

// روش بدون قفل(Lock-Free) - استفاده از Interlocked
private int counter = 0;

public void IncrementLockFree()
{
    Interlocked.Increment(ref counter); // بدون قفل، عملیات اتمی(Atomic)
}
```

<a id="21152-مزایای-ساختارهای-بدون-قفل"></a>
#### مزایای ساختارهای بدون قفل(Lock-Free)

**1. عدم وجود قفل مرگ(Deadlock):**
- از آنجایی که قفلی وجود ندارد، قفل مرگ(Deadlock) غیرممکن است
- این بزرگ‌ترین مزیت ساختارهای بدون قفل(Lock-Free) است

**2. عملکرد بهتر در رقابت بالا(High Contention):**
- در شرایطی که نخ‌های زیادی سعی دارند به داده دسترسی پیدا کنند
- در ساختارهای مبتنی بر قفل(Lock-Based)، نخ‌ها باید منتظر بمانند
- در ساختارهای بدون قفل(Lock-Free)، نخ‌ها می‌توانند به صورت موازی(Parallel) کار کنند

```csharp
// تست عملکرد: Lock-Based vs Lock-Free
public class PerformanceComparison
{
    private readonly object lockObject = new object();
    private int counterLockBased = 0;
    private int counterLockFree = 0;
    
    // روش مبتنی بر قفل(Lock-Based)
    public void IncrementLockBased()
    {
        lock (lockObject)
        {
            counterLockBased++;
        }
    }
    
    // روش بدون قفل(Lock-Free)
    public void IncrementLockFree()
    {
        Interlocked.Increment(ref counterLockFree);
    }
    
    public void RunComparison()
    {
        const int iterations = 10000000;
        var stopwatch = System.Diagnostics.Stopwatch.StartNew();
        
        // تست Lock-Based
        var tasks1 = new List<Task>();
        for (int i = 0; i < 10; i++)
        {
            tasks1.Add(Task.Run(() => {
                for (int j = 0; j < iterations / 10; j++)
                {
                    IncrementLockBased();
                }
            }));
        }
        Task.WaitAll(tasks1.ToArray());
        stopwatch.Stop();
        Console.WriteLine($"Lock-Based: {stopwatch.ElapsedMilliseconds} ms");
        
        // تست Lock-Free
        stopwatch.Restart();
        var tasks2 = new List<Task>();
        for (int i = 0; i < 10; i++)
        {
            tasks2.Add(Task.Run(() => {
                for (int j = 0; j < iterations / 10; j++)
                {
                    IncrementLockFree();
                }
            }));
        }
        Task.WaitAll(tasks2.ToArray());
        stopwatch.Stop();
        Console.WriteLine($"Lock-Free: {stopwatch.ElapsedMilliseconds} ms");
        // معمولاً Lock-Free سریع‌تر است
    }
}
```

**3. عدم مسدود شدن(Non-Blocking):**
- نخ‌ها منتظر یکدیگر نمی‌مانند
- حتی اگر عملیات ناموفق باشد، نخ مسدود(Blocked) نمی‌شود
- این باعث می‌شود برنامه واکنش‌گراتر(Responsive) باشد

<a id="21153-معایب-و-چالشهای-ساختارهای-بدون-قفل"></a>
#### معایب و چالش‌های ساختارهای بدون قفل(Lock-Free)

**1. پیچیدگی پیاده‌سازی:**
- پیاده‌سازی ساختارهای بدون قفل(Lock-Free) بسیار پیچیده است
- نیاز به درک عمیق از معماری سخت‌افزار و حافظه دارد
- خطاهای کوچک می‌تواند باعث باگ‌های بسیار جدی شود

**2. محدودیت در عملیات پیچیده:**
- برای عملیات ساده (مثل افزایش شمارنده) عالی است
- برای عملیات پیچیده‌تر (مثل درج در لیست پیوندی) بسیار دشوار است

**3. خطر ABA Problem:**
- مشکل ABA زمانی رخ می‌دهد که یک مقدار تغییر می‌کند و دوباره به مقدار اولیه برمی‌گردد
- ممکن است نخ فکر کند که چیزی تغییر نکرده است

<a id="21154-کلاس-interlocked"></a>
#### کلاس Interlocked: ابزار اصلی برای عملیات بدون قفل(Lock-Free) در C#

کلاس `Interlocked` در .NET مجموعه‌ای از متدهای اتمی(Atomic Methods) را فراهم می‌کند که برای ساختارهای بدون قفل(Lock-Free) استفاده می‌شوند.

**متدهای مهم Interlocked:**

```csharp
// افزایش و کاهش اتمی(Atomic Increment/Decrement)
int value = 10;
Interlocked.Increment(ref value); // value = 11
Interlocked.Decrement(ref value); // value = 10

// افزودن اتمی(Atomic Add)
int value = 10;
Interlocked.Add(ref value, 5); // value = 15

// تعویض اتمی(Atomic Exchange)
int value = 10;
int oldValue = Interlocked.Exchange(ref value, 20);
// value = 20, oldValue = 10

// مقایسه و تعویض(Compare-And-Swap)
int value = 10;
int comparisonValue = 10;
int newValue = 20;
bool success = Interlocked.CompareExchange(ref value, newValue, comparisonValue) == comparisonValue;
// اگر value برابر با comparisonValue بود، آن را به newValue تغییر می‌دهد
// value = 20, success = true
```

<a id="21155-مثال-عملی-صف-بدون-قفل"></a>
#### مثال عملی: پیاده‌سازی صف بدون قفل(Lock-Free Queue)

در .NET، `System.Collections.Concurrent` مجموعه‌ای از ساختارهای بدون قفل(Lock-Free) یا کم-قفل(Lock-Free-ish) را فراهم می‌کند:

```csharp
using System.Collections.Concurrent;

// ConcurrentQueue یک صف بدون قفل(Lock-Free) است
ConcurrentQueue<int> queue = new ConcurrentQueue<int>();

// اضافه کردن به صف - بدون قفل
queue.Enqueue(1);
queue.Enqueue(2);
queue.Enqueue(3);

// خواندن از صف - بدون قفل
if (queue.TryDequeue(out int result))
{
    Console.WriteLine($"خوانده شد: {result}");
}

// ConcurrentStack نیز بدون قفل(Lock-Free) است
ConcurrentStack<int> stack = new ConcurrentStack<int>();
stack.Push(1);
stack.Push(2);
if (stack.TryPop(out int poppedValue))
{
    Console.WriteLine($"خوانده شد: {poppedValue}");
}

// ConcurrentDictionary از قفل‌های ریز-دانه(Fine-Grained Locks) استفاده می‌کند
ConcurrentDictionary<string, int> dictionary = new ConcurrentDictionary<string, int>();
dictionary.TryAdd("key", 42);
dictionary.AddOrUpdate("key", 1, (key, oldValue) => oldValue + 1);
```

<a id="21156-مثال-پیشرفته-شمارنده-بدون-قفل"></a>
#### مثال پیشرفته: پیاده‌سازی شمارنده بدون قفل(Lock-Free Counter)

```csharp
public class LockFreeCounter
{
    private long _value = 0;
    
    public long Value => _value;
    
    // افزایش بدون قفل(Lock-Free)
    public long Increment()
    {
        return Interlocked.Increment(ref _value);
    }
    
    // کاهش بدون قفل(Lock-Free)
    public long Decrement()
    {
        return Interlocked.Decrement(ref _value);
    }
    
    // افزودن مقدار بدون قفل(Lock-Free)
    public long Add(long amount)
    {
        return Interlocked.Add(ref _value, amount);
    }
    
    // خواندن اتمی(Atomic Read) - برای long
    public long Read()
    {
        return Interlocked.Read(ref _value);
    }
    
    // بازنشانی(Reset) بدون قفل(Lock-Free)
    public long Reset()
    {
        return Interlocked.Exchange(ref _value, 0);
    }
}

// استفاده
var counter = new LockFreeCounter();
var tasks = new List<Task>();

// چندین نخ به صورت همزمان(Concurrent) شمارنده را افزایش می‌دهند
for (int i = 0; i < 10; i++)
{
    tasks.Add(Task.Run(() => {
        for (int j = 0; j < 1000; j++)
        {
            counter.Increment(); // بدون قفل، امن و سریع
        }
    }));
}

await Task.WhenAll(tasks);
Console.WriteLine($"نتیجه نهایی: {counter.Value}"); // باید 10000 باشد
```

<a id="21157-مقایسه-چه-زمانی-از-lock-free-استفاده-کنیم"></a>
#### مقایسه: چه زمانی از Lock-Free استفاده کنیم؟

| ویژگی | Lock-Based | Lock-Free |
|-------|------------|-----------|
| **سادگی پیاده‌سازی** | آسان | پیچیده |
| **عملکرد (رقابت کم)** | خوب | خوب |
| **عملکرد (رقابت بالا)** | متوسط | عالی |
| **قفل مرگ(Deadlock)** | امکان‌پذیر | غیرممکن |
| **عملیات پیچیده** | آسان | بسیار دشوار |
| **مناسب برای** | بیشتر موارد | عملیات ساده و پرترافیک |

**زمان استفاده از Lock-Free:**
- عملیات ساده (شمارنده، فلگ)
- رقابت بالا(High Contention) - نخ‌های زیادی
- نیاز به عملکرد بسیار بالا
- نمی‌توانید خطر قفل مرگ(Deadlock) را بپذیرید

**زمان استفاده از Lock-Based:**
- عملیات پیچیده (درج در درخت، پردازش پیچیده)
- رقابت کم(Low Contention)
- نیاز به سادگی و خوانایی کد
- عملیات زمان‌بر که نیاز به قفل دارد

<a id="21158-نکات-مهم-برای-استفاده-از-lock-free"></a>
#### نکات مهم برای استفاده از Lock-Free

1. **استفاده از کلاس‌های Concurrent:** در بیشتر موارد، استفاده از کلاس‌های موجود در `System.Collections.Concurrent` بهتر از نوشتن ساختارهای بدون قفل(Lock-Free) دستی است

2. **تست دقیق:** ساختارهای بدون قفل(Lock-Free) نیاز به تست دقیق دارند، چون باگ‌ها ممکن است به ندرت و فقط در شرایط خاص رخ دهند

3. **مستندسازی:** کدهای بدون قفل(Lock-Free) باید به خوبی مستندسازی شوند

4. **اندازه گیری عملکرد:** قبل و بعد از استفاده از Lock-Free، عملکرد را اندازه‌گیری کنید

<a id="21159-خلاصه-ساختارهای-بدون-قفل"></a>
#### خلاصه ساختارهای بدون قفل(Lock-Free)

- ساختارهای بدون قفل(Lock-Free) از عملیات اتمی(Atomic Operations) به جای قفل استفاده می‌کنند
- مزیت اصلی: عدم وجود قفل مرگ(Deadlock) و عملکرد بهتر در رقابت بالا(High Contention)
- معایب: پیچیدگی پیاده‌سازی و محدودیت در عملیات پیچیده
- کلاس `Interlocked` و `System.Collections.Concurrent` ابزارهای اصلی برای کار بدون قفل(Lock-Free) در C# هستند
- برای بیشتر موارد، استفاده از کلاس‌های Concurrent موجود بهتر از نوشتن دستی است

<a id="2116-تأثیرات-و-عواقب-قفل-مرگ"></a>
#### تأثیرات و عواقب قفل مرگ(Deadlock)

**مشکلات ایجاد شده:**
- برنامه به طور کامل متوقف می‌شود
- منابع سیستم هدر می‌رود (نخ‌ها بلااستفاده می‌مانند)
- تشخیص مشکل در تولید(Production) بسیار دشوار است
- کاربران برنامه را به عنوان "یخ‌زده" تجربه می‌کنند

**مزایای جلوگیری از قفل مرگ(Deadlock):**
- برنامه پایدارتر و قابل اعتمادتر می‌شود
- عملکرد بهتر و استفاده بهینه از منابع
- تجربه کاربری بهتر

<a id="2117-خلاصه-قفل-مرگ"></a>
#### خلاصه

- قفل مرگ(Deadlock) زمانی رخ می‌دهد که چندین نخ به طور نامحدود منتظر یکدیگر می‌مانند
- مهم‌ترین راه جلوگیری: همیشه قفل‌ها را به ترتیب یکسان بگیرید
- استفاده از `Monitor.TryEnter` با timeout می‌تواند کمک کند
- قفل مرگ(Deadlock) می‌تواند برنامه را کاملاً متوقف کند و باید جدی گرفته شود

<a id="212-کلاس-monitor-mutex-semaphore-و-semaphoreslim"></a>
### 2.1.2 کلاس Monitor، Mutex، Semaphore و SemaphoreSlim

در بخش قبلی با مفاهیم پایه‌ای `lock` و `Monitor` و `Mutex` آشنا شدید. در سطح میانی، باید با قابلیت‌های پیشرفته‌تر این کلاس‌ها و همچنین `Semaphore` و `SemaphoreSlim` که برای کنترل دسترسی چندین نخ به یک منبع استفاده می‌شوند، آشنا شوید.

<a id="2121-کلاس-monitor-پیشرفته"></a>
#### 2.1.2.1 کلاس Monitor پیشرفته: Wait، Pulse و PulseAll

کلاس `Monitor` علاوه بر `Enter` و `Exit`، متدهای قدرتمند دیگری مثل `Wait`، `Pulse` و `PulseAll` دارد که برای هماهنگ‌سازی پیشرفته‌تر نخ‌ها استفاده می‌شوند. این متدها به شما امکان می‌دهند که نخ‌ها را به صورت دقیق‌تر کنترل کنید.

**مفهوم Wait و Pulse:**

- `Monitor.Wait(object obj)`: نخ فعلی را آزاد می‌کند و منتظر می‌ماند تا نخ دیگری با `Pulse` یا `PulseAll` آن را بیدار کند
- `Monitor.Pulse(object obj)`: یک نخ از نخ‌های منتظر را بیدار می‌کند
- `Monitor.PulseAll(object obj)`: تمام نخ‌های منتظر را بیدار می‌کند

**چطور کار می‌کند؟**

```csharp
object lockObject = new object();
Queue<string> messageQueue = new Queue<string>();

// نخ تولیدکننده(Producer)
Thread producer = new Thread(() => {
    for (int i = 0; i < 5; i++)
    {
        lock (lockObject)
        {
            messageQueue.Enqueue($"پیام {i}");
            Console.WriteLine($"ارسال شد: پیام {i}");
            Monitor.Pulse(lockObject); // بیدار کردن یک نخ مصرف‌کننده(Consumer)
        }
        Thread.Sleep(1000);
    }
});

// نخ مصرف‌کننده(Consumer)
Thread consumer = new Thread(() => {
    while (true)
    {
        lock (lockObject)
        {
            // منتظر می‌ماند تا پیامی در صف باشد
            while (messageQueue.Count == 0)
            {
                Monitor.Wait(lockObject); // آزاد کردن قفل و انتظار
            }
            
            string message = messageQueue.Dequeue();
            Console.WriteLine($"دریافت شد: {message}");
        }
        
        // شبیه‌سازی پردازش
        Thread.Sleep(500);
    }
});

producer.Start();
consumer.Start();
producer.Join();
```

**تحلیل نحوه کار Wait و Pulse:**

1. **نخ مصرف‌کننده(Consumer) وارد `lock` می‌شود:** قفل را می‌گیرد
2. **بررسی می‌کند که آیا پیامی در صف هست:** اگر نباشد، `Monitor.Wait` فراخوانی می‌شود
3. **`Monitor.Wait` چه می‌کند؟**
   - قفل را آزاد می‌کند (نخ تولیدکننده می‌تواند وارد شود)
   - نخ مصرف‌کننده به صف انتظار منتقل می‌شود
   - نخ مصرف‌کننده مسدود(Blocked) می‌شود و منتظر `Pulse` می‌ماند
4. **نخ تولیدکننده وارد `lock` می‌شود:** پیام را به صف اضافه می‌کند
5. **`Monitor.Pulse` فراخوانی می‌شود:** یک نخ از صف انتظار بیدار می‌شود
6. **نخ مصرف‌کننده دوباره قفل را می‌گیرد:** از `Wait` خارج می‌شود و کد ادامه می‌یابد

**مزایای استفاده از Wait و Pulse:**

- **بهینه‌تر از polling:** به جای بررسی مداوم (polling)، نخ‌ها فقط زمانی فعال می‌شوند که داده جدیدی وجود دارد
- **کاهش مصرف CPU:** نخ‌ها در حالت انتظار CPU استفاده نمی‌کنند
- **الگوی Producer-Consumer:** برای پیاده‌سازی صف‌های پیام ایده‌آل است

**نکته مهم: استفاده از while به جای if**

همیشه از `while` برای بررسی شرط قبل از `Wait` استفاده کنید:

```csharp
// ✅ درست - استفاده از while
while (messageQueue.Count == 0)
{
    Monitor.Wait(lockObject);
}

// ❌ نادرست - استفاده از if
if (messageQueue.Count == 0)
{
    Monitor.Wait(lockObject);
    // ممکن است بعد از Wait، هنوز صف خالی باشد!
}
```

**چرا از while استفاده کنیم؟**

- ممکن است چندین نخ منتظر باشند و فقط یکی بیدار شود
- ممکن است شرط هنوز برقرار نباشد (مثلاً پیام قبلاً توسط نخ دیگری برداشته شده)
- `while` تضمین می‌کند که شرط قبل از ادامه اجرا برقرار است

<a id="2122-monitor-tryenter-و-timeout"></a>
#### 2.1.2.2 Monitor.TryEnter و کنترل زمان انتظار

علاوه بر `Monitor.Enter` که مسدودکننده(Blocking) است، `Monitor.TryEnter` وجود دارد که می‌تواند با timeout استفاده شود تا از قفل مرگ(Deadlock) جلوگیری کند.

**استفاده از TryEnter:**

```csharp
object lockObject = new object();

// تلاش برای گرفتن قفل با زمان انتظار
if (Monitor.TryEnter(lockObject, TimeSpan.FromSeconds(5)))
{
    try
    {
        // بخش بحرانی(Critical Section)
        Console.WriteLine("قفل گرفته شد");
        Thread.Sleep(2000);
    }
    finally
    {
        Monitor.Exit(lockObject);
    }
}
else
{
    Console.WriteLine("نتوانست قفل را بگیرد - timeout");
    // استراتژی جایگزین
}
```

**استفاده از TryEnter با ref bool:**

```csharp
object lockObject = new object();
bool lockTaken = false;

try
{
    Monitor.TryEnter(lockObject, TimeSpan.FromSeconds(5), ref lockTaken);
    if (lockTaken)
    {
        // بخش بحرانی(Critical Section)
        Console.WriteLine("قفل گرفته شد");
    }
    else
    {
        Console.WriteLine("Timeout - قفل گرفته نشد");
    }
}
finally
{
    if (lockTaken)
    {
        Monitor.Exit(lockObject);
    }
}
```

**مزایای TryEnter:**

- **جلوگیری از قفل مرگ(Deadlock):** اگر قفل در دسترس نباشد، timeout می‌شود
- **کنترل بهتر:** می‌توانید تصمیم بگیرید که در صورت عدم دسترسی به قفل چه کاری انجام دهید
- **مناسب برای سناریوهای Real-Time:** در سیستم‌های بلادرنگ که نمی‌توانید منتظر بمانید

<a id="2123-کلاس-mutex-پیشرفته"></a>
#### 2.1.2.3 کلاس Mutex پیشرفته: Named Mutex و همگام‌سازی بین فرآیندی

در سطح میانی، باید با قابلیت‌های پیشرفته‌تر `Mutex` مثل Named Mutex که برای همگام‌سازی بین فرآیندهای مختلف(Inter-Process) استفاده می‌شود، آشنا شوید.

**Mutex نام‌دار(Named Mutex) برای همگام‌سازی بین فرآیندی:**

```csharp
// ایجاد یک Mutex نام‌دار که بین فرآیندها مشترک است
string mutexName = "Global\\MySharedMutex";
bool createdNew;
Mutex mutex = new Mutex(true, mutexName, out createdNew);

try
{
    if (createdNew)
    {
        Console.WriteLine("Mutex جدید ایجاد شد");
    }
    else
    {
        Console.WriteLine("Mutex از قبل وجود داشت");
    }
    
    // انجام کار
    Console.WriteLine("در حال انجام کار...");
    Thread.Sleep(5000);
}
finally
{
    mutex.ReleaseMutex();
    mutex.Dispose();
}
```

**استفاده در دو برنامه مختلف:**

```csharp
// برنامه 1
Mutex mutex = new Mutex(false, "Global\\MySharedMutex");
mutex.WaitOne();
try
{
    Console.WriteLine("برنامه 1: در حال نوشتن در فایل مشترک...");
    File.AppendAllText("shared.txt", "برنامه 1\n");
    Thread.Sleep(2000);
}
finally
{
    mutex.ReleaseMutex();
}

// برنامه 2 (می‌تواند یک برنامه کاملاً جدا باشد)
Mutex mutex2 = new Mutex(false, "Global\\MySharedMutex");
mutex2.WaitOne();
try
{
    Console.WriteLine("برنامه 2: در حال نوشتن در فایل مشترک...");
    File.AppendAllText("shared.txt", "برنامه 2\n");
    Thread.Sleep(2000);
}
finally
{
    mutex2.ReleaseMutex();
}
```

**نکات مهم درباره Named Mutex:**

- **پیشوند "Global\\":** در Windows، برای دسترسی بین session‌ها از پیشوند "Global\\" استفاده کنید
- **پیشوند "Local\\":** برای دسترسی فقط در session فعلی
- **ایجاد یک نمونه از برنامه:** می‌توانید از Named Mutex برای جلوگیری از اجرای چند نمونه از برنامه استفاده کنید:

```csharp
// جلوگیری از اجرای چند نمونه از برنامه
string mutexName = "Global\\MyApplicationSingleInstance";
bool createdNew;
Mutex mutex = new Mutex(true, mutexName, out createdNew);

if (!createdNew)
{
    Console.WriteLine("یک نمونه از برنامه در حال اجرا است!");
    return; // برنامه را متوقف کن
}

try
{
    // کد برنامه
    Console.WriteLine("برنامه در حال اجرا است...");
    Console.ReadKey();
}
finally
{
    mutex.ReleaseMutex();
    mutex.Dispose();
}
```

**تفاوت Mutex و Monitor:**

| ویژگی | Monitor | Mutex |
|-------|---------|-------|
| **دامنه** | فقط درون فرآیند | درون و بین فرآیندها |
| **عملکرد** | سریع‌تر | کندتر (به خاطر kernel-level) |
| **نام‌دار** | خیر | بله (Named Mutex) |
| **قابل انتظار(Waitable)** | خیر | بله |
| **مناسب برای** | همگام‌سازی درون فرآیندی | همگام‌سازی بین فرآیندی |

<a id="2124-مفهوم-semaphore"></a>
#### 2.1.2.4 مفهوم Semaphore: کنترل دسترسی چندین نخ

`Semaphore` یک شمارنده است که به چندین نخ اجازه می‌دهد به طور همزمان به یک منبع دسترسی پیدا کنند، اما تعداد این دسترسی‌ها محدود است. این برخلاف `lock` و `Monitor` است که فقط به یک نخ اجازه دسترسی می‌دهند.

**مثال ساده Semaphore:**

```csharp
// Semaphore با حداکثر 3 دسترسی همزمان
Semaphore semaphore = new Semaphore(initialCount: 3, maximumCount: 3);

// 10 نخ سعی می‌کنند دسترسی پیدا کنند
for (int i = 0; i < 10; i++)
{
    int threadId = i;
    Thread thread = new Thread(() => {
        Console.WriteLine($"نخ {threadId}: منتظر دسترسی...");
        semaphore.WaitOne(); // منتظر می‌ماند تا یکی از 3 دسترسی آزاد شود
        
        try
        {
            Console.WriteLine($"نخ {threadId}: دسترسی دریافت کرد");
            Thread.Sleep(2000); // شبیه‌سازی کار
            Console.WriteLine($"نخ {threadId}: کار تمام شد");
        }
        finally
        {
            semaphore.Release(); // آزاد کردن دسترسی
        }
    });
    thread.Start();
}
```

**چطور کار می‌کند؟**

1. `Semaphore(3, 3)`: یک Semaphore با 3 دسترسی همزمان ایجاد می‌شود
2. `WaitOne()`: اگر دسترسی موجود باشد، یکی از دسترسی‌ها را می‌گیرد و شمارنده را کاهش می‌دهد. اگر دسترسی موجود نباشد، نخ منتظر می‌ماند
3. `Release()`: یک دسترسی را آزاد می‌کند و شمارنده را افزایش می‌دهد

**سناریوی کاربردی: محدود کردن اتصالات به دیتابیس**

```csharp
// محدود کردن تعداد اتصالات همزمان به دیتابیس
Semaphore dbSemaphore = new Semaphore(initialCount: 5, maximumCount: 5);

public void AccessDatabase(int connectionId)
{
    dbSemaphore.WaitOne();
    try
    {
        Console.WriteLine($"اتصال {connectionId}: متصل به دیتابیس");
        // شبیه‌سازی کار با دیتابیس
        Thread.Sleep(3000);
        Console.WriteLine($"اتصال {connectionId}: قطع از دیتابیس");
    }
    finally
    {
        dbSemaphore.Release();
    }
}

// 20 نخ سعی می‌کنند به دیتابیس متصل شوند
for (int i = 0; i < 20; i++)
{
    int id = i;
    Thread thread = new Thread(() => AccessDatabase(id));
    thread.Start();
}
```

**Named Semaphore برای همگام‌سازی بین فرآیندی:**

```csharp
// ایجاد Semaphore نام‌دار بین فرآیندی
string semaphoreName = "Global\\MySharedSemaphore";
bool createdNew;
Semaphore semaphore = new Semaphore(initialCount: 3, maximumCount: 3, 
                                    name: semaphoreName, out createdNew);

if (createdNew)
{
    Console.WriteLine("Semaphore جدید ایجاد شد");
}
else
{
    Console.WriteLine("Semaphore از قبل وجود داشت");
}

try
{
    semaphore.WaitOne();
    // انجام کار
    Console.WriteLine("در حال انجام کار...");
    Thread.Sleep(5000);
}
finally
{
    semaphore.Release();
    semaphore.Dispose();
}
```

<a id="2125-semaphoreslim-نسخه-بهینه"></a>
#### 2.1.2.5 SemaphoreSlim: نسخه بهینه برای استفاده درون فرآیندی

`SemaphoreSlim` نسخه سبک‌تر و سریع‌تر `Semaphore` است که فقط برای استفاده درون فرآیندی(Intra-Process) طراحی شده است. در بیشتر موارد، `SemaphoreSlim` انتخاب بهتری نسبت به `Semaphore` است.

**مزایای SemaphoreSlim:**

- **سریع‌تر:** عملکرد بهتر نسبت به `Semaphore`
- **سبک‌تر:** منابع کمتری مصرف می‌کند
- **پشتیبانی از async/await:** می‌تواند با `async/await` استفاده شود
- **مناسب برای Thread Pool:** برای استفاده با Task و Thread Pool بهینه شده

**مثال استفاده از SemaphoreSlim:**

```csharp
// SemaphoreSlim با حداکثر 3 دسترسی همزمان
SemaphoreSlim semaphore = new SemaphoreSlim(initialCount: 3, maxCount: 3);

async Task ProcessItemAsync(int itemId)
{
    await semaphore.WaitAsync(); // نسخه async
    try
    {
        Console.WriteLine($"پردازش آیتم {itemId} شروع شد");
        await Task.Delay(2000); // عملیات ناهمزمان(Asynchronous)
        Console.WriteLine($"پردازش آیتم {itemId} تمام شد");
    }
    finally
    {
        semaphore.Release();
    }
}

// 10 تسک به صورت همزمان(Concurrent)
var tasks = new List<Task>();
for (int i = 0; i < 10; i++)
{
    int id = i;
    tasks.Add(ProcessItemAsync(id));
}

await Task.WhenAll(tasks);
```

**مقایسه Semaphore و SemaphoreSlim:**

| ویژگی | Semaphore | SemaphoreSlim |
|-------|-----------|---------------|
| **دامنه** | بین فرآیندی(Inter-Process) | فقط درون فرآیندی(Intra-Process) |
| **عملکرد** | کندتر (kernel-level) | سریع‌تر (user-level) |
| **async/await** | خیر | بله (WaitAsync) |
| **Named** | بله | خیر |
| **مناسب برای** | همگام‌سازی بین فرآیندی | همگام‌سازی درون فرآیندی |

**مثال کاربردی: محدود کردن تعداد درخواست‌های HTTP همزمان:**

```csharp
public class HttpRequestLimiter
{
    private readonly SemaphoreSlim _semaphore;
    private readonly HttpClient _httpClient;
    
    public HttpRequestLimiter(int maxConcurrentRequests)
    {
        _semaphore = new SemaphoreSlim(maxConcurrentRequests, maxConcurrentRequests);
        _httpClient = new HttpClient();
    }
    
    public async Task<string> MakeRequestAsync(string url)
    {
        await _semaphore.WaitAsync();
        try
        {
            Console.WriteLine($"درخواست به {url} شروع شد");
            var response = await _httpClient.GetStringAsync(url);
            Console.WriteLine($"درخواست به {url} تمام شد");
            return response;
        }
        finally
        {
            _semaphore.Release();
        }
    }
}

// استفاده
var limiter = new HttpRequestLimiter(maxConcurrentRequests: 5);
var urls = new[] { "url1", "url2", "url3", "url4", "url5", "url6", "url7", "url8" };

var tasks = urls.Select(url => limiter.MakeRequestAsync(url)).ToArray();
await Task.WhenAll(tasks);
```

<a id="2126-مقایسه-و-انتخاب-ابزار-مناسب"></a>
#### 2.1.2.6 مقایسه و انتخاب ابزار مناسب

برای انتخاب ابزار همگام‌سازی مناسب، باید نیازهای خود را در نظر بگیرید:

**راهنمای انتخاب:**

1. **برای همگام‌سازی ساده درون فرآیندی:**
   - ✅ `lock` (ساده‌ترین و سریع‌ترین)
   - ✅ `Monitor` (اگر نیاز به Wait/Pulse دارید)

2. **برای کنترل دسترسی چندین نخ (محدود کردن تعداد دسترسی):**
   - ✅ `SemaphoreSlim` (برای درون فرآیندی)
   - ✅ `Semaphore` (فقط اگر نیاز به بین فرآیندی دارید)

3. **برای همگام‌سازی بین فرآیندی:**
   - ✅ `Mutex` (Named Mutex)
   - ✅ `Semaphore` (Named Semaphore)

4. **برای الگوی Producer-Consumer:**
   - ✅ `Monitor` با `Wait` و `Pulse`
   - ✅ یا `BlockingCollection<T>` از `System.Collections.Concurrent`

**جدول مقایسه کامل:**

| ابزار | دامنه | عملکرد | async/await | نام‌دار | مناسب برای |
|-------|-------|---------|-------------|---------|-------------|
| `lock` | درون فرآیند | عالی | خیر | خیر | همگام‌سازی ساده |
| `Monitor` | درون فرآیند | عالی | خیر | خیر | Wait/Pulse، Producer-Consumer |
| `Mutex` | بین فرآیند | متوسط | خیر | بله | Single Instance، بین فرآیندی |
| `Semaphore` | بین فرآیند | متوسط | خیر | بله | محدود کردن دسترسی بین فرآیندی |
| `SemaphoreSlim` | درون فرآیند | عالی | بله | خیر | محدود کردن دسترسی درون فرآیندی |

<a id="2127-نکات-مهم-و-بهترین-روشها"></a>
#### 2.1.2.7 نکات مهم و بهترین روش‌ها

**1. همیشه از try-finally استفاده کنید:**

```csharp
// ✅ درست
Monitor.Enter(lockObject);
try
{
    // کد
}
finally
{
    Monitor.Exit(lockObject);
}

// ❌ نادرست - در صورت exception قفل آزاد نمی‌شود
Monitor.Enter(lockObject);
// کد
Monitor.Exit(lockObject);
```

**2. از using برای SemaphoreSlim استفاده کنید (در صورت نیاز):**

```csharp
using (var semaphore = new SemaphoreSlim(3, 3))
{
    await semaphore.WaitAsync();
    try
    {
        // کد
    }
    finally
    {
        semaphore.Release();
    }
}
```

**3. از while به جای if با Wait استفاده کنید:**

```csharp
// ✅ درست
while (condition == false)
{
    Monitor.Wait(lockObject);
}

// ❌ نادرست
if (condition == false)
{
    Monitor.Wait(lockObject);
}
```

**4. تعداد اولیه و حداکثر Semaphore را با دقت انتخاب کنید:**

- تعداد زیاد: ممکن است منابع بیش از حد مصرف شود
- تعداد کم: ممکن است عملکرد کاهش یابد

**5. برای async/await از SemaphoreSlim استفاده کنید:**

```csharp
// ✅ درست - استفاده از WaitAsync
await semaphore.WaitAsync();

// ❌ نادرست - استفاده از Wait که مسدودکننده(Blocking) است
semaphore.Wait();
```

#### خلاصه

- **Monitor پیشرفته:** `Wait`، `Pulse` و `PulseAll` برای هماهنگ‌سازی دقیق‌تر نخ‌ها
- **Monitor.TryEnter:** برای جلوگیری از قفل مرگ(Deadlock) با timeout
- **Mutex نام‌دار:** برای همگام‌سازی بین فرآیندی و Single Instance
- **Semaphore:** برای کنترل دسترسی چندین نخ با تعداد محدود
- **SemaphoreSlim:** نسخه بهینه‌تر برای درون فرآیندی با پشتیبانی از async/await
- انتخاب ابزار مناسب بستگی به نیاز شما دارد: درون فرآیندی یا بین فرآیندی، ساده یا پیچیده

<a id="213-کلاس-interlocked-برای-عملیات-اتمی"></a>
### 2.1.3 کلاس Interlocked برای عملیات اتمی (Atomic Operations)

کلاس `Interlocked` در .NET یکی از قدرتمندترین ابزارها برای انجام عملیات اتمی(Atomic Operations) است. در بخش قبلی با معرفی کوتاهی از `Interlocked` در ساختارهای بدون قفل(Lock-Free) آشنا شدید. در این بخش، به صورت جامع‌تر با تمام قابلیت‌های این کلاس و نحوه استفاده صحیح از آن آشنا می‌شوید.

<a id="2131-عملیات-اتمی-چیست"></a>
#### 2.1.3.1 عملیات اتمی(Atomic Operations) چیست؟

عملیات اتمی(Atomic Operation) عملیاتی است که به صورت یک واحد غیرقابل تقسیم اجرا می‌شود. یعنی یا کاملاً انجام می‌شود یا اصلاً انجام نمی‌شود و هیچ حالت میانی وجود ندارد. این عملیات در سطح سخت‌افزار پشتیبانی می‌شوند و برای چندین نخ ایمن(Thread-Safe) هستند.

**مثال ساده: مشکل بدون عملیات اتمی:**

```csharp
// ❌ مشکل: این عملیات اتمی نیست
private int counter = 0;

public void Increment()
{
    counter++; // این در واقع 3 عمل است: خواندن، افزایش، نوشتن
}
```

**چه مشکلی پیش می‌آید؟**

```csharp
// نخ 1: counter را می‌خواند (مقدار: 5)
// نخ 2: counter را می‌خواند (مقدار: 5) - همزمان!
// نخ 1: 5 + 1 = 6 را می‌نویسد
// نخ 2: 5 + 1 = 6 را می‌نویسد
// نتیجه: counter = 6 (باید 7 باشد!)
```

**راه‌حل با عملیات اتمی:**

```csharp
// ✅ درست: استفاده از عملیات اتمی
private int counter = 0;

public void Increment()
{
    Interlocked.Increment(ref counter); // اتمی - یک عملیات واحد
}
```

<a id="2132-متدهای-اساسی-interlocked"></a>
#### 2.1.3.2 متدهای اساسی Interlocked

کلاس `Interlocked` متدهای متعددی برای عملیات اتمی(Atomic Operations) فراهم می‌کند:

**1. Increment و Decrement:**

```csharp
int value = 10;

// افزایش اتمی(Atomic Increment)
int newValue = Interlocked.Increment(ref value);
// value = 11, newValue = 11

// کاهش اتمی(Atomic Decrement)
int newValue2 = Interlocked.Decrement(ref value);
// value = 10, newValue2 = 10

// برای long
long longValue = 100;
long newLong = Interlocked.Increment(ref longValue);
```

**2. Add (افزودن مقدار مشخص):**

```csharp
int value = 10;

// افزودن اتمی(Atomic Add)
int previousValue = Interlocked.Add(ref value, 5);
// value = 15, previousValue = 10

// برای long
long longValue = 100;
long previous = Interlocked.Add(ref longValue, 50);
// longValue = 150, previous = 100
```

**3. Exchange (تعویض مقدار):**

```csharp
int value = 10;

// تعویض اتمی(Atomic Exchange) - مقدار قدیمی را برمی‌گرداند
int oldValue = Interlocked.Exchange(ref value, 20);
// value = 20, oldValue = 10

// مثال کاربردی: تنظیم فلگ
bool isInitialized = false;
bool wasInitialized = Interlocked.Exchange(ref isInitialized, true);
if (!wasInitialized)
{
    // فقط یک بار اجرا می‌شود
    Initialize();
}
```

**4. CompareExchange (مقایسه و تعویض):**

این متد یکی از قدرتمندترین متدهای `Interlocked` است:

```csharp
int value = 10;
int comparisonValue = 10;
int newValue = 20;

// اگر value == comparisonValue باشد، آن را به newValue تغییر می‌دهد
// مقدار قبلی را برمی‌گرداند
int previousValue = Interlocked.CompareExchange(ref value, newValue, comparisonValue);

if (previousValue == comparisonValue)
{
    Console.WriteLine("تعویض انجام شد");
    // value = 20
}
else
{
    Console.WriteLine("تعویض انجام نشد (مقدار تغییر کرده بود)");
    // value هنوز 10 است (یا مقدار دیگری که توسط نخ دیگر تغییر کرده)
}
```

**مثال کاربردی CompareExchange: به‌روزرسانی شرطی:**

```csharp
private int maxValue = 0;

public void UpdateMaxIfGreater(int newValue)
{
    int currentMax;
    do
    {
        currentMax = maxValue;
        if (newValue <= currentMax)
        {
            break; // نیازی به به‌روزرسانی نیست
        }
    }
    while (Interlocked.CompareExchange(ref maxValue, newValue, currentMax) != currentMax);
    // تا زمانی که maxValue تغییر نکرده باشد، تلاش می‌کند
}
```

<a id="2133-متدهای-پیشرفته-interlocked"></a>
#### 2.1.3.3 متدهای پیشرفته Interlocked

**1. Read (خواندن اتمی برای long):**

برای `int` خواندن اتمی است، اما برای `long` در سیستم‌های 32 بیتی ممکن است نیاز به `Interlocked.Read` باشد:

```csharp
long value = 123456789;

// خواندن اتمی(Atomic Read) برای long
long readValue = Interlocked.Read(ref value);
```

**2. And, Or, Xor (عملیات بیتی اتمی):**

برای انجام عملیات بیتی(Bitwise Operations) به صورت اتمی:

```csharp
int value = 0b1010; // 10 در دسیمال

// AND اتمی
int result = Interlocked.And(ref value, 0b1100); // 0b1000 = 8
// value = 8, result = 10 (مقدار قبلی)

// OR اتمی
result = Interlocked.Or(ref value, 0b0011); // 0b1011 = 11
// value = 11, result = 8 (مقدار قبلی)

// XOR اتمی
result = Interlocked.Xor(ref value, 0b1111); // 0b0100 = 4
// value = 4, result = 11 (مقدار قبلی)
```

**3. CompareExchange برای object:**

برای مقایسه و تعویض مراجع(References) به اشیا:

```csharp
MyClass current = new MyClass();
MyClass newObj = new MyClass();
MyClass comparison = current;

MyClass previous = Interlocked.CompareExchange(ref current, newObj, comparison);
if (previous == comparison)
{
    Console.WriteLine("تعویض انجام شد");
}
```

<a id="2134-مثالهای-کاربردی-و-الگوهای-رایج"></a>
#### 2.1.3.4 مثال‌های کاربردی و الگوهای رایج

**الگوی 1: شمارنده Thread-Safe:**

```csharp
public class ThreadSafeCounter
{
    private int _count = 0;
    
    public int Count => _count;
    
    public int Increment()
    {
        return Interlocked.Increment(ref _count);
    }
    
    public int Decrement()
    {
        return Interlocked.Decrement(ref _count);
    }
    
    public int Reset()
    {
        return Interlocked.Exchange(ref _count, 0);
    }
    
    public int Add(int value)
    {
        return Interlocked.Add(ref _count, value);
    }
}

// استفاده
var counter = new ThreadSafeCounter();
var tasks = new List<Task>();

for (int i = 0; i < 1000; i++)
{
    tasks.Add(Task.Run(() => counter.Increment()));
}

await Task.WhenAll(tasks);
Console.WriteLine($"نتیجه: {counter.Count}"); // باید 1000 باشد
```

**الگوی 2: فلگ یکبار مصرف(One-Time Flag):**

```csharp
public class OneTimeAction
{
    private int _hasRun = 0; // 0 = نه, 1 = بله
    
    public bool TryRunOnce(Action action)
    {
        if (Interlocked.CompareExchange(ref _hasRun, 1, 0) == 0)
        {
            // فقط یک بار اجرا می‌شود
            action();
            return true;
        }
        return false;
    }
}

// استفاده
var oneTime = new OneTimeAction();
var tasks = new List<Task>();

for (int i = 0; i < 10; i++)
{
    tasks.Add(Task.Run(() => {
        if (oneTime.TryRunOnce(() => Console.WriteLine("فقط یک بار اجرا شد")))
        {
            Console.WriteLine("این نخ موفق شد");
        }
        else
        {
            Console.WriteLine("این نخ ناموفق بود");
        }
    }));
}

await Task.WhenAll(tasks);
// خروجی: فقط یک "فقط یک بار اجرا شد" و یک "این نخ موفق شد"
```

**الگوی 3: پیدا کردن ماکزیمم Thread-Safe:**

```csharp
public class ThreadSafeMax
{
    private int _maxValue = int.MinValue;
    
    public void UpdateMax(int newValue)
    {
        int currentMax;
        do
        {
            currentMax = _maxValue;
            if (newValue <= currentMax)
            {
                break; // نیازی به به‌روزرسانی نیست
            }
        }
        while (Interlocked.CompareExchange(ref _maxValue, newValue, currentMax) != currentMax);
    }
    
    public int GetMax()
    {
        return Interlocked.Read(ref _maxValue);
    }
}
```

**الگوی 4: Lock-Free Stack با CompareExchange:**

```csharp
public class LockFreeStack<T>
{
    private class Node
    {
        public T Value;
        public Node Next;
    }
    
    private Node _head = null;
    
    public void Push(T value)
    {
        Node newNode = new Node { Value = value };
        Node currentHead;
        do
        {
            currentHead = _head;
            newNode.Next = currentHead;
        }
        while (Interlocked.CompareExchange(ref _head, newNode, currentHead) != currentHead);
    }
    
    public bool TryPop(out T value)
    {
        Node currentHead;
        Node newHead;
        do
        {
            currentHead = _head;
            if (currentHead == null)
            {
                value = default(T);
                return false;
            }
            newHead = currentHead.Next;
        }
        while (Interlocked.CompareExchange(ref _head, newHead, currentHead) != currentHead);
        
        value = currentHead.Value;
        return true;
    }
}
```

<a id="2135-مقایسه-interlocked-با-lock"></a>
#### 2.1.3.5 مقایسه Interlocked با lock

**عملکرد:**

```csharp
// تست عملکرد: lock vs Interlocked
public class PerformanceTest
{
    private readonly object _lockObject = new object();
    private int _counterLock = 0;
    private int _counterInterlocked = 0;
    
    public void IncrementWithLock()
    {
        lock (_lockObject)
        {
            _counterLock++;
        }
    }
    
    public void IncrementWithInterlocked()
    {
        Interlocked.Increment(ref _counterInterlocked);
    }
}

// در شرایط رقابت کم(Low Contention): هر دو تقریباً یکسان
// در شرایط رقابت بالا(High Contention): Interlocked معمولاً سریع‌تر است
```

**جدول مقایسه:**

| ویژگی | lock | Interlocked |
|-------|------|-------------|
| **عملکرد** | خوب | عالی (سریع‌تر) |
| **انعطاف‌پذیری** | بالا (هر کدی می‌تواند داخل lock باشد) | محدود (فقط عملیات مشخص) |
| **عملیات پیچیده** | بله | خیر (فقط عملیات ساده) |
| **قفل مرگ(Deadlock)** | امکان‌پذیر | غیرممکن |
| **مناسب برای** | بخش‌های بحرانی بزرگ | عملیات ساده روی متغیرها |

**زمان استفاده از Interlocked:**

- ✅ عملیات ساده (افزایش، کاهش، افزودن)
- ✅ رقابت بالا(High Contention)
- ✅ نیاز به عملکرد بالا
- ✅ نمی‌خواهید خطر قفل مرگ(Deadlock) را بپذیرید

**زمان استفاده از lock:**

- ✅ عملیات پیچیده (چند خط کد)
- ✅ نیاز به انعطاف‌پذیری بیشتر
- ✅ بخش‌های بحرانی بزرگ(Critical Section)

<a id="2136-نکات-مهم-و-اشتباهات-رایج"></a>
#### 2.1.3.6 نکات مهم و اشتباهات رایج

**1. استفاده از ref در Interlocked:**

همیشه باید از `ref` استفاده کنید:

```csharp
// ✅ درست
int value = 10;
Interlocked.Increment(ref value);

// ❌ نادرست - کامپایل نمی‌شود
int value = 10;
Interlocked.Increment(value);
```

**2. فقط برای انواع عددی و مراجع:**

`Interlocked` فقط برای انواع خاص کار می‌کند:

```csharp
// ✅ درست - int, long, float, double, object references
int intValue = 10;
Interlocked.Increment(ref intValue);

long longValue = 100;
Interlocked.Increment(ref longValue);

object obj = new object();
object newObj = new object();
Interlocked.CompareExchange(ref obj, newObj, obj);

// ❌ نادرست - برای string یا struct کار نمی‌کند
string str = "test";
// Interlocked.Increment(ref str); // خطا
```

**3. Memory Barriers (موانع حافظه):**

عملیات `Interlocked` به صورت خودکار Memory Barrier ایجاد می‌کنند، یعنی:

- تمام نوشتن‌های قبلی قبل از این عملیات قابل مشاهده می‌شوند
- تمام خواندن‌های بعدی بعد از این عملیات انجام می‌شوند

```csharp
int value1 = 0;
int value2 = 0;

// نخ 1
value1 = 10;
Interlocked.Exchange(ref value2, 1); // Memory Barrier
// تمام نخ‌های دیگر اکنون value1 = 10 را می‌بینند

// نخ 2
if (Interlocked.Read(ref value2) == 1)
{
    // اطمینان داریم که value1 = 10 است
    Console.WriteLine(value1); // همیشه 10 را نمایش می‌دهد
}
```

**4. CompareExchange و حلقه‌های بازپردازش:**

هنگام استفاده از `CompareExchange` در حلقه، ممکن است نیاز به بازپردازش(Retry) داشته باشید:

```csharp
// ✅ درست - حلقه do-while برای بازپردازش
int value = 10;
int newValue = 20;
int currentValue;
do
{
    currentValue = value;
    // ممکن است value توسط نخ دیگری تغییر کرده باشد
} while (Interlocked.CompareExchange(ref value, newValue, currentValue) != currentValue);
```

**5. Overflow در Increment/Decrement:**

`Interlocked.Increment` و `Decrement` در صورت overflow، به درستی wrap می‌شوند:

```csharp
int maxInt = int.MaxValue;
Interlocked.Increment(ref maxInt);
// maxInt = int.MinValue (wrap شده)
```

<a id="2137-بهترین-روشها-و-الگوها"></a>
#### 2.1.3.7 بهترین روش‌ها و الگوها

**1. استفاده برای متغیرهای ساده:**

برای عملیات ساده روی متغیرها از `Interlocked` استفاده کنید:

```csharp
// ✅ درست
private int _counter = 0;
public int Count => _counter;
public void Increment() => Interlocked.Increment(ref _counter);
```

**2. ترکیب با lock برای عملیات پیچیده:**

برای عملیات پیچیده‌تر، می‌توانید `Interlocked` را با `lock` ترکیب کنید:

```csharp
private readonly object _lockObject = new object();
private int _counter = 0;
private List<string> _items = new List<string>();

public void AddItem(string item)
{
    lock (_lockObject)
    {
        _items.Add(item);
        Interlocked.Increment(ref _counter); // سریع‌تر از counter++ در lock
    }
}
```

**3. استفاده از volatile برای خواندن:**

برای خواندن متغیرهایی که با `Interlocked` نوشته می‌شوند، معمولاً نیازی به `volatile` نیست (چون `Interlocked` Memory Barrier ایجاد می‌کند):

```csharp
private int _value = 0;

public void Write()
{
    Interlocked.Exchange(ref _value, 10);
}

public int Read()
{
    return _value; // نیازی به volatile نیست (Interlocked Memory Barrier دارد)
}
```

**4. الگوی Double-Checked Locking با Interlocked:**

```csharp
private object _instance = null;
private readonly object _lockObject = new object();

public object GetInstance()
{
    if (_instance == null)
    {
        lock (_lockObject)
        {
            if (_instance == null)
            {
                _instance = new object();
                Interlocked.Exchange(ref _instance, new object()); // برای اطمینان بیشتر
            }
        }
    }
    return _instance;
}
```

#### خلاصه

- **عملیات اتمی(Atomic Operations):** عملیات غیرقابل تقسیم که در سطح سخت‌افزار پشتیبانی می‌شوند
- **متدهای اساسی:** `Increment`, `Decrement`, `Add`, `Exchange`, `CompareExchange`
- **متدهای پیشرفته:** `Read`, `And`, `Or`, `Xor`, `CompareExchange` برای object
- **مزایا:** عملکرد بهتر از `lock`، عدم وجود قفل مرگ(Deadlock)، مناسب برای رقابت بالا(High Contention)
- **محدودیت‌ها:** فقط برای عملیات ساده، فقط برای انواع مشخص
- **الگوهای رایج:** شمارنده Thread-Safe، فلگ یکبار مصرف، پیدا کردن ماکزیمم، Lock-Free Stack

<a id="214-readerwriterlockslim-برای-قفل-خواندن-نوشتن"></a>
### 2.1.4 ReaderWriterLockSlim برای قفل خواندن-نوشتن (Read-Write Locking)

`ReaderWriterLockSlim` یکی از قدرتمندترین کلاس‌های همگام‌سازی در .NET است که برای سناریوهایی طراحی شده که در آن‌ها خواندن‌ها بسیار بیشتر از نوشتن‌ها هستند. این کلاس اجازه می‌دهد چندین نخ به صورت همزمان(Concurrent) بخوانند، اما فقط یک نخ در هر زمان بتواند بنویسد.

<a id="2141-مفهوم-قفل-خواندن-نوشتن"></a>
#### 2.1.4.1 مفهوم قفل خواندن-نوشتن(Read-Write Lock)

در بسیاری از برنامه‌ها، عملیات خواندن بسیار بیشتر از نوشتن هستند. استفاده از `lock` معمولی باعث می‌شود که حتی خواندن‌ها نیز به صورت متوالی(Sequential) انجام شوند، در حالی که چندین نخ می‌توانند به صورت همزمان(Concurrent) بخوانند بدون اینکه مشکلی پیش بیاید.

**مقایسه با lock معمولی:**

```csharp
// با lock معمولی - خواندن‌ها نیز متوالی(Sequential) هستند
private readonly object _lockObject = new object();
private Dictionary<string, int> _data = new Dictionary<string, int>();

public int Read(string key)
{
    lock (_lockObject) // حتی خواندن نیز باید منتظر بماند
    {
        return _data.TryGetValue(key, out int value) ? value : 0;
    }
}

public void Write(string key, int value)
{
    lock (_lockObject)
    {
        _data[key] = value;
    }
}
```

**با ReaderWriterLockSlim - خواندن‌ها می‌توانند همزمان(Concurrent) باشند:**

```csharp
private readonly ReaderWriterLockSlim _lock = new ReaderWriterLockSlim();
private Dictionary<string, int> _data = new Dictionary<string, int>();

public int Read(string key)
{
    _lock.EnterReadLock(); // چندین نخ می‌توانند همزمان(Concurrent) وارد شوند
    try
    {
        return _data.TryGetValue(key, out int value) ? value : 0;
    }
    finally
    {
        _lock.ExitReadLock();
    }
}

public void Write(string key, int value)
{
    _lock.EnterWriteLock(); // فقط یک نخ در هر زمان
    try
    {
        _data[key] = value;
    }
    finally
    {
        _lock.ExitWriteLock();
    }
}
```

<a id="2142-متدهای-اصلی-readerwriterlockslim"></a>
#### 2.1.4.2 متدهای اصلی ReaderWriterLockSlim

**1. EnterReadLock و ExitReadLock:**

برای خواندن استفاده می‌شوند. چندین نخ می‌توانند به صورت همزمان(Concurrent) `EnterReadLock` کنند:

```csharp
ReaderWriterLockSlim lockSlim = new ReaderWriterLockSlim();

// نخ 1
lockSlim.EnterReadLock();
try
{
    // خواندن داده
    Console.WriteLine("نخ 1 در حال خواندن...");
    Thread.Sleep(1000);
}
finally
{
    lockSlim.ExitReadLock();
}

// نخ 2 (می‌تواند همزمان(Concurrent) با نخ 1 وارد شود)
lockSlim.EnterReadLock();
try
{
    // خواندن داده
    Console.WriteLine("نخ 2 در حال خواندن...");
    Thread.Sleep(1000);
}
finally
{
    lockSlim.ExitReadLock();
}
```

**2. EnterWriteLock و ExitWriteLock:**

برای نوشتن استفاده می‌شوند. فقط یک نخ در هر زمان می‌تواند `EnterWriteLock` کند و تمام خواندن‌ها و نوشتن‌های دیگر باید منتظر بمانند:

```csharp
ReaderWriterLockSlim lockSlim = new ReaderWriterLockSlim();

// نخ نوشتن
lockSlim.EnterWriteLock();
try
{
    // نوشتن داده
    Console.WriteLine("در حال نوشتن...");
    Thread.Sleep(1000);
    // تمام خواندن‌ها و نوشتن‌های دیگر منتظر می‌مانند
}
finally
{
    lockSlim.ExitWriteLock();
}
```

**3. EnterUpgradeableReadLock و ExitUpgradeableReadLock:**

این قفل ویژه برای سناریوهایی است که ابتدا می‌خوانید و سپس ممکن است نیاز به نوشتن داشته باشید:

```csharp
ReaderWriterLockSlim lockSlim = new ReaderWriterLockSlim();

lockSlim.EnterUpgradeableReadLock(); // ابتدا به عنوان خواندن وارد می‌شوید
try
{
    // خواندن
    if (condition)
    {
        lockSlim.EnterWriteLock(); // سپس به قفل نوشتن ارتقا می‌دهید
        try
        {
            // نوشتن
        }
        finally
        {
            lockSlim.ExitWriteLock();
        }
    }
}
finally
{
    lockSlim.ExitUpgradeableReadLock();
}
```

<a id="2143-مثال-کاربردی-کش-داده"></a>
#### 2.1.4.3 مثال کاربردی: کش(Cache) داده Thread-Safe

یکی از بهترین استفاده‌های `ReaderWriterLockSlim` برای پیاده‌سازی کش(Cache) است:

```csharp
public class ThreadSafeCache<TKey, TValue>
{
    private readonly Dictionary<TKey, TValue> _cache = new Dictionary<TKey, TValue>();
    private readonly ReaderWriterLockSlim _lock = new ReaderWriterLockSlim();
    
    public TValue GetOrAdd(TKey key, Func<TKey, TValue> valueFactory)
    {
        // ابتدا سعی می‌کنیم با قفل خواندن بخوانیم
        _lock.EnterReadLock();
        try
        {
            if (_cache.TryGetValue(key, out TValue value))
            {
                return value; // پیدا شد - بدون نیاز به قفل نوشتن
            }
        }
        finally
        {
            _lock.ExitReadLock();
        }
        
        // پیدا نشد - باید بنویسیم
        _lock.EnterWriteLock();
        try
        {
            // دوباره بررسی می‌کنیم (ممکن است نخ دیگری در این بین اضافه کرده باشد)
            if (_cache.TryGetValue(key, out TValue existingValue))
            {
                return existingValue;
            }
            
            // ایجاد مقدار جدید
            TValue newValue = valueFactory(key);
            _cache[key] = newValue;
            return newValue;
        }
        finally
        {
            _lock.ExitWriteLock();
        }
    }
    
    public TValue Get(TKey key)
    {
        _lock.EnterReadLock();
        try
        {
            return _cache.TryGetValue(key, out TValue value) ? value : default(TValue);
        }
        finally
        {
            _lock.ExitReadLock();
        }
    }
    
    public void Remove(TKey key)
    {
        _lock.EnterWriteLock();
        try
        {
            _cache.Remove(key);
        }
        finally
        {
            _lock.ExitWriteLock();
        }
    }
    
    public void Clear()
    {
        _lock.EnterWriteLock();
        try
        {
            _cache.Clear();
        }
        finally
        {
            _lock.ExitWriteLock();
        }
    }
}
```

**استفاده از UpgradeableReadLock برای بهینه‌سازی:**

```csharp
public class OptimizedCache<TKey, TValue>
{
    private readonly Dictionary<TKey, TValue> _cache = new Dictionary<TKey, TValue>();
    private readonly ReaderWriterLockSlim _lock = new ReaderWriterLockSlim();
    
    public TValue GetOrAdd(TKey key, Func<TKey, TValue> valueFactory)
    {
        // استفاده از UpgradeableReadLock برای بهینه‌سازی
        _lock.EnterUpgradeableReadLock();
        try
        {
            if (_cache.TryGetValue(key, out TValue value))
            {
                return value;
            }
            
            // ارتقا به قفل نوشتن
            _lock.EnterWriteLock();
            try
            {
                // دوباره بررسی
                if (_cache.TryGetValue(key, out TValue existingValue))
                {
                    return existingValue;
                }
                
                TValue newValue = valueFactory(key);
                _cache[key] = newValue;
                return newValue;
            }
            finally
            {
                _lock.ExitWriteLock();
            }
        }
        finally
        {
            _lock.ExitUpgradeableReadLock();
        }
    }
}
```

<a id="2144-مزایا-و-معایب"></a>
#### 2.1.4.4 مزایا و معایب ReaderWriterLockSlim

**مزایا:**

1. **عملکرد بهتر در خواندن‌های زیاد:** وقتی خواندن‌ها بیشتر از نوشتن‌ها هستند، عملکرد بسیار بهتر از `lock` معمولی است
2. **همزمانی(Concurrency) در خواندن:** چندین نخ می‌توانند به صورت همزمان(Concurrent) بخوانند
3. **انعطاف‌پذیری:** پشتیبانی از UpgradeableReadLock برای سناریوهای پیچیده

**معایب:**

1. **پیچیدگی بیشتر:** استفاده از آن پیچیده‌تر از `lock` معمولی است
2. **هزینه‌برتر از lock برای نوشتن:** نوشتن در `ReaderWriterLockSlim` کمی کندتر از `lock` معمولی است
3. **مناسب فقط برای خواندن‌های زیاد:** اگر خواندن‌ها و نوشتن‌ها تقریباً برابر باشند، `lock` معمولی بهتر است

**چه زمانی استفاده کنیم؟**

- ✅ خواندن‌ها بسیار بیشتر از نوشتن‌ها هستند (مثلاً 90% خواندن، 10% نوشتن)
- ✅ عملیات خواندن زمان‌بر هستند
- ✅ نیاز به همزمانی(Concurrency) در خواندن دارید

**چه زمانی استفاده نکنیم؟**

- ❌ خواندن‌ها و نوشتن‌ها تقریباً برابر هستند
- ❌ عملیات خواندن بسیار سریع هستند (کاهش پیچیدگی مهم‌تر است)
- ❌ نیاز به سادگی کد دارید

<a id="2145-مقایسه-با-lock-معمولی"></a>
#### 2.1.4.5 مقایسه با lock معمولی

**تست عملکرد:**

```csharp
public class PerformanceComparison
{
    private readonly object _lockObject = new object();
    private readonly ReaderWriterLockSlim _rwLock = new ReaderWriterLockSlim();
    private Dictionary<string, int> _data = new Dictionary<string, int>();
    
    // با lock معمولی
    public int ReadWithLock(string key)
    {
        lock (_lockObject)
        {
            return _data.TryGetValue(key, out int value) ? value : 0;
        }
    }
    
    // با ReaderWriterLockSlim
    public int ReadWithRwLock(string key)
    {
        _rwLock.EnterReadLock();
        try
        {
            return _data.TryGetValue(key, out int value) ? value : 0;
        }
        finally
        {
            _rwLock.ExitReadLock();
        }
    }
    
    public void WriteWithLock(string key, int value)
    {
        lock (_lockObject)
        {
            _data[key] = value;
        }
    }
    
    public void WriteWithRwLock(string key, int value)
    {
        _rwLock.EnterWriteLock();
        try
        {
            _data[key] = value;
        }
        finally
        {
            _rwLock.ExitWriteLock();
        }
    }
}
```

**جدول مقایسه:**

| ویژگی | lock | ReaderWriterLockSlim |
|-------|------|----------------------|
| **خواندن همزمان(Concurrent)** | خیر | بله |
| **عملکرد خواندن (زیاد)** | کند | سریع |
| **عملکرد نوشتن** | سریع | کمی کندتر |
| **پیچیدگی** | ساده | پیچیده‌تر |
| **مناسب برای** | همه موارد | خواندن‌های زیاد |

<a id="2146-نکات-مهم-و-اشتباهات-رایج"></a>
#### 2.1.4.6 نکات مهم و اشتباهات رایج

**1. همیشه از try-finally استفاده کنید:**

```csharp
// ✅ درست
_lock.EnterReadLock();
try
{
    // کد
}
finally
{
    _lock.ExitReadLock();
}

// ❌ نادرست - در صورت exception قفل آزاد نمی‌شود
_lock.EnterReadLock();
// کد
_lock.ExitReadLock();
```

**2. استفاده صحیح از UpgradeableReadLock:**

```csharp
// ✅ درست
_lock.EnterUpgradeableReadLock();
try
{
    // خواندن
    if (needToWrite)
    {
        _lock.EnterWriteLock();
        try
        {
            // نوشتن
        }
        finally
        {
            _lock.ExitWriteLock();
        }
    }
}
finally
{
    _lock.ExitUpgradeableReadLock();
}

// ❌ نادرست - نمی‌توانید از EnterWriteLock بدون UpgradeableReadLock استفاده کنید
_lock.EnterReadLock();
try
{
    _lock.EnterWriteLock(); // خطا! باید ابتدا UpgradeableReadLock داشته باشید
}
finally
{
    _lock.ExitReadLock();
}
```

**3. جلوگیری از قفل مرگ(Deadlock):**

```csharp
// ❌ خطرناک - ممکن است قفل مرگ(Deadlock) رخ دهد
_lock.EnterReadLock();
try
{
    _lock.EnterWriteLock(); // منتظر می‌ماند تا همه خواندن‌ها تمام شوند
    // اما خودش یک خواندن دارد - قفل مرگ(Deadlock)!
}
finally
{
    _lock.ExitReadLock();
}

// ✅ درست - استفاده از UpgradeableReadLock
_lock.EnterUpgradeableReadLock();
try
{
    _lock.EnterWriteLock(); // اینجا اشکالی ندارد
}
finally
{
    _lock.ExitUpgradeableReadLock();
}
```

**4. Dispose کردن:**

`ReaderWriterLockSlim` باید Dispose شود:

```csharp
public class MyClass : IDisposable
{
    private readonly ReaderWriterLockSlim _lock = new ReaderWriterLockSlim();
    
    public void Dispose()
    {
        _lock.Dispose();
    }
}
```

**5. استفاده از using:**

```csharp
using (var lockSlim = new ReaderWriterLockSlim())
{
    lockSlim.EnterReadLock();
    try
    {
        // کد
    }
    finally
    {
        lockSlim.ExitReadLock();
    }
}
```

<a id="2147-مثال-پیشرفته-سیستم-فایل-مجازی"></a>
#### 2.1.4.7 مثال پیشرفته: سیستم فایل مجازی(Virtual File System)

```csharp
public class VirtualFileSystem
{
    private readonly Dictionary<string, byte[]> _files = new Dictionary<string, byte[]>();
    private readonly ReaderWriterLockSlim _lock = new ReaderWriterLockSlim();
    
    public byte[] ReadFile(string fileName)
    {
        _lock.EnterReadLock();
        try
        {
            return _files.TryGetValue(fileName, out byte[] content) 
                ? (byte[])content.Clone() // Clone برای ایمنی
                : null;
        }
        finally
        {
            _lock.ExitReadLock();
        }
    }
    
    public void WriteFile(string fileName, byte[] content)
    {
        _lock.EnterWriteLock();
        try
        {
            _files[fileName] = (byte[])content.Clone();
        }
        finally
        {
            _lock.ExitWriteLock();
        }
    }
    
    public bool FileExists(string fileName)
    {
        _lock.EnterReadLock();
        try
        {
            return _files.ContainsKey(fileName);
        }
        finally
        {
            _lock.ExitReadLock();
        }
    }
    
    public void DeleteFile(string fileName)
    {
        _lock.EnterWriteLock();
        try
        {
            _files.Remove(fileName);
        }
        finally
        {
            _lock.ExitWriteLock();
        }
    }
    
    public IEnumerable<string> ListFiles()
    {
        _lock.EnterReadLock();
        try
        {
            return _files.Keys.ToList(); // ToList برای ایمنی
        }
        finally
        {
            _lock.ExitReadLock();
        }
    }
    
    public void Dispose()
    {
        _lock.Dispose();
    }
}
```

<a id="2148-بهترین-روشها"></a>
#### 2.1.4.8 بهترین روش‌ها

**1. استفاده از using یا IDisposable:**

```csharp
public class MyResource : IDisposable
{
    private readonly ReaderWriterLockSlim _lock = new ReaderWriterLockSlim();
    
    public void Dispose()
    {
        _lock?.Dispose();
    }
}
```

**2. استفاده از Helper Methods برای کاهش تکرار:**

```csharp
public static class ReaderWriterLockSlimExtensions
{
    public static void ExecuteWithReadLock(this ReaderWriterLockSlim lockSlim, Action action)
    {
        lockSlim.EnterReadLock();
        try
        {
            action();
        }
        finally
        {
            lockSlim.ExitReadLock();
        }
    }
    
    public static T ExecuteWithReadLock<T>(this ReaderWriterLockSlim lockSlim, Func<T> func)
    {
        lockSlim.EnterReadLock();
        try
        {
            return func();
        }
        finally
        {
            lockSlim.ExitReadLock();
        }
    }
    
    public static void ExecuteWithWriteLock(this ReaderWriterLockSlim lockSlim, Action action)
    {
        lockSlim.EnterWriteLock();
        try
        {
            action();
        }
        finally
        {
            lockSlim.ExitWriteLock();
        }
    }
}

// استفاده
_lock.ExecuteWithReadLock(() => {
    // کد خواندن
});

int value = _lock.ExecuteWithReadLock(() => {
    return _data["key"];
});
```

**3. جلوگیری از Starvation (گرسنگی):**

در بعضی پیاده‌سازی‌ها، اگر خواندن‌های مداوم وجود داشته باشد، نوشتن ممکن است برای مدت طولانی منتظر بماند. `ReaderWriterLockSlim` در .NET از این مشکل جلوگیری می‌کند، اما بهتر است مدت زمان نگه‌داری قفل خواندن را کوتاه نگه دارید.

#### خلاصه

- **ReaderWriterLockSlim:** برای سناریوهایی که خواندن‌ها بسیار بیشتر از نوشتن‌ها هستند
- **مزایا:** عملکرد بهتر در خواندن‌های زیاد، همزمانی(Concurrency) در خواندن
- **متدهای اصلی:** `EnterReadLock`, `EnterWriteLock`, `EnterUpgradeableReadLock`
- **مناسب برای:** کش(Cache)، سیستم فایل، ساختارهای داده با خواندن‌های زیاد
- **نکات مهم:** همیشه از try-finally استفاده کنید، Dispose کنید، از UpgradeableReadLock برای ارتقا استفاده کنید

## 2.2. مدیریت نخ‌ها (Managing Threads)

مدیریت صحیح نخ‌ها یکی از مهم‌ترین جنبه‌های برنامه‌نویسی چندنخی است. در سطح میانی، باید با استخر نخ(Thread Pool)، Task Parallel Library (TPL)، و تکنیک‌های مدیریت نخ‌ها آشنا شوید.

<a id="221-استخر-نخ-thread-pool-با-threadpool-و-task-parallel-library-tpl"></a>
### 2.2.1 استخر نخ(Thread Pool) با ThreadPool و Task Parallel Library (TPL)

استخر نخ(Thread Pool) یکی از مهم‌ترین مفاهیم در برنامه‌نویسی چندنخی است. درک نحوه کار Thread Pool و Task Parallel Library (TPL) برای نوشتن برنامه‌های کارآمد و مقیاس‌پذیر ضروری است.

<a id="2211-مفهوم-استخر-نخ-thread-pool"></a>
#### 2.2.1.1 مفهوم استخر نخ(Thread Pool)

استخر نخ(Thread Pool) یک مجموعه از نخ‌های از پیش ایجاد شده است که توسط .NET برای اجرای کارها استفاده می‌شود. به جای ایجاد یک نخ جدید برای هر کار (که هزینه‌بر است)، Thread Pool نخ‌های موجود را دوباره استفاده می‌کند.

**مشکل ایجاد نخ جدید:**

```csharp
// ❌ نادرست - ایجاد نخ جدید برای هر کار (هزینه‌بر)
for (int i = 0; i < 1000; i++)
{
    Thread thread = new Thread(() => DoWork(i));
    thread.Start(); // هر بار یک نخ جدید ایجاد می‌شود
    // هر نخ حدود 1MB حافظه مصرف می‌کند!
}
```

**راه‌حل: استفاده از Thread Pool:**

```csharp
// ✅ درست - استفاده از Thread Pool
for (int i = 0; i < 1000; i++)
{
    ThreadPool.QueueUserWorkItem(state => DoWork((int)state), i);
    // نخ‌های موجود دوباره استفاده می‌شوند
}
```

**ویژگی‌های Thread Pool:**

- **نخ‌های از پیش ایجاد شده:** Thread Pool مجموعه‌ای از نخ‌ها را از قبل آماده نگه می‌دارد
- **بازاستفاده از نخ‌ها:** پس از اتمام یک کار، نخ برای کار بعدی استفاده می‌شود
- **مدیریت خودکار:** Thread Pool تعداد نخ‌ها را بر اساس بار کاری تنظیم می‌کند
- **محدودیت تعداد:** تعداد نخ‌ها محدود است تا از مصرف بیش از حد منابع جلوگیری شود

<a id="2212-نحوه-کار-thread-pool"></a>
#### 2.2.1.2 نحوه کار Thread Pool

**چرخه کار Thread Pool:**

1. **درخواست کار:** یک کار به Thread Pool ارسال می‌شود
2. **بررسی نخ‌های آزاد:** Thread Pool بررسی می‌کند که آیا نخ آزاد وجود دارد
3. **تخصیص نخ:** اگر نخ آزاد باشد، کار به آن نخ اختصاص داده می‌شود
4. **صف انتظار:** اگر همه نخ‌ها مشغول باشند، کار در صف منتظر می‌ماند
5. **اتمام کار:** پس از اتمام کار، نخ آزاد می‌شود و آماده کار بعدی است

**مثال عملی:**

```csharp
// 20 کار به Thread Pool ارسال می‌شوند
for (int i = 0; i < 20; i++)
{
    int taskId = i;
    ThreadPool.QueueUserWorkItem(state => {
        Console.WriteLine($"کار {taskId} شروع شد - نخ: {Thread.CurrentThread.ManagedThreadId}");
        Thread.Sleep(2000); // شبیه‌سازی کار
        Console.WriteLine($"کار {taskId} تمام شد - نخ: {Thread.CurrentThread.ManagedThreadId}");
    });
}

Thread.Sleep(10000); // منتظر اتمام کارها
```

**مشاهده رفتار Thread Pool:**

در خروجی می‌بینید که:
- تعداد نخ‌های استفاده شده محدود است (معمولاً برابر با تعداد هسته‌های CPU)
- نخ‌ها دوباره استفاده می‌شوند (همان Thread ID برای کارهای مختلف)
- کارها به صورت موازی(Parallel) اجرا می‌شوند

<a id="2213-مدیریت-خودکار-تعداد-نخها"></a>
#### 2.2.1.3 مدیریت خودکار تعداد نخ‌ها

Thread Pool به صورت خودکار تعداد نخ‌ها را بر اساس بار کاری تنظیم می‌کند:

**قوانین Thread Pool:**

- **حداقل تعداد:** Thread Pool حداقل تعداد مشخصی نخ دارد (معمولاً برابر با تعداد هسته‌های CPU)
- **حداکثر تعداد:** Thread Pool حداکثر تعداد مشخصی نخ ایجاد می‌کند (معمولاً 1023 در .NET Framework، نامحدود در .NET Core)
- **افزایش تدریجی:** اگر کارهای جدید در صف منتظر بمانند، Thread Pool به تدریج نخ‌های جدید ایجاد می‌کند
- **کاهش تدریجی:** اگر نخ‌ها برای مدت طولانی بیکار بمانند، Thread Pool آن‌ها را آزاد می‌کند

**مثال: مشاهده تعداد نخ‌های Thread Pool:**

```csharp
// دریافت تعداد نخ‌های کارگر(Worker Threads) در Thread Pool
ThreadPool.GetMinThreads(out int minWorkerThreads, out int minCompletionPortThreads);
ThreadPool.GetMaxThreads(out int maxWorkerThreads, out int maxCompletionPortThreads);
ThreadPool.GetAvailableThreads(out int availableWorkerThreads, out int availableCompletionPortThreads);

Console.WriteLine($"حداقل نخ‌های کارگر: {minWorkerThreads}");
Console.WriteLine($"حداکثر نخ‌های کارگر: {maxWorkerThreads}");
Console.WriteLine($"نخ‌های کارگر موجود: {availableWorkerThreads}");
Console.WriteLine($"نخ‌های کارگر مشغول: {maxWorkerThreads - availableWorkerThreads}");
```

**تنظیم تعداد نخ‌ها (با احتیاط!):**

```csharp
// تنظیم حداقل تعداد نخ‌ها
ThreadPool.SetMinThreads(workerThreads: 10, completionPortThreads: 10);

// تنظیم حداکثر تعداد نخ‌ها
ThreadPool.SetMaxThreads(workerThreads: 100, completionPortThreads: 100);
```

**هشدار:** به طور کلی، بهتر است Thread Pool خودش تعداد نخ‌ها را مدیریت کند. فقط در موارد خاص و با درک کامل، تعداد نخ‌ها را دستی تنظیم کنید.

<a id="2214-task-parallel-library-tpl"></a>
#### 2.2.1.4 Task Parallel Library (TPL)

Task Parallel Library (TPL) یک کتابخانه قدرتمند در .NET است که بر اساس Thread Pool کار می‌کند اما سطح بالاتری از انتزاع را فراهم می‌کند. TPL از کلاس `Task` استفاده می‌کند.

**تفاوت ThreadPool و TPL:**

```csharp
// روش قدیمی: ThreadPool.QueueUserWorkItem
ThreadPool.QueueUserWorkItem(state => {
    DoWork((int)state);
}, 42);

// روش جدید: Task (TPL)
Task.Run(() => {
    DoWork(42);
});

// Task مزایای بیشتری دارد:
// - می‌توانید منتظر بمانید (await)
// - می‌توانید نتیجه بگیرید (Task<T>)
// - مدیریت استثنا بهتر
// - Continuation و ترکیب تسک‌ها
```

**مزایای TPL نسبت به ThreadPool:**

1. **async/await:** می‌توانید از `async/await` استفاده کنید
2. **مدیریت استثنا:** استثناها بهتر مدیریت می‌شوند
3. **نتایج:** می‌توانید نتیجه بگیرید (`Task<T>`)
4. **Continuation:** می‌توانید کارها را به هم متصل کنید
5. **Cancelation:** پشتیبانی بهتر از لغو(Cancellation)
6. **ترکیب تسک‌ها:** `Task.WhenAll`, `Task.WhenAny` و غیره

**مثال: استفاده از TPL:**

```csharp
// ایجاد چندین تسک
var tasks = new List<Task<int>>();

for (int i = 0; i < 10; i++)
{
    int taskId = i;
    tasks.Add(Task.Run(() => {
        Console.WriteLine($"تسک {taskId} شروع شد");
        Thread.Sleep(1000);
        return taskId * 2; // نتیجه
    }));
}

// منتظر اتمام همه تسک‌ها
await Task.WhenAll(tasks);

// دریافت نتایج
foreach (var task in tasks)
{
    Console.WriteLine($"نتیجه: {task.Result}");
}
```

<a id="2215-مزایا-و-معایب-thread-pool"></a>
#### 2.2.1.5 مزایا و معایب Thread Pool

**مزایا:**

1. **کارایی:** ایجاد نخ جدید هزینه‌بر است (حدود 1MB حافظه). Thread Pool این هزینه را کاهش می‌دهد
2. **مدیریت خودکار:** Thread Pool به صورت خودکار تعداد نخ‌ها را مدیریت می‌کند
3. **بهینه‌سازی منابع:** از ایجاد تعداد زیاد نخ جلوگیری می‌کند
4. **سازگاری با TPL:** Task Parallel Library از Thread Pool استفاده می‌کند

**معایب:**

1. **عدم کنترل مستقیم:** کنترل مستقیم روی نخ‌ها ندارید
2. **عدم اولویت‌بندی:** نمی‌توانید اولویت نخ‌ها را تنظیم کنید
3. **محدودیت در کارهای طولانی:** برای کارهای بسیار طولانی ممکن است مناسب نباشد (نخ‌ها باید آزاد شوند)

**چه زمانی از Thread Pool استفاده کنیم؟**

- ✅ کارهای کوتاه تا متوسط
- ✅ کارهای I/O bound (درخواست شبکه، خواندن فایل)
- ✅ کارهای CPU-bound که می‌توانند تقسیم شوند
- ✅ بیشتر کارهای ناهمزمان(Asynchronous)

**چه زمانی از Thread مستقیم استفاده کنیم؟**

- ❌ کارهای بسیار طولانی (مثلاً یک loop بی‌نهایت)
- ❌ نیاز به کنترل دقیق روی نخ (اولویت، نام و غیره)
- ❌ نیاز به Foreground Thread (نخ‌های Thread Pool Background هستند)

<a id="2216-مثال-کاربردی-پردازش-موازی-فایلها"></a>
#### 2.2.1.6 مثال کاربردی: پردازش موازی(Parallel) فایل‌ها

```csharp
public class FileProcessor
{
    public async Task ProcessFilesParallelAsync(string[] filePaths)
    {
        // ایجاد تسک برای هر فایل
        var tasks = filePaths.Select(filePath => 
            Task.Run(async () => {
                Console.WriteLine($"شروع پردازش: {filePath}");
                await ProcessFileAsync(filePath);
                Console.WriteLine($"پایان پردازش: {filePath}");
            })
        ).ToArray();
        
        // منتظر اتمام همه فایل‌ها
        await Task.WhenAll(tasks);
        Console.WriteLine("همه فایل‌ها پردازش شدند");
    }
    
    private async Task ProcessFileAsync(string filePath)
    {
        // شبیه‌سازی پردازش فایل
        await Task.Delay(2000);
        // در واقعیت: خواندن فایل، پردازش، نوشتن
    }
}

// استفاده
var processor = new FileProcessor();
string[] files = { "file1.txt", "file2.txt", "file3.txt", "file4.txt" };
await processor.ProcessFilesParallelAsync(files);
```

**محدود کردن تعداد تسک‌های همزمان(Concurrent):**

```csharp
public async Task ProcessFilesWithLimitAsync(string[] filePaths, int maxConcurrent)
{
    var semaphore = new SemaphoreSlim(maxConcurrent, maxConcurrent);
    var tasks = filePaths.Select(async filePath => {
        await semaphore.WaitAsync();
        try
        {
            await ProcessFileAsync(filePath);
        }
        finally
        {
            semaphore.Release();
        }
    }).ToArray();
    
    await Task.WhenAll(tasks);
}
```

<a id="2217-بهترین-روشها"></a>
#### 2.2.1.7 بهترین روش‌ها

**1. استفاده از Task.Run به جای ThreadPool.QueueUserWorkItem:**

```csharp
// ✅ توصیه می‌شود: Task.Run
Task.Run(() => DoWork());

// ⚠️ قدیمی: ThreadPool.QueueUserWorkItem
ThreadPool.QueueUserWorkItem(state => DoWork());
```

**2. استفاده از async/await برای کارهای I/O:**

```csharp
// ✅ درست: async/await برای I/O
public async Task<string> ReadFileAsync(string path)
{
    return await File.ReadAllTextAsync(path);
}

// ❌ نادرست: Task.Run برای I/O (بدون نیاز)
public Task<string> ReadFileAsync(string path)
{
    return Task.Run(() => File.ReadAllText(path)); // غیرضروری
}
```

**3. استفاده از Task.Run برای کارهای CPU-bound:**

```csharp
// ✅ درست: Task.Run برای CPU-bound
public Task<int> CalculateAsync(int n)
{
    return Task.Run(() => {
        // محاسبه سنگین
        int result = 0;
        for (int i = 0; i < n; i++)
        {
            result += i;
        }
        return result;
    });
}
```

**4. عدم استفاده از Task.Run در async methods بدون نیاز:**

```csharp
// ❌ نادرست: Task.Run غیرضروری
public async Task DoWorkAsync()
{
    await Task.Run(async () => {
        await SomeAsyncOperation(); // غیرضروری
    });
}

// ✅ درست: بدون Task.Run
public async Task DoWorkAsync()
{
    await SomeAsyncOperation();
}
```

#### خلاصه

- **Thread Pool:** مجموعه نخ‌های از پیش ایجاد شده برای کاهش هزینه ایجاد نخ
- **مدیریت خودکار:** Thread Pool به صورت خودکار تعداد نخ‌ها را تنظیم می‌کند
- **TPL (Task Parallel Library):** سطح بالاتر از انتزاع بر اساس Thread Pool
- **مزایا:** کارایی، مدیریت خودکار، بهینه‌سازی منابع
- **استفاده از Task.Run:** برای کارهای CPU-bound، استفاده از async/await برای کارهای I/O
- **بهترین روش:** استفاده از TPL به جای ThreadPool مستقیم، استفاده صحیح از async/await

<a id="222-استفاده-از-threadpoolqueueuserworkitem"></a>
### 2.2.2 استفاده از ThreadPool.QueueUserWorkItem()

`ThreadPool.QueueUserWorkItem` متد کلاسیک برای ارسال کار به Thread Pool است. در حالی که `Task.Run` روش مدرن‌تری است، درک `QueueUserWorkItem` برای کار با کدهای قدیمی و درک پایه‌های Thread Pool مهم است.

<a id="2221-مقدمه-و-استفاده-پایه"></a>
#### 2.2.2.1 مقدمه و استفاده پایه

`QueueUserWorkItem` یک کار را به Thread Pool ارسال می‌کند تا در نخ موجود اجرا شود. این متد دو overload دارد:

**Overload 1: فقط WaitCallback**

```csharp
// ساده‌ترین فرم
ThreadPool.QueueUserWorkItem(state => {
    Console.WriteLine($"کار اجرا شد - نخ: {Thread.CurrentThread.ManagedThreadId}");
    // کد کار
});
```

**Overload 2: WaitCallback + state object**

```csharp
// با state object
ThreadPool.QueueUserWorkItem(state => {
    int value = (int)state;
    Console.WriteLine($"ارزش دریافت شده: {value}");
}, 42); // state = 42
```

**مثال کامل:**

```csharp
public class WorkProcessor
{
    public void ProcessWork(int workId)
    {
        ThreadPool.QueueUserWorkItem(state => {
            int id = (int)state;
            Console.WriteLine($"شروع پردازش کار {id}");
            
            // شبیه‌سازی کار
            Thread.Sleep(2000);
            
            Console.WriteLine($"پایان پردازش کار {id}");
        }, workId);
    }
}

// استفاده
var processor = new WorkProcessor();
for (int i = 0; i < 10; i++)
{
    processor.ProcessWork(i);
}

Thread.Sleep(10000); // منتظر اتمام کارها
```

<a id="2222-نوع-waitcallback"></a>
#### 2.2.2.2 نوع WaitCallback

`WaitCallback` یک delegate است که signature زیر را دارد:

```csharp
public delegate void WaitCallback(object state);
```

**استفاده مستقیم از WaitCallback:**

```csharp
// تعریف متد جداگانه
private void DoWork(object state)
{
    string message = (string)state;
    Console.WriteLine($"پیام: {message}");
}

// ارسال به Thread Pool
ThreadPool.QueueUserWorkItem(DoWork, "سلام دنیا");
```

**استفاده با lambda expression:**

```csharp
// استفاده از lambda (معمول‌تر)
ThreadPool.QueueUserWorkItem(state => {
    string message = (string)state;
    Console.WriteLine($"پیام: {message}");
}, "سلام دنیا");
```

**استفاده با method group:**

```csharp
private void ProcessData(object state)
{
    int[] data = (int[])state;
    // پردازش داده
}

// ارسال با method group
int[] numbers = { 1, 2, 3, 4, 5 };
ThreadPool.QueueUserWorkItem(ProcessData, numbers);
```

<a id="2223-ارسال-چند-کار-همزمان"></a>
#### 2.2.2.3 ارسال چند کار همزمان(Concurrent)

می‌توانید چندین کار را به Thread Pool ارسال کنید:

```csharp
// ارسال 20 کار
for (int i = 0; i < 20; i++)
{
    int workId = i; // مهم: استفاده از متغیر محلی
    ThreadPool.QueueUserWorkItem(state => {
        int id = (int)state;
        Console.WriteLine($"کار {id} شروع شد - نخ: {Thread.CurrentThread.ManagedThreadId}");
        Thread.Sleep(1000);
        Console.WriteLine($"کار {id} تمام شد");
    }, workId);
}

Thread.Sleep(5000); // منتظر اتمام
```

**نکته مهم: مشکل closure در حلقه:**

```csharp
// ❌ مشکل: همه کارها مقدار 20 را می‌بینند!
for (int i = 0; i < 20; i++)
{
    ThreadPool.QueueUserWorkItem(state => {
        Console.WriteLine($"مقدار: {i}"); // همیشه 20!
    }, null);
}

// ✅ درست: استفاده از متغیر محلی
for (int i = 0; i < 20; i++)
{
    int localI = i; // کپی محلی
    ThreadPool.QueueUserWorkItem(state => {
        Console.WriteLine($"مقدار: {localI}"); // مقدار صحیح
    }, null);
}

// ✅ یا بهتر: استفاده از state
for (int i = 0; i < 20; i++)
{
    ThreadPool.QueueUserWorkItem(state => {
        int id = (int)state;
        Console.WriteLine($"مقدار: {id}"); // مقدار صحیح
    }, i);
}
```

<a id="2224-منتظر-ماندن-برای-اتمام-کار"></a>
#### 2.2.2.4 منتظر ماندن برای اتمام کار

`QueueUserWorkItem` فوراً برمی‌گردد و منتظر اتمام کار نمی‌ماند. برای منتظر ماندن باید از مکانیزم‌های دیگر استفاده کنید:

**روش 1: استفاده از ManualResetEvent:**

```csharp
public void ProcessWorkWithWait(int numberOfTasks)
{
    ManualResetEvent[] events = new ManualResetEvent[numberOfTasks];
    
    for (int i = 0; i < numberOfTasks; i++)
    {
        events[i] = new ManualResetEvent(false);
        int taskId = i;
        int eventIndex = i;
        
        ThreadPool.QueueUserWorkItem(state => {
            try
            {
                Console.WriteLine($"کار {taskId} شروع شد");
                Thread.Sleep(2000);
                Console.WriteLine($"کار {taskId} تمام شد");
            }
            finally
            {
                events[eventIndex].Set(); // علامت‌گذاری اتمام
            }
        });
    }
    
    // منتظر اتمام همه کارها
    WaitHandle.WaitAll(events);
    Console.WriteLine("همه کارها تمام شدند");
}
```

**روش 2: استفاده از CountdownEvent:**

```csharp
public void ProcessWorkWithCountdown(int numberOfTasks)
{
    using (CountdownEvent countdown = new CountdownEvent(numberOfTasks))
    {
        for (int i = 0; i < numberOfTasks; i++)
        {
            int taskId = i;
            ThreadPool.QueueUserWorkItem(state => {
                try
                {
                    Console.WriteLine($"کار {taskId} شروع شد");
                    Thread.Sleep(2000);
                    Console.WriteLine($"کار {taskId} تمام شد");
                }
                finally
                {
                    countdown.Signal(); // کاهش شمارنده
                }
            });
        }
        
        countdown.Wait(); // منتظر رسیدن به صفر
        Console.WriteLine("همه کارها تمام شدند");
    }
}
```

**روش 3: استفاده از Interlocked (برای شمارنده):**

```csharp
public void ProcessWorkWithCounter(int numberOfTasks)
{
    int completedTasks = 0;
    
    for (int i = 0; i < numberOfTasks; i++)
    {
        int taskId = i;
        ThreadPool.QueueUserWorkItem(state => {
            Console.WriteLine($"کار {taskId} شروع شد");
            Thread.Sleep(2000);
            Console.WriteLine($"کار {taskId} تمام شد");
            
            if (Interlocked.Increment(ref completedTasks) == numberOfTasks)
            {
                Console.WriteLine("همه کارها تمام شدند");
            }
        });
    }
    
    // منتظر اتمام (با polling)
    while (Volatile.Read(ref completedTasks) < numberOfTasks)
    {
        Thread.Sleep(100);
    }
}
```

<a id="2225-مدیریت-استثناها"></a>
#### 2.2.2.5 مدیریت استثناها

استثناهای رخ داده در `QueueUserWorkItem` باید در داخل callback مدیریت شوند، چون در Thread Pool رخ می‌دهند:

```csharp
// ❌ نادرست: استثنا مدیریت نمی‌شود
ThreadPool.QueueUserWorkItem(state => {
    throw new Exception("خطا!"); // استثنا از دست می‌رود!
});

// ✅ درست: مدیریت استثنا
ThreadPool.QueueUserWorkItem(state => {
    try
    {
        // کد کار
        ProcessWork();
    }
    catch (Exception ex)
    {
        Console.WriteLine($"خطا در کار: {ex.Message}");
        // لاگ کردن یا مدیریت خطا
    }
});
```

**مثال پیشرفته: مدیریت استثنا با callback:**

```csharp
public class SafeWorkProcessor
{
    public void QueueWorkSafe(Action work, Action<Exception> onError = null)
    {
        ThreadPool.QueueUserWorkItem(state => {
            try
            {
                work();
            }
            catch (Exception ex)
            {
                onError?.Invoke(ex);
            }
        });
    }
}

// استفاده
var processor = new SafeWorkProcessor();
processor.QueueWorkSafe(
    work: () => {
        Console.WriteLine("کار در حال اجرا...");
        throw new InvalidOperationException("خطای تست");
    },
    onError: ex => {
        Console.WriteLine($"خطا دریافت شد: {ex.Message}");
    }
);
```

<a id="2226-مقایسه-با-task-run"></a>
#### 2.2.2.6 مقایسه با Task.Run

**تفاوت‌های کلیدی:**

| ویژگی | QueueUserWorkItem | Task.Run |
|-------|-------------------|----------|
| **بازگشت نوع** | void (fire-and-forget) | Task |
| **منتظر ماندن** | نیاز به ManualResetEvent/CountdownEvent | await یا Wait() |
| **نتایج** | از طریق state object | Task<T> |
| **مدیریت استثنا** | دستی (در callback) | AggregateException در Wait() |
| **Continuation** | ندارد | دارد (ContinueWith) |
| **Cancellation** | ندارد | CancellationToken |
| **سازگاری async/await** | ندارد | دارد |

**مثال مقایسه:**

```csharp
// با QueueUserWorkItem
ThreadPool.QueueUserWorkItem(state => {
    int result = Calculate((int)state);
    // نمی‌توانید نتیجه را به راحتی بگیرید
}, 42);

// با Task.Run
Task<int> task = Task.Run(() => Calculate(42));
int result = await task; // نتیجه را می‌گیرید
```

**چه زمانی از QueueUserWorkItem استفاده کنیم؟**

- ✅ کدهای قدیمی که از ThreadPool استفاده می‌کنند
- ✅ کارهای ساده fire-and-forget (بدون نیاز به نتیجه)
- ✅ وقتی نیاز به async/await ندارید
- ✅ کار با کدهای legacy

**چه زمانی از Task.Run استفاده کنیم؟**

- ✅ کدهای جدید (توصیه می‌شود)
- ✅ نیاز به await یا نتایج
- ✅ نیاز به مدیریت استثنا بهتر
- ✅ نیاز به Cancellation
- ✅ ترکیب با async/await

<a id="2227-مثال-کاربردی-پردازش-فایل-پسزمینه"></a>
#### 2.2.2.7 مثال کاربردی: پردازش فایل در پس‌زمینه

```csharp
public class BackgroundFileProcessor
{
    private readonly Queue<string> _fileQueue = new Queue<string>();
    private readonly object _queueLock = new object();
    private bool _isProcessing = false;
    
    public void QueueFile(string filePath)
    {
        lock (_queueLock)
        {
            _fileQueue.Enqueue(filePath);
            
            if (!_isProcessing)
            {
                _isProcessing = true;
                ThreadPool.QueueUserWorkItem(ProcessFiles);
            }
        }
    }
    
    private void ProcessFiles(object state)
    {
        while (true)
        {
            string filePath = null;
            
            lock (_queueLock)
            {
                if (_fileQueue.Count == 0)
                {
                    _isProcessing = false;
                    break;
                }
                
                filePath = _fileQueue.Dequeue();
            }
            
            if (filePath != null)
            {
                try
                {
                    ProcessFile(filePath);
                    Console.WriteLine($"فایل پردازش شد: {filePath}");
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"خطا در پردازش {filePath}: {ex.Message}");
                }
            }
        }
    }
    
    private void ProcessFile(string filePath)
    {
        // شبیه‌سازی پردازش فایل
        Thread.Sleep(1000);
    }
}

// استفاده
var processor = new BackgroundFileProcessor();
processor.QueueFile("file1.txt");
processor.QueueFile("file2.txt");
processor.QueueFile("file3.txt");
```

<a id="2228-بهترین-روشها-و-نکات"></a>
#### 2.2.2.8 بهترین روش‌ها و نکات

**1. استفاده از Task.Run به جای QueueUserWorkItem (توصیه می‌شود):**

```csharp
// ⚠️ قدیمی - QueueUserWorkItem
ThreadPool.QueueUserWorkItem(state => DoWork());

// ✅ مدرن - Task.Run
Task.Run(() => DoWork());
```

**2. مدیریت استثنا در callback:**

```csharp
ThreadPool.QueueUserWorkItem(state => {
    try
    {
        DoWork();
    }
    catch (Exception ex)
    {
        // مدیریت استثنا
        LogError(ex);
    }
});
```

**3. استفاده صحیح از state:**

```csharp
// ✅ درست: استفاده از state برای انتقال داده
ThreadPool.QueueUserWorkItem(state => {
    var data = (MyData)state;
    ProcessData(data);
}, myData);

// ❌ نادرست: استفاده از متغیر خارجی (ممکن است تغییر کند)
ThreadPool.QueueUserWorkItem(state => {
    ProcessData(myData); // myData ممکن است تغییر کرده باشد
});
```

**4. جلوگیری از closure problems در حلقه:**

```csharp
// ❌ مشکل
for (int i = 0; i < 10; i++)
{
    ThreadPool.QueueUserWorkItem(state => Console.WriteLine(i)); // همه 10
}

// ✅ درست
for (int i = 0; i < 10; i++)
{
    int localI = i;
    ThreadPool.QueueUserWorkItem(state => Console.WriteLine(localI)); // 0 تا 9
}

// ✅ بهتر: استفاده از state
for (int i = 0; i < 10; i++)
{
    ThreadPool.QueueUserWorkItem(state => Console.WriteLine((int)state), i);
}
```

**5. محدود کردن تعداد کارهای همزمان:**

اگر نیاز به محدود کردن تعداد کارهای همزمان دارید، از SemaphoreSlim استفاده کنید:

```csharp
SemaphoreSlim semaphore = new SemaphoreSlim(5, 5); // حداکثر 5 کار همزمان

for (int i = 0; i < 20; i++)
{
    int taskId = i;
    ThreadPool.QueueUserWorkItem(async state => {
        await semaphore.WaitAsync();
        try
        {
            DoWork(taskId);
        }
        finally
        {
            semaphore.Release();
        }
    });
}
```

**6. Dispose کردن منابع:**

اگر از منابع IDisposable استفاده می‌کنید، مطمئن شوید که Dispose می‌شوند:

```csharp
ThreadPool.QueueUserWorkItem(state => {
    using (var resource = new MyResource())
    {
        resource.DoWork();
    }
    // resource به صورت خودکار Dispose می‌شود
});
```

#### خلاصه

- **QueueUserWorkItem:** متد کلاسیک برای ارسال کار به Thread Pool
- **دو overload:** با و بدون state object
- **Fire-and-forget:** فوراً برمی‌گردد، منتظر اتمام نمی‌ماند
- **مدیریت استثنا:** باید در callback انجام شود
- **محدودیت‌ها:** عدم پشتیبانی از async/await، نتایج، Cancellation
- **مقایسه با Task.Run:** Task.Run توصیه می‌شود برای کدهای جدید
- **بهترین روش:** استفاده از Task.Run به جای QueueUserWorkItem، مدیریت صحیح استثنا و state

<a id="223-تفاوتهای-بین-thread-و-threadpool"></a>
### 2.2.3 تفاوت‌های بین Thread و ThreadPool

درک تفاوت‌های بین `Thread` و `ThreadPool` برای انتخاب صحیح ابزار مناسب بسیار مهم است. هر کدام مزایا و معایب خود را دارند و برای سناریوهای مختلف مناسب هستند.

<a id="2231-تفاوتهای-اساسی"></a>
#### 2.2.3.1 تفاوت‌های اساسی

**Thread:**
- ایجاد یک نخ جدید برای هر کار
- کنترل مستقیم روی نخ (نام، اولویت، Foreground/Background)
- هزینه‌بر (حدود 1MB حافظه برای هر نخ)
- مناسب برای کارهای طولانی

**ThreadPool:**
- استفاده از نخ‌های از پیش ایجاد شده
- کنترل محدود (نمی‌توانید نام یا اولویت تنظیم کنید)
- کارآمد (بازاستفاده از نخ‌ها)
- مناسب برای کارهای کوتاه تا متوسط

<a id="2232-مقایسه-جزئیات"></a>
#### 2.2.3.2 مقایسه جزئیات

**جدول مقایسه کامل:**

| ویژگی | Thread | ThreadPool |
|-------|--------|------------|
| **ایجاد نخ** | هر بار نخ جدید | بازاستفاده از نخ‌های موجود |
| **هزینه حافظه** | بالا (~1MB برای هر نخ) | پایین (اشتراک‌گذاری) |
| **مدیریت** | دستی | خودکار |
| **کنترل** | کامل (نام، اولویت، نوع) | محدود |
| **اولویت نخ** | قابل تنظیم | غیرقابل تنظیم |
| **نوع نخ** | Foreground یا Background | فقط Background |
| **نام نخ** | قابل تنظیم | غیرقابل تنظیم |
| **مناسب برای** | کارهای طولانی | کارهای کوتاه-متوسط |
| **عملکرد** | کندتر (ایجاد نخ) | سریع‌تر (بازاستفاده) |
| **محدودیت تعداد** | نامحدود (محدودیت منابع) | محدود (مدیریت خودکار) |

<a id="2233-مثال-مقایسه-عملکرد"></a>
#### 2.2.3.3 مثال مقایسه عملکرد

**ایجاد 100 نخ با Thread:**

```csharp
var stopwatch = System.Diagnostics.Stopwatch.StartNew();

// ایجاد 100 نخ جدید
var threads = new List<Thread>();
for (int i = 0; i < 100; i++)
{
    int id = i;
    Thread thread = new Thread(() => {
        Thread.Sleep(100); // شبیه‌سازی کار
        Console.WriteLine($"نخ {id} تمام شد");
    });
    threads.Add(thread);
    thread.Start();
}

// منتظر اتمام همه نخ‌ها
foreach (var thread in threads)
{
    thread.Join();
}

stopwatch.Stop();
Console.WriteLine($"زمان با Thread: {stopwatch.ElapsedMilliseconds} ms");
// معمولاً بیشتر از ThreadPool (به خاطر هزینه ایجاد نخ)
```

**همان کار با ThreadPool:**

```csharp
var stopwatch = System.Diagnostics.Stopwatch.StartNew();
var countdown = new CountdownEvent(100);

// استفاده از ThreadPool
for (int i = 0; i < 100; i++)
{
    int id = i;
    ThreadPool.QueueUserWorkItem(state => {
        Thread.Sleep(100); // شبیه‌سازی کار
        Console.WriteLine($"کار {id} تمام شد");
        countdown.Signal();
    });
}

countdown.Wait();
stopwatch.Stop();
Console.WriteLine($"زمان با ThreadPool: {stopwatch.ElapsedMilliseconds} ms");
// معمولاً کمتر از Thread (به خاطر بازاستفاده از نخ‌ها)
```

<a id="2234-کنترل-ویژگیهای-نخ"></a>
#### 2.2.3.4 کنترل ویژگی‌های نخ

**با Thread - کنترل کامل:**

```csharp
// تنظیم نام نخ
Thread thread = new Thread(DoWork);
thread.Name = "WorkerThread-1";

// تنظیم اولویت
thread.Priority = ThreadPriority.Highest;

// تنظیم نوع نخ (Foreground)
thread.IsBackground = false; // Foreground - برنامه منتظر می‌ماند

thread.Start();
```

**با ThreadPool - کنترل محدود:**

```csharp
// نمی‌توانید نام، اولویت، یا نوع نخ را تنظیم کنید
ThreadPool.QueueUserWorkItem(state => {
    // نخ‌های ThreadPool همیشه Background هستند
    // نام و اولویت قابل تنظیم نیست
    DoWork();
});
```

<a id="2235-زمان-استفاده-از-هر-کدام"></a>
#### 2.2.3.5 زمان استفاده از هر کدام

**زمان استفاده از Thread:**

✅ کارهای بسیار طولانی (مثلاً یک loop بی‌نهایت)
```csharp
Thread thread = new Thread(() => {
    while (true)
    {
        // پردازش پیوسته
        ProcessContinuousWork();
        Thread.Sleep(1000);
    }
});
thread.IsBackground = false; // Foreground - برنامه منتظر می‌ماند
thread.Start();
```

✅ نیاز به کنترل اولویت
```csharp
Thread highPriorityThread = new Thread(DoCriticalWork);
highPriorityThread.Priority = ThreadPriority.Highest;
highPriorityThread.Start();
```

✅ نیاز به Foreground Thread
```csharp
Thread foregroundThread = new Thread(DoImportantWork);
foregroundThread.IsBackground = false; // برنامه منتظر می‌ماند
foregroundThread.Start();
```

✅ نیاز به نام‌گذاری نخ برای Debug
```csharp
Thread debugThread = new Thread(DoWork);
debugThread.Name = "DebugWorker";
debugThread.Start();
```

**زمان استفاده از ThreadPool:**

✅ کارهای کوتاه تا متوسط
```csharp
ThreadPool.QueueUserWorkItem(state => {
    ProcessShortTask();
});
```

✅ کارهای I/O bound
```csharp
ThreadPool.QueueUserWorkItem(state => {
    DownloadFile(url);
});
```

✅ کارهای CPU-bound که می‌توانند تقسیم شوند
```csharp
for (int i = 0; i < 1000; i++)
{
    int id = i;
    ThreadPool.QueueUserWorkItem(state => ProcessItem(id), i);
}
```

✅ بیشتر کارهای معمول (توصیه می‌شود)
```csharp
// یا بهتر: استفاده از Task.Run
Task.Run(() => DoWork());
```

<a id="2236-مثال-کاربردی-انتخاب-ابزار"></a>
#### 2.2.3.6 مثال کاربردی: انتخاب ابزار مناسب

**سناریو 1: پردازش موازی فایل‌ها (ThreadPool مناسب است)**

```csharp
public void ProcessFilesParallel(string[] files)
{
    // ThreadPool مناسب است - کارهای کوتاه-متوسط
    foreach (string file in files)
    {
        string filePath = file;
        ThreadPool.QueueUserWorkItem(state => {
            ProcessFile(filePath);
        });
    }
}

// یا بهتر: Task.Run
public async Task ProcessFilesParallelAsync(string[] files)
{
    var tasks = files.Select(file => Task.Run(() => ProcessFile(file)));
    await Task.WhenAll(tasks);
}
```

**سناریو 2: Background Service با Loop بی‌نهایت (Thread مناسب است)**

```csharp
public class BackgroundService
{
    private Thread _workerThread;
    private bool _isRunning = false;
    
    public void Start()
    {
        _isRunning = true;
        _workerThread = new Thread(WorkerLoop)
        {
            Name = "BackgroundServiceWorker",
            IsBackground = false, // Foreground - مهم است
            Priority = ThreadPriority.Normal
        };
        _workerThread.Start();
    }
    
    public void Stop()
    {
        _isRunning = false;
        _workerThread?.Join();
    }
    
    private void WorkerLoop()
    {
        while (_isRunning)
        {
            // کارهای دوره‌ای
            DoPeriodicWork();
            Thread.Sleep(5000);
        }
    }
}
```

**سناریو 3: پردازش با اولویت بالا (Thread مناسب است)**

```csharp
public void ProcessCriticalTask()
{
    Thread criticalThread = new Thread(() => {
        // کار بحرانی
        ProcessCriticalWork();
    })
    {
        Priority = ThreadPriority.Highest,
        Name = "CriticalWorker"
    };
    criticalThread.Start();
    criticalThread.Join(); // منتظر اتمام
}
```

<a id="2237-هزینه-و-عملکرد"></a>
#### 2.2.3.7 هزینه و عملکرد

**هزینه ایجاد نخ جدید:**

```csharp
// هزینه Thread جدید:
// - حدود 1MB حافظه stack
// - زمان ایجاد (~100 میکروثانیه)
// - تنظیم context switching

// هزینه ThreadPool:
// - استفاده از نخ موجود (هزینه تقریباً صفر)
// - فقط زمان ارسال کار به صف (~1 میکروثانیه)
```

**مثال اندازه‌گیری:**

```csharp
// اندازه‌گیری زمان ایجاد 1000 نخ
var sw1 = System.Diagnostics.Stopwatch.StartNew();
var threads = new List<Thread>();
for (int i = 0; i < 1000; i++)
{
    threads.Add(new Thread(() => Thread.Sleep(1)));
    threads[i].Start();
}
foreach (var t in threads) t.Join();
sw1.Stop();

// اندازه‌گیری زمان ارسال 1000 کار به ThreadPool
var sw2 = System.Diagnostics.Stopwatch.StartNew();
var countdown = new CountdownEvent(1000);
for (int i = 0; i < 1000; i++)
{
    ThreadPool.QueueUserWorkItem(state => {
        Thread.Sleep(1);
        countdown.Signal();
    });
}
countdown.Wait();
sw2.Stop();

Console.WriteLine($"Thread: {sw1.ElapsedMilliseconds} ms");
Console.WriteLine($"ThreadPool: {sw2.ElapsedMilliseconds} ms");
// ThreadPool معمولاً سریع‌تر است
```

<a id="2238-نکات-مهم"></a>
#### 2.2.3.8 نکات مهم

**1. ThreadPool برای کارهای طولانی مناسب نیست:**

```csharp
// ❌ نادرست: کار طولانی در ThreadPool
ThreadPool.QueueUserWorkItem(state => {
    while (true) // کار بی‌نهایت
    {
        DoWork();
        Thread.Sleep(1000);
    }
    // نخ ThreadPool گیر می‌کند و به pool برنمی‌گردد
});

// ✅ درست: استفاده از Thread برای کار طولانی
Thread thread = new Thread(() => {
    while (true)
    {
        DoWork();
        Thread.Sleep(1000);
    }
});
thread.IsBackground = true;
thread.Start();
```

**2. ThreadPool نخ‌های Background است:**

```csharp
// نخ‌های ThreadPool همیشه Background هستند
ThreadPool.QueueUserWorkItem(state => {
    // اگر برنامه اصلی تمام شود، این کار متوقف می‌شود
    DoWork();
});

// برای Foreground Thread، از Thread استفاده کنید
Thread thread = new Thread(DoWork);
thread.IsBackground = false; // Foreground
thread.Start();
// برنامه منتظر می‌ماند تا این نخ تمام شود
```

**3. محدودیت تعداد نخ‌های ThreadPool:**

```csharp
// ThreadPool تعداد نخ‌ها را محدود می‌کند
// اگر همه نخ‌ها مشغول باشند، کارهای جدید در صف منتظر می‌مانند

// ThreadPool.GetMaxThreads - حداکثر تعداد نخ‌ها
ThreadPool.GetMaxThreads(out int maxWorkerThreads, out int maxCompletionPortThreads);
Console.WriteLine($"حداکثر نخ‌های کارگر: {maxWorkerThreads}");

// برای کارهای زیاد، بهتر است از Task.Run یا محدود کردن استفاده کنید
```

**4. ترکیب Thread و ThreadPool:**

می‌توانید از هر دو استفاده کنید:

```csharp
// Thread برای کار طولانی
Thread longRunningThread = new Thread(() => {
    while (true)
    {
        // ارسال کارهای کوتاه به ThreadPool
        ThreadPool.QueueUserWorkItem(state => {
            ProcessShortTask();
        });
        Thread.Sleep(1000);
    }
});
longRunningThread.IsBackground = true;
longRunningThread.Start();
```

#### خلاصه

- **Thread:** کنترل کامل، هزینه‌بر، مناسب برای کارهای طولانی و کنترل دقیق
- **ThreadPool:** مدیریت خودکار، کارآمد، مناسب برای کارهای کوتاه-متوسط
- **انتخاب ابزار:** بر اساس نیاز - کنترل vs کارایی، کارهای طولانی vs کوتاه
- **توصیه:** برای بیشتر موارد از ThreadPool (یا Task.Run) استفاده کنید
- **Thread برای:** کارهای طولانی، کنترل اولویت، Foreground Thread، نام‌گذاری
- **ThreadPool برای:** کارهای کوتاه-متوسط، I/O bound، کارهای معمول

<a id="224-مدیریت-دستی-اولویتها-نخ"></a>
### 2.2.4 مدیریت دستی اولویت‌های نخ (Thread Priorities)

در بعضی سناریوها، نیاز دارید که برخی نخ‌ها نسبت به نخ‌های دیگر اولویت بیشتری داشته باشند. در C# می‌توانید اولویت نخ‌ها را با استفاده از `Thread.Priority` تنظیم کنید.

<a id="2241-مقادیر-اولویت-نخ"></a>
#### 2.2.4.1 مقادیر اولویت نخ(Thread Priority)

`ThreadPriority` یک enum است که مقادیر زیر را دارد:

- **Lowest:** پایین‌ترین اولویت
- **BelowNormal:** پایین‌تر از نرمال
- **Normal:** اولویت نرمال (پیش‌فرض)
- **AboveNormal:** بالاتر از نرمال
- **Highest:** بالاترین اولویت

**مثال ساده:**

```csharp
Thread thread = new Thread(DoWork);

// تنظیم اولویت
thread.Priority = ThreadPriority.Highest;

thread.Start();
```

<a id="2242-نحوه-کار-اولویت-نخ"></a>
#### 2.2.4.2 نحوه کار اولویت نخ(Thread Priority)

اولویت نخ به سیستم عامل می‌گوید که چقدر زمان CPU به نخ اختصاص دهد. نخ‌های با اولویت بالاتر زمان بیشتری از CPU دریافت می‌کنند.

**مهم:** اولویت نخ فقط یک پیشنهاد به سیستم عامل است. سیستم عامل ممکن است اولویت را نادیده بگیرد.

**مثال مقایسه:**

```csharp
// نخ با اولویت بالا
Thread highPriorityThread = new Thread(() => {
    for (int i = 0; i < 1000000; i++)
    {
        // کار سنگین
        Math.Sqrt(i);
    }
    Console.WriteLine("نخ با اولویت بالا تمام شد");
})
{
    Priority = ThreadPriority.Highest,
    Name = "HighPriorityThread"
};

// نخ با اولویت پایین
Thread lowPriorityThread = new Thread(() => {
    for (int i = 0; i < 1000000; i++)
    {
        Math.Sqrt(i);
    }
    Console.WriteLine("نخ با اولویت پایین تمام شد");
})
{
    Priority = ThreadPriority.Lowest,
    Name = "LowPriorityThread"
};

// شروع هر دو نخ
highPriorityThread.Start();
lowPriorityThread.Start();

// منتظر اتمام
highPriorityThread.Join();
lowPriorityThread.Join();
// معمولاً نخ با اولویت بالا زودتر تمام می‌شود
```

<a id="2243-مثال-کاربردی-پردازش-بحرانی"></a>
#### 2.2.4.3 مثال کاربردی: پردازش بحرانی

```csharp
public class PriorityProcessor
{
    public void ProcessCriticalTask(Action criticalWork)
    {
        Thread criticalThread = new Thread(() => {
            try
            {
                criticalWork();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"خطا در کار بحرانی: {ex.Message}");
            }
        })
        {
            Priority = ThreadPriority.Highest,
            Name = "CriticalWorker"
        };
        
        criticalThread.Start();
        criticalThread.Join();
    }
    
    public void ProcessNormalTask(Action normalWork)
    {
        Thread normalThread = new Thread(() => {
            try
            {
                normalWork();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"خطا در کار نرمال: {ex.Message}");
            }
        })
        {
            Priority = ThreadPriority.Normal,
            Name = "NormalWorker"
        };
        
        normalThread.Start();
        normalThread.Join();
    }
}

// استفاده
var processor = new PriorityProcessor();

// کار بحرانی با اولویت بالا
processor.ProcessCriticalTask(() => {
    Console.WriteLine("در حال انجام کار بحرانی...");
    Thread.Sleep(2000);
});

// کار نرمال با اولویت عادی
processor.ProcessNormalTask(() => {
    Console.WriteLine("در حال انجام کار نرمال...");
    Thread.Sleep(2000);
});
```

<a id="2244-نکات-مهم-و-هشدارها"></a>
#### 2.2.4.4 نکات مهم و هشدارها

**1. اولویت فقط یک پیشنهاد است:**

سیستم عامل ممکن است اولویت نخ را نادیده بگیرد، به خصوص در سیستم‌های مدرن که از time-slicing استفاده می‌کنند.

```csharp
Thread thread = new Thread(DoWork);
thread.Priority = ThreadPriority.Highest;
// تضمین نمی‌کند که همیشه اول اجرا شود
thread.Start();
```

**2. اولویت بالا می‌تواند باعث Starvation شود:**

اگر همه نخ‌ها اولویت بالا داشته باشند، نخ‌های با اولویت پایین ممکن است برای مدت طولانی اجرا نشوند (Starvation).

```csharp
// ❌ مشکل: همه نخ‌ها اولویت بالا
for (int i = 0; i < 10; i++)
{
    Thread thread = new Thread(DoWork)
    {
        Priority = ThreadPriority.Highest // همه Highest!
    };
    thread.Start();
}
// اگر همه Highest باشند، تفاوتی ندارد!

// ✅ بهتر: فقط نخ‌های واقعاً بحرانی اولویت بالا
Thread criticalThread = new Thread(CriticalWork)
{
    Priority = ThreadPriority.Highest
};
criticalThread.Start();

Thread normalThread = new Thread(NormalWork)
{
    Priority = ThreadPriority.Normal
};
normalThread.Start();
```

**3. اولویت بالا برای کارهای I/O مفید نیست:**

اولویت نخ فقط روی استفاده از CPU تأثیر می‌گذارد، نه روی I/O. اگر کار شما I/O-bound است (مثل خواندن فایل یا درخواست شبکه)، تغییر اولویت تأثیر کمی دارد.

```csharp
// ❌ بی‌فایده: اولویت بالا برای I/O
Thread ioThread = new Thread(() => {
    File.ReadAllText("largefile.txt"); // I/O-bound
})
{
    Priority = ThreadPriority.Highest // تأثیر کمی دارد
};
ioThread.Start();

// ✅ بهتر: برای CPU-bound کارها
Thread cpuThread = new Thread(() => {
    for (int i = 0; i < 1000000; i++)
    {
        Math.Sqrt(i); // CPU-bound
    }
})
{
    Priority = ThreadPriority.Highest // مفید است
};
cpuThread.Start();
```

**4. ThreadPool اولویت ندارد:**

نخ‌های ThreadPool اولویت تنظیم‌شدنی ندارند. اگر نیاز به کنترل اولویت دارید، باید از `Thread` استفاده کنید.

```csharp
// ❌ ThreadPool اولویت ندارد
ThreadPool.QueueUserWorkItem(state => {
    // نمی‌توانید اولویت تنظیم کنید
    DoWork();
});

// ✅ برای اولویت، از Thread استفاده کنید
Thread thread = new Thread(DoWork)
{
    Priority = ThreadPriority.Highest
};
thread.Start();
```

<a id="2245-بهترین-روشها"></a>
#### 2.2.4.5 بهترین روش‌ها

**1. استفاده محدود از اولویت بالا:**

فقط برای کارهای واقعاً بحرانی از اولویت بالا استفاده کنید:

```csharp
// ✅ درست: فقط کار بحرانی اولویت بالا
Thread criticalThread = new Thread(CriticalWork)
{
    Priority = ThreadPriority.Highest
};

Thread normalThread = new Thread(NormalWork)
{
    Priority = ThreadPriority.Normal // پیش‌فرض
};
```

**2. اجتناب از تغییر اولویت نخ اصلی(Main Thread):**

بهتر است اولویت نخ اصلی را تغییر ندهید:

```csharp
// ❌ توصیه نمی‌شود
Thread.CurrentThread.Priority = ThreadPriority.Highest;

// ✅ بهتر: نخ‌های جدید با اولویت مناسب ایجاد کنید
Thread workerThread = new Thread(DoWork)
{
    Priority = ThreadPriority.Highest
};
workerThread.Start();
```

**3. استفاده از اولویت Normal به عنوان پیش‌فرض:**

برای بیشتر کارها، اولویت Normal کافی است:

```csharp
// ✅ معمول: اولویت Normal
Thread thread = new Thread(DoWork);
// thread.Priority = ThreadPriority.Normal; // پیش‌فرض
thread.Start();

// فقط برای موارد خاص اولویت را تغییر دهید
if (isCritical)
{
    thread.Priority = ThreadPriority.Highest;
}
```

**4. تست و اندازه‌گیری:**

همیشه پس از تغییر اولویت، عملکرد را اندازه‌گیری کنید:

```csharp
var stopwatch = System.Diagnostics.Stopwatch.StartNew();

Thread highPriorityThread = new Thread(DoWork)
{
    Priority = ThreadPriority.Highest
};
highPriorityThread.Start();
highPriorityThread.Join();

stopwatch.Stop();
Console.WriteLine($"زمان با اولویت بالا: {stopwatch.ElapsedMilliseconds} ms");

// مقایسه با اولویت Normal
stopwatch.Restart();
Thread normalPriorityThread = new Thread(DoWork)
{
    Priority = ThreadPriority.Normal
};
normalPriorityThread.Start();
normalPriorityThread.Join();
stopwatch.Stop();
Console.WriteLine($"زمان با اولویت Normal: {stopwatch.ElapsedMilliseconds} ms");
```

<a id="2246-مثال-پیشرفته-مدیریت-چند-سطح-اولویت"></a>
#### 2.2.4.6 مثال پیشرفته: مدیریت چند سطح اولویت

```csharp
public class PriorityTaskManager
{
    private readonly object _lockObject = new object();
    private readonly Queue<Action> _criticalTasks = new Queue<Action>();
    private readonly Queue<Action> _highPriorityTasks = new Queue<Action>();
    private readonly Queue<Action> _normalTasks = new Queue<Action>();
    
    public void QueueCriticalTask(Action task)
    {
        lock (_lockObject)
        {
            _criticalTasks.Enqueue(task);
        }
        StartWorkerThread(ThreadPriority.Highest, ProcessCriticalTasks);
    }
    
    public void QueueHighPriorityTask(Action task)
    {
        lock (_lockObject)
        {
            _highPriorityTasks.Enqueue(task);
        }
        StartWorkerThread(ThreadPriority.AboveNormal, ProcessHighPriorityTasks);
    }
    
    public void QueueNormalTask(Action task)
    {
        lock (_lockObject)
        {
            _normalTasks.Enqueue(task);
        }
        StartWorkerThread(ThreadPriority.Normal, ProcessNormalTasks);
    }
    
    private void StartWorkerThread(ThreadPriority priority, Action workerMethod)
    {
        Thread thread = new Thread(() => {
            workerMethod();
        })
        {
            Priority = priority,
            IsBackground = true
        };
        thread.Start();
    }
    
    private void ProcessCriticalTasks()
    {
        while (true)
        {
            Action task = null;
            lock (_lockObject)
            {
                if (_criticalTasks.Count > 0)
                {
                    task = _criticalTasks.Dequeue();
                }
            }
            
            if (task == null)
            {
                break;
            }
            
            task();
        }
    }
    
    private void ProcessHighPriorityTasks()
    {
        while (true)
        {
            Action task = null;
            lock (_lockObject)
            {
                if (_highPriorityTasks.Count > 0)
                {
                    task = _highPriorityTasks.Dequeue();
                }
            }
            
            if (task == null)
            {
                break;
            }
            
            task();
        }
    }
    
    private void ProcessNormalTasks()
    {
        while (true)
        {
            Action task = null;
            lock (_lockObject)
            {
                if (_normalTasks.Count > 0)
                {
                    task = _normalTasks.Dequeue();
                }
            }
            
            if (task == null)
            {
                break;
            }
            
            task();
        }
    }
}
```

#### خلاصه

- **اولویت نخ(Thread Priority):** کنترل زمان CPU اختصاص داده شده به نخ
- **مقادیر:** Lowest, BelowNormal, Normal (پیش‌فرض), AboveNormal, Highest
- **محدودیت‌ها:** فقط پیشنهاد است، سیستم عامل ممکن است نادیده بگیرد
- **مناسب برای:** کارهای CPU-bound بحرانی
- **نامناسب برای:** کارهای I/O-bound، ThreadPool
- **بهترین روش:** استفاده محدود، فقط برای کارهای واقعاً بحرانی
- **هشدار:** اولویت بالا می‌تواند باعث Starvation شود

<a id="225-cancellationtoken-و-لغو-همکارانه-cooperative-cancellation"></a>
### 2.2.5 CancellationToken و لغو همکارانه (Cooperative Cancellation)

لغو همکارانه(Cooperative Cancellation) یکی از مهم‌ترین مفاهیم در برنامه‌نویسی چندنخی است. `CancellationToken` به شما امکان می‌دهد که به صورت امن و همکارانه کارهای در حال اجرا را لغو کنید.

<a id="2251-مفهوم-لغو-همکارانه"></a>
#### 2.2.5.1 مفهوم لغو همکارانه(Cooperative Cancellation)

لغو همکارانه(Cooperative Cancellation) به این معنی است که یک کار باید به صورت دوره‌ای بررسی کند که آیا درخواست لغو شده است یا نه، و در صورت لغو، به صورت منظم و امن متوقف شود.

**مشکل بدون CancellationToken:**

```csharp
// ❌ مشکل: نمی‌توانید کار در حال اجرا را متوقف کنید
Task.Run(() => {
    while (true) // کار بی‌نهایت
    {
        DoWork();
        Thread.Sleep(1000);
        // چگونه می‌توانید این کار را متوقف کنید؟
    }
});
```

**راه‌حل: استفاده از CancellationToken:**

```csharp
// ✅ درست: استفاده از CancellationToken
CancellationTokenSource cts = new CancellationTokenSource();
CancellationToken token = cts.Token;

Task.Run(() => {
    while (!token.IsCancellationRequested) // بررسی لغو
    {
        DoWork();
        Thread.Sleep(1000);
    }
    Console.WriteLine("کار لغو شد");
}, token);

// بعداً می‌توانید لغو کنید
cts.Cancel();
```

<a id="2252-cancellationtokensource-و-cancellationtoken"></a>
#### 2.2.5.2 CancellationTokenSource و CancellationToken

دو کلاس مرتبط وجود دارد:

- **CancellationTokenSource:** برای ایجاد و مدیریت توکن لغو
- **CancellationToken:** توکنی که به متدها پاس داده می‌شود

**ایجاد و استفاده:**

```csharp
// ایجاد CancellationTokenSource
CancellationTokenSource cts = new CancellationTokenSource();
CancellationToken token = cts.Token;

// پاس دادن token به کار
Task task = Task.Run(() => {
    while (!token.IsCancellationRequested)
    {
        DoWork();
        Thread.Sleep(1000);
    }
}, token);

// لغو کردن کار
cts.Cancel();
```

**مثال کامل:**

```csharp
public class WorkProcessor
{
    private CancellationTokenSource _cts;
    
    public void StartWork()
    {
        _cts = new CancellationTokenSource();
        CancellationToken token = _cts.Token;
        
        Task.Run(() => {
            int count = 0;
            while (!token.IsCancellationRequested)
            {
                Console.WriteLine($"کار {count} اجرا شد");
                count++;
                Thread.Sleep(1000);
            }
            Console.WriteLine("کار متوقف شد");
        }, token);
    }
    
    public void StopWork()
    {
        _cts?.Cancel();
    }
}

// استفاده
var processor = new WorkProcessor();
processor.StartWork();
Thread.Sleep(5000); // 5 ثانیه کار می‌کند
processor.StopWork(); // متوقف می‌کند
```

<a id="2253-بررسی-لغو-در-کار"></a>
#### 2.2.5.3 بررسی لغو در کار

**روش 1: بررسی IsCancellationRequested:**

```csharp
CancellationTokenSource cts = new CancellationTokenSource();
CancellationToken token = cts.Token;

Task.Run(() => {
    for (int i = 0; i < 1000; i++)
    {
        if (token.IsCancellationRequested)
        {
            Console.WriteLine("لغو شد");
            return; // یا break
        }
        
        DoWork(i);
        Thread.Sleep(100);
    }
}, token);

// بعداً
cts.Cancel();
```

**روش 2: استفاده از ThrowIfCancellationRequested:**

```csharp
CancellationTokenSource cts = new CancellationTokenSource();
CancellationToken token = cts.Token;

Task.Run(() => {
    try
    {
        for (int i = 0; i < 1000; i++)
        {
            token.ThrowIfCancellationRequested(); // اگر لغو شده باشد، OperationCanceledException پرتاب می‌کند
            
            DoWork(i);
            Thread.Sleep(100);
        }
    }
    catch (OperationCanceledException)
    {
        Console.WriteLine("کار لغو شد");
    }
}, token);

cts.Cancel();
```

**مقایسه دو روش:**

| روش | مزایا | معایب |
|-----|-------|-------|
| `IsCancellationRequested` | کنترل بیشتر، می‌توانید cleanup انجام دهید | نیاز به کد اضافی |
| `ThrowIfCancellationRequested` | ساده‌تر، exception handling خودکار | نیاز به try-catch |

<a id="2254-زمان-لغو"></a>
#### 2.2.5.4 زمان لغو(CancelAfter)

می‌توانید یک زمان مشخص کنید که بعد از آن کار به صورت خودکار لغو شود:

```csharp
CancellationTokenSource cts = new CancellationTokenSource();

// لغو بعد از 5 ثانیه
cts.CancelAfter(TimeSpan.FromSeconds(5));

Task.Run(() => {
    while (!cts.Token.IsCancellationRequested)
    {
        Console.WriteLine("کار در حال اجرا...");
        Thread.Sleep(1000);
    }
    Console.WriteLine("کار بعد از 5 ثانیه لغو شد");
}, cts.Token);
```

**مثال کاربردی: Timeout برای کار:**

```csharp
public async Task<bool> DoWorkWithTimeout(TimeSpan timeout)
{
    using (CancellationTokenSource cts = new CancellationTokenSource())
    {
        cts.CancelAfter(timeout);
        
        try
        {
            await Task.Run(() => {
                // کار زمان‌بر
                for (int i = 0; i < 1000000; i++)
                {
                    cts.Token.ThrowIfCancellationRequested();
                    DoHeavyWork(i);
                }
            }, cts.Token);
            
            return true;
        }
        catch (OperationCanceledException)
        {
            Console.WriteLine("کار به خاطر timeout لغو شد");
            return false;
        }
    }
}
```

<a id="2255-استفاده-با-task-run"></a>
#### 2.2.5.5 استفاده با Task.Run

```csharp
CancellationTokenSource cts = new CancellationTokenSource();
CancellationToken token = cts.Token;

// پاس دادن token به Task.Run
Task task = Task.Run(() => {
    for (int i = 0; i < 100; i++)
    {
        token.ThrowIfCancellationRequested();
        DoWork(i);
        Thread.Sleep(100);
    }
}, token);

// بعداً
cts.Cancel();

try
{
    await task;
}
catch (OperationCanceledException)
{
    Console.WriteLine("تسک لغو شد");
}
```

<a id="2256-استفاده-با-async-await"></a>
#### 2.2.5.6 استفاده با async/await

```csharp
public async Task ProcessDataAsync(CancellationToken cancellationToken)
{
    for (int i = 0; i < 100; i++)
    {
        cancellationToken.ThrowIfCancellationRequested();
        
        // کار ناهمزمان(Asynchronous)
        await ProcessItemAsync(i);
    }
}

// استفاده
CancellationTokenSource cts = new CancellationTokenSource();
CancellationToken token = cts.Token;

try
{
    await ProcessDataAsync(token);
}
catch (OperationCanceledException)
{
    Console.WriteLine("پردازش لغو شد");
}
finally
{
    cts.Dispose();
}
```

<a id="2257-لغو-چند-تسک"></a>
#### 2.2.5.7 لغو چند تسک با یک Token

یک `CancellationTokenSource` می‌تواند برای چندین تسک استفاده شود:

```csharp
CancellationTokenSource cts = new CancellationTokenSource();
CancellationToken token = cts.Token;

// ایجاد چندین تسک با همان token
var tasks = new List<Task>();

for (int i = 0; i < 10; i++)
{
    int taskId = i;
    tasks.Add(Task.Run(() => {
        while (!token.IsCancellationRequested)
        {
            Console.WriteLine($"تسک {taskId} در حال اجرا...");
            Thread.Sleep(1000);
        }
        Console.WriteLine($"تسک {taskId} متوقف شد");
    }, token));
}

// لغو همه تسک‌ها با یک بار Cancel
Thread.Sleep(5000);
cts.Cancel();

try
{
    await Task.WhenAll(tasks);
}
catch (OperationCanceledException)
{
    Console.WriteLine("همه تسک‌ها لغو شدند");
}
```

<a id="2258-ادغام-چند-token"></a>
#### 2.2.5.8 ادغام چند Token (Token Linking)

می‌توانید چند `CancellationTokenSource` را به هم متصل کنید:

```csharp
// ایجاد چند token source
CancellationTokenSource cts1 = new CancellationTokenSource();
CancellationTokenSource cts2 = new CancellationTokenSource();

// ادغام دو token
CancellationTokenSource linkedCts = CancellationTokenSource.CreateLinkedTokenSource(
    cts1.Token, 
    cts2.Token
);

Task.Run(() => {
    while (!linkedCts.Token.IsCancellationRequested)
    {
        DoWork();
        Thread.Sleep(1000);
    }
}, linkedCts.Token);

// اگر هر یک از token‌ها لغو شود، linked token هم لغو می‌شود
cts1.Cancel(); // linked token هم لغو می‌شود
// یا
cts2.Cancel(); // linked token هم لغو می‌شود
```

**مثال کاربردی: Timeout + Manual Cancel:**

```csharp
public async Task DoWorkWithTimeoutAndManualCancel(TimeSpan timeout)
{
    CancellationTokenSource timeoutCts = new CancellationTokenSource();
    timeoutCts.CancelAfter(timeout);
    
    CancellationTokenSource manualCts = new CancellationTokenSource();
    
    // ادغام دو token
    using (CancellationTokenSource linkedCts = CancellationTokenSource.CreateLinkedTokenSource(
        timeoutCts.Token,
        manualCts.Token))
    {
        Task workTask = Task.Run(() => {
            while (!linkedCts.Token.IsCancellationRequested)
            {
                DoWork();
                Thread.Sleep(1000);
            }
        }, linkedCts.Token);
        
        // می‌توانید به صورت دستی لغو کنید
        // manualCts.Cancel();
        
        await workTask;
    }
}
```

<a id="2259-استفاده-در-حلقه-ها"></a>
#### 2.2.5.9 استفاده در حلقه‌ها

```csharp
CancellationTokenSource cts = new CancellationTokenSource();
CancellationToken token = cts.Token;

// حلقه for
Task.Run(() => {
    for (int i = 0; i < 1000; i++)
    {
        token.ThrowIfCancellationRequested();
        ProcessItem(i);
    }
}, token);

// حلقه while
Task.Run(() => {
    while (!token.IsCancellationRequested)
    {
        ProcessItem();
        Thread.Sleep(1000);
    }
}, token);

// حلقه foreach
var items = Enumerable.Range(0, 1000);
Task.Run(() => {
    foreach (var item in items)
    {
        token.ThrowIfCancellationRequested();
        ProcessItem(item);
    }
}, token);
```

<a id="22510-مدیریت-منابع-و-dispose"></a>
#### 2.2.5.10 مدیریت منابع و Dispose

`CancellationTokenSource` باید Dispose شود:

```csharp
// ✅ درست: استفاده از using
using (CancellationTokenSource cts = new CancellationTokenSource())
{
    CancellationToken token = cts.Token;
    await DoWorkAsync(token);
} // به صورت خودکار Dispose می‌شود

// ✅ یا با IDisposable
public class WorkManager : IDisposable
{
    private CancellationTokenSource _cts;
    
    public void StartWork()
    {
        _cts = new CancellationTokenSource();
        // ...
    }
    
    public void Dispose()
    {
        _cts?.Cancel();
        _cts?.Dispose();
    }
}
```

<a id="22511-مثال-کاربردی-دانلود-با-لغو"></a>
#### 2.2.5.11 مثال کاربردی: دانلود با امکان لغو

```csharp
public class FileDownloader
{
    public async Task DownloadFileAsync(string url, string destination, CancellationToken cancellationToken)
    {
        using (var httpClient = new HttpClient())
        {
            using (var response = await httpClient.GetAsync(url, HttpCompletionOption.ResponseHeadersRead, cancellationToken))
            {
                response.EnsureSuccessStatusCode();
                
                using (var fileStream = new FileStream(destination, FileMode.Create))
                using (var httpStream = await response.Content.ReadAsStreamAsync(cancellationToken))
                {
                    byte[] buffer = new byte[8192];
                    int bytesRead;
                    
                    while ((bytesRead = await httpStream.ReadAsync(buffer, 0, buffer.Length, cancellationToken)) > 0)
                    {
                        cancellationToken.ThrowIfCancellationRequested();
                        await fileStream.WriteAsync(buffer, 0, bytesRead, cancellationToken);
                    }
                }
            }
        }
    }
}

// استفاده
CancellationTokenSource cts = new CancellationTokenSource();

try
{
    var downloader = new FileDownloader();
    await downloader.DownloadFileAsync("http://example.com/largefile.zip", "file.zip", cts.Token);
    Console.WriteLine("دانلود کامل شد");
}
catch (OperationCanceledException)
{
    Console.WriteLine("دانلود لغو شد");
    File.Delete("file.zip"); // حذف فایل ناقص
}
finally
{
    cts.Dispose();
}
```

<a id="22512-بهترین-روشها"></a>
#### 2.2.5.12 بهترین روش‌ها

**1. همیشه CancellationToken را پاس دهید:**

```csharp
// ✅ درست: پذیرش CancellationToken
public async Task ProcessDataAsync(CancellationToken cancellationToken)
{
    // ...
}

// ❌ نادرست: بدون CancellationToken
public async Task ProcessDataAsync()
{
    // نمی‌توانید لغو کنید
}
```

**2. بررسی دوره‌ای لغو:**

```csharp
// ✅ درست: بررسی دوره‌ای
for (int i = 0; i < items.Count; i++)
{
    cancellationToken.ThrowIfCancellationRequested();
    ProcessItem(items[i]);
}

// ❌ مشکل: اگر حلقه بسیار سریع باشد، ممکن است لغو دیر اتفاق بیفتد
for (int i = 0; i < 1000000; i++)
{
    ProcessItem(items[i]); // بررسی نمی‌شود
}
```

**3. استفاده از using برای CancellationTokenSource:**

```csharp
// ✅ درست
using (CancellationTokenSource cts = new CancellationTokenSource())
{
    await DoWorkAsync(cts.Token);
}
```

**4. مدیریت استثناها:**

```csharp
try
{
    await DoWorkAsync(cancellationToken);
}
catch (OperationCanceledException)
{
    // لغو طبیعی - فقط لاگ کنید
    Console.WriteLine("کار لغو شد");
}
catch (Exception ex)
{
    // خطای واقعی - مدیریت کنید
    Console.WriteLine($"خطا: {ex.Message}");
}
```

#### خلاصه

- **CancellationToken:** مکانیزم استاندارد برای لغو همکارانه(Cooperative Cancellation)
- **CancellationTokenSource:** برای ایجاد و مدیریت token
- **IsCancellationRequested:** بررسی اینکه آیا لغو درخواست شده
- **ThrowIfCancellationRequested:** پرتاب exception در صورت لغو
- **CancelAfter:** لغو خودکار بعد از زمان مشخص
- **Token Linking:** ادغام چند token برای لغو مشروط
- **بهترین روش:** همیشه CancellationToken را پاس دهید، از using استفاده کنید، مدیریت استثنا

## 2.3. برنامه‌نویسی ناهمزمان (Asynchronous Programming)

برنامه‌نویسی ناهمزمان(Asynchronous Programming) یکی از مهم‌ترین مهارت‌ها در توسعه برنامه‌های مدرن است. در سطح میانی، باید با الگوهای پیشرفته‌تر async/await، مدیریت استثنا، و تکنیک‌های بهینه‌سازی آشنا شوید.

<a id="231-الگوهای-ناهمزمان-با-task-async-و-await"></a>
### 2.3.1 الگوهای ناهمزمان با Task، async و await

در بخش پایه با مفاهیم اولیه `async` و `await` آشنا شدید. در سطح میانی، باید با الگوهای پیشرفته‌تر و بهترین روش‌های استفاده از این کلمات کلیدی آشنا شوید.

<a id="2311-بازبینی-مفاهیم-پایه"></a>
#### 2.3.1.1 بازبینی مفاهیم پایه

**async و await چیست؟**

- **`async`:** کلمه کلیدی که نشان می‌دهد متد ناهمزمان(Asynchronous) است
- **`await`:** کلمه کلیدی که منتظر اتمام یک عملیات ناهمزمان می‌ماند بدون مسدود کردن(Blocking) نخ

```csharp
// متد ناهمزمان(Asynchronous)
public async Task<string> GetDataAsync()
{
    // عملیات ناهمزمان - نخ مسدود نمی‌شود
    string data = await DownloadDataAsync();
    return data;
}
```

**نکته مهم:** `async` و `await` خودشان نخ جدید ایجاد نمی‌کنند. آن‌ها فقط مدیریت اجرای کد را انجام می‌دهند.

<a id="2312-الگوی-پایه-async-await"></a>
#### 2.3.1.2 الگوی پایه async/await

**ساختار پایه:**

```csharp
// متد ناهمزمان بدون نتیجه
public async Task DoWorkAsync()
{
    await SomeAsyncOperation();
    Console.WriteLine("کار تمام شد");
}

// متد ناهمزمان با نتیجه
public async Task<int> CalculateAsync()
{
    await Task.Delay(1000);
    return 42;
}

// استفاده
int result = await CalculateAsync();
```

**مثال کامل:**

```csharp
public class DataService
{
    public async Task<string> FetchDataAsync(string url)
    {
        using (var httpClient = new HttpClient())
        {
            // عملیات I/O - نخ مسدود نمی‌شود
            string data = await httpClient.GetStringAsync(url);
            return data;
        }
    }
    
    public async Task ProcessDataAsync(string[] urls)
    {
        var tasks = urls.Select(url => FetchDataAsync(url));
        string[] results = await Task.WhenAll(tasks);
        
        foreach (var result in results)
        {
            Console.WriteLine($"داده دریافت شد: {result.Length} کاراکتر");
        }
    }
}

// استفاده
var service = new DataService();
await service.ProcessDataAsync(new[] { "url1", "url2", "url3" });
```

<a id="2313-تفاوت-void-task-و-taskt"></a>
#### 2.3.1.3 تفاوت void، Task و Task<T>

**1. void (توصیه نمی‌شود):**

```csharp
// ❌ نادرست: async void فقط برای event handlers
public async void BadMethod()
{
    await Task.Delay(1000);
    // استثناها ممکن است از دست بروند!
}

// ✅ فقط برای event handlers
private async void Button_Click(object sender, EventArgs e)
{
    await DoWorkAsync();
}
```

**2. Task (بدون نتیجه):**

```csharp
// ✅ درست: برای متدهای بدون نتیجه
public async Task DoWorkAsync()
{
    await Task.Delay(1000);
    Console.WriteLine("کار تمام شد");
}

// استفاده
await DoWorkAsync();
```

**3. Task<T> (با نتیجه):**

```csharp
// ✅ درست: برای متدهای با نتیجه
public async Task<int> GetValueAsync()
{
    await Task.Delay(1000);
    return 42;
}

// استفاده
int value = await GetValueAsync();
```

**جدول مقایسه:**

| نوع بازگشتی | استفاده | مدیریت استثنا | قابل await |
|-------------|---------|----------------|------------|
| `void` | فقط event handlers | مشکل دارد | خیر |
| `Task` | متدهای بدون نتیجه | کامل | بله |
| `Task<T>` | متدهای با نتیجه | کامل | بله |

<a id="2314-الگوی-زنجیره-ای-async"></a>
#### 2.3.1.4 الگوی زنجیره‌ای async (Async Chain)

می‌توانید متدهای async را به صورت زنجیره‌ای فراخوانی کنید:

```csharp
public async Task<string> Step1Async()
{
    await Task.Delay(1000);
    return "مرحله 1";
}

public async Task<string> Step2Async(string input)
{
    await Task.Delay(1000);
    return $"{input} -> مرحله 2";
}

public async Task<string> Step3Async(string input)
{
    await Task.Delay(1000);
    return $"{input} -> مرحله 3";
}

// استفاده زنجیره‌ای
public async Task<string> ProcessAllStepsAsync()
{
    string step1 = await Step1Async();
    string step2 = await Step2Async(step1);
    string step3 = await Step3Async(step2);
    return step3;
}

// یا به صورت مستقیم
string result = await Step3Async(await Step2Async(await Step1Async()));
```

<a id="2315-الگوی-موازی-با-taskwhenall"></a>
#### 2.3.1.5 الگوی موازی(Parallel) با Task.WhenAll

برای اجرای چندین عملیات ناهمزمان به صورت موازی(Parallel):

```csharp
public async Task ProcessMultipleItemsAsync(string[] items)
{
    // ایجاد تسک‌ها (همه همزمان(Concurrent) شروع می‌شوند)
    var tasks = items.Select(item => ProcessItemAsync(item)).ToArray();
    
    // منتظر اتمام همه
    string[] results = await Task.WhenAll(tasks);
    
    return results;
}

// یا بدون نیاز به نتایج
public async Task ProcessMultipleItemsAsync(string[] items)
{
    var tasks = items.Select(item => ProcessItemAsync(item));
    await Task.WhenAll(tasks);
    // همه پردازش شدند
}
```

**مثال کاربردی: دانلود چند فایل:**

```csharp
public async Task<string[]> DownloadFilesAsync(string[] urls)
{
    using (var httpClient = new HttpClient())
    {
        // همه دانلودها همزمان(Concurrent) شروع می‌شوند
        var downloadTasks = urls.Select(url => 
            httpClient.GetStringAsync(url)
        ).ToArray();
        
        // منتظر اتمام همه
        string[] contents = await Task.WhenAll(downloadTasks);
        return contents;
    }
}
```

<a id="2316-الگوی-اولین-پاسخ-با-taskwhenany"></a>
#### 2.3.1.6 الگوی اولین پاسخ(First Response) با Task.WhenAny

برای منتظر ماندن تا اولین تسک تمام شود:

```csharp
public async Task<string> GetFirstResponseAsync(string[] urls)
{
    using (var httpClient = new HttpClient())
    {
        // ایجاد تسک‌ها برای همه URLها
        var tasks = urls.Select(url => 
            httpClient.GetStringAsync(url)
        ).ToArray();
        
        // منتظر اولین پاسخ
        Task<string> firstTask = await Task.WhenAny(tasks);
        string result = await firstTask;
        
        // لغو بقیه (اختیاری)
        // ...
        
        return result;
    }
}
```

**مثال کاربردی: Race Condition برای بهترین سرور:**

```csharp
public async Task<string> GetDataFromFastestServerAsync(string[] serverUrls)
{
    var tasks = serverUrls.Select(url => 
        FetchDataFromServerAsync(url)
    ).ToArray();
    
    // اولین سروری که پاسخ داد
    Task<string> fastestTask = await Task.WhenAny(tasks);
    string data = await fastestTask;
    
    // بقیه را لغو کنید (اگر نیاز دارید)
    // ...
    
    return data;
}
```

<a id="2317-الگوی-ترکیبی"></a>
#### 2.3.1.7 الگوی ترکیبی: زنجیره + موازی

می‌توانید الگوها را ترکیب کنید:

```csharp
public async Task<string[]> ProcessDataPipelineAsync(string[] inputs)
{
    // مرحله 1: پردازش موازی(Parallel) همه آیتم‌ها
    var step1Tasks = inputs.Select(input => Step1Async(input)).ToArray();
    string[] step1Results = await Task.WhenAll(step1Tasks);
    
    // مرحله 2: پردازش موازی(Parallel) نتایج مرحله 1
    var step2Tasks = step1Results.Select(result => Step2Async(result)).ToArray();
    string[] step2Results = await Task.WhenAll(step2Tasks);
    
    // مرحله 3: پردازش موازی(Parallel) نتایج مرحله 2
    var step3Tasks = step2Results.Select(result => Step3Async(result)).ToArray();
    string[] finalResults = await Task.WhenAll(step3Tasks);
    
    return finalResults;
}
```

<a id="2318-مثال-کاربردی-پردازش-داده-پایپلاین"></a>
#### 2.3.1.8 مثال کاربردی: پردازش داده Pipeline

```csharp
public class DataPipeline
{
    public async Task<List<ProcessedData>> ProcessPipelineAsync(List<RawData> rawDataList)
    {
        // مرحله 1: اعتبارسنجی موازی(Parallel)
        var validationTasks = rawDataList.Select(data => ValidateAsync(data)).ToArray();
        var validatedData = await Task.WhenAll(validationTasks);
        var validData = validatedData.Where(v => v.IsValid).Select(v => v.Data).ToList();
        
        // مرحله 2: تبدیل موازی(Parallel)
        var transformTasks = validData.Select(data => TransformAsync(data)).ToArray();
        var transformedData = await Task.WhenAll(transformTasks);
        
        // مرحله 3: ذخیره موازی(Parallel)
        var saveTasks = transformedData.Select(data => SaveAsync(data)).ToArray();
        var savedData = await Task.WhenAll(saveTasks);
        
        return savedData.ToList();
    }
    
    private async Task<ValidationResult> ValidateAsync(RawData data)
    {
        await Task.Delay(100); // شبیه‌سازی اعتبارسنجی
        return new ValidationResult { IsValid = true, Data = data };
    }
    
    private async Task<TransformedData> TransformAsync(RawData data)
    {
        await Task.Delay(200); // شبیه‌سازی تبدیل
        return new TransformedData { /* ... */ };
    }
    
    private async Task<ProcessedData> SaveAsync(TransformedData data)
    {
        await Task.Delay(150); // شبیه‌سازی ذخیره
        return new ProcessedData { /* ... */ };
    }
}
```

<a id="2319-بهترین-روشها-و-نکات"></a>
#### 2.3.1.9 بهترین روش‌ها و نکات

**1. همیشه از Task به جای void استفاده کنید (به جز event handlers):**

```csharp
// ✅ درست
public async Task DoWorkAsync() { }

// ❌ نادرست (به جز event handlers)
public async void DoWorkAsync() { }
```

**2. نام متدهای async را با Async تمام کنید:**

```csharp
// ✅ درست
public async Task<string> GetDataAsync() { }

// ❌ نادرست
public async Task<string> GetData() { }
```

**3. استفاده از Task.WhenAll برای عملیات مستقل:**

```csharp
// ✅ درست: موازی(Parallel)
var tasks = items.Select(item => ProcessItemAsync(item));
await Task.WhenAll(tasks);

// ❌ نادرست: متوالی(Sequential)
foreach (var item in items)
{
    await ProcessItemAsync(item); // کندتر
}
```

**4. استفاده از Task.WhenAny برای Race Condition:**

```csharp
// ✅ درست: اولین پاسخ
var tasks = servers.Select(s => GetDataAsync(s));
Task<string> first = await Task.WhenAny(tasks);
string result = await first;
```

**5. مدیریت استثنا در async:**

```csharp
// ✅ درست: try-catch
try
{
    await DoWorkAsync();
}
catch (Exception ex)
{
    Console.WriteLine($"خطا: {ex.Message}");
}
```

#### خلاصه

- **async/await:** الگوی استاندارد برای برنامه‌نویسی ناهمزمان(Asynchronous Programming)
- **Task vs Task<T>:** Task برای بدون نتیجه، Task<T> برای با نتیجه
- **Task.WhenAll:** برای اجرای موازی(Parallel) چندین عملیات
- **Task.WhenAny:** برای منتظر ماندن اولین پاسخ
- **الگوهای ترکیبی:** می‌توانید زنجیره و موازی(Parallel) را ترکیب کنید
- **بهترین روش:** همیشه از Task استفاده کنید، نام‌گذاری با Async، استفاده صحیح از WhenAll/WhenAny

<a id="232-configureawaitfalse-برای-جلوگیری-از-قفل-مرگ-در-برنامههای-ui"></a>
### 2.3.2 ConfigureAwait(false) برای جلوگیری از قفل مرگ(Deadlock) در برنامه‌های UI

`ConfigureAwait(false)` یکی از مهم‌ترین و در عین حال کمتر شناخته شده‌ترین ویژگی‌های async/await است. درک صحیح آن برای جلوگیری از قفل مرگ(Deadlock) و بهبود عملکرد ضروری است.

<a id="2321-مفهوم-synchronizationcontext"></a>
#### 2.3.2.1 مفهوم SynchronizationContext

قبل از درک `ConfigureAwait`، باید با `SynchronizationContext` آشنا شوید.

**SynchronizationContext چیست؟**

`SynchronizationContext` یک کلاس است که نشان می‌دهد کد باید در کدام context اجرا شود. در برنامه‌های UI (مثل WPF، WinForms، ASP.NET)، یک `SynchronizationContext` خاص وجود دارد که اطمینان می‌دهد کد UI در نخ UI اجرا شود.

**رفتار پیش‌فرض await:**

```csharp
// در یک برنامه UI (مثل WPF)
public async Task LoadDataAsync()
{
    // این کد در نخ UI اجرا می‌شود
    string data = await GetDataAsync();
    // بعد از await، ادامه کد دوباره در نخ UI اجرا می‌شود (پیش‌فرض)
    textBox.Text = data; // نیاز به نخ UI دارد
}
```

**مشکل:** وقتی `await` تمام می‌شود، به صورت پیش‌فرض سعی می‌کند ادامه کد را در همان `SynchronizationContext` قبلی اجرا کند.

<a id="2322-مشکل-قفل-مرگ-deadlock"></a>
#### 2.3.2.2 مشکل قفل مرگ(Deadlock)

**سناریوی قفل مرگ(Deadlock):**

```csharp
// ❌ مشکل: قفل مرگ(Deadlock) در برنامه UI
public void Button_Click(object sender, EventArgs e)
{
    // این در نخ UI اجرا می‌شود
    var result = GetDataAsync().Result; // مسدود کردن نخ UI
    // قفل مرگ(Deadlock)!
}

public async Task<string> GetDataAsync()
{
    await Task.Delay(1000);
    // سعی می‌کند به نخ UI برگردد (که مسدود شده است)
    return "data";
}
```

**چرا قفل مرگ(Deadlock) رخ می‌دهد؟**

1. نخ UI با `.Result` مسدود می‌شود
2. `GetDataAsync` منتظر می‌ماند تا به نخ UI برگردد
3. نخ UI منتظر `.Result` است
4. قفل مرگ(Deadlock)!

<a id="2323-راه-حل-configureawaitfalse"></a>
#### 2.3.2.3 راه‌حل: ConfigureAwait(false)

`ConfigureAwait(false)` به `await` می‌گوید که نیازی نیست به `SynchronizationContext` قبلی برگردد.

```csharp
// ✅ درست: استفاده از ConfigureAwait(false)
public async Task<string> GetDataAsync()
{
    await Task.Delay(1000).ConfigureAwait(false);
    // دیگر سعی نمی‌کند به نخ UI برگردد
    return "data";
}

public void Button_Click(object sender, EventArgs e)
{
    var result = GetDataAsync().Result; // دیگر قفل مرگ(Deadlock) نمی‌دهد
}
```

**نکته مهم:** اگر بعد از `ConfigureAwait(false)` نیاز به دسترسی به UI دارید، باید دوباره به نخ UI برگردید:

```csharp
public async Task LoadDataAsync()
{
    // کار سنگین - نیازی به نخ UI نیست
    string data = await GetDataFromServerAsync().ConfigureAwait(false);
    
    // حالا نیاز به نخ UI داریم
    await Dispatcher.InvokeAsync(() => {
        textBox.Text = data; // دسترسی به UI
    });
}
```

<a id="2324-زمان-استفاده-از-configureawaitfalse"></a>
#### 2.3.2.4 زمان استفاده از ConfigureAwait(false)

**✅ استفاده کنید وقتی:**

1. **کد Library است (نه UI):**

```csharp
// ✅ در یک Library
public static async Task<string> ProcessDataAsync(string input)
{
    // نیازی به SynchronizationContext نداریم
    string result = await ProcessAsync(input).ConfigureAwait(false);
    return result;
}
```

2. **کارهای I/O یا CPU-bound:**

```csharp
public async Task<string> DownloadFileAsync(string url)
{
    using (var client = new HttpClient())
    {
        // I/O operation - نیازی به نخ UI نیست
        return await client.GetStringAsync(url).ConfigureAwait(false);
    }
}
```

3. **کدهای Background:**

```csharp
public async Task ProcessInBackgroundAsync()
{
    // کار پس‌زمینه - نیازی به نخ UI نیست
    await HeavyComputationAsync().ConfigureAwait(false);
    await SaveToDatabaseAsync().ConfigureAwait(false);
}
```

**❌ استفاده نکنید وقتی:**

1. **نیاز به دسترسی به UI دارید:**

```csharp
// ❌ نادرست: بعد از ConfigureAwait نمی‌توانید به UI دسترسی داشته باشید
public async Task UpdateUIAsync()
{
    await LoadDataAsync().ConfigureAwait(false);
    textBox.Text = "Done"; // خطا! در نخ UI نیستیم
}

// ✅ درست: اگر نیاز به UI دارید، ConfigureAwait استفاده نکنید
public async Task UpdateUIAsync()
{
    string data = await LoadDataAsync(); // بدون ConfigureAwait
    textBox.Text = data; // در نخ UI هستیم
}
```

<a id="2325-مثال-کاربردی-library"></a>
#### 2.3.2.5 مثال کاربردی: Library Code

```csharp
// Library Code - همیشه ConfigureAwait(false) استفاده کنید
public class DataService
{
    public async Task<string> GetDataAsync()
    {
        // نیازی به SynchronizationContext نداریم
        using (var client = new HttpClient())
        {
            string data = await client.GetStringAsync("http://api.example.com/data")
                .ConfigureAwait(false);
            
            // پردازش داده
            string processed = await ProcessDataAsync(data)
                .ConfigureAwait(false);
            
            return processed;
        }
    }
    
    private async Task<string> ProcessDataAsync(string data)
    {
        // کار CPU-bound - نیازی به نخ UI نیست
        await Task.Run(() => {
            // پردازش سنگین
            Thread.Sleep(1000);
        }).ConfigureAwait(false);
        
        return data.ToUpper();
    }
}

// استفاده در UI
public async void Button_Click(object sender, EventArgs e)
{
    var service = new DataService();
    string result = await service.GetDataAsync(); // Library از ConfigureAwait استفاده کرده
    textBox.Text = result; // این در نخ UI اجرا می‌شود
}
```

<a id="2326-مثال-کاربردی-ui-code"></a>
#### 2.3.2.6 مثال کاربردی: UI Code

```csharp
// UI Code - فقط وقتی نیاز به UI ندارید از ConfigureAwait استفاده کنید
public partial class MainWindow : Window
{
    public async void LoadButton_Click(object sender, RoutedEventArgs e)
    {
        // مرحله 1: کار I/O - نیازی به نخ UI نیست
        string data = await DownloadDataAsync().ConfigureAwait(false);
        
        // مرحله 2: پردازش - نیازی به نخ UI نیست
        string processed = await ProcessDataAsync(data).ConfigureAwait(false);
        
        // مرحله 3: به‌روزرسانی UI - نیاز به نخ UI داریم
        await Dispatcher.InvokeAsync(() => {
            textBox.Text = processed;
            statusLabel.Content = "Done";
        });
    }
    
    private async Task<string> DownloadDataAsync()
    {
        using (var client = new HttpClient())
        {
            return await client.GetStringAsync("http://api.example.com/data")
                .ConfigureAwait(false);
        }
    }
    
    private async Task<string> ProcessDataAsync(string data)
    {
        return await Task.Run(() => {
            // پردازش سنگین
            return data.ToUpper();
        }).ConfigureAwait(false);
    }
}
```

<a id="2327-بهبود-عملکرد"></a>
#### 2.3.2.7 بهبود عملکرد(Performance)

`ConfigureAwait(false)` نه تنها از قفل مرگ(Deadlock) جلوگیری می‌کند، بلکه عملکرد را هم بهبود می‌بخشد:

**بدون ConfigureAwait:**

```csharp
// کندتر: باید به SynchronizationContext برگردد
public async Task ProcessManyItemsAsync(string[] items)
{
    foreach (var item in items)
    {
        await ProcessItemAsync(item); // هر بار به context برمی‌گردد
    }
}
```

**با ConfigureAwait:**

```csharp
// سریع‌تر: نیازی به بازگشت به context نیست
public async Task ProcessManyItemsAsync(string[] items)
{
    foreach (var item in items)
    {
        await ProcessItemAsync(item).ConfigureAwait(false); // سریع‌تر
    }
}
```

<a id="2328-قوانین-طلا"></a>
#### 2.3.2.8 قوانین طلا(Golden Rules)

**قانون 1: در Library Code همیشه ConfigureAwait(false) استفاده کنید**

```csharp
// ✅ همیشه در Library
public async Task<string> LibraryMethodAsync()
{
    await SomeOperationAsync().ConfigureAwait(false);
    return "result";
}
```

**قانون 2: در UI Code فقط وقتی نیاز به UI ندارید استفاده کنید**

```csharp
// ✅ در UI - کار I/O
string data = await GetDataAsync().ConfigureAwait(false);

// ✅ در UI - به‌روزرسانی UI (بدون ConfigureAwait)
textBox.Text = data; // در نخ UI هستیم
```

**قانون 3: هرگز از .Result یا .Wait() در async code استفاده نکنید**

```csharp
// ❌ هرگز این کار را نکنید
var result = GetDataAsync().Result; // قفل مرگ(Deadlock)!

// ✅ درست
var result = await GetDataAsync();
```

**قانون 4: در ASP.NET Core نیازی به ConfigureAwait نیست**

ASP.NET Core از SynchronizationContext استفاده نمی‌کند، پس `ConfigureAwait(false)` تأثیری ندارد (اما استفاده از آن ضرری هم ندارد).

<a id="2329-مثال-کامل-library"></a>
#### 2.3.2.9 مثال کامل: Library با ConfigureAwait

```csharp
public class ApiClient
{
    private readonly HttpClient _httpClient;
    
    public ApiClient()
    {
        _httpClient = new HttpClient();
    }
    
    public async Task<string> GetDataAsync(string endpoint)
    {
        // I/O operation - ConfigureAwait(false)
        string response = await _httpClient.GetStringAsync(endpoint)
            .ConfigureAwait(false);
        
        return response;
    }
    
    public async Task<List<T>> GetListAsync<T>(string endpoint)
    {
        // I/O operation - ConfigureAwait(false)
        string json = await GetDataAsync(endpoint)
            .ConfigureAwait(false);
        
        // CPU-bound - ConfigureAwait(false)
        List<T> result = await Task.Run(() => 
            JsonSerializer.Deserialize<List<T>>(json)
        ).ConfigureAwait(false);
        
        return result;
    }
    
    public async Task SaveDataAsync<T>(string endpoint, T data)
    {
        // I/O operation - ConfigureAwait(false)
        string json = JsonSerializer.Serialize(data);
        var content = new StringContent(json, Encoding.UTF8, "application/json");
        
        await _httpClient.PostAsync(endpoint, content)
            .ConfigureAwait(false);
    }
}
```

<a id="23210-نکات-مهم"></a>
#### 2.3.2.10 نکات مهم

**1. ConfigureAwait فقط روی await تأثیر می‌گذارد:**

```csharp
// ConfigureAwait فقط روی این await تأثیر می‌گذارد
await Task1().ConfigureAwait(false);
await Task2(); // این await به context برمی‌گردد
```

**2. ConfigureAwait در Task.Run تأثیری ندارد:**

```csharp
// Task.Run همیشه در ThreadPool اجرا می‌شود
await Task.Run(() => DoWork()).ConfigureAwait(false); // ConfigureAwait بی‌تأثیر است
```

**3. ConfigureAwait در async void تأثیری ندارد:**

```csharp
// async void همیشه در context قبلی ادامه می‌دهد
public async void EventHandler()
{
    await Task.Delay(1000).ConfigureAwait(false); // بی‌تأثیر
    // کد بعدی در context قبلی اجرا می‌شود
}
```

#### خلاصه

- **ConfigureAwait(false):** جلوگیری از بازگشت به SynchronizationContext
- **استفاده در Library:** همیشه استفاده کنید
- **استفاده در UI:** فقط وقتی نیاز به UI ندارید
- **جلوگیری از Deadlock:** جلوگیری از قفل مرگ(Deadlock) در برنامه‌های UI
- **بهبود عملکرد:** سریع‌تر از بازگشت به context
- **قوانین طلا:** در Library همیشه، در UI با احتیاط، هرگز .Result/.Wait()

<a id="233-taskdelay-در-مقابل-threadsleep"></a>
### 2.3.3 Task.Delay() در مقابل Thread.Sleep()

`Task.Delay()` و `Thread.Sleep()` هر دو برای منتظر ماندن استفاده می‌شوند، اما تفاوت‌های مهمی دارند که در برنامه‌نویسی ناهمزمان(Asynchronous Programming) بسیار حائز اهمیت است.

<a id="2331-تفاوت-های-اساسی"></a>
#### 2.3.3.1 تفاوت‌های اساسی

**Thread.Sleep():**

```csharp
// مسدود کردن نخ(Blocking) - نخ را خواب می‌اندازد
Thread.Sleep(1000); // نخ برای 1 ثانیه مسدود می‌شود
```

**Task.Delay():**

```csharp
// غیر مسدود کننده(Non-blocking) - نخ را آزاد می‌کند
await Task.Delay(1000); // نخ آزاد می‌شود و بعد از 1 ثانیه ادامه می‌دهد
```

**جدول مقایسه:**

| ویژگی | Thread.Sleep() | Task.Delay() |
|-------|----------------|--------------|
| **نوع عملیات** | مسدود کننده(Blocking) | غیر مسدود کننده(Non-blocking) |
| **مسدود کردن نخ** | بله - نخ را می‌خواباند | خیر - نخ را آزاد می‌کند |
| **استفاده در async** | ❌ باعث مسدود شدن می‌شود | ✅ مناسب برای async |
| **استفاده در UI** | ❌ UI را فریز می‌کند | ✅ UI را فریز نمی‌کند |
| **سازگاری با async/await** | خیر | بله |
| **مناسب برای** | Synchronous code | Asynchronous code |

<a id="2332-مشکل-threadsleep-در-async"></a>
#### 2.3.3.2 مشکل Thread.Sleep() در async

**مثال مشکل:**

```csharp
// ❌ نادرست: استفاده از Thread.Sleep در async
public async Task DoWorkAsync()
{
    Console.WriteLine("شروع");
    Thread.Sleep(1000); // نخ را مسدود می‌کند!
    Console.WriteLine("پایان");
    // این کد async نیست، فقط یک متد async است که به صورت sync اجرا می‌شود
}

// ✅ درست: استفاده از Task.Delay
public async Task DoWorkAsync()
{
    Console.WriteLine("شروع");
    await Task.Delay(1000); // نخ را آزاد می‌کند
    Console.WriteLine("پایان");
}
```

**مشکل در UI:**

```csharp
// ❌ نادرست: UI فریز می‌شود
public async void Button_Click(object sender, EventArgs e)
{
    statusLabel.Text = "در حال پردازش...";
    Thread.Sleep(5000); // UI برای 5 ثانیه فریز می‌شود!
    statusLabel.Text = "تمام شد";
}

// ✅ درست: UI فریز نمی‌شود
public async void Button_Click(object sender, EventArgs e)
{
    statusLabel.Text = "در حال پردازش...";
    await Task.Delay(5000); // UI آزاد می‌ماند
    statusLabel.Text = "تمام شد";
}
```

<a id="2333-مثال-عملی-تفاوت"></a>
#### 2.3.3.3 مثال عملی تفاوت

**مثال 1: مسدود شدن نخ(Blocking) vs غیر مسدود کننده(Non-blocking):**

```csharp
// با Thread.Sleep - مسدود کننده(Blocking)
public void Method1()
{
    Console.WriteLine("قبل از Sleep");
    Thread.Sleep(2000); // نخ مسدود می‌شود
    Console.WriteLine("بعد از Sleep");
}

// با Task.Delay - غیر مسدود کننده(Non-blocking)
public async Task Method2()
{
    Console.WriteLine("قبل از Delay");
    await Task.Delay(2000); // نخ آزاد می‌شود
    Console.WriteLine("بعد از Delay");
}

// تست
Method1(); // نخ مسدود می‌شود
Console.WriteLine("این خط بعد از 2 ثانیه اجرا می‌شود");

await Method2(); // نخ آزاد می‌شود
Console.WriteLine("این خط بعد از 2 ثانیه اجرا می‌شود (اما نخ آزاد است)");
```

**مثال 2: UI Application:**

```csharp
// ❌ با Thread.Sleep - UI فریز می‌شود
private void Button1_Click(object sender, EventArgs e)
{
    textBox.Text = "شروع...";
    Thread.Sleep(3000); // UI فریز می‌شود
    textBox.Text = "تمام شد";
}

// ✅ با Task.Delay - UI آزاد می‌ماند
private async void Button2_Click(object sender, EventArgs e)
{
    textBox.Text = "شروع...";
    await Task.Delay(3000); // UI آزاد می‌ماند
    textBox.Text = "تمام شد";
}
```

<a id="2334-استفاده-صحیح-taskdelay"></a>
#### 2.3.3.4 استفاده صحیح Task.Delay()

**فرم‌های مختلف Task.Delay():**

```csharp
// با میلی‌ثانیه
await Task.Delay(1000); // 1 ثانیه

// با TimeSpan
await Task.Delay(TimeSpan.FromSeconds(5));

// با CancellationToken
CancellationTokenSource cts = new CancellationTokenSource();
cts.CancelAfter(TimeSpan.FromSeconds(3));
await Task.Delay(5000, cts.Token); // لغو می‌شود بعد از 3 ثانیه
```

**مثال کاربردی: Retry Logic:**

```csharp
public async Task<string> GetDataWithRetryAsync(string url, int maxRetries = 3)
{
    for (int i = 0; i < maxRetries; i++)
    {
        try
        {
            using (var client = new HttpClient())
            {
                return await client.GetStringAsync(url);
            }
        }
        catch (HttpRequestException)
        {
            if (i < maxRetries - 1)
            {
                // انتظار قبل از تلاش مجدد
                await Task.Delay(1000 * (i + 1)); // exponential backoff
            }
        }
    }
    throw new Exception("تلاش‌های مجدد ناموفق بود");
}
```

<a id="2335-استفاده-صحیح-threadsleep"></a>
#### 2.3.3.5 استفاده صحیح Thread.Sleep()

`Thread.Sleep()` فقط در کدهای همزمان(Synchronous) باید استفاده شود:

**موارد استفاده صحیح:**

```csharp
// ✅ درست: در کد همزمان(Synchronous)
public void ProcessData()
{
    // کارهای اولیه
    DoWork();
    
    // انتظار کوتاه (برای مثال در testing یا simulation)
    Thread.Sleep(100);
    
    // کارهای بعدی
    DoMoreWork();
}

// ✅ درست: در Thread Pool کار
ThreadPool.QueueUserWorkItem(state => {
    while (true)
    {
        DoWork();
        Thread.Sleep(5000); // انتظار 5 ثانیه‌ای
    }
});
```

**موارد استفاده نادرست:**

```csharp
// ❌ نادرست: در async code
public async Task DoWorkAsync()
{
    Thread.Sleep(1000); // نباید استفاده شود
}

// ❌ نادرست: در UI code
public async void Button_Click(object sender, EventArgs e)
{
    Thread.Sleep(1000); // UI فریز می‌شود
}
```

<a id="2336-مقایسه-عملکرد"></a>
#### 2.3.3.6 مقایسه عملکرد(Performance)

**Thread.Sleep():**

- نخ را مسدود می‌کند
- منابع سیستم را نگه می‌دارد
- برای کارهای I/O مناسب نیست

**Task.Delay():**

- نخ را آزاد می‌کند
- منابع سیستم آزاد می‌شوند
- برای کارهای I/O مناسب است

**مثال اندازه‌گیری:**

```csharp
// با Thread.Sleep - همه نخ‌ها مسدود می‌شوند
var sw1 = System.Diagnostics.Stopwatch.StartNew();
var threads = new List<Thread>();
for (int i = 0; i < 100; i++)
{
    threads.Add(new Thread(() => Thread.Sleep(1000)));
    threads[i].Start();
}
foreach (var t in threads) t.Join();
sw1.Stop();

// با Task.Delay - نخ‌ها آزاد می‌شوند
var sw2 = System.Diagnostics.Stopwatch.StartNew();
var tasks = new List<Task>();
for (int i = 0; i < 100; i++)
{
    tasks.Add(Task.Delay(1000));
}
await Task.WhenAll(tasks);
sw2.Stop();

Console.WriteLine($"Thread.Sleep: {sw1.ElapsedMilliseconds} ms");
Console.WriteLine($"Task.Delay: {sw2.ElapsedMilliseconds} ms");
// Task.Delay معمولاً بهتر است چون نخ‌ها را آزاد می‌کند
```

<a id="2337-مثال-کاربردی-timeout"></a>
#### 2.3.3.7 مثال کاربردی: Timeout

```csharp
public async Task<string> GetDataWithTimeoutAsync(string url, TimeSpan timeout)
{
    using (var client = new HttpClient())
    {
        using (var cts = new CancellationTokenSource(timeout))
        {
            try
            {
                return await client.GetStringAsync(url, cts.Token);
            }
            catch (OperationCanceledException)
            {
                throw new TimeoutException("درخواست timeout شد");
            }
        }
    }
}

// یا با Task.Delay برای timeout
public async Task<string> GetDataWithTimeoutAsync(string url, int timeoutMs)
{
    var getDataTask = GetDataAsync(url);
    var timeoutTask = Task.Delay(timeoutMs);
    
    var completedTask = await Task.WhenAny(getDataTask, timeoutTask);
    
    if (completedTask == timeoutTask)
    {
        throw new TimeoutException("درخواست timeout شد");
    }
    
    return await getDataTask;
}
```

<a id="2338-مثال-کاربردی-polling"></a>
#### 2.3.3.8 مثال کاربردی: Polling

```csharp
// Polling با Task.Delay
public async Task WaitForConditionAsync(Func<bool> condition, int maxWaitMs = 5000)
{
    var stopwatch = System.Diagnostics.Stopwatch.StartNew();
    
    while (!condition() && stopwatch.ElapsedMilliseconds < maxWaitMs)
    {
        await Task.Delay(100); // هر 100 میلی‌ثانیه بررسی می‌کند
    }
    
    if (!condition())
    {
        throw new TimeoutException("شرط برقرار نشد");
    }
}

// استفاده
await WaitForConditionAsync(() => IsDataReady());
```

<a id="2339-قوانین-طلا"></a>
#### 2.3.3.9 قوانین طلا(Golden Rules)

**قانون 1: در async code همیشه از Task.Delay استفاده کنید**

```csharp
// ✅ همیشه در async
public async Task DoWorkAsync()
{
    await Task.Delay(1000);
}
```

**قانون 2: هرگز Thread.Sleep در async code استفاده نکنید**

```csharp
// ❌ هرگز این کار را نکنید
public async Task DoWorkAsync()
{
    Thread.Sleep(1000); // نادرست!
}
```

**قانون 3: Thread.Sleep فقط در synchronous code**

```csharp
// ✅ فقط در sync code
public void DoWork()
{
    Thread.Sleep(1000); // درست است
}
```

**قانون 4: در UI code همیشه Task.Delay**

```csharp
// ✅ همیشه در UI
private async void Button_Click(object sender, EventArgs e)
{
    await Task.Delay(1000);
}
```

<a id="23310-نکات-مهم"></a>
#### 2.3.3.10 نکات مهم

**1. Task.Delay(0) برای yield:**

```csharp
// Task.Delay(0) برای yield کردن کنترل
public async Task DoWorkAsync()
{
    await Task.Delay(0); // فوراً کنترل را می‌دهد
    // برای دادن فرصت به دیگر تسک‌ها
}
```

**2. Task.Delay با CancellationToken:**

```csharp
// لغو‌پذیر(P cancellable) Delay
CancellationTokenSource cts = new CancellationTokenSource();
cts.CancelAfter(2000);

try
{
    await Task.Delay(5000, cts.Token); // بعد از 2 ثانیه لغو می‌شود
}
catch (OperationCanceledException)
{
    Console.WriteLine("Delay لغو شد");
}
```

**3. Thread.Sleep(0) برای yield:**

```csharp
// Thread.Sleep(0) فقط به threads با همان اولویت yield می‌دهد
Thread.Sleep(0); // در async code استفاده نکنید
```

#### خلاصه

- **Task.Delay:** غیر مسدود کننده(Non-blocking)، مناسب برای async/await
- **Thread.Sleep:** مسدود کننده(Blocking)، فقط برای synchronous code
- **استفاده در async:** همیشه Task.Delay
- **استفاده در UI:** همیشه Task.Delay (Thread.Sleep UI را فریز می‌کند)
- **عملکرد:** Task.Delay بهتری است چون نخ‌ها را آزاد می‌کند
- **قوانین طلا:** در async همیشه Task.Delay، Thread.Sleep فقط در sync code

<a id="234-مدیریت-استثناها-در-متدهای-ناهمزمان"></a>
### 2.3.4 مدیریت استثناها در متدهای ناهمزمان

مدیریت استثناها(Exception Handling) در متدهای ناهمزمان(Asynchronous) با متدهای همزمان(Synchronous) متفاوت است. درک این تفاوت‌ها برای نوشتن کد قوی و قابل اعتماد ضروری است.

<a id="2341-اساس-مدیریت-استثنا-در-async"></a>
#### 2.3.4.1 اساس مدیریت استثنا در async

**در متدهای async، استثناها در Task نگه داشته می‌شوند:**

```csharp
public async Task DoWorkAsync()
{
    throw new InvalidOperationException("خطا!");
    // استثنا در Task نگه داشته می‌شود، نه فوراً پرتاب نمی‌شود
}

// استفاده
try
{
    await DoWorkAsync(); // استثنا اینجا پرتاب می‌شود
}
catch (InvalidOperationException ex)
{
    Console.WriteLine($"خطا: {ex.Message}");
}
```

**مثال کامل:**

```csharp
public async Task<int> DivideAsync(int a, int b)
{
    await Task.Delay(100);
    
    if (b == 0)
    {
        throw new DivideByZeroException("تقسیم بر صفر!");
    }
    
    return a / b;
}

// استفاده
try
{
    int result = await DivideAsync(10, 0);
}
catch (DivideByZeroException ex)
{
    Console.WriteLine($"خطا: {ex.Message}");
}
```

<a id="2342-تفاوت-با-متدهای-همزمان"></a>
#### 2.3.4.2 تفاوت با متدهای همزمان(Synchronous)

**متد همزمان(Synchronous):**

```csharp
// استثنا فوراً پرتاب می‌شود
public void DoWork()
{
    throw new InvalidOperationException("خطا!");
    // این خط اجرا نمی‌شود
}

try
{
    DoWork(); // استثنا فوراً پرتاب می‌شود
}
catch (InvalidOperationException ex)
{
    Console.WriteLine($"خطا: {ex.Message}");
}
```

**متد ناهمزمان(Asynchronous):**

```csharp
// استثنا در Task نگه داشته می‌شود
public async Task DoWorkAsync()
{
    throw new InvalidOperationException("خطا!");
    // استثنا در Task نگه داشته می‌شود
}

try
{
    await DoWorkAsync(); // استثنا اینجا پرتاب می‌شود
}
catch (InvalidOperationException ex)
{
    Console.WriteLine($"خطا: {ex.Message}");
}
```

<a id="2343-استثنا-در-taskwhenall"></a>
#### 2.3.4.3 استثنا در Task.WhenAll

`Task.WhenAll` همه استثناها را در یک `AggregateException` جمع‌آوری می‌کند:

```csharp
public async Task ProcessItemsAsync(int[] items)
{
    var tasks = items.Select(item => ProcessItemAsync(item));
    
    try
    {
        await Task.WhenAll(tasks);
    }
    catch (AggregateException ex)
    {
        // همه استثناها در InnerExceptions
        foreach (var innerEx in ex.InnerExceptions)
        {
            Console.WriteLine($"خطا: {innerEx.Message}");
        }
    }
}
```

**مثال کامل:**

```csharp
public async Task<string> ProcessItemAsync(int item)
{
    await Task.Delay(100);
    
    if (item < 0)
    {
        throw new ArgumentException($"آیتم نامعتبر: {item}");
    }
    
    return $"پردازش شده: {item}";
}

// استفاده
try
{
    var tasks = new[] { -1, 2, -3, 4 }
        .Select(item => ProcessItemAsync(item));
    
    string[] results = await Task.WhenAll(tasks);
}
catch (AggregateException aggEx)
{
    Console.WriteLine($"تعداد خطاها: {aggEx.InnerExceptions.Count}");
    foreach (var ex in aggEx.InnerExceptions)
    {
        Console.WriteLine($"  - {ex.Message}");
    }
}
```

<a id="2344-مدیریت-استثنا-در-taskwhenany"></a>
#### 2.3.4.4 مدیریت استثنا در Task.WhenAny

با `Task.WhenAny`، فقط باید استثناهای تسک تمام شده را مدیریت کنید:

```csharp
public async Task<string> GetFirstResponseAsync(string[] urls)
{
    var tasks = urls.Select(url => GetDataAsync(url)).ToArray();
    
    while (tasks.Length > 0)
    {
        Task<string> completedTask = await Task.WhenAny(tasks);
        
        try
        {
            string result = await completedTask;
            return result; // اولین موفق
        }
        catch (Exception ex)
        {
            Console.WriteLine($"خطا در یک تسک: {ex.Message}");
            // حذف تسک ناموفق از لیست
            tasks = tasks.Where(t => t != completedTask).ToArray();
        }
    }
    
    throw new Exception("همه تسک‌ها ناموفق بودند");
}
```

<a id="2345-استثنا-در-void-async"></a>
#### 2.3.4.5 استثنا در async void

⚠️ **هشدار:** استثناها در `async void` نمی‌توانند catch شوند!

```csharp
// ❌ مشکل: استثنا از دست می‌رود
public async void BadMethod()
{
    throw new InvalidOperationException("خطا!");
    // این استثنا قابل catch نیست!
}

// استفاده
try
{
    BadMethod(); // استثنا catch نمی‌شود!
}
catch (InvalidOperationException)
{
    // این اجرا نمی‌شود!
}

// ✅ درست: استفاده از Task
public async Task GoodMethod()
{
    throw new InvalidOperationException("خطا!");
}

try
{
    await GoodMethod(); // استثنا catch می‌شود
}
catch (InvalidOperationException ex)
{
    Console.WriteLine($"خطا: {ex.Message}");
}
```

**تنها استثنا: Event Handlers**

```csharp
// ✅ درست: فقط در event handlers
private async void Button_Click(object sender, EventArgs e)
{
    try
    {
        await DoWorkAsync();
    }
    catch (Exception ex)
    {
        // باید در event handler مدیریت شود
        MessageBox.Show($"خطا: {ex.Message}");
    }
}
```

<a id="2346-مدیریت-چند-استثنا"></a>
#### 2.3.4.6 مدیریت چند استثنا

**روش 1: استفاده از AggregateException:**

```csharp
public async Task ProcessAllAsync()
{
    var tasks = new List<Task>
    {
        Task.Run(() => throw new Exception("خطا 1")),
        Task.Run(() => throw new Exception("خطا 2")),
        Task.Run(() => throw new Exception("خطا 3"))
    };
    
    try
    {
        await Task.WhenAll(tasks);
    }
    catch (AggregateException aggEx)
    {
        foreach (var ex in aggEx.InnerExceptions)
        {
            Console.WriteLine($"خطا: {ex.Message}");
        }
    }
}
```

**روش 2: مدیریت جداگانه هر تسک:**

```csharp
public async Task ProcessAllWithIndividualHandlingAsync()
{
    var tasks = new[]
    {
        ProcessItemAsync(1),
        ProcessItemAsync(2),
        ProcessItemAsync(3)
    };
    
    var results = new List<(int Id, string Result, Exception Error)>();
    
    foreach (var task in tasks)
    {
        try
        {
            string result = await task;
            results.Add((0, result, null));
        }
        catch (Exception ex)
        {
            results.Add((0, null, ex));
        }
    }
    
    // بررسی نتایج
    var errors = results.Where(r => r.Error != null).ToList();
    if (errors.Any())
    {
        Console.WriteLine($"تعداد خطاها: {errors.Count}");
    }
}
```

<a id="2347-مثال-کاربردی-مدیریت-استثنا"></a>
#### 2.3.4.7 مثال کاربردی: مدیریت استثنا در API Calls

```csharp
public class ApiClient
{
    public async Task<List<string>> GetDataFromMultipleApisAsync(string[] endpoints)
    {
        var tasks = endpoints.Select(endpoint => GetDataAsync(endpoint)).ToArray();
        var results = new List<string>();
        var errors = new List<Exception>();
        
        // اجرای همه
        var completedTasks = await Task.WhenAll(
            tasks.Select(async task =>
            {
                try
                {
                    return await task;
                }
                catch (Exception ex)
                {
                    errors.Add(ex);
                    return null;
                }
            })
        );
        
        results.AddRange(completedTasks.Where(r => r != null));
        
        if (errors.Any())
        {
            Console.WriteLine($"تعداد خطاها: {errors.Count}");
            foreach (var error in errors)
            {
                Console.WriteLine($"  - {error.Message}");
            }
        }
        
        return results;
    }
    
    private async Task<string> GetDataAsync(string endpoint)
    {
        using (var client = new HttpClient())
        {
            client.Timeout = TimeSpan.FromSeconds(5);
            
            try
            {
                return await client.GetStringAsync(endpoint);
            }
            catch (TaskCanceledException)
            {
                throw new TimeoutException($"Timeout برای {endpoint}");
            }
            catch (HttpRequestException ex)
            {
                throw new Exception($"خطا در دریافت {endpoint}: {ex.Message}");
            }
        }
    }
}
```

<a id="2348-استثنا-در-continuewith"></a>
#### 2.3.4.8 استثنا در ContinueWith

```csharp
Task task = Task.Run(() => {
    throw new InvalidOperationException("خطا!");
});

task.ContinueWith(t =>
{
    if (t.IsFaulted)
    {
        // استثنا در t.Exception (AggregateException)
        Console.WriteLine($"خطا: {t.Exception.InnerException.Message}");
    }
    else if (t.IsCompletedSuccessfully)
    {
        Console.WriteLine("موفق بود");
    }
});
```

<a id="2349-بهترین-روشها"></a>
#### 2.3.4.9 بهترین روش‌ها

**1. همیشه از try-catch در async استفاده کنید:**

```csharp
// ✅ درست
public async Task DoWorkAsync()
{
    try
    {
        await SomeOperationAsync();
    }
    catch (SpecificException ex)
    {
        // مدیریت خطای خاص
    }
    catch (Exception ex)
    {
        // مدیریت خطای عمومی
    }
}
```

**2. هرگز async void استفاده نکنید (به جز event handlers):**

```csharp
// ❌ نادرست
public async void BadMethod() { }

// ✅ درست
public async Task GoodMethod() { }
```

**3. برای Task.WhenAll از AggregateException استفاده کنید:**

```csharp
// ✅ درست
try
{
    await Task.WhenAll(tasks);
}
catch (AggregateException aggEx)
{
    // مدیریت همه استثناها
}
```

**4. لاگ کردن استثناها:**

```csharp
public async Task ProcessDataAsync()
{
    try
    {
        await DoWorkAsync();
    }
    catch (Exception ex)
    {
        // لاگ کردن
        Console.WriteLine($"خطا: {ex.Message}");
        Logger.LogError(ex);
        
        // دوباره پرتاب (اگر نیاز دارید)
        throw;
    }
}
```

**5. استفاده از finally برای cleanup:**

```csharp
public async Task ProcessWithCleanupAsync()
{
    var resource = new MyResource();
    try
    {
        await DoWorkAsync(resource);
    }
    catch (Exception ex)
    {
        Console.WriteLine($"خطا: {ex.Message}");
    }
    finally
    {
        resource?.Dispose();
    }
}
```

<a id="23410-مثال-کامل"></a>
#### 2.3.4.10 مثال کامل: مدیریت استثنا در Pipeline

```csharp
public class DataProcessingPipeline
{
    public async Task<ProcessingResult> ProcessPipelineAsync(List<DataItem> items)
    {
        var result = new ProcessingResult();
        
        foreach (var item in items)
        {
            try
            {
                // مرحله 1: اعتبارسنجی
                await ValidateItemAsync(item);
                
                // مرحله 2: تبدیل
                var transformed = await TransformItemAsync(item);
                
                // مرحله 3: ذخیره
                await SaveItemAsync(transformed);
                
                result.SuccessCount++;
            }
            catch (ValidationException ex)
            {
                result.ValidationErrors.Add(new Error(item.Id, ex.Message));
            }
            catch (TransformationException ex)
            {
                result.TransformationErrors.Add(new Error(item.Id, ex.Message));
            }
            catch (Exception ex)
            {
                result.GeneralErrors.Add(new Error(item.Id, ex.Message));
            }
        }
        
        return result;
    }
    
    private async Task ValidateItemAsync(DataItem item)
    {
        await Task.Delay(10);
        if (item.Value < 0)
        {
            throw new ValidationException($"مقدار نامعتبر: {item.Value}");
        }
    }
    
    private async Task<TransformedItem> TransformItemAsync(DataItem item)
    {
        await Task.Delay(10);
        if (item.Value > 1000)
        {
            throw new TransformationException($"مقدار خیلی بزرگ: {item.Value}");
        }
        return new TransformedItem { Value = item.Value * 2 };
    }
    
    private async Task SaveItemAsync(TransformedItem item)
    {
        await Task.Delay(10);
        // شبیه‌سازی ذخیره
    }
}

public class ProcessingResult
{
    public int SuccessCount { get; set; }
    public List<Error> ValidationErrors { get; } = new List<Error>();
    public List<Error> TransformationErrors { get; } = new List<Error>();
    public List<Error> GeneralErrors { get; } = new List<Error>();
}

public class Error
{
    public int ItemId { get; }
    public string Message { get; }
    
    public Error(int itemId, string message)
    {
        ItemId = itemId;
        Message = message;
    }
}
```

#### خلاصه

- **استثنا در async:** در Task نگه داشته می‌شوند و در await پرتاب می‌شوند
- **Task.WhenAll:** استثناها را در AggregateException جمع می‌کند
- **async void:** استثناها قابل catch نیستند (به جز event handlers)
- **بهترین روش:** همیشه try-catch، هرگز async void (به جز event handlers)
- **مدیریت چند استثنا:** استفاده از AggregateException یا مدیریت جداگانه
- **لاگ کردن:** همیشه استثناها را لاگ کنید

<a id="235-تکمیل-و-ادامه-تسک-با-continuewith"></a>
### 2.3.5 تکمیل و ادامه تسک با ContinueWith()

`ContinueWith()` یک متد قدرتمند برای اجرای کد بعد از اتمام یک تسک است. در حالی که `async/await` روش مدرن‌تری است، درک `ContinueWith()` برای کار با کدهای قدیمی و درک عمیق‌تر Task مهم است.

<a id="2351-مفهوم-continuewith"></a>
#### 2.3.5.1 مفهوم ContinueWith

`ContinueWith()` به شما امکان می‌دهد که یک تسک جدید را بعد از اتمام تسک قبلی اجرا کنید:

```csharp
Task task1 = Task.Run(() => DoWork());
Task task2 = task1.ContinueWith(previousTask => {
    // این کد بعد از اتمام task1 اجرا می‌شود
    DoMoreWork();
});
```

**مثال ساده:**

```csharp
Task<int> task1 = Task.Run(() => {
    Console.WriteLine("کار اول");
    return 42;
});

Task task2 = task1.ContinueWith(previousTask => {
    int result = previousTask.Result;
    Console.WriteLine($"نتیجه کار اول: {result}");
    Console.WriteLine("کار دوم");
});

await task2;
```

<a id="2352-استفاده-پایه"></a>
#### 2.3.5.2 استفاده پایه

**فرم ساده:**

```csharp
Task task = Task.Run(() => DoWork());
Task continuation = task.ContinueWith(t => {
    Console.WriteLine("تسک تمام شد");
    DoMoreWork();
});

await continuation;
```

**با نتیجه:**

```csharp
Task<int> task = Task.Run(() => {
    return CalculateValue();
});

Task<string> continuation = task.ContinueWith(t => {
    int value = t.Result;
    return $"مقدار: {value}";
});

string result = await continuation;
Console.WriteLine(result);
```

<a id="2353-انواع-continuewith"></a>
#### 2.3.5.3 انواع ContinueWith

**1. ContinueWith با TaskContinuationOptions:**

```csharp
Task task = Task.Run(() => DoWork());

// فقط در صورت موفقیت
task.ContinueWith(t => {
    Console.WriteLine("موفق بود");
}, TaskContinuationOptions.OnlyOnRanToCompletion);

// فقط در صورت خطا
task.ContinueWith(t => {
    Console.WriteLine($"خطا: {t.Exception.Message}");
}, TaskContinuationOptions.OnlyOnFaulted);

// فقط در صورت لغو
task.ContinueWith(t => {
    Console.WriteLine("لغو شد");
}, TaskContinuationOptions.OnlyOnCanceled);
```

**2. ContinueWith با TaskScheduler:**

```csharp
Task task = Task.Run(() => DoWork());

// اجرا در ThreadPool (پیش‌فرض)
task.ContinueWith(t => {
    DoMoreWork();
}, TaskScheduler.Default);

// اجرا در UI Thread (برای WPF/WinForms)
task.ContinueWith(t => {
    UpdateUI();
}, TaskScheduler.FromCurrentSynchronizationContext());
```

**3. ContinueWith زنجیره‌ای:**

```csharp
Task<int> task1 = Task.Run(() => Step1());
Task<string> task2 = task1.ContinueWith(t => Step2(t.Result));
Task<bool> task3 = task2.ContinueWith(t => Step3(t.Result));
Task<string> task4 = task3.ContinueWith(t => Step4(t.Result));

string finalResult = await task4;
```

<a id="2354-مدیریت-استثنا"></a>
#### 2.3.5.4 مدیریت استثنا

**بررسی استثنا:**

```csharp
Task task = Task.Run(() => {
    throw new InvalidOperationException("خطا!");
});

Task continuation = task.ContinueWith(t => {
    if (t.IsFaulted)
    {
        // استثنا در t.Exception (AggregateException)
        Console.WriteLine($"خطا: {t.Exception.InnerException.Message}");
    }
    else if (t.IsCanceled)
    {
        Console.WriteLine("لغو شد");
    }
    else
    {
        Console.WriteLine("موفق بود");
    }
});

await continuation;
```

**مثال کامل:**

```csharp
Task<int> task = Task.Run(() => {
    if (DateTime.Now.Second % 2 == 0)
    {
        throw new Exception("خطای تصادفی!");
    }
    return 42;
});

Task<string> continuation = task.ContinueWith(t => {
    if (t.IsFaulted)
    {
        return $"خطا: {t.Exception.InnerException.Message}";
    }
    else if (t.IsCanceled)
    {
        return "لغو شد";
    }
    else
    {
        return $"نتیجه: {t.Result}";
    }
});

string result = await continuation;
Console.WriteLine(result);
```

<a id="2355-مقایسه-با-async-await"></a>
#### 2.3.5.5 مقایسه با async/await

**با ContinueWith:**

```csharp
Task<int> task1 = Task.Run(() => CalculateValue());
Task<string> task2 = task1.ContinueWith(t => {
    int value = t.Result;
    return ProcessValue(value);
});
string result = await task2;
```

**با async/await (توصیه می‌شود):**

```csharp
int value = await Task.Run(() => CalculateValue());
string result = await ProcessValueAsync(value);
```

**جدول مقایسه:**

| ویژگی | ContinueWith | async/await |
|-------|--------------|-------------|
| **خوانایی** | کمتر | بیشتر |
| **مدیریت استثنا** | دستی (t.Exception) | try-catch |
| **زنجیره‌ای** | پیچیده | ساده |
| **انعطاف‌پذیری** | بیشتر (TaskContinuationOptions) | کمتر |
| **توصیه** | برای کدهای قدیمی | برای کدهای جدید |

<a id="2356-مثال-کاربردی-پردازش-پایپلاین"></a>
#### 2.3.5.6 مثال کاربردی: پردازش Pipeline

```csharp
public class ProcessingPipeline
{
    public Task<string> ProcessPipelineAsync(string input)
    {
        // مرحله 1: اعتبارسنجی
        Task<bool> validationTask = Task.Run(() => Validate(input));
        
        // مرحله 2: تبدیل (بعد از اعتبارسنجی)
        Task<string> transformTask = validationTask.ContinueWith(t => {
            if (!t.Result)
            {
                throw new ValidationException("اعتبارسنجی ناموفق");
            }
            return Transform(input);
        });
        
        // مرحله 3: ذخیره (بعد از تبدیل)
        Task<string> saveTask = transformTask.ContinueWith(t => {
            string transformed = t.Result;
            Save(transformed);
            return transformed;
        });
        
        return saveTask;
    }
    
    private bool Validate(string input)
    {
        return !string.IsNullOrEmpty(input);
    }
    
    private string Transform(string input)
    {
        return input.ToUpper();
    }
    
    private void Save(string data)
    {
        // شبیه‌سازی ذخیره
    }
}
```

<a id="2357-مثال-کاربردی-retry-logic"></a>
#### 2.3.5.7 مثال کاربردی: Retry Logic

```csharp
public class RetryHelper
{
    public Task<string> GetDataWithRetryAsync(string url, int maxRetries = 3)
    {
        Task<string> currentTask = null;
        
        for (int i = 0; i < maxRetries; i++)
        {
            int attempt = i + 1;
            
            if (currentTask == null)
            {
                // تلاش اول
                currentTask = Task.Run(() => GetData(url));
            }
            else
            {
                // تلاش‌های بعدی (بعد از خطا)
                currentTask = currentTask.ContinueWith(previousTask => {
                    if (previousTask.IsFaulted)
                    {
                        Console.WriteLine($"تلاش {attempt} ناموفق بود");
                        return GetData(url);
                    }
                    return previousTask.Result;
                });
            }
        }
        
        return currentTask;
    }
    
    private string GetData(string url)
    {
        // شبیه‌سازی دریافت داده
        if (DateTime.Now.Millisecond % 3 == 0)
        {
            throw new Exception("خطای شبکه");
        }
        return $"داده از {url}";
    }
}
```

<a id="2358-taskcontinuationoptions"></a>
#### 2.3.5.8 TaskContinuationOptions

**گزینه‌های مهم:**

```csharp
Task task = Task.Run(() => DoWork());

// OnlyOnRanToCompletion: فقط در صورت موفقیت
task.ContinueWith(t => {
    Console.WriteLine("موفق بود");
}, TaskContinuationOptions.OnlyOnRanToCompletion);

// OnlyOnFaulted: فقط در صورت خطا
task.ContinueWith(t => {
    Console.WriteLine("خطا");
}, TaskContinuationOptions.OnlyOnFaulted);

// OnlyOnCanceled: فقط در صورت لغو
task.ContinueWith(t => {
    Console.WriteLine("لغو شد");
}, TaskContinuationOptions.OnlyOnCanceled);

// NotOnRanToCompletion: به جز موفقیت
task.ContinueWith(t => {
    Console.WriteLine("ناموفق یا لغو شد");
}, TaskContinuationOptions.NotOnRanToCompletion);

// ExecuteSynchronously: اجرای همزمان (اگر ممکن باشد)
task.ContinueWith(t => {
    DoMoreWork();
}, TaskContinuationOptions.ExecuteSynchronously);

// LongRunning: برای کارهای طولانی
task.ContinueWith(t => {
    DoLongRunningWork();
}, TaskContinuationOptions.LongRunning);
```

**ترکیب گزینه‌ها:**

```csharp
Task task = Task.Run(() => DoWork());

task.ContinueWith(t => {
    HandleError();
}, TaskContinuationOptions.OnlyOnFaulted | TaskContinuationOptions.ExecuteSynchronously);
```

<a id="2359-مثال-پیشرفته-چند-ادامه"></a>
#### 2.3.5.9 مثال پیشرفته: چند ادامه(Continuation)

```csharp
public class MultiContinuationExample
{
    public Task ProcessWithMultipleContinuationsAsync(string input)
    {
        Task<string> mainTask = Task.Run(() => ProcessMain(input));
        
        // ادامه 1: لاگ کردن
        Task logTask = mainTask.ContinueWith(t => {
            if (t.IsCompletedSuccessfully)
            {
                Console.WriteLine($"پردازش موفق: {t.Result}");
            }
        }, TaskContinuationOptions.OnlyOnRanToCompletion);
        
        // ادامه 2: مدیریت خطا
        Task errorTask = mainTask.ContinueWith(t => {
            if (t.IsFaulted)
            {
                Console.WriteLine($"خطا: {t.Exception.InnerException.Message}");
                NotifyError(t.Exception);
            }
        }, TaskContinuationOptions.OnlyOnFaulted);
        
        // ادامه 3: ذخیره
        Task saveTask = mainTask.ContinueWith(t => {
            if (t.IsCompletedSuccessfully)
            {
                SaveToDatabase(t.Result);
            }
        }, TaskContinuationOptions.OnlyOnRanToCompletion);
        
        // منتظر اتمام همه ادامه‌ها
        return Task.WhenAll(logTask, errorTask, saveTask);
    }
    
    private string ProcessMain(string input)
    {
        // پردازش اصلی
        return input.ToUpper();
    }
    
    private void NotifyError(Exception ex)
    {
        // اطلاع‌رسانی خطا
    }
    
    private void SaveToDatabase(string data)
    {
        // ذخیره در دیتابیس
    }
}
```

<a id="23510-بهترین-روشها"></a>
#### 2.3.5.10 بهترین روش‌ها

**1. استفاده از async/await به جای ContinueWith (توصیه می‌شود):**

```csharp
// ❌ قدیمی - ContinueWith
Task task1 = Task.Run(() => DoWork());
Task task2 = task1.ContinueWith(t => DoMoreWork());
await task2;

// ✅ مدرن - async/await
await Task.Run(() => DoWork());
await DoMoreWorkAsync();
```

**2. استفاده از ContinueWith فقط برای موارد خاص:**

```csharp
// ✅ مناسب: وقتی نیاز به TaskContinuationOptions دارید
Task task = Task.Run(() => DoWork());
task.ContinueWith(t => {
    HandleError();
}, TaskContinuationOptions.OnlyOnFaulted);
```

**3. همیشه استثناها را بررسی کنید:**

```csharp
// ✅ درست
Task task = Task.Run(() => DoWork());
task.ContinueWith(t => {
    if (t.IsFaulted)
    {
        Console.WriteLine($"خطا: {t.Exception.InnerException.Message}");
    }
});
```

**4. استفاده از TaskScheduler برای UI:**

```csharp
// ✅ درست: برای به‌روزرسانی UI
Task task = Task.Run(() => DoWork());
task.ContinueWith(t => {
    UpdateUI();
}, TaskScheduler.FromCurrentSynchronizationContext());
```

**5. اجتناب از ContinueWith زنجیره‌ای پیچیده:**

```csharp
// ❌ پیچیده - ContinueWith زنجیره‌ای
Task task1 = Task.Run(() => Step1());
Task task2 = task1.ContinueWith(t => Step2(t.Result));
Task task3 = task2.ContinueWith(t => Step3(t.Result));

// ✅ ساده - async/await
int step1 = await Task.Run(() => Step1());
string step2 = await Step2Async(step1);
bool step3 = await Step3Async(step2);
```

<a id="23511-نکات-مهم"></a>
#### 2.3.5.11 نکات مهم

**1. ContinueWith یک تسک جدید برمی‌گرداند:**

```csharp
Task task1 = Task.Run(() => DoWork());
Task task2 = task1.ContinueWith(t => DoMoreWork());
// task2 یک تسک جدید است، نه همان task1
```

**2. ContinueWith حتی اگر تسک قبلی خطا داشته باشد اجرا می‌شود:**

```csharp
Task task = Task.Run(() => {
    throw new Exception("خطا!");
});

// این ادامه اجرا می‌شود (با t.IsFaulted = true)
Task continuation = task.ContinueWith(t => {
    if (t.IsFaulted)
    {
        Console.WriteLine("خطا رخ داد");
    }
});
```

**3. استفاده از TaskContinuationOptions برای کنترل:**

```csharp
// فقط در صورت موفقیت اجرا می‌شود
task.ContinueWith(t => {
    DoWork();
}, TaskContinuationOptions.OnlyOnRanToCompletion);
```

**4. ContinueWith می‌تواند async باشد:**

```csharp
Task<int> task = Task.Run(() => 42);
Task<string> continuation = task.ContinueWith(async t => {
    int value = t.Result;
    await ProcessAsync(value);
    return "تمام شد";
});

string result = await continuation;
```

#### خلاصه

- **ContinueWith:** اجرای کد بعد از اتمام تسک قبلی
- **TaskContinuationOptions:** کنترل شرایط اجرای ادامه
- **مدیریت استثنا:** بررسی t.IsFaulted و t.Exception
- **مقایسه با async/await:** async/await توصیه می‌شود
- **استفاده:** برای کدهای قدیمی یا موارد خاص (TaskContinuationOptions)
- **بهترین روش:** استفاده از async/await به جای ContinueWith در کدهای جدید

<a id="236-استفاده-از-taskcompletionsource-برای-سناریوهای-تکمیل-تسک-سفارشی"></a>
### 2.3.6 استفاده از TaskCompletionSource برای سناریوهای تکمیل تسک سفارشی

`TaskCompletionSource<T>` یک کلاس قدرتمند است که به شما امکان می‌دهد یک `Task` را به صورت دستی کنترل کنید. این برای تبدیل عملیات غیر async به async، یا برای سناریوهای خاص که نیاز به کنترل دقیق روی تکمیل تسک دارید، بسیار مفید است.

<a id="2361-مفهوم-taskcompletionsource"></a>
#### 2.3.6.1 مفهوم TaskCompletionSource

`TaskCompletionSource<T>` یک wrapper برای `Task<T>` است که به شما امکان می‌دهد:
- یک Task ایجاد کنید بدون اجرای کد
- بعداً نتیجه را تنظیم کنید
- استثنا را تنظیم کنید
- تسک را لغو کنید

**مثال ساده:**

```csharp
TaskCompletionSource<string> tcs = new TaskCompletionSource<string>();

// بعداً می‌توانید نتیجه را تنظیم کنید
tcs.SetResult("نتیجه");

// یا استثنا
// tcs.SetException(new Exception("خطا"));

// یا لغو
// tcs.SetCanceled();

// دریافت Task
Task<string> task = tcs.Task;
string result = await task; // "نتیجه"
```

<a id="2362-استفاده-پایه"></a>
#### 2.3.6.2 استفاده پایه

**مثال 1: تبدیل Event به Task:**

```csharp
public class EventToTaskConverter
{
    public Task<string> WaitForEventAsync()
    {
        TaskCompletionSource<string> tcs = new TaskCompletionSource<string>();
        
        // ثبت event handler
        SomeEvent += (sender, args) => {
            tcs.SetResult(args.Data);
        };
        
        return tcs.Task;
    }
}
```

**مثال 2: Timeout با TaskCompletionSource:**

```csharp
public async Task<string> GetDataWithTimeoutAsync(string url, int timeoutMs)
{
    TaskCompletionSource<string> tcs = new TaskCompletionSource<string>();
    
    // شروع دریافت داده
    Task.Run(async () => {
        try
        {
            using (var client = new HttpClient())
            {
                string data = await client.GetStringAsync(url);
                tcs.SetResult(data);
            }
        }
        catch (Exception ex)
        {
            tcs.SetException(ex);
        }
    });
    
    // Timeout
    Task.Delay(timeoutMs).ContinueWith(_ => {
        if (!tcs.Task.IsCompleted)
        {
            tcs.SetException(new TimeoutException("Timeout"));
        }
    });
    
    return await tcs.Task;
}
```

<a id="2363-تبدیل-event-به-task"></a>
#### 2.3.6.3 تبدیل Event به Task

یکی از کاربردهای رایج `TaskCompletionSource` تبدیل event-based API به async/await است:

```csharp
public class FileWatcher
{
    public Task<string> WaitForFileCreatedAsync(string directory)
    {
        TaskCompletionSource<string> tcs = new TaskCompletionSource<string>();
        
        FileSystemWatcher watcher = new FileSystemWatcher(directory);
        
        watcher.Created += (sender, e) => {
            tcs.SetResult(e.FullPath);
            watcher.Dispose();
        };
        
        watcher.Error += (sender, e) => {
            tcs.SetException(e.GetException());
            watcher.Dispose();
        };
        
        watcher.EnableRaisingEvents = true;
        
        return tcs.Task;
    }
}

// استفاده
var watcher = new FileWatcher();
string filePath = await watcher.WaitForFileCreatedAsync(@"C:\Temp");
Console.WriteLine($"فایل ایجاد شد: {filePath}");
```

<a id="2364-تبدیل-callback-به-task"></a>
#### 2.3.6.4 تبدیل Callback به Task

```csharp
public class CallbackToTaskConverter
{
    // API قدیمی با callback
    public void OldApiMethod(string input, Action<string> onSuccess, Action<Exception> onError)
    {
        Task.Run(() => {
            Thread.Sleep(1000);
            if (input == "error")
            {
                onError(new Exception("خطا"));
            }
            else
            {
                onSuccess($"نتیجه: {input}");
            }
        });
    }
    
    // تبدیل به async/await
    public Task<string> NewApiMethodAsync(string input)
    {
        TaskCompletionSource<string> tcs = new TaskCompletionSource<string>();
        
        OldApiMethod(
            input,
            result => tcs.SetResult(result),
            error => tcs.SetException(error)
        );
        
        return tcs.Task;
    }
}

// استفاده
var converter = new CallbackToTaskConverter();
string result = await converter.NewApiMethodAsync("test");
```

<a id="2365-مدیریت-لغو"></a>
#### 2.3.6.5 مدیریت لغو(Cancellation)

```csharp
public Task<string> GetDataWithCancellationAsync(string url, CancellationToken cancellationToken)
{
    TaskCompletionSource<string> tcs = new TaskCompletionSource<string>();
    
    // ثبت لغو
    cancellationToken.Register(() => {
        if (!tcs.Task.IsCompleted)
        {
            tcs.SetCanceled();
        }
    });
    
    // شروع کار
    Task.Run(async () => {
        try
        {
            using (var client = new HttpClient())
            {
                string data = await client.GetStringAsync(url);
                
                if (!cancellationToken.IsCancellationRequested)
                {
                    tcs.SetResult(data);
                }
            }
        }
        catch (Exception ex)
        {
            if (!cancellationToken.IsCancellationRequested)
            {
                tcs.SetException(ex);
            }
        }
    });
    
    return tcs.Task;
}
```

<a id="2366-مثال-کاربردی-queue-با-task"></a>
#### 2.3.6.6 مثال کاربردی: Queue با Task

```csharp
public class AsyncQueue<T>
{
    private readonly Queue<TaskCompletionSource<T>> _waiters = new Queue<TaskCompletionSource<T>>();
    private readonly Queue<T> _items = new Queue<T>();
    private readonly object _lock = new object();
    
    public void Enqueue(T item)
    {
        TaskCompletionSource<T> tcs = null;
        
        lock (_lock)
        {
            if (_waiters.Count > 0)
            {
                tcs = _waiters.Dequeue();
            }
            else
            {
                _items.Enqueue(item);
            }
        }
        
        if (tcs != null)
        {
            tcs.SetResult(item);
        }
    }
    
    public Task<T> DequeueAsync()
    {
        lock (_lock)
        {
            if (_items.Count > 0)
            {
                T item = _items.Dequeue();
                return Task.FromResult(item);
            }
            else
            {
                TaskCompletionSource<T> tcs = new TaskCompletionSource<T>();
                _waiters.Enqueue(tcs);
                return tcs.Task;
            }
        }
    }
}

// استفاده
var queue = new AsyncQueue<string>();

// Producer
Task.Run(() => {
    for (int i = 0; i < 10; i++)
    {
        queue.Enqueue($"آیتم {i}");
        Thread.Sleep(1000);
    }
});

// Consumer
for (int i = 0; i < 10; i++)
{
    string item = await queue.DequeueAsync();
    Console.WriteLine($"دریافت شد: {item}");
}
```

<a id="2367-مثال-کاربردی-signal"></a>
#### 2.3.6.7 مثال کاربردی: Signal (Wait for Condition)

```csharp
public class AsyncSignal
{
    private TaskCompletionSource<bool> _tcs = new TaskCompletionSource<bool>();
    
    public void Signal()
    {
        _tcs.TrySetResult(true);
    }
    
    public void Reset()
    {
        if (_tcs.Task.IsCompleted)
        {
            _tcs = new TaskCompletionSource<bool>();
        }
    }
    
    public Task WaitAsync()
    {
        return _tcs.Task;
    }
}

// استفاده
var signal = new AsyncSignal();

// Thread 1: منتظر signal
Task.Run(async () => {
    Console.WriteLine("منتظر signal...");
    await signal.WaitAsync();
    Console.WriteLine("Signal دریافت شد!");
});

// Thread 2: بعد از 3 ثانیه signal می‌دهد
Task.Run(async () => {
    await Task.Delay(3000);
    signal.Signal();
});
```

<a id="2368-مثال-کاربردی-promise-pattern"></a>
#### 2.3.6.8 مثال کاربردی: Promise Pattern

```csharp
public class Promise<T>
{
    private readonly TaskCompletionSource<T> _tcs = new TaskCompletionSource<T>();
    
    public Task<T> Task => _tcs.Task;
    
    public void Resolve(T value)
    {
        _tcs.TrySetResult(value);
    }
    
    public void Reject(Exception error)
    {
        _tcs.TrySetException(error);
    }
    
    public void Cancel()
    {
        _tcs.TrySetCanceled();
    }
}

// استفاده
var promise = new Promise<string>();

// Thread 1: منتظر نتیجه
Task.Run(async () => {
    try
    {
        string result = await promise.Task;
        Console.WriteLine($"نتیجه: {result}");
    }
    catch (Exception ex)
    {
        Console.WriteLine($"خطا: {ex.Message}");
    }
});

// Thread 2: بعد از 2 ثانیه resolve می‌کند
Task.Run(async () => {
    await Task.Delay(2000);
    promise.Resolve("موفق!");
});
```

<a id="2369-مثال-پیشرفته-race-condition"></a>
#### 2.3.6.9 مثال پیشرفته: Race Condition

```csharp
public class FirstResponse<T>
{
    private readonly TaskCompletionSource<T> _tcs = new TaskCompletionSource<T>();
    private int _remainingTasks;
    
    public Task<T> WaitForFirstAsync(IEnumerable<Task<T>> tasks)
    {
        _remainingTasks = tasks.Count();
        
        foreach (var task in tasks)
        {
            task.ContinueWith(t => {
                if (t.IsCompletedSuccessfully)
                {
                    _tcs.TrySetResult(t.Result);
                }
                else if (t.IsFaulted)
                {
                    Interlocked.Decrement(ref _remainingTasks);
                    if (_remainingTasks == 0)
                    {
                        _tcs.TrySetException(t.Exception.InnerException);
                    }
                }
            });
        }
        
        return _tcs.Task;
    }
}

// استفاده
var firstResponse = new FirstResponse<string>();

var tasks = new[]
{
    GetDataFromServer1Async(),
    GetDataFromServer2Async(),
    GetDataFromServer3Async()
};

string result = await firstResponse.WaitForFirstAsync(tasks);
Console.WriteLine($"اولین پاسخ: {result}");
```

<a id="23610-بهترین-روشها"></a>
#### 2.3.6.10 بهترین روش‌ها

**1. استفاده از TrySetResult به جای SetResult:**

```csharp
// ✅ درست: TrySetResult (اگر قبلاً set شده باشد، false برمی‌گرداند)
TaskCompletionSource<string> tcs = new TaskCompletionSource<string>();
bool success = tcs.TrySetResult("نتیجه");

// ❌ نادرست: SetResult (اگر قبلاً set شده باشد، exception می‌دهد)
tcs.SetResult("نتیجه");
```

**2. بررسی IsCompleted قبل از Set:**

```csharp
// ✅ درست
if (!tcs.Task.IsCompleted)
{
    tcs.TrySetResult("نتیجه");
}
```

**3. مدیریت استثنا:**

```csharp
// ✅ درست
try
{
    string result = await SomeOperationAsync();
    tcs.TrySetResult(result);
}
catch (Exception ex)
{
    tcs.TrySetException(ex);
}
```

**4. استفاده از using برای cleanup:**

```csharp
// ✅ درست
public Task<string> WaitForEventAsync()
{
    TaskCompletionSource<string> tcs = new TaskCompletionSource<string>();
    var watcher = new FileSystemWatcher();
    
    watcher.Created += (s, e) => {
        tcs.TrySetResult(e.FullPath);
    };
    
    // Cleanup بعد از تکمیل
    tcs.Task.ContinueWith(_ => watcher.Dispose());
    
    return tcs.Task;
}
```

**5. استفاده از CancellationToken:**

```csharp
// ✅ درست
public Task<string> GetDataAsync(CancellationToken cancellationToken)
{
    TaskCompletionSource<string> tcs = new TaskCompletionSource<string>();
    
    cancellationToken.Register(() => {
        tcs.TrySetCanceled();
    });
    
    // ...
    
    return tcs.Task;
}
```

<a id="23611-نکات-مهم"></a>
#### 2.3.6.11 نکات مهم

**1. TaskCompletionSource یکبار استفاده می‌شود:**

```csharp
TaskCompletionSource<string> tcs = new TaskCompletionSource<string>();
tcs.SetResult("نتیجه 1");
tcs.SetResult("نتیجه 2"); // ❌ خطا! قبلاً set شده است

// ✅ درست: استفاده از TrySetResult
tcs.TrySetResult("نتیجه 2"); // false برمی‌گرداند
```

**2. فقط یکی از SetResult, SetException, SetCanceled باید فراخوانی شود:**

```csharp
// ❌ نادرست
tcs.SetResult("نتیجه");
tcs.SetException(new Exception("خطا")); // خطا!

// ✅ درست
if (success)
{
    tcs.SetResult("نتیجه");
}
else
{
    tcs.SetException(new Exception("خطا"));
}
```

**3. TaskCompletionSource بدون generic:**

```csharp
// برای Task بدون نتیجه
TaskCompletionSource tcs = new TaskCompletionSource();
tcs.SetResult();
Task task = tcs.Task;
```

**4. استفاده در Library Code:**

```csharp
// ✅ مناسب برای Library
public class MyLibrary
{
    public Task<string> GetDataAsync()
    {
        TaskCompletionSource<string> tcs = new TaskCompletionSource<string>();
        
        // تبدیل API قدیمی به async
        OldApiMethod(result => tcs.SetResult(result));
        
        return tcs.Task;
    }
}
```

#### خلاصه

- **TaskCompletionSource:** برای ایجاد Taskهای سفارشی و کنترل دستی تکمیل
- **کاربردها:** تبدیل Event/Callback به async، Timeout، Queue، Signal
- **TrySetResult/SetException/SetCanceled:** برای تنظیم نتیجه، استثنا، یا لغو
- **یکبار استفاده:** هر TaskCompletionSource فقط یکبار می‌تواند set شود
- **بهترین روش:** استفاده از TrySet* methods، مدیریت استثنا، cleanup

## 2.4. برنامه‌نویسی موازی (Parallel Programming)

برنامه‌نویسی موازی(Parallel Programming) به معنای تقسیم یک کار بزرگ به بخش‌های کوچکتر و اجرای همزمان آن‌ها برای استفاده بهتر از CPUهای چند هسته‌ای است. در C#، `System.Threading.Tasks.Parallel` کلاس اصلی برای این کار است.

<a id="241-مقدمهای-بر-برنامهنویسی-موازی-در-c"></a>
### 2.4.1 مقدمه‌ای بر برنامه‌نویسی موازی در C#

برنامه‌نویسی موازی(Parallel Programming) یکی از مهم‌ترین تکنیک‌ها برای بهبود عملکرد برنامه‌های CPU-bound است. درک صحیح آن برای نوشتن برنامه‌های کارآمد ضروری است.

<a id="2411-مفهوم-برنامه‌نویسی-موازی"></a>
#### 2.4.1.1 مفهوم برنامه‌نویسی موازی(Parallel Programming)

**تعریف:**

برنامه‌نویسی موازی(Parallel Programming) به معنای تقسیم یک کار به بخش‌های کوچکتر و اجرای همزمان آن‌ها روی چند هسته CPU است.

**مثال ساده:**

```csharp
// ❌ متوالی(Sequential) - کند
for (int i = 0; i < 1000; i++)
{
    ProcessItem(i); // هر آیتم یکی یکی پردازش می‌شود
}

// ✅ موازی(Parallel) - سریع‌تر
Parallel.For(0, 1000, i => {
    ProcessItem(i); // چند آیتم همزمان پردازش می‌شوند
});
```

<a id="2412-تفاوت-موازی-و-همزمان"></a>
#### 2.4.1.2 تفاوت موازی(Parallel) و همزمان(Concurrent)

**همزمانی(Concurrency):**

- چند کار به صورت همزمان(Concurrent) اجرا می‌شوند
- ممکن است روی یک هسته CPU اجرا شوند (time-slicing)
- مناسب برای I/O-bound کارها

**موازی‌سازی(Parallelism):**

- یک کار بزرگ به بخش‌های کوچکتر تقسیم می‌شود
- هر بخش روی یک هسته CPU جداگانه اجرا می‌شود
- مناسب برای CPU-bound کارها

**مثال:**

```csharp
// همزمان(Concurrent) - چند کار مستقل
Task task1 = Task.Run(() => DownloadFile1());
Task task2 = Task.Run(() => DownloadFile2());
Task task3 = Task.Run(() => DownloadFile3());
await Task.WhenAll(task1, task2, task3);

// موازی(Parallel) - یک کار بزرگ تقسیم شده
Parallel.For(0, 1000, i => {
    CalculateValue(i); // پردازش موازی(Parallel) یک آرایه
});
```

<a id="2413-مزایای-برنامه‌نویسی-موازی"></a>
#### 2.4.1.3 مزایای برنامه‌نویسی موازی

**1. بهبود عملکرد:**

```csharp
// بدون موازی‌سازی - 10 ثانیه
for (int i = 0; i < 1000; i++)
{
    HeavyCalculation(i); // هر کدام 10ms
}
// کل زمان: 1000 * 10ms = 10 ثانیه

// با موازی‌سازی - 2.5 ثانیه (با 4 هسته)
Parallel.For(0, 1000, i => {
    HeavyCalculation(i);
});
// کل زمان: تقریباً 1000 * 10ms / 4 = 2.5 ثانیه
```

**2. استفاده بهتر از منابع:**

- استفاده از همه هسته‌های CPU
- کاهش زمان انتظار
- بهبود throughput

**3. مقیاس‌پذیری:**

- با افزایش هسته‌های CPU، عملکرد بهتر می‌شود
- مناسب برای سرورهای قدرتمند

<a id="2414-معایب-و-چالش‌ها"></a>
#### 2.4.1.4 معایب و چالش‌ها

**1. پیچیدگی:**

```csharp
// ساده - متوالی(Sequential)
int sum = 0;
for (int i = 0; i < 1000; i++)
{
    sum += Calculate(i);
}

// پیچیده - موازی(Parallel) (نیاز به thread-safety)
int sum = 0;
object lockObj = new object();
Parallel.For(0, 1000, i => {
    int value = Calculate(i);
    lock (lockObj)
    {
        sum += value;
    }
});
```

**2. Overhead:**

- ایجاد و مدیریت نخ‌ها هزینه دارد
- برای کارهای کوچک ممکن است کندتر باشد

**3. Race Conditions:**

- نیاز به همگام‌سازی(Synchronization)
- خطر قفل مرگ(Deadlock)

<a id="2415-زمان-استفاده-از-موازی‌سازی"></a>
#### 2.4.1.5 زمان استفاده از موازی‌سازی

**✅ مناسب برای:**

1. **کارهای CPU-bound بزرگ:**

```csharp
// ✅ مناسب: پردازش تصویر
Parallel.For(0, image.Height, y => {
    for (int x = 0; x < image.Width; x++)
    {
        ProcessPixel(x, y);
    }
});
```

2. **محاسبات ریاضی سنگین:**

```csharp
// ✅ مناسب: محاسبه ماتریس
Parallel.For(0, matrix.Rows, i => {
    for (int j = 0; j < matrix.Columns; j++)
    {
        matrix[i, j] = CalculateValue(i, j);
    }
});
```

3. **پردازش داده‌های بزرگ:**

```csharp
// ✅ مناسب: پردازش آرایه بزرگ
Parallel.ForEach(largeArray, item => {
    ProcessItem(item);
});
```

**❌ نامناسب برای:**

1. **کارهای I/O-bound:**

```csharp
// ❌ نامناسب: دانلود فایل (I/O-bound)
Parallel.For(0, urls.Length, i => {
    DownloadFile(urls[i]); // I/O-bound، موازی‌سازی مفید نیست
});

// ✅ بهتر: async/await
var tasks = urls.Select(url => DownloadFileAsync(url));
await Task.WhenAll(tasks);
```

2. **کارهای کوچک:**

```csharp
// ❌ نامناسب: کار کوچک (overhead بیشتر از سود)
Parallel.For(0, 10, i => {
    Console.WriteLine(i); // overhead بیشتر است
});
```

3. **کارهای وابسته:**

```csharp
// ❌ نامناسب: وابستگی بین آیتم‌ها
for (int i = 1; i < array.Length; i++)
{
    array[i] = array[i - 1] + 1; // وابسته به آیتم قبلی
}
```

<a id="2416-معرفی-parallel-class"></a>
#### 2.4.1.6 معرفی Parallel Class

`System.Threading.Tasks.Parallel` کلاس اصلی برای برنامه‌نویسی موازی در C# است:

**متدهای اصلی:**

- `Parallel.For`: حلقه for موازی(Parallel)
- `Parallel.ForEach`: حلقه foreach موازی(Parallel)
- `Parallel.Invoke`: اجرای چند action به صورت موازی(Parallel)

**مثال ساده:**

```csharp
using System.Threading.Tasks;

// Parallel.For
Parallel.For(0, 100, i => {
    Console.WriteLine($"آیتم {i} - نخ: {Thread.CurrentThread.ManagedThreadId}");
});

// Parallel.ForEach
var items = Enumerable.Range(0, 100);
Parallel.ForEach(items, item => {
    Console.WriteLine($"پردازش {item}");
});

// Parallel.Invoke
Parallel.Invoke(
    () => DoWork1(),
    () => DoWork2(),
    () => DoWork3()
);
```

<a id="2417-مثال-کاربردی-پردازش-تصویر"></a>
#### 2.4.1.7 مثال کاربردی: پردازش تصویر

```csharp
public class ImageProcessor
{
    public void ProcessImageParallel(byte[] imageData, int width, int height)
    {
        // پردازش موازی(Parallel) پیکسل‌ها
        Parallel.For(0, height, y => {
            for (int x = 0; x < width; x++)
            {
                int index = y * width + x;
                imageData[index] = ProcessPixel(imageData[index]);
            }
        });
    }
    
    private byte ProcessPixel(byte pixel)
    {
        // شبیه‌سازی پردازش سنگین
        return (byte)(pixel * 1.2);
    }
}

// استفاده
var processor = new ImageProcessor();
byte[] image = LoadImage();
processor.ProcessImageParallel(image, 1920, 1080);
```

<a id="2418-مثال-کاربردی-محاسبه-ریاضی"></a>
#### 2.4.1.8 مثال کاربردی: محاسبه ریاضی

```csharp
public class MathCalculator
{
    public double CalculateSumParallel(double[] numbers)
    {
        double sum = 0;
        object lockObj = new object();
        
        Parallel.ForEach(numbers, number => {
            double result = Math.Sqrt(number) * Math.Pow(number, 2);
            lock (lockObj)
            {
                sum += result;
            }
        });
        
        return sum;
    }
    
    // بهتر: استفاده از Interlocked یا local sum
    public double CalculateSumParallelOptimized(double[] numbers)
    {
        double sum = 0;
        
        Parallel.ForEach(
            numbers,
            () => 0.0, // local state initialization
            (number, loopState, localSum) => {
                return localSum + Math.Sqrt(number) * Math.Pow(number, 2);
            },
            localSum => {
                Interlocked.Exchange(ref sum, sum + localSum);
            }
        );
        
        return sum;
    }
}
```

<a id="2419-نکات-مهم"></a>
#### 2.4.1.9 نکات مهم

**1. Thread-Safety:**

```csharp
// ❌ مشکل: race condition
int counter = 0;
Parallel.For(0, 1000, i => {
    counter++; // race condition!
});

// ✅ درست: استفاده از Interlocked
int counter = 0;
Parallel.For(0, 1000, i => {
    Interlocked.Increment(ref counter);
});
```

**2. Overhead:**

```csharp
// برای کارهای کوچک، overhead بیشتر از سود است
// بهتر است از حلقه عادی استفاده کنید
for (int i = 0; i < 10; i++)
{
    DoWork(i);
}
```

**3. Ordering:**

```csharp
// Parallel.For ترتیب را تضمین نمی‌کند
Parallel.For(0, 10, i => {
    Console.WriteLine(i); // ممکن است ترتیب نداشته باشد
});
```

**4. Exception Handling:**

```csharp
try
{
    Parallel.For(0, 100, i => {
        if (i == 50)
        {
            throw new Exception("خطا!");
        }
    });
}
catch (AggregateException ex)
{
    foreach (var innerEx in ex.InnerExceptions)
    {
        Console.WriteLine($"خطا: {innerEx.Message}");
    }
}
```

<a id="24110-بهترین-روشها"></a>
#### 2.4.1.10 بهترین روش‌ها

**1. استفاده برای کارهای CPU-bound بزرگ:**

```csharp
// ✅ مناسب: کار بزرگ CPU-bound
Parallel.For(0, 1000000, i => {
    HeavyCalculation(i);
});
```

**2. اجتناب از shared state:**

```csharp
// ❌ مشکل: shared state
int sum = 0;
Parallel.For(0, 1000, i => {
    sum += i; // race condition
});

// ✅ بهتر: local state
int sum = 0;
Parallel.ForEach(
    Enumerable.Range(0, 1000),
    () => 0,
    (i, state, localSum) => localSum + i,
    localSum => Interlocked.Add(ref sum, localSum)
);
```

**3. استفاده از ParallelOptions برای کنترل:**

```csharp
var options = new ParallelOptions
{
    MaxDegreeOfParallelism = 4 // محدود کردن به 4 نخ
};

Parallel.For(0, 1000, options, i => {
    DoWork(i);
});
```

**4. اندازه‌گیری عملکرد:**

```csharp
var sw = System.Diagnostics.Stopwatch.StartNew();

// متوالی(Sequential)
for (int i = 0; i < 1000; i++)
{
    DoWork(i);
}
sw.Stop();
Console.WriteLine($"متوالی: {sw.ElapsedMilliseconds} ms");

sw.Restart();
// موازی(Parallel)
Parallel.For(0, 1000, i => {
    DoWork(i);
});
sw.Stop();
Console.WriteLine($"موازی: {sw.ElapsedMilliseconds} ms");
```

#### خلاصه

- **برنامه‌نویسی موازی:** تقسیم کار به بخش‌های کوچکتر و اجرای همزمان روی چند هسته
- **تفاوت با همزمانی:** موازی(Parallel) برای CPU-bound، همزمان(Concurrent) برای I/O-bound
- **مزایا:** بهبود عملکرد، استفاده بهتر از منابع، مقیاس‌پذیری
- **معایب:** پیچیدگی، overhead، race conditions
- **استفاده:** برای کارهای CPU-bound بزرگ، نه برای I/O-bound یا کارهای کوچک
- **Parallel Class:** Parallel.For, Parallel.ForEach, Parallel.Invoke
- **بهترین روش:** استفاده برای کارهای بزرگ CPU-bound، اجتناب از shared state

<a id="242-حلقههای-موازی-parallelfor-و-parallelforeach"></a>
### 2.4.2 حلقه‌های موازی(Parallel Loops): Parallel.For() و Parallel.ForEach()

`Parallel.For()` و `Parallel.ForEach()` دو متد اصلی برای اجرای حلقه‌ها به صورت موازی(Parallel) هستند. این متدها به صورت خودکار کار را بین چند نخ تقسیم می‌کنند.

<a id="2421-parallelfor-پایه"></a>
#### 2.4.2.1 Parallel.For() پایه

**فرم ساده:**

```csharp
// حلقه for عادی
for (int i = 0; i < 1000; i++)
{
    ProcessItem(i);
}

// حلقه for موازی(Parallel)
Parallel.For(0, 1000, i => {
    ProcessItem(i);
});
```

**مثال کامل:**

```csharp
public void ProcessArrayParallel(int[] array)
{
    Parallel.For(0, array.Length, i => {
        array[i] = CalculateValue(array[i]);
        Console.WriteLine($"پردازش آیتم {i} در نخ {Thread.CurrentThread.ManagedThreadId}");
    });
}
```

<a id="2422-parallelforeach-پایه"></a>
#### 2.4.2.2 Parallel.ForEach() پایه

**فرم ساده:**

```csharp
// حلقه foreach عادی
foreach (var item in items)
{
    ProcessItem(item);
}

// حلقه foreach موازی(Parallel)
Parallel.ForEach(items, item => {
    ProcessItem(item);
});
```

**مثال کامل:**

```csharp
public void ProcessListParallel(List<string> items)
{
    Parallel.ForEach(items, item => {
        string processed = ProcessItem(item);
        Console.WriteLine($"پردازش: {processed}");
    });
}
```

<a id="2423-تفاوت-با-حلقه-های-عادی"></a>
#### 2.4.2.3 تفاوت با حلقه‌های عادی

**حلقه عادی (Sequential):**

```csharp
// متوالی(Sequential) - ترتیب حفظ می‌شود
for (int i = 0; i < 10; i++)
{
    Console.WriteLine(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}
```

**حلقه موازی(Parallel):**

```csharp
// موازی(Parallel) - ترتیب حفظ نمی‌شود
Parallel.For(0, 10, i => {
    Console.WriteLine(i); // ممکن است: 3, 0, 7, 1, 5, 2, ...
});
```

**جدول مقایسه:**

| ویژگی | حلقه عادی | Parallel.For/ForEach |
|-------|------------|----------------------|
| **ترتیب** | حفظ می‌شود | حفظ نمی‌شود |
| **عملکرد** | کندتر (یک نخ) | سریع‌تر (چند نخ) |
| **Overhead** | کم | بیشتر |
| **مناسب برای** | کارهای کوچک | کارهای بزرگ CPU-bound |

<a id="2424-overload-های-parallelfor"></a>
#### 2.4.2.4 Overload های Parallel.For

**1. فرم ساده:**

```csharp
Parallel.For(0, 100, i => {
    DoWork(i);
});
```

**2. با ParallelOptions:**

```csharp
var options = new ParallelOptions
{
    MaxDegreeOfParallelism = 4 // محدود کردن به 4 نخ
};

Parallel.For(0, 100, options, i => {
    DoWork(i);
});
```

**3. با ParallelLoopState:**

```csharp
Parallel.For(0, 100, (i, loopState) => {
    if (i == 50)
    {
        loopState.Break(); // متوقف کردن حلقه
    }
    DoWork(i);
});
```

**4. با local state:**

```csharp
int sum = 0;
Parallel.For(0, 1000,
    () => 0, // local state initialization
    (i, loopState, localSum) => {
        return localSum + CalculateValue(i); // local state accumulation
    },
    localSum => {
        Interlocked.Add(ref sum, localSum); // local state finalization
    }
);
```

<a id="2425-overload-های-parallelforeach"></a>
#### 2.4.2.5 Overload های Parallel.ForEach

**1. فرم ساده:**

```csharp
var items = Enumerable.Range(0, 100);
Parallel.ForEach(items, item => {
    ProcessItem(item);
});
```

**2. با ParallelOptions:**

```csharp
var options = new ParallelOptions
{
    MaxDegreeOfParallelism = 4
};

Parallel.ForEach(items, options, item => {
    ProcessItem(item);
});
```

**3. با ParallelLoopState:**

```csharp
Parallel.ForEach(items, (item, loopState) => {
    if (ShouldStop(item))
    {
        loopState.Stop(); // متوقف کردن فوری
    }
    ProcessItem(item);
});
```

**4. با local state:**

```csharp
int sum = 0;
Parallel.ForEach(items,
    () => 0, // local state initialization
    (item, loopState, localSum) => {
        return localSum + ProcessItem(item); // local state accumulation
    },
    localSum => {
        Interlocked.Add(ref sum, localSum); // local state finalization
    }
);
```

<a id="2426-استفاده-از-parallelloopstate"></a>
#### 2.4.2.6 استفاده از ParallelLoopState

`ParallelLoopState` به شما امکان کنترل حلقه را می‌دهد:

**متدهای مهم:**

- `Break()`: متوقف کردن حلقه بعد از اتمام تکرارهای فعلی
- `Stop()`: متوقف کردن فوری حلقه
- `IsStopped`: بررسی اینکه آیا حلقه متوقف شده
- `IsExceptional`: بررسی اینکه آیا استثنا رخ داده
- `LowestBreakIteration`: کمترین index که Break فراخوانی شده

**مثال Break:**

```csharp
Parallel.For(0, 1000, (i, loopState) => {
    if (i > 500)
    {
        loopState.Break(); // متوقف می‌کند بعد از اتمام تکرارهای فعلی
        return;
    }
    ProcessItem(i);
});

Console.WriteLine($"LowestBreakIteration: {loopState.LowestBreakIteration}");
```

**مثال Stop:**

```csharp
Parallel.For(0, 1000, (i, loopState) => {
    if (FoundResult())
    {
        loopState.Stop(); // متوقف کردن فوری
        return;
    }
    SearchItem(i);
});
```

<a id="2427-local-state-برای-بهینه-سازی"></a>
#### 2.4.2.7 Local State برای بهینه‌سازی

استفاده از local state برای کاهش lock contention:

**بدون local state (کندتر):**

```csharp
int sum = 0;
object lockObj = new object();

Parallel.For(0, 1000000, i => {
    lock (lockObj) // lock contention بالا
    {
        sum += CalculateValue(i);
    }
});
```

**با local state (سریع‌تر):**

```csharp
int sum = 0;

Parallel.For(0, 1000000,
    () => 0, // هر نخ یک local sum دارد
    (i, loopState, localSum) => {
        return localSum + CalculateValue(i); // بدون lock
    },
    localSum => {
        Interlocked.Add(ref sum, localSum); // فقط یک بار lock
    }
);
```

**مثال کامل: محاسبه مجموع:**

```csharp
public int CalculateSumParallel(int[] numbers)
{
    int sum = 0;
    
    Parallel.ForEach(
        numbers,
        () => 0, // local sum برای هر نخ
        (number, loopState, localSum) => {
            return localSum + number; // بدون lock
        },
        localSum => {
            Interlocked.Add(ref sum, localSum); // فقط یک بار
        }
    );
    
    return sum;
}
```

<a id="2428-مثال-کاربردی-پردازش-فایل-ها"></a>
#### 2.4.2.8 مثال کاربردی: پردازش فایل‌ها

```csharp
public class FileProcessor
{
    public void ProcessFilesParallel(string[] filePaths)
    {
        Parallel.ForEach(filePaths, filePath => {
            try
            {
                string content = File.ReadAllText(filePath);
                string processed = ProcessContent(content);
                File.WriteAllText(filePath + ".processed", processed);
                Console.WriteLine($"پردازش شد: {filePath}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"خطا در {filePath}: {ex.Message}");
            }
        });
    }
    
    private string ProcessContent(string content)
    {
        // شبیه‌سازی پردازش سنگین
        Thread.Sleep(100);
        return content.ToUpper();
    }
}

// استفاده
var processor = new FileProcessor();
string[] files = Directory.GetFiles(@"C:\Data");
processor.ProcessFilesParallel(files);
```

<a id="2429-مثال-کاربردی-پردازش-داده-بزرگ"></a>
#### 2.4.2.9 مثال کاربردی: پردازش داده بزرگ

```csharp
public class DataProcessor
{
    public Dictionary<string, int> ProcessDataParallel(List<DataItem> items)
    {
        var result = new ConcurrentDictionary<string, int>();
        
        Parallel.ForEach(items, item => {
            string key = item.Category;
            int value = ProcessItem(item);
            
            result.AddOrUpdate(key, value, (k, v) => v + value);
        });
        
        return result.ToDictionary(kvp => kvp.Key, kvp => kvp.Value);
    }
    
    private int ProcessItem(DataItem item)
    {
        // پردازش سنگین CPU-bound
        return item.Value * item.Value;
    }
}
```

<a id="24210-محدود-کردن-درجه-موازی‌سازی"></a>
#### 2.4.2.10 محدود کردن درجه موازی‌سازی(Degree of Parallelism)

**استفاده از ParallelOptions:**

```csharp
var options = new ParallelOptions
{
    MaxDegreeOfParallelism = Environment.ProcessorCount // تعداد هسته‌ها
};

Parallel.For(0, 1000, options, i => {
    DoWork(i);
});
```

**محدود کردن به تعداد خاص:**

```csharp
var options = new ParallelOptions
{
    MaxDegreeOfParallelism = 4 // حداکثر 4 نخ
};

Parallel.ForEach(items, options, item => {
    ProcessItem(item);
});
```

**محدود کردن برای I/O:**

```csharp
// برای I/O-bound کارها، درجه موازی‌سازی را محدود کنید
var options = new ParallelOptions
{
    MaxDegreeOfParallelism = 10 // برای I/O بیشتر از CPU
};

Parallel.ForEach(urls, options, url => {
    DownloadFile(url); // I/O-bound
});
```

<a id="24211-مقایسه-عملکرد"></a>
#### 2.4.2.11 مقایسه عملکرد(Performance)

**مثال اندازه‌گیری:**

```csharp
var sw = System.Diagnostics.Stopwatch.StartNew();

// متوالی(Sequential)
int sum1 = 0;
for (int i = 0; i < 1000000; i++)
{
    sum1 += CalculateValue(i);
}
sw.Stop();
Console.WriteLine($"متوالی: {sw.ElapsedMilliseconds} ms");

sw.Restart();
// موازی(Parallel) - بدون local state
int sum2 = 0;
object lockObj = new object();
Parallel.For(0, 1000000, i => {
    int value = CalculateValue(i);
    lock (lockObj)
    {
        sum2 += value;
    }
});
sw.Stop();
Console.WriteLine($"موازی (با lock): {sw.ElapsedMilliseconds} ms");

sw.Restart();
// موازی(Parallel) - با local state
int sum3 = 0;
Parallel.For(0, 1000000,
    () => 0,
    (i, state, localSum) => localSum + CalculateValue(i),
    localSum => Interlocked.Add(ref sum3, localSum)
);
sw.Stop();
Console.WriteLine($"موازی (با local state): {sw.ElapsedMilliseconds} ms");
```

<a id="24212-بهترین-روشها"></a>
#### 2.4.2.12 بهترین روش‌ها

**1. استفاده از local state برای aggregation:**

```csharp
// ✅ درست: local state
int sum = 0;
Parallel.For(0, 1000,
    () => 0,
    (i, state, localSum) => localSum + i,
    localSum => Interlocked.Add(ref sum, localSum)
);

// ❌ نادرست: lock در هر تکرار
int sum = 0;
object lockObj = new object();
Parallel.For(0, 1000, i => {
    lock (lockObj)
    {
        sum += i;
    }
});
```

**2. استفاده از ConcurrentDictionary/ConcurrentBag برای collections:**

```csharp
// ✅ درست: ConcurrentDictionary
var results = new ConcurrentDictionary<string, int>();
Parallel.ForEach(items, item => {
    results.TryAdd(item.Key, ProcessItem(item));
});

// ❌ نادرست: Dictionary با lock
var results = new Dictionary<string, int>();
object lockObj = new object();
Parallel.ForEach(items, item => {
    lock (lockObj)
    {
        results[item.Key] = ProcessItem(item);
    }
});
```

**3. محدود کردن درجه موازی‌سازی برای I/O:**

```csharp
// ✅ درست: محدود کردن برای I/O
var options = new ParallelOptions
{
    MaxDegreeOfParallelism = 10
};
Parallel.ForEach(urls, options, url => DownloadFile(url));
```

**4. مدیریت استثنا:**

```csharp
// ✅ درست: مدیریت استثنا
try
{
    Parallel.ForEach(items, item => {
        ProcessItem(item);
    });
}
catch (AggregateException ex)
{
    foreach (var innerEx in ex.InnerExceptions)
    {
        Console.WriteLine($"خطا: {innerEx.Message}");
    }
}
```

**5. اجتناب از shared state:**

```csharp
// ❌ مشکل: shared state
int counter = 0;
Parallel.For(0, 1000, i => {
    counter++; // race condition
});

// ✅ درست: Interlocked
int counter = 0;
Parallel.For(0, 1000, i => {
    Interlocked.Increment(ref counter);
});
```

<a id="24213-نکات-مهم"></a>
#### 2.4.2.13 نکات مهم

**1. ترتیب حفظ نمی‌شود:**

```csharp
// ترتیب تضمین نمی‌شود
Parallel.For(0, 10, i => {
    Console.WriteLine(i); // ممکن است: 3, 0, 7, 1, ...
});
```

**2. Overhead برای کارهای کوچک:**

```csharp
// ❌ برای کارهای کوچک، overhead بیشتر است
Parallel.For(0, 10, i => {
    Console.WriteLine(i); // کندتر از حلقه عادی
});
```

**3. Break vs Stop:**

```csharp
// Break: متوقف می‌کند بعد از اتمام تکرارهای فعلی
loopState.Break();

// Stop: متوقف می‌کند فوراً
loopState.Stop();
```

**4. استفاده از CancellationToken:**

```csharp
var cts = new CancellationTokenSource();
var options = new ParallelOptions
{
    CancellationToken = cts.Token
};

Parallel.For(0, 1000, options, i => {
    // کار
});

// بعداً
cts.Cancel();
```

#### خلاصه

- **Parallel.For:** حلقه for موازی(Parallel)
- **Parallel.ForEach:** حلقه foreach موازی(Parallel)
- **Local State:** برای بهینه‌سازی aggregation
- **ParallelLoopState:** برای کنترل حلقه (Break, Stop)
- **ParallelOptions:** برای محدود کردن درجه موازی‌سازی
- **بهترین روش:** استفاده از local state، Concurrent collections، مدیریت استثنا
- **نکات:** ترتیب حفظ نمی‌شود، overhead برای کارهای کوچک

<a id="243-مدیریت-استثناها-در-حلقههای-موازی"></a>
### 2.4.3 مدیریت استثناها در حلقه‌های موازی

مدیریت استثناها(Exception Handling) در حلقه‌های موازی(Parallel Loops) با حلقه‌های عادی متفاوت است. در حلقه‌های موازی، چندین استثنا ممکن است همزمان رخ دهند و همه آن‌ها در یک `AggregateException` جمع‌آوری می‌شوند.

<a id="2431-مشکل-استثنا-در-حلقه-های-موازی"></a>
#### 2.4.3.1 مشکل استثنا در حلقه‌های موازی

**در حلقه عادی:**

```csharp
// حلقه عادی - استثنا فوراً پرتاب می‌شود
try
{
    for (int i = 0; i < 100; i++)
    {
        ProcessItem(i); // اگر خطا باشد، حلقه متوقف می‌شود
    }
}
catch (Exception ex)
{
    Console.WriteLine($"خطا: {ex.Message}");
}
```

**در حلقه موازی(Parallel):**

```csharp
// حلقه موازی(Parallel) - چند استثنا ممکن است رخ دهد
try
{
    Parallel.For(0, 100, i => {
        ProcessItem(i); // چند استثنا ممکن است همزمان رخ دهند
    });
}
catch (AggregateException aggEx)
{
    // همه استثناها در InnerExceptions
    foreach (var ex in aggEx.InnerExceptions)
    {
        Console.WriteLine($"خطا: {ex.Message}");
    }
}
```

<a id="2432-aggregateexception"></a>
#### 2.4.3.2 AggregateException

`AggregateException` یک استثنای wrapper است که چندین استثنا را نگه می‌دارد:

```csharp
try
{
    Parallel.For(0, 100, i => {
        if (i % 10 == 0)
        {
            throw new InvalidOperationException($"خطا در آیتم {i}");
        }
        ProcessItem(i);
    });
}
catch (AggregateException aggEx)
{
    Console.WriteLine($"تعداد خطاها: {aggEx.InnerExceptions.Count}");
    
    foreach (var ex in aggEx.InnerExceptions)
    {
        Console.WriteLine($"  - {ex.GetType().Name}: {ex.Message}");
    }
}
```

**مثال کامل:**

```csharp
public void ProcessItemsWithExceptionHandling(int[] items)
{
    try
    {
        Parallel.ForEach(items, item => {
            if (item < 0)
            {
                throw new ArgumentException($"آیتم نامعتبر: {item}");
            }
            ProcessItem(item);
        });
    }
    catch (AggregateException aggEx)
    {
        Console.WriteLine($"تعداد خطاها: {aggEx.InnerExceptions.Count}");
        
        // دسته‌بندی استثناها
        var argumentExceptions = aggEx.InnerExceptions
            .OfType<ArgumentException>();
        var otherExceptions = aggEx.InnerExceptions
            .Where(ex => !(ex is ArgumentException));
        
        foreach (var ex in argumentExceptions)
        {
            Console.WriteLine($"ArgumentException: {ex.Message}");
        }
        
        foreach (var ex in otherExceptions)
        {
            Console.WriteLine($"Other Exception: {ex.Message}");
        }
    }
}
```

<a id="2433-مدیریت-استثنا-در-هر-تکرار"></a>
#### 2.4.3.3 مدیریت استثنا در هر تکرار

می‌توانید استثناها را در داخل حلقه مدیریت کنید:

```csharp
var errors = new ConcurrentBag<Exception>();

Parallel.For(0, 100, i => {
    try
    {
        ProcessItem(i);
    }
    catch (Exception ex)
    {
        errors.Add(ex); // ذخیره استثنا
    }
});

if (errors.Count > 0)
{
    Console.WriteLine($"تعداد خطاها: {errors.Count}");
    foreach (var ex in errors)
    {
        Console.WriteLine($"  - {ex.Message}");
    }
}
```

**مثال کاربردی:**

```csharp
public class ItemProcessor
{
    public ProcessingResult ProcessItemsParallel(List<Item> items)
    {
        var result = new ProcessingResult();
        
        Parallel.ForEach(items, item => {
            try
            {
                var processed = ProcessItem(item);
                result.AddSuccess(item.Id, processed);
            }
            catch (ValidationException ex)
            {
                result.AddValidationError(item.Id, ex.Message);
            }
            catch (ProcessingException ex)
            {
                result.AddProcessingError(item.Id, ex.Message);
            }
            catch (Exception ex)
            {
                result.AddGeneralError(item.Id, ex.Message);
            }
        });
        
        return result;
    }
    
    private ProcessedItem ProcessItem(Item item)
    {
        if (item.Value < 0)
        {
            throw new ValidationException("مقدار نامعتبر");
        }
        
        if (item.Value > 1000)
        {
            throw new ProcessingException("مقدار خیلی بزرگ");
        }
        
        return new ProcessedItem { Value = item.Value * 2 };
    }
}
```

<a id="2434-استفاده-از-handle"></a>
#### 2.4.3.4 استفاده از Handle

`AggregateException.Handle` برای فیلتر کردن استثناها:

```csharp
try
{
    Parallel.For(0, 100, i => {
        ProcessItem(i);
    });
}
catch (AggregateException aggEx)
{
    aggEx.Handle(ex => {
        if (ex is ArgumentException)
        {
            Console.WriteLine($"ArgumentException: {ex.Message}");
            return true; // مدیریت شد
        }
        return false; // مدیریت نشد - دوباره پرتاب می‌شود
    });
}
```

**مثال کامل:**

```csharp
try
{
    Parallel.ForEach(items, item => {
        ProcessItem(item);
    });
}
catch (AggregateException aggEx)
{
    // مدیریت ArgumentException
    aggEx.Handle(ex => {
        if (ex is ArgumentException)
        {
            Console.WriteLine($"ArgumentException: {ex.Message}");
            return true; // مدیریت شد
        }
        
        // مدیریت InvalidOperationException
        if (ex is InvalidOperationException)
        {
            Console.WriteLine($"InvalidOperationException: {ex.Message}");
            return true; // مدیریت شد
        }
        
        return false; // بقیه دوباره پرتاب می‌شوند
    });
}
```

<a id="2435-استثنا-در-local-state"></a>
#### 2.4.3.5 استثنا در Local State

هنگام استفاده از local state، استثناها باید در finalizer مدیریت شوند:

```csharp
int sum = 0;
var errors = new ConcurrentBag<Exception>();

Parallel.For(0, 1000,
    () => 0, // local state initialization
    (i, loopState, localSum) => {
        try
        {
            return localSum + CalculateValue(i);
        }
        catch (Exception ex)
        {
            errors.Add(ex);
            return localSum; // ادامه با localSum قبلی
        }
    },
    localSum => {
        // finalizer - استثناها اینجا مدیریت نمی‌شوند
        Interlocked.Add(ref sum, localSum);
    }
);

if (errors.Count > 0)
{
    Console.WriteLine($"تعداد خطاها: {errors.Count}");
}
```

<a id="2436-مثال-کاربردی-پردازش-فایل-با-مدیریت-خطا"></a>
#### 2.4.3.6 مثال کاربردی: پردازش فایل با مدیریت خطا

```csharp
public class FileProcessorWithErrorHandling
{
    public ProcessingReport ProcessFilesParallel(string[] filePaths)
    {
        var report = new ProcessingReport();
        
        try
        {
            Parallel.ForEach(filePaths, filePath => {
                try
                {
                    string content = File.ReadAllText(filePath);
                    string processed = ProcessContent(content);
                    File.WriteAllText(filePath + ".processed", processed);
                    
                    report.AddSuccess(filePath);
                }
                catch (FileNotFoundException ex)
                {
                    report.AddFileNotFoundError(filePath, ex.Message);
                }
                catch (UnauthorizedAccessException ex)
                {
                    report.AddAccessError(filePath, ex.Message);
                }
                catch (Exception ex)
                {
                    report.AddGeneralError(filePath, ex.Message);
                }
            });
        }
        catch (AggregateException aggEx)
        {
            // استثناهای مدیریت نشده
            foreach (var ex in aggEx.InnerExceptions)
            {
                report.AddUnhandledError(ex.Message);
            }
        }
        
        return report;
    }
    
    private string ProcessContent(string content)
    {
        // شبیه‌سازی پردازش
        if (content.Length > 10000)
        {
            throw new InvalidOperationException("فایل خیلی بزرگ");
        }
        return content.ToUpper();
    }
}

public class ProcessingReport
{
    public List<string> SuccessFiles { get; } = new List<string>();
    public List<(string File, string Error)> FileNotFoundErrors { get; } = new List<(string, string)>();
    public List<(string File, string Error)> AccessErrors { get; } = new List<(string, string)>();
    public List<(string File, string Error)> GeneralErrors { get; } = new List<(string, string)>();
    public List<string> UnhandledErrors { get; } = new List<string>();
    
    public void AddSuccess(string file) => SuccessFiles.Add(file);
    public void AddFileNotFoundError(string file, string error) => FileNotFoundErrors.Add((file, error));
    public void AddAccessError(string file, string error) => AccessErrors.Add((file, error));
    public void AddGeneralError(string file, string error) => GeneralErrors.Add((file, error));
    public void AddUnhandledError(string error) => UnhandledErrors.Add(error);
}
```

<a id="2437-استفاده-از-flatten"></a>
#### 2.4.3.7 استفاده از Flatten

`Flatten()` برای صاف کردن AggregateExceptionهای تو در تو:

```csharp
try
{
    Parallel.For(0, 100, i => {
        try
        {
            ProcessItem(i);
        }
        catch (Exception ex)
        {
            throw new AggregateException(ex); // AggregateException تو در تو
        }
    });
}
catch (AggregateException aggEx)
{
    // صاف کردن AggregateExceptionهای تو در تو
    var flattened = aggEx.Flatten();
    
    foreach (var ex in flattened.InnerExceptions)
    {
        Console.WriteLine($"خطا: {ex.Message}");
    }
}
```

<a id="2438-بهترین-روشها"></a>
#### 2.4.3.8 بهترین روش‌ها

**1. همیشه از try-catch استفاده کنید:**

```csharp
// ✅ درست
try
{
    Parallel.For(0, 100, i => {
        ProcessItem(i);
    });
}
catch (AggregateException aggEx)
{
    // مدیریت استثناها
}
```

**2. مدیریت استثنا در داخل حلقه برای کنترل بهتر:**

```csharp
// ✅ درست: مدیریت در داخل حلقه
var errors = new ConcurrentBag<Exception>();
Parallel.For(0, 100, i => {
    try
    {
        ProcessItem(i);
    }
    catch (Exception ex)
    {
        errors.Add(ex);
    }
});
```

**3. استفاده از Handle برای فیلتر کردن:**

```csharp
// ✅ درست: استفاده از Handle
catch (AggregateException aggEx)
{
    aggEx.Handle(ex => {
        if (ex is ExpectedException)
        {
            // مدیریت
            return true;
        }
        return false;
    });
}
```

**4. دسته‌بندی استثناها:**

```csharp
// ✅ درست: دسته‌بندی
catch (AggregateException aggEx)
{
    var validationErrors = aggEx.InnerExceptions.OfType<ValidationException>();
    var processingErrors = aggEx.InnerExceptions.OfType<ProcessingException>();
    var otherErrors = aggEx.InnerExceptions
        .Where(ex => !(ex is ValidationException || ex is ProcessingException));
}
```

**5. لاگ کردن همه استثناها:**

```csharp
// ✅ درست: لاگ کردن
catch (AggregateException aggEx)
{
    foreach (var ex in aggEx.InnerExceptions)
    {
        Logger.LogError(ex);
    }
}
```

<a id="2439-مثال-کامل"></a>
#### 2.4.3.9 مثال کامل: سیستم پردازش با مدیریت خطا

```csharp
public class RobustDataProcessor
{
    public ProcessingSummary ProcessDataParallel(List<DataItem> items)
    {
        var summary = new ProcessingSummary();
        var errors = new ConcurrentBag<(int ItemId, Exception Error)>();
        
        try
        {
            Parallel.ForEach(items, item => {
                try
                {
                    // مرحله 1: اعتبارسنجی
                    ValidateItem(item);
                    
                    // مرحله 2: تبدیل
                    var transformed = TransformItem(item);
                    
                    // مرحله 3: ذخیره
                    SaveItem(transformed);
                    
                    Interlocked.Increment(ref summary.SuccessCount);
                }
                catch (ValidationException ex)
                {
                    errors.Add((item.Id, ex));
                    Interlocked.Increment(ref summary.ValidationErrorCount);
                }
                catch (TransformationException ex)
                {
                    errors.Add((item.Id, ex));
                    Interlocked.Increment(ref summary.TransformationErrorCount);
                }
                catch (Exception ex)
                {
                    errors.Add((item.Id, ex));
                    Interlocked.Increment(ref summary.GeneralErrorCount);
                }
            });
        }
        catch (AggregateException aggEx)
        {
            // استثناهای مدیریت نشده
            foreach (var ex in aggEx.InnerExceptions)
            {
                Logger.LogError(ex);
                summary.UnhandledErrors.Add(ex.Message);
            }
        }
        
        // گزارش خطاها
        foreach (var (itemId, error) in errors)
        {
            summary.Errors.Add(new ErrorReport
            {
                ItemId = itemId,
                ErrorType = error.GetType().Name,
                Message = error.Message
            });
        }
        
        return summary;
    }
    
    private void ValidateItem(DataItem item)
    {
        if (item.Value < 0)
        {
            throw new ValidationException($"مقدار نامعتبر: {item.Value}");
        }
    }
    
    private TransformedItem TransformItem(DataItem item)
    {
        if (item.Value > 1000)
        {
            throw new TransformationException($"مقدار خیلی بزرگ: {item.Value}");
        }
        return new TransformedItem { Value = item.Value * 2 };
    }
    
    private void SaveItem(TransformedItem item)
    {
        // شبیه‌سازی ذخیره
    }
}

public class ProcessingSummary
{
    public int SuccessCount { get; set; }
    public int ValidationErrorCount { get; set; }
    public int TransformationErrorCount { get; set; }
    public int GeneralErrorCount { get; set; }
    public List<string> UnhandledErrors { get; } = new List<string>();
    public List<ErrorReport> Errors { get; } = new List<ErrorReport>();
}

public class ErrorReport
{
    public int ItemId { get; set; }
    public string ErrorType { get; set; }
    public string Message { get; set; }
}
```

#### خلاصه

- **AggregateException:** همه استثناها در InnerExceptions جمع می‌شوند
- **مدیریت در حلقه:** برای کنترل بهتر، استثناها را در داخل حلقه مدیریت کنید
- **Handle:** برای فیلتر کردن و مدیریت انتخابی استثناها
- **Flatten:** برای صاف کردن AggregateExceptionهای تو در تو
- **بهترین روش:** همیشه try-catch، مدیریت در داخل حلقه، دسته‌بندی استثناها، لاگ کردن

<a id="244-محدود-کردن-موازیسازی-با-paralleloptions"></a>
### 2.4.4 محدود کردن موازی‌سازی با ParallelOptions

`ParallelOptions` یک کلاس است که به شما امکان کنترل دقیق روی رفتار حلقه‌های موازی(Parallel Loops) را می‌دهد. با استفاده از آن می‌توانید درجه موازی‌سازی(Degree of Parallelism)، لغو(Cancellation)، و TaskScheduler را تنظیم کنید.

<a id="2441-معرفی-paralleloptions"></a>
#### 2.4.4.1 معرفی ParallelOptions

`ParallelOptions` سه ویژگی اصلی دارد:

- **MaxDegreeOfParallelism:** حداکثر تعداد نخ‌های همزمان(Concurrent)
- **CancellationToken:** برای لغو حلقه
- **TaskScheduler:** برای کنترل نحوه اجرای تسک‌ها

**مثال پایه:**

```csharp
var options = new ParallelOptions
{
    MaxDegreeOfParallelism = 4, // حداکثر 4 نخ
    CancellationToken = cancellationToken,
    TaskScheduler = TaskScheduler.Default
};

Parallel.For(0, 1000, options, i => {
    ProcessItem(i);
});
```

<a id="2442-maxdegreeofparallelism"></a>
#### 2.4.4.2 MaxDegreeOfParallelism

`MaxDegreeOfParallelism` تعداد حداکثر نخ‌های همزمان(Concurrent) را محدود می‌کند:

**مثال 1: محدود کردن به تعداد خاص**

```csharp
var options = new ParallelOptions
{
    MaxDegreeOfParallelism = 4 // حداکثر 4 نخ همزمان(Concurrent)
};

Parallel.For(0, 1000, options, i => {
    Console.WriteLine($"آیتم {i} - نخ: {Thread.CurrentThread.ManagedThreadId}");
    ProcessItem(i);
});
```

**مثال 2: استفاده از تعداد هسته‌های CPU**

```csharp
var options = new ParallelOptions
{
    MaxDegreeOfParallelism = Environment.ProcessorCount // تعداد هسته‌ها
};

Parallel.For(0, 1000, options, i => {
    ProcessItem(i);
});
```

**مثال 3: محدود کردن برای I/O-bound**

```csharp
// برای I/O-bound کارها، می‌توانید بیشتر از تعداد هسته‌ها استفاده کنید
var options = new ParallelOptions
{
    MaxDegreeOfParallelism = Environment.ProcessorCount * 2 // برای I/O
};

Parallel.ForEach(urls, options, url => {
    DownloadFile(url); // I/O-bound
});
```

**مثال 4: محدود کردن به 1 (غیر موازی)**

```csharp
// محدود کردن به 1 = غیر موازی (برای debugging)
var options = new ParallelOptions
{
    MaxDegreeOfParallelism = 1
};

Parallel.For(0, 100, options, i => {
    ProcessItem(i); // به صورت متوالی(Sequential) اجرا می‌شود
});
```

<a id="2443-cancellationtoken"></a>
#### 2.4.4.3 CancellationToken

استفاده از `CancellationToken` برای لغو حلقه موازی(Parallel):

```csharp
var cts = new CancellationTokenSource();
var options = new ParallelOptions
{
    CancellationToken = cts.Token,
    MaxDegreeOfParallelism = 4
};

// شروع حلقه
Task.Run(() => {
    try
    {
        Parallel.For(0, 1000, options, i => {
            options.CancellationToken.ThrowIfCancellationRequested();
            ProcessItem(i);
        });
    }
    catch (OperationCanceledException)
    {
        Console.WriteLine("حلقه لغو شد");
    }
});

// بعداً لغو می‌کنیم
Thread.Sleep(2000);
cts.Cancel();
```

**مثال کاربردی: لغو با دکمه:**

```csharp
public class CancellableProcessor
{
    private CancellationTokenSource _cts;
    
    public void StartProcessing(List<int> items)
    {
        _cts = new CancellationTokenSource();
        var options = new ParallelOptions
        {
            CancellationToken = _cts.Token,
            MaxDegreeOfParallelism = Environment.ProcessorCount
        };
        
        try
        {
            Parallel.ForEach(items, options, item => {
                options.CancellationToken.ThrowIfCancellationRequested();
                ProcessItem(item);
            });
        }
        catch (OperationCanceledException)
        {
            Console.WriteLine("پردازش لغو شد");
        }
    }
    
    public void Cancel()
    {
        _cts?.Cancel();
    }
}
```

<a id="2444-taskscheduler"></a>
#### 2.4.4.4 TaskScheduler

`TaskScheduler` برای کنترل نحوه اجرای تسک‌ها:

**استفاده از TaskScheduler.Default (پیش‌فرض):**

```csharp
var options = new ParallelOptions
{
    TaskScheduler = TaskScheduler.Default // ThreadPool
};

Parallel.For(0, 100, options, i => {
    ProcessItem(i);
});
```

**استفاده از TaskScheduler برای UI:**

```csharp
// در WPF/WinForms
var options = new ParallelOptions
{
    TaskScheduler = TaskScheduler.FromCurrentSynchronizationContext()
};

Parallel.For(0, 100, options, i => {
    // این کد در UI thread اجرا می‌شود
    UpdateUI(i);
});
```

**نکته:** استفاده از `TaskScheduler.FromCurrentSynchronizationContext()` در Parallel loops معمولاً توصیه نمی‌شود چون می‌تواند UI را فریز کند.

<a id="2445-مثال-کاربردی-کنترل-درجه-موازی‌سازی"></a>
#### 2.4.4.5 مثال کاربردی: کنترل درجه موازی‌سازی

```csharp
public class ConfigurableParallelProcessor
{
    public void ProcessItemsParallel(List<Item> items, int maxParallelism)
    {
        var options = new ParallelOptions
        {
            MaxDegreeOfParallelism = maxParallelism
        };
        
        Parallel.ForEach(items, options, item => {
            ProcessItem(item);
        });
    }
    
    public void ProcessItemsWithCancellation(List<Item> items, CancellationToken cancellationToken)
    {
        var options = new ParallelOptions
        {
            MaxDegreeOfParallelism = Environment.ProcessorCount,
            CancellationToken = cancellationToken
        };
        
        try
        {
            Parallel.ForEach(items, options, item => {
                options.CancellationToken.ThrowIfCancellationRequested();
                ProcessItem(item);
            });
        }
        catch (OperationCanceledException)
        {
            Console.WriteLine("پردازش لغو شد");
        }
    }
}
```

<a id="2446-مثال-کاربردی-پردازش-با-کنترل-دقیق"></a>
#### 2.4.4.6 مثال کاربردی: پردازش با کنترل دقیق

```csharp
public class ControlledParallelProcessor
{
    public ProcessingResult ProcessWithControl(
        List<DataItem> items,
        int maxParallelism,
        CancellationToken cancellationToken)
    {
        var result = new ProcessingResult();
        var options = new ParallelOptions
        {
            MaxDegreeOfParallelism = maxParallelism,
            CancellationToken = cancellationToken,
            TaskScheduler = TaskScheduler.Default
        };
        
        try
        {
            Parallel.ForEach(items, options, item => {
                options.CancellationToken.ThrowIfCancellationRequested();
                
                try
                {
                    var processed = ProcessItem(item);
                    result.AddSuccess(item.Id, processed);
                }
                catch (Exception ex)
                {
                    result.AddError(item.Id, ex);
                }
            });
        }
        catch (OperationCanceledException)
        {
            result.WasCancelled = true;
        }
        catch (AggregateException aggEx)
        {
            result.UnhandledErrors.AddRange(
                aggEx.InnerExceptions.Select(ex => ex.Message)
            );
        }
        
        return result;
    }
    
    private ProcessedItem ProcessItem(DataItem item)
    {
        // پردازش
        return new ProcessedItem { Value = item.Value * 2 };
    }
}
```

<a id="2447-محدود-کردن-برای-منابع-محدود"></a>
#### 2.4.4.7 محدود کردن برای منابع محدود

**مثال: محدود کردن برای دیتابیس:**

```csharp
// اگر connection pool محدود دارید
var options = new ParallelOptions
{
    MaxDegreeOfParallelism = 5 // محدود به 5 connection
};

Parallel.ForEach(items, options, item => {
    using (var connection = GetDatabaseConnection())
    {
        SaveToDatabase(connection, item);
    }
});
```

**مثال: محدود کردن برای API calls:**

```csharp
// اگر API rate limit دارید
var options = new ParallelOptions
{
    MaxDegreeOfParallelism = 10 // محدود به 10 request همزمان(Concurrent)
};

Parallel.ForEach(apiRequests, options, request => {
    CallApi(request);
});
```

<a id="2448-مقایسه-عملکرد"></a>
#### 2.4.4.8 مقایسه عملکرد(Performance)

**مثال اندازه‌گیری:**

```csharp
var items = Enumerable.Range(0, 1000).ToList();

// بدون محدودیت
var sw1 = System.Diagnostics.Stopwatch.StartNew();
Parallel.ForEach(items, item => ProcessItem(item));
sw1.Stop();

// با محدودیت 2
var options2 = new ParallelOptions { MaxDegreeOfParallelism = 2 };
var sw2 = System.Diagnostics.Stopwatch.StartNew();
Parallel.ForEach(items, options2, item => ProcessItem(item));
sw2.Stop();

// با محدودیت 4
var options4 = new ParallelOptions { MaxDegreeOfParallelism = 4 };
var sw3 = System.Diagnostics.Stopwatch.StartNew();
Parallel.ForEach(items, options4, item => ProcessItem(item));
sw3.Stop();

Console.WriteLine($"بدون محدودیت: {sw1.ElapsedMilliseconds} ms");
Console.WriteLine($"با محدودیت 2: {sw2.ElapsedMilliseconds} ms");
Console.WriteLine($"با محدودیت 4: {sw3.ElapsedMilliseconds} ms");
```

<a id="2449-بهترین-روشها"></a>
#### 2.4.4.9 بهترین روش‌ها

**1. استفاده از Environment.ProcessorCount برای CPU-bound:**

```csharp
// ✅ درست: برای CPU-bound
var options = new ParallelOptions
{
    MaxDegreeOfParallelism = Environment.ProcessorCount
};

Parallel.For(0, 1000, options, i => {
    HeavyCalculation(i); // CPU-bound
});
```

**2. استفاده از تعداد بیشتر برای I/O-bound:**

```csharp
// ✅ درست: برای I/O-bound
var options = new ParallelOptions
{
    MaxDegreeOfParallelism = Environment.ProcessorCount * 2
};

Parallel.ForEach(urls, options, url => {
    DownloadFile(url); // I/O-bound
});
```

**3. همیشه CancellationToken را پاس دهید:**

```csharp
// ✅ درست: با CancellationToken
var options = new ParallelOptions
{
    MaxDegreeOfParallelism = 4,
    CancellationToken = cancellationToken
};

Parallel.For(0, 1000, options, i => {
    options.CancellationToken.ThrowIfCancellationRequested();
    ProcessItem(i);
});
```

**4. محدود کردن برای منابع محدود:**

```csharp
// ✅ درست: محدود کردن برای منابع محدود
var options = new ParallelOptions
{
    MaxDegreeOfParallelism = maxConnections // محدود به تعداد connection
};

Parallel.ForEach(items, options, item => {
    UseResource(item);
});
```

**5. اجتناب از TaskScheduler.FromCurrentSynchronizationContext در Parallel:**

```csharp
// ❌ نادرست: می‌تواند UI را فریز کند
var options = new ParallelOptions
{
    TaskScheduler = TaskScheduler.FromCurrentSynchronizationContext()
};

// ✅ بهتر: استفاده از async/await برای UI
await Task.Run(() => {
    Parallel.For(0, 100, i => ProcessItem(i));
});
```

<a id="24410-نکات-مهم"></a>
#### 2.4.4.10 نکات مهم

**1. MaxDegreeOfParallelism = -1 (پیش‌فرض):**

```csharp
// پیش‌فرض: استفاده از همه منابع موجود
var options = new ParallelOptions
{
    MaxDegreeOfParallelism = -1 // پیش‌فرض
};
```

**2. MaxDegreeOfParallelism = 1:**

```csharp
// برای debugging یا testing
var options = new ParallelOptions
{
    MaxDegreeOfParallelism = 1 // غیر موازی
};
```

**3. بررسی CancellationToken در داخل حلقه:**

```csharp
var options = new ParallelOptions
{
    CancellationToken = cancellationToken
};

Parallel.For(0, 1000, options, i => {
    // بررسی دوره‌ای
    if (i % 100 == 0)
    {
        options.CancellationToken.ThrowIfCancellationRequested();
    }
    ProcessItem(i);
});
```

**4. استفاده مجدد از ParallelOptions:**

```csharp
// می‌توانید یک ParallelOptions را چند بار استفاده کنید
var options = new ParallelOptions
{
    MaxDegreeOfParallelism = 4
};

Parallel.For(0, 100, options, i => ProcessItem1(i));
Parallel.ForEach(items, options, item => ProcessItem2(item));
```

#### خلاصه

- **ParallelOptions:** کنترل دقیق روی حلقه‌های موازی(Parallel Loops)
- **MaxDegreeOfParallelism:** محدود کردن تعداد نخ‌های همزمان(Concurrent)
- **CancellationToken:** برای لغو حلقه
- **TaskScheduler:** برای کنترل نحوه اجرا (معمولاً Default)
- **CPU-bound:** MaxDegreeOfParallelism = ProcessorCount
- **I/O-bound:** MaxDegreeOfParallelism = ProcessorCount * 2
- **بهترین روش:** استفاده از CancellationToken، محدود کردن برای منابع محدود

