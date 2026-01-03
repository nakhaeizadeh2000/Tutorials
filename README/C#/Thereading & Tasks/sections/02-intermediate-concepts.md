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
- [2.1.3 کلاس Interlocked برای عملیات اتمی](#213-کلاس-interlocked-برای-عملیات-اتمی)
- [2.1.4 ReaderWriterLockSlim برای قفل خواندن-نوشتن](#214-readerwriterlockslim-برای-قفل-خواندن-نوشتن)

### بخش 2: مدیریت نخ‌ها (Managing Threads)
- [2.2.1 استخر نخ (Thread Pool) با ThreadPool و Task Parallel Library (TPL)](#221-استخر-نخ-thread-pool-با-threadpool-و-task-parallel-library-tpl)
- [2.2.2 استفاده از ThreadPool.QueueUserWorkItem()](#222-استفاده-از-threadpoolqueueuserworkitem)
- [2.2.3 تفاوت‌های بین Thread و ThreadPool](#223-تفاوتهای-بین-thread-و-threadpool)
- [2.2.4 مدیریت دستی اولویت‌های نخ](#224-مدیریت-دستی-اولویتها-نخ)
- [2.2.5 CancellationToken و لغو همکارانه (Cooperative Cancellation)](#225-cancellationtoken-و-لغو-همکارانه-cooperative-cancellation)

### بخش 3: برنامه‌نویسی ناهمزمان (Asynchronous Programming)
- [2.3.1 الگوهای ناهمزمان با Task، async و await](#231-الگوهای-ناهمزمان-با-task-async-و-await)
- [2.3.2 ConfigureAwait(false) برای جلوگیری از قفل مرگ در برنامه‌های UI](#232-configureawaitfalse-برای-جلوگیری-از-قفل-مرگ-در-برنامههای-ui)
- [2.3.3 Task.Delay() در مقابل Thread.Sleep()](#233-taskdelay-در-مقابل-threadsleep)
- [2.3.4 مدیریت استثناها در متدهای ناهمزمان](#234-مدیریت-استثناها-در-متدهای-ناهمزمان)
- [2.3.5 تکمیل و ادامه تسک با ContinueWith()](#235-تکمیل-و-ادامه-تسک-با-continuewith)
- [2.3.6 استفاده از TaskCompletionSource برای سناریوهای تکمیل تسک سفارشی](#236-استفاده-از-taskcompletionsource-برای-سناریوهای-تکمیل-تسک-سفارشی)

### بخش 4: برنامه‌نویسی موازی (Parallel Programming)
- [2.4.1 مقدمه‌ای بر برنامه‌نویسی موازی در C#](#241-مقدمهای-بر-برنامهنویسی-موازی-در-c)
- [2.4.2 حلقه‌های موازی: Parallel.For() و Parallel.ForEach()](#242-حلقههای-موازی-parallelfor-و-parallelforeach)
- [2.4.3 مدیریت استثناها در حلقه‌های موازی](#243-مدیریت-استثناها-در-حلقههای-موازی)
- [2.4.4 محدود کردن موازی‌سازی با ParallelOptions](#244-محدود-کردن-موازیسازی-با-paralleloptions)

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

