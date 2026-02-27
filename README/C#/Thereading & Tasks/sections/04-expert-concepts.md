# 4. مفاهیم متخصص (تبدیل شدن به توسعه‌دهنده ارشد/متخصص)

## فهرست مطالب

### بخش 1: تکنیک‌های پیشرفته همگام‌سازی (Advanced Synchronization Techniques)
- [4.1.1 پیاده‌سازی اولیه‌های همگام‌سازی سفارشی با Monitor، Semaphore، Mutex](#411-پیادهسازی-اولیههای-همگامسازی-سفارشی-با-monitor-semaphore-mutex)
  - [چرا اولیه‌های سفارشی؟](#4111-چرا-اولیههای-سفارشی)
  - [پیاده‌سازی با Monitor](#4112-پیادهسازی-با-monitor)
  - [پیاده‌سازی با Semaphore](#4113-پیادهسازی-با-semaphore)
  - [پیاده‌سازی با Mutex](#4114-پیادهسازی-با-mutex)
  - [مثال پیشرفته: اولیه همگام‌سازی سفارشی](#4115-مثال-پیشرفته-اولیه-همگامسازی-سفارشی)
  - [بهترین روش‌ها](#4116-بهترین-روشها)
- [4.1.2 پیاده‌سازی ساختارهای داده و الگوریتم‌های بدون قفل](#412-پیادهسازی-ساختارهای-داده-و-الگوریتمهای-بدون-قفل)
  - [مفهوم ساختارهای بدون قفل](#4121-مفهوم-ساختارهای-بدون-قفل)
  - [اصول طراحی](#4122-اصول-طراحی)
  - [پیاده‌سازی صف بدون قفل](#4123-پیادهسازی-صف-بدون-قفل)
  - [پیاده‌سازی پشته بدون قفل](#4124-پیادهسازی-پشته-بدون-قفل)
  - [پیاده‌سازی شمارنده بدون قفل](#4125-پیادهسازی-شمارنده-بدون-قفل)
  - [مثال پیشرفته: دیکشنری بدون قفل](#4126-مثال-پیشرفته-دیکشنری-بدون-قفل)
  - [چالش‌ها و محدودیت‌ها](#4127-چالشها-و-محدودیتها)
  - [بهترین روش‌ها](#4128-بهترین-روشها)
- [4.1.3 استفاده از SpinLock، SpinWait و Interlocked.CompareExchange()](#413-استفاده-از-spinlock-spinwait-و-interlockedcompareexchange)
  - [درک SpinLock](#4131-درک-spinlock)
  - [درک SpinWait](#4132-درک-spinwait)
  - [استفاده از Interlocked.CompareExchange()](#4133-استفاده-از-interlockedcompareexchange)
  - [ترکیب ابزارها](#4134-ترکیب-ابزارها)
  - [مقایسه عملکرد](#4135-مقایسه-عملکرد)
  - [بهترین روش‌ها](#4136-بهترین-روشها)

### بخش 2: برنامه‌نویسی موازی پیشرفته (Advanced Parallel Programming)
- [4.2.1 موازی‌سازی تسک و موازی‌سازی داده](#421-موازیسازی-تسک-و-موازیسازی-داده)
  - [موازی‌سازی تسک](#4211-موازیسازی-تسک-task-parallelism)
  - [موازی‌سازی داده](#4212-موازیسازی-داده-data-parallelism)
  - [تفاوت‌های کلیدی](#4213-تفاوت-های-کلیدی)
  - [مثال کاربردی: ترکیب هر دو](#4214-مثال-کاربردی-ترکیب)
- [4.2.2 استفاده از Parallel LINQ (PLINQ) برای موازی‌سازی داده](#422-استفاده-از-parallel-linq-plinq-برای-موازیسازی-داده)
  - [مفهوم PLINQ](#4221-مفهوم-plinq)
  - [عملیات پیشرفته](#4222-عملیات-پیشرفته)
  - [تنظیم درجه موازی‌سازی](#4223-تنظیم-درجه-موازیسازی)
  - [مدیریت استثنا](#4224-مدیریت-استثنا)
  - [مثال کاربردی: پردازش فایل](#4225-مثال-کاربردی-پردازش-فایل)
- [4.2.3 تعادل بار در الگوریتم‌های موازی](#423-تعادل-بار-در-الگوریتمهای-موازی)
  - [مفهوم تعادل بار](#4231-مفهوم-تعادل-بار)
  - [تقسیم کار یکنواخت](#4232-تقسیم-کار-یکنواخت)
  - [استفاده از Partitioner](#4233-استفاده-از-partitioner)
  - [مثال کاربردی: پردازش نامتوازن](#4234-مثال-کاربردی-پردازش-نامتوازن)
- [4.2.4 موازی‌سازی تسک در مقابل موازی‌سازی داده: معاوضه‌ها و بهترین روش‌ها](#424-موازیسازی-تسک-در-مقابل-موازیسازی-داده-معاوضهها-و-بهترین-روشها)
  - [مقایسه تفصیلی](#4241-مقایسه-تفصیلی)
  - [زمان استفاده از موازی‌سازی تسک](#4242-زمان-استفاده-از-موازیسازی-تسک)
  - [زمان استفاده از موازی‌سازی داده](#4243-زمان-استفاده-از-موازیسازی-داده)
  - [بهترین روش‌ها](#4244-بهترین-روشها)
- [4.2.5 استفاده از Task.WhenAny() و Task.WhenAll() با مدیریت استثنا](#425-استفاده-از-taskwhenany-و-taskwhenall-با-مدیریت-استثنا)
  - [مدیریت استثنا در Task.WhenAll()](#4251-مدیریت-استثنا-در-taskwhenall)
  - [مدیریت استثنا در Task.WhenAny()](#4252-مدیریت-استثنا-در-taskwhenany)
  - [مثال پیشرفته: Fallback با مدیریت استثنا](#4253-مثال-پیشرفته-fallback)
  - [مدیریت استثنا در حلقه موازی](#4254-مدیریت-استثنا-در-حلقه-موازی)
  - [بهترین روش‌ها](#4255-بهترین-روشها)

### بخش 3: مدیریت حافظه در برنامه‌های چندنخی (Memory Management in Multi-Threaded Applications)
- [4.3.1 خطاهای سازگاری حافظه](#431-خطاهای-سازگاری-حافظه)
  - [مفهوم سازگاری حافظه](#4311-مفهوم-سازگاری-حافظه)
  - [مثال خطای سازگاری](#4312-مثال-خطای-سازگاری)
  - [راه‌حل با موانع حافظه](#4313-راه-حل-با-موانع-حافظه)
  - [راه‌حل با volatile](#4314-راه-حل-با-volatile)
- [4.3.2 موانع حافظه و اهمیت آن‌ها در مدل‌های نخ‌بندی](#432-موانع-حافظه-و-اهمیت-آنها-در-مدلهای-نخبندی)
  - [انواع موانع حافظه](#4321-انواع-موانع-حافظه)
  - [اهمیت در مدل‌های نخ‌بندی](#4322-اهمیت-در-مدلهای-نخبندی)
  - [استفاده در ساختارهای بدون قفل](#4323-استفاده-در-ساختارهای-بدون-قفل)
- [4.3.3 کلمه کلیدی volatile برای دیداری متغیر](#433-کلمه-کلیدی-volatile-برای-دیداری-متغیر)
  - [مفهوم volatile](#4331-مفهوم-volatile)
  - [تفاوت با متغیر عادی](#4332-تفاوت-با-متغیر-عادی)
  - [محدودیت‌های volatile](#4333-محدودیتهای-volatile)
  - [مثال کاربردی: Flag برای توقف](#4334-مثال-کاربردی-flag-برای-توقف)
- [4.3.4 استفاده از GC.Collect() و GC.KeepAlive() برای مدیریت پیشرفته جمع‌آوری زباله](#434-استفاده-از-gccollect-و-gckeepalive-برای-مدیریت-پیشرفته-جمعآوری-زباله)
  - [استفاده از GC.Collect()](#4341-استفاده-از-gccollect)
  - [استفاده از GC.KeepAlive()](#4342-استفاده-از-gckeepalive)
  - [مثال پیشرفته: مدیریت منابع بومی](#4343-مثال-پیشرفته-مدیریت-منابع-بومی)
  - [بهترین روش‌ها](#4344-بهترین-روشها)
- [4.3.5 نظارت و پروفایلینگ عملکرد با استفاده از ابزارها](#435-نظارت-و-پروفایلینگ-عملکرد-با-استفاده-از-ابزارها)
  - [ابزارهای پروفایلینگ](#4351-ابزارهای-پروفایلینگ)
  - [نظارت بر نخ‌ها](#4352-نظارت-بر-نخها)
  - [نظارت بر حافظه](#4353-نظارت-بر-حافظه)
  - [مثال کاربردی: پروفایلینگ کامل](#4354-مثال-کاربردی-پروفایلینگ-کامل)
  - [بهترین روش‌ها](#4355-بهترین-روشها)

### بخش 4: برنامه‌نویسی واکنش‌گرا (Reactive Programming - Rx.NET)
- [4.4.1 مقدمه‌ای بر Reactive Extensions (Rx) برای C#](#441-مقدمهای-بر-reactive-extensions-rx-برای-c)
- [4.4.2 ایجاد و مدیریت جریان‌های داده ناهمزمان](#442-ایجاد-و-مدیریت-جریانهای-داده-ناهمزمان)
- [4.4.3 استفاده از الگوهای Observable، Subject و Observer در برنامه‌های چندنخی](#443-استفاده-از-الگوهای-observable-subject-و-observer-در-برنامههای-چندنخی)
- [4.4.4 مدیریت Backpressure در Reactive Streams](#444-مدیریت-backpressure-در-reactive-streams)
- [4.4.5 ترکیب Rx.NET با الگوهای async/await](#445-ترکیب-rxnet-با-الگوهای-asyncawait)

### بخش 5: موازی‌سازی پیشرفته با Task.Run() و Parallel.For
- [4.5.1 تسلط بر بارهای کاری همزمان با استفاده از چندین نخ](#451-تسلط-بر-بارهای-کاری-همزمان-با-استفاده-از-چندین-نخ)
- [4.5.2 الگوهای ایجاد تسک: Task.WhenAny()، Task.WhenAll()](#452-الگوهای-ایجاد-تسک-taskwhenany-taskwhenall)
- [4.5.3 مدیریت لغو در تسک‌های بسیار همزمان](#453-مدیریت-لغو-در-تسکهای-بسیار-همزمان)
- [4.5.4 مدیریت خطا در سیستم‌های همزمان با استفاده از Task.WhenAny() و Task.WhenAll()](#454-مدیریت-خطا-در-سیستمهای-همزمان-با-استفاده-از-taskwhenany-و-taskwhenall)
- [4.5.5 پیاده‌سازی مدیریت خطا و لاگینگ در تسک‌های همزمان](#455-پیادهسازی-مدیریت-خطا-و-لاگینگ-در-تسکهای-همزمان)

### بخش 6: سیستم‌های توزیع‌شده و همزمانی (Distributed Systems & Concurrency)
- [4.6.1 درک همگام‌سازی نخ/تسک چندگره‌ای](#461-درک-همگامسازی-نختسک-چندگره-ای)
- [4.6.2 مدل‌های سازگاری در سیستم‌های توزیع‌شده (مثلاً قضیه CAP)](#462-مدلهای-سازگاری-در-سیستمهای-توزیعشده-مثلاً-قضیه-cap)
- [4.6.3 الگوهای پیشرفته در زمان‌بندی تسک توزیع‌شده (مثلاً MapReduce، Actor Model)](#463-الگوهای-پیشرفته-در-زمانبندی-تسک-توزیعشده-مثلاً-mapreduce-actor-model)

---

<a id="41-تکنیکهای-پیشرفته-همگامسازی"></a>
## 4.1 تکنیک‌های پیشرفته همگام‌سازی (Advanced Synchronization Techniques)

در سطح متخصص، باید بتوانید اولیه‌های همگام‌سازی(Synchronization Primitives) سفارشی خود را طراحی و پیاده‌سازی کنید. این مهارت برای حل مسائل پیچیده همزمانی(Concurrency) و بهینه‌سازی عملکرد(Performance) ضروری است.

<a id="411-پیادهسازی-اولیههای-همگامسازی-سفارشی-با-monitor-semaphore-mutex"></a>
### 4.1.1 پیاده‌سازی اولیه‌های همگام‌سازی سفارشی با Monitor، Semaphore، Mutex

گاهی اوقات اولیه‌های همگام‌سازی(Synchronization Primitives) موجود در .NET برای نیازهای خاص شما کافی نیستند. در این موارد، باید اولیه‌های سفارشی خود را با استفاده از `Monitor`، `Semaphore` و `Mutex` پیاده‌سازی کنید.

<a id="4111-چرا-اولیههای-سفارشی"></a>
#### 4.1.1.1 چرا اولیه‌های همگام‌سازی(Synchronization Primitives) سفارشی؟

**محدودیت‌های اولیه‌های استاندارد:**

- ممکن است برای نیازهای خاص شما بهینه نباشند
- ممکن است عملکرد(Performance) مورد نیاز را ارائه ندهند
- ممکن است ویژگی‌های خاص مورد نیاز شما را نداشته باشند

**مزایای اولیه‌های سفارشی:**

- کنترل کامل بر رفتار همگام‌سازی(Synchronization)
- بهینه‌سازی برای سناریوهای خاص
- افزودن ویژگی‌های سفارشی

<a id="4112-پیادهسازی-با-monitor"></a>
#### 4.1.1.2 پیاده‌سازی با Monitor

**مثال: قفل خواندن-نوشتن سفارشی:**

```csharp
public class CustomReadWriteLock
{
    private readonly object _readLock = new object();
    private readonly object _writeLock = new object();
    private int _readers = 0;
    private bool _isWriting = false;

    public void EnterReadLock()
    {
        lock (_readLock)
        {
            while (_isWriting)
            {
                Monitor.Wait(_readLock);
            }
            _readers++;
        }
    }

    public void ExitReadLock()
    {
        lock (_readLock)
        {
            _readers--;
            if (_readers == 0)
            {
                Monitor.PulseAll(_readLock);
            }
        }
    }

    public void EnterWriteLock()
    {
        lock (_writeLock)
        {
            lock (_readLock)
            {
                while (_readers > 0 || _isWriting)
                {
                    Monitor.Wait(_readLock);
                }
                _isWriting = true;
            }
        }
    }

    public void ExitWriteLock()
    {
        lock (_readLock)
        {
            _isWriting = false;
            Monitor.PulseAll(_readLock);
        }
    }
}
```

**مثال: صف همزمان(Concurrent Queue) با اولویت:**

```csharp
public class PriorityConcurrentQueue<T>
{
    private readonly SortedDictionary<int, Queue<T>> _queues = new();
    private readonly object _lock = new object();

    public void Enqueue(T item, int priority)
    {
        lock (_lock)
        {
            if (!_queues.ContainsKey(priority))
            {
                _queues[priority] = new Queue<T>();
            }
            _queues[priority].Enqueue(item);
            Monitor.Pulse(_lock);
        }
    }

    public bool TryDequeue(out T item)
    {
        lock (_lock)
        {
            while (_queues.Count == 0)
            {
                Monitor.Wait(_lock);
            }

            var highestPriority = _queues.Keys.Max();
            var queue = _queues[highestPriority];
            
            item = queue.Dequeue();
            
            if (queue.Count == 0)
            {
                _queues.Remove(highestPriority);
            }
            
            return true;
        }
    }
}
```

<a id="4113-پیادهسازی-با-semaphore"></a>
#### 4.1.1.3 پیاده‌سازی با Semaphore

**مثال: Rate Limiter سفارشی:**

```csharp
public class RateLimiter
{
    private readonly SemaphoreSlim _semaphore;
    private readonly Timer _timer;

    public RateLimiter(int maxRequests, TimeSpan timeWindow)
    {
        _semaphore = new SemaphoreSlim(maxRequests, maxRequests);
        
        _timer = new Timer(_ =>
        {
            // آزاد کردن همه مجوزها در هر بازه زمانی
            int currentCount = maxRequests - _semaphore.CurrentCount;
            if (currentCount > 0)
            {
                _semaphore.Release(currentCount);
            }
        }, null, timeWindow, timeWindow);
    }

    public async Task<bool> TryAcquireAsync(TimeSpan timeout)
    {
        return await _semaphore.WaitAsync(timeout);
    }

    public void Release()
    {
        _semaphore.Release();
    }

    public void Dispose()
    {
        _timer?.Dispose();
        _semaphore?.Dispose();
    }
}
```

**مثال: Connection Pool سفارشی:**

```csharp
public class CustomConnectionPool<T>
{
    private readonly SemaphoreSlim _semaphore;
    private readonly ConcurrentQueue<T> _pool = new();
    private readonly Func<T> _factory;
    private readonly int _maxSize;

    public CustomConnectionPool(int maxSize, Func<T> factory)
    {
        _maxSize = maxSize;
        _factory = factory;
        _semaphore = new SemaphoreSlim(maxSize, maxSize);
        
        // پیش‌ساخت اتصالات
        for (int i = 0; i < maxSize; i++)
        {
            _pool.Enqueue(factory());
        }
    }

    public async Task<T> AcquireAsync(CancellationToken cancellationToken = default)
    {
        await _semaphore.WaitAsync(cancellationToken);
        
        if (_pool.TryDequeue(out T connection))
        {
            return connection;
        }
        
        return _factory();
    }

    public void Release(T connection)
    {
        if (_pool.Count < _maxSize)
        {
            _pool.Enqueue(connection);
        }
        
        _semaphore.Release();
    }
}
```

<a id="4114-پیادهسازی-با-mutex"></a>
#### 4.1.1.4 پیاده‌سازی با Mutex

**مثال: Single Instance Application:**

```csharp
public class SingleInstanceApplication
{
    private static Mutex _mutex;
    private const string MutexName = "MyApplication-SingleInstance";

    public static bool IsFirstInstance()
    {
        bool createdNew;
        _mutex = new Mutex(true, MutexName, out createdNew);
        return createdNew;
    }

    public static void Release()
    {
        _mutex?.ReleaseMutex();
        _mutex?.Dispose();
    }
}

// استفاده
if (SingleInstanceApplication.IsFirstInstance())
{
    // اولین نمونه برنامه
    Application.Run(new MainForm());
    SingleInstanceApplication.Release();
}
else
{
    // نمونه دیگری در حال اجرا است
    MessageBox.Show("برنامه در حال اجرا است!");
}
```

**مثال: File Lock Manager:**

```csharp
public class FileLockManager
{
    private readonly Dictionary<string, Mutex> _locks = new();
    private readonly object _lock = new object();

    public bool TryLockFile(string filePath, TimeSpan timeout)
    {
        string mutexName = $"FileLock-{filePath.GetHashCode()}";
        
        lock (_lock)
        {
            if (_locks.ContainsKey(filePath))
            {
                return false;
            }

            Mutex mutex = new Mutex(false, mutexName);
            bool acquired = mutex.WaitOne(timeout);
            
            if (acquired)
            {
                _locks[filePath] = mutex;
                return true;
            }
            
            mutex.Dispose();
            return false;
        }
    }

    public void UnlockFile(string filePath)
    {
        lock (_lock)
        {
            if (_locks.TryGetValue(filePath, out Mutex mutex))
            {
                mutex.ReleaseMutex();
                mutex.Dispose();
                _locks.Remove(filePath);
            }
        }
    }
}
```

<a id="4115-مثال-پیشرفته-اولیه-همگامسازی-سفارشی"></a>
#### 4.1.1.5 مثال پیشرفته: اولیه همگام‌سازی(Synchronization Primitive) سفارشی

**مثال: Barrier با قابلیت لغو:**

```csharp
public class CancellableBarrier
{
    private readonly int _participantCount;
    private int _currentCount;
    private readonly object _lock = new object();
    private readonly CancellationTokenSource _cts = new();

    public CancellableBarrier(int participantCount)
    {
        _participantCount = participantCount;
        _currentCount = participantCount;
    }

    public bool SignalAndWait(CancellationToken cancellationToken = default)
    {
        using (var linkedCts = CancellationTokenSource.CreateLinkedTokenSource(
            _cts.Token, cancellationToken))
        {
            lock (_lock)
            {
                if (_cts.Token.IsCancellationRequested)
                {
                    return false;
                }

                _currentCount--;

                if (_currentCount == 0)
                {
                    _currentCount = _participantCount;
                    Monitor.PulseAll(_lock);
                    return true;
                }

                while (_currentCount > 0 && !linkedCts.Token.IsCancellationRequested)
                {
                    Monitor.Wait(_lock, 100);
                }

                return !linkedCts.Token.IsCancellationRequested;
            }
        }
    }

    public void Cancel()
    {
        _cts.Cancel();
        lock (_lock)
        {
            Monitor.PulseAll(_lock);
        }
    }

    public void Dispose()
    {
        _cts?.Dispose();
    }
}
```

<a id="4116-بهترین-روشها"></a>
#### 4.1.1.6 بهترین روش‌ها

**1. همیشه از try-finally استفاده کنید:**

```csharp
// ✅ درست
Monitor.Enter(lockObject);
try
{
    // کار
}
finally
{
    Monitor.Exit(lockObject);
}
```

**2. از timeout استفاده کنید:**

```csharp
// ✅ درست
if (Monitor.TryEnter(lockObject, TimeSpan.FromSeconds(5)))
{
    try
    {
        // کار
    }
    finally
    {
        Monitor.Exit(lockObject);
    }
}
```

**3. از IDisposable برای مدیریت منابع استفاده کنید:**

```csharp
// ✅ درست
public class CustomLock : IDisposable
{
    private readonly object _lock = new object();
    private bool _isLocked = false;

    public void Enter()
    {
        Monitor.Enter(_lock);
        _isLocked = true;
    }

    public void Dispose()
    {
        if (_isLocked)
        {
            Monitor.Exit(_lock);
            _isLocked = false;
        }
    }
}

// استفاده
using (var customLock = new CustomLock())
{
    customLock.Enter();
    // کار
}
```

**4. از CancellationToken برای لغو استفاده کنید:**

```csharp
// ✅ درست
public async Task<bool> TryAcquireAsync(
    SemaphoreSlim semaphore,
    CancellationToken cancellationToken)
{
    try
    {
        await semaphore.WaitAsync(cancellationToken);
        return true;
    }
    catch (OperationCanceledException)
    {
        return false;
    }
}
```

#### خلاصه

- **اولیه‌های سفارشی:** برای نیازهای خاص و بهینه‌سازی عملکرد(Performance)
- **Monitor:** برای پیاده‌سازی قفل‌های پیچیده و هماهنگی نخ‌ها
- **Semaphore:** برای کنترل دسترسی و محدود کردن منابع
- **Mutex:** برای همگام‌سازی بین فرآیندی(Inter-Process Synchronization)
- **بهترین روش‌ها:** استفاده از try-finally، timeout، IDisposable، و CancellationToken

<a id="412-پیادهسازی-ساختارهای-داده-و-الگوریتمهای-بدون-قفل"></a>
### 4.1.2 پیاده‌سازی ساختارهای داده و الگوریتم‌های بدون قفل

ساختارهای داده و الگوریتم‌های بدون قفل(Lock-Free) از عملیات اتمی(Atomic Operations) برای دسترسی همزمان(Concurrent) به داده‌ها استفاده می‌کنند. این رویکرد می‌تواند عملکرد(Performance) بهتری نسبت به قفل‌های سنتی ارائه دهد.

<a id="4121-مفهوم-ساختارهای-بدون-قفل"></a>
#### 4.1.2.1 مفهوم ساختارهای بدون قفل(Lock-Free)

**تعریف:**

ساختار داده یا الگوریتم بدون قفل(Lock-Free) ساختاری است که حداقل یک نخ می‌تواند در هر زمان پیشرفت کند، حتی اگر سایر نخ‌ها مسدود شوند.

**ویژگی‌های کلیدی:**

- عدم استفاده از قفل‌های مسدودکننده(Blocking Locks)
- استفاده از عملیات اتمی(Atomic Operations)
- مقاوم در برابر قفل مرگ(Deadlock)
- عملکرد(Performance) بهتر در رقابت(Contention) بالا

<a id="4122-اصول-طراحی"></a>
#### 4.1.2.2 اصول طراحی

**1. استفاده از Compare-And-Swap (CAS):**

```csharp
// الگوی پایه CAS
int currentValue;
int newValue;
do
{
    currentValue = _value;
    newValue = currentValue + 1;
} while (Interlocked.CompareExchange(ref _value, newValue, currentValue) != currentValue);
```

**2. Memory Ordering:**

```csharp
// استفاده از Memory Barrier
Thread.MemoryBarrier(); // اطمینان از خواندن/نوشتن قبل از این نقطه
```

**3. ABA Problem:**

مشکل ABA زمانی رخ می‌دهد که یک مقدار از A به B و سپس به A تغییر کند، اما شما فکر می‌کنید که تغییر نکرده است.

```csharp
// راه حل: استفاده از Version Number
public class LockFreeStack<T>
{
    private class Node
    {
        public T Value;
        public Node Next;
        public int Version; // برای جلوگیری از ABA Problem
    }
}
```

<a id="4123-پیادهسازی-صف-بدون-قفل"></a>
#### 4.1.2.3 پیاده‌سازی صف بدون قفل(Lock-Free Queue)

```csharp
public class LockFreeQueue<T>
{
    private class Node
    {
        public T Value;
        public volatile Node Next;
    }

    private volatile Node _head;
    private volatile Node _tail;

    public LockFreeQueue()
    {
        var dummy = new Node();
        _head = dummy;
        _tail = dummy;
    }

    public void Enqueue(T item)
    {
        var newNode = new Node { Value = item };

        while (true)
        {
            var tail = _tail;
            var next = tail.Next;

            if (tail == _tail) // بررسی اینکه tail تغییر نکرده
            {
                if (next == null)
                {
                    // تلاش برای اضافه کردن newNode
                    if (Interlocked.CompareExchange(ref tail.Next, newNode, null) == null)
                    {
                        // به‌روزرسانی tail
                        Interlocked.CompareExchange(ref _tail, newNode, tail);
                        return;
                    }
                }
                else
                {
                    // کمک به نخ دیگر
                    Interlocked.CompareExchange(ref _tail, next, tail);
                }
            }
        }
    }

    public bool TryDequeue(out T result)
    {
        while (true)
        {
            var head = _head;
            var tail = _tail;
            var next = head.Next;

            if (head == _head) // بررسی اینکه head تغییر نکرده
            {
                if (head == tail)
                {
                    if (next == null)
                    {
                        result = default(T);
                        return false; // صف خالی است
                    }
                    // کمک به نخ دیگر
                    Interlocked.CompareExchange(ref _tail, next, tail);
                }
                else
                {
                    if (next == null)
                    {
                        continue;
                    }
                    result = next.Value;
                    if (Interlocked.CompareExchange(ref _head, next, head) == head)
                    {
                        return true;
                    }
                }
            }
        }
    }
}
```

<a id="4124-پیادهسازی-پشته-بدون-قفل"></a>
#### 4.1.2.4 پیاده‌سازی پشته بدون قفل(Lock-Free Stack)

```csharp
public class LockFreeStack<T>
{
    private class Node
    {
        public T Value;
        public Node Next;
    }

    private volatile Node _head;

    public void Push(T item)
    {
        var newNode = new Node { Value = item };
        Node oldHead;
        do
        {
            oldHead = _head;
            newNode.Next = oldHead;
        } while (Interlocked.CompareExchange(ref _head, newNode, oldHead) != oldHead);
    }

    public bool TryPop(out T result)
    {
        Node oldHead;
        do
        {
            oldHead = _head;
            if (oldHead == null)
            {
                result = default(T);
                return false;
            }
        } while (Interlocked.CompareExchange(ref _head, oldHead.Next, oldHead) != oldHead);

        result = oldHead.Value;
        return true;
    }
}
```

<a id="4125-پیادهسازی-شمارنده-بدون-قفل"></a>
#### 4.1.2.5 پیاده‌سازی شمارنده بدون قفل(Lock-Free Counter)

```csharp
public class LockFreeCounter
{
    private int _value = 0;

    public int Increment()
    {
        return Interlocked.Increment(ref _value);
    }

    public int Decrement()
    {
        return Interlocked.Decrement(ref _value);
    }

    public int Add(int amount)
    {
        return Interlocked.Add(ref _value, amount);
    }

    public int Read()
    {
        return Interlocked.Read(ref _value);
    }

    public int Exchange(int newValue)
    {
        return Interlocked.Exchange(ref _value, newValue);
    }

    public bool CompareAndSet(int expected, int newValue)
    {
        return Interlocked.CompareExchange(ref _value, newValue, expected) == expected;
    }
}
```

<a id="4126-مثال-پیشرفته-دیکشنری-بدون-قفل"></a>
#### 4.1.2.6 مثال پیشرفته: دیکشنری بدون قفل(Lock-Free Dictionary)

```csharp
public class LockFreeDictionary<TKey, TValue>
{
    private class Node
    {
        public TKey Key;
        public TValue Value;
        public volatile Node Next;
    }

    private readonly Node[] _buckets;
    private readonly int _bucketCount;

    public LockFreeDictionary(int bucketCount = 16)
    {
        _bucketCount = bucketCount;
        _buckets = new Node[bucketCount];
        for (int i = 0; i < bucketCount; i++)
        {
            _buckets[i] = new Node(); // Dummy node
        }
    }

    private int GetBucketIndex(TKey key)
    {
        return Math.Abs(key.GetHashCode() % _bucketCount);
    }

    public bool TryAdd(TKey key, TValue value)
    {
        int bucketIndex = GetBucketIndex(key);
        var newNode = new Node { Key = key, Value = value };
        var head = _buckets[bucketIndex];

        while (true)
        {
            var current = head;
            while (current.Next != null)
            {
                if (current.Next.Key.Equals(key))
                {
                    return false; // کلید موجود است
                }
                current = current.Next;
            }

            if (Interlocked.CompareExchange(ref current.Next, newNode, null) == null)
            {
                return true;
            }
        }
    }

    public bool TryGetValue(TKey key, out TValue value)
    {
        int bucketIndex = GetBucketIndex(key);
        var current = _buckets[bucketIndex].Next;

        while (current != null)
        {
            if (current.Key.Equals(key))
            {
                value = current.Value;
                return true;
            }
            current = current.Next;
        }

        value = default(TValue);
        return false;
    }
}
```

<a id="4127-چالشها-و-محدودیتها"></a>
#### 4.1.2.7 چالش‌ها و محدودیت‌ها

**1. پیچیدگی پیاده‌سازی:**

- پیاده‌سازی بدون قفل(Lock-Free) بسیار پیچیده‌تر از نسخه‌های با قفل است
- نیاز به درک عمیق از Memory Model
- اشکال‌زدایی(Debugging) دشوارتر است

**2. ABA Problem:**

```csharp
// ❌ مشکل: ABA Problem
var node1 = _head;
// نخ دیگر node1 را حذف و دوباره اضافه می‌کند
var node2 = _head;
// node1 == node2 اما در واقع همان نیست!
```

**3. Memory Reclamation:**

در زبان‌های با Garbage Collection مانند C#، این مشکل کمتر است، اما هنوز باید مراقب باشید.

<a id="4128-بهترین-روشها"></a>
#### 4.1.2.8 بهترین روش‌ها

**1. استفاده از ساختارهای موجود:**

```csharp
// ✅ بهتر: استفاده از ConcurrentQueue
var queue = new ConcurrentQueue<int>();

// ❌ پیچیده: پیاده‌سازی دستی
var queue = new LockFreeQueue<int>();
```

**2. تست دقیق:**

```csharp
// ✅ درست: تست با چندین نخ
Parallel.For(0, 1000, i =>
{
    queue.Enqueue(i);
    queue.TryDequeue(out int value);
});
```

**3. استفاده از Memory Barriers:**

```csharp
// ✅ درست: استفاده از Memory Barrier
Thread.MemoryBarrier();
var value = _sharedValue;
```

<a id="413-استفاده-از-spinlock-spinwait-و-interlockedcompareexchange"></a>
### 4.1.3 استفاده از SpinLock، SpinWait و Interlocked.CompareExchange()

در سطح متخصص، باید با ابزارهای پیشرفته‌تر برای همگام‌سازی(Synchronization) آشنا شوید. عبارت `SpinLock`، `SpinWait` و `Interlocked.CompareExchange()` ابزارهای قدرتمندی هستند که می‌توانند عملکرد(Performance) را بهبود بخشند.

<a id="4131-درک-spinlock"></a>
#### 4.1.3.1 درک SpinLock

عبارت `SpinLock` یک قفل مسدودکننده(Blocking Lock) است که به جای خوابیدن(Sleeping)، در یک حلقه چرخشی(Spinning Loop) منتظر می‌ماند.

**ویژگی‌های کلیدی:**

- مناسب برای انتظارهای کوتاه
- عملکرد(Performance) بهتر از lock برای انتظارهای کوتاه
- مصرف CPU بیشتر برای انتظارهای طولانی

**مثال پایه:**

```csharp
public class SpinLockExample
{
    private SpinLock _spinLock = new SpinLock();

    public void CriticalSection()
    {
        bool lockTaken = false;
        try
        {
            _spinLock.Enter(ref lockTaken);
            // بخش بحرانی(Critical Section)
        }
        finally
        {
            if (lockTaken)
            {
                _spinLock.Exit();
            }
        }
    }
}
```

**مثال پیشرفته: استفاده با timeout:**

```csharp
public class SpinLockWithTimeout
{
    private SpinLock _spinLock = new SpinLock();
    private readonly TimeSpan _timeout = TimeSpan.FromMilliseconds(100);

    public bool TryCriticalSection(Action action)
    {
        bool lockTaken = false;
        var sw = System.Diagnostics.Stopwatch.StartNew();
        
        try
        {
            while (sw.Elapsed < _timeout)
            {
                if (_spinLock.TryEnter(ref lockTaken))
                {
                    try
                    {
                        action();
                        return true;
                    }
                    finally
                    {
                        if (lockTaken)
                        {
                            _spinLock.Exit();
                        }
                    }
                }
                Thread.Sleep(1); // کمی استراحت
            }
            return false;
        }
        finally
        {
            sw.Stop();
        }
    }
}
```

<a id="4132-درک-spinwait"></a>
#### 4.1.3.2 درک SpinWait

عبارت `SpinWait` یک ساختار(Struct) است که برای انتظارهای کوتاه بهینه شده است و به صورت خودکار بین چرخش(Spinning) و تسلیم(Yielding) تعویض می‌کند.

**ویژگی‌های کلیدی:**

- بهینه‌سازی خودکار برای انتظارهای کوتاه و طولانی
- کاهش مصرف CPU
- مناسب برای انتظارهای کوتاه

**مثال پایه:**

```csharp
public class SpinWaitExample
{
    private volatile bool _flag = false;

    public void WaitForFlag()
    {
        var spinWait = new SpinWait();
        while (!_flag)
        {
            spinWait.SpinOnce(); // بهینه‌سازی خودکار
        }
    }

    public void SetFlag()
    {
        _flag = true;
    }
}
```

**مثال پیشرفته: استفاده در ساختار بدون قفل:**

```csharp
public class LockFreeWithSpinWait<T>
{
    private volatile T _value;
    private volatile bool _isSet = false;

    public void Set(T value)
    {
        _value = value;
        Thread.MemoryBarrier();
        _isSet = true;
    }

    public T Get()
    {
        var spinWait = new SpinWait();
        while (!_isSet)
        {
            spinWait.SpinOnce();
        }
        Thread.MemoryBarrier();
        return _value;
    }
}
```

<a id="4133-استفاده-از-interlockedcompareexchange"></a>
#### 4.1.3.3 استفاده از Interlocked.CompareExchange()

عبارت `Interlocked.CompareExchange()` یک عملیات اتمی(Atomic Operation) است که مقدار را فقط در صورت مطابقت با مقدار مورد انتظار تغییر می‌دهد.

**مثال پایه:**

```csharp
public class CompareExchangeExample
{
    private int _value = 0;

    public bool TrySetIfEqual(int expected, int newValue)
    {
        int original = Interlocked.CompareExchange(ref _value, newValue, expected);
        return original == expected;
    }

    public int GetValue()
    {
        return Interlocked.Read(ref _value);
    }
}
```

**مثال پیشرفته: پیاده‌سازی Atomic Reference:**

```csharp
public class AtomicReference<T> where T : class
{
    private volatile T _value;

    public T Value
    {
        get => _value;
        set => Interlocked.Exchange(ref _value, value);
    }

    public bool CompareAndSet(T expected, T newValue)
    {
        return Interlocked.CompareExchange(ref _value, newValue, expected) == expected;
    }

    public T GetAndSet(T newValue)
    {
        return Interlocked.Exchange(ref _value, newValue);
    }
}
```

**مثال پیشرفته: Lock-Free Stack با CompareExchange:**

```csharp
public class LockFreeStackWithCompareExchange<T>
{
    private class Node
    {
        public T Value;
        public Node Next;
    }

    private volatile Node _head;

    public void Push(T item)
    {
        var newNode = new Node { Value = item };
        Node oldHead;
        do
        {
            oldHead = _head;
            newNode.Next = oldHead;
        } while (Interlocked.CompareExchange(ref _head, newNode, oldHead) != oldHead);
    }

    public bool TryPop(out T result)
    {
        Node oldHead;
        do
        {
            oldHead = _head;
            if (oldHead == null)
            {
                result = default(T);
                return false;
            }
        } while (Interlocked.CompareExchange(ref _head, oldHead.Next, oldHead) != oldHead);

        result = oldHead.Value;
        return true;
    }
}
```

<a id="4134-ترکیب-ابزارها"></a>
#### 4.1.3.4 ترکیب ابزارها

**مثال: استفاده ترکیبی از SpinWait و CompareExchange:**

```csharp
public class OptimizedLockFreeCounter
{
    private int _value = 0;

    public int Increment()
    {
        var spinWait = new SpinWait();
        int currentValue;
        int newValue;
        
        do
        {
            currentValue = Interlocked.Read(ref _value);
            newValue = currentValue + 1;
            
            if (Interlocked.CompareExchange(ref _value, newValue, currentValue) != currentValue)
            {
                spinWait.SpinOnce(); // در صورت عدم موفقیت، کمی صبر
            }
        } while (Interlocked.CompareExchange(ref _value, newValue, currentValue) != currentValue);
        
        return newValue;
    }
}
```

<a id="4135-مقایسه-عملکرد"></a>
#### 4.1.3.5 مقایسه عملکرد(Performance)

**مقایسه SpinLock و lock:**

```csharp
public class PerformanceComparison
{
    private readonly object _lock = new object();
    private readonly SpinLock _spinLock = new SpinLock();

    public void TestLock()
    {
        lock (_lock)
        {
            // کار کوتاه
        }
    }

    public void TestSpinLock()
    {
        bool lockTaken = false;
        try
        {
            _spinLock.Enter(ref lockTaken);
            // کار کوتاه
        }
        finally
        {
            if (lockTaken)
            {
                _spinLock.Exit();
            }
        }
    }
}
```

**نکات مهم:**

- برای انتظارهای کوتاه (< 1ms): `SpinLock` بهتر است
- برای انتظارهای طولانی (> 1ms): `lock` بهتر است
- `SpinWait` برای انتظارهای متغیر مناسب است

<a id="4136-بهترین-روشها"></a>
#### 4.1.3.6 بهترین روش‌ها

**1. استفاده از SpinLock برای انتظارهای کوتاه:**

```csharp
// ✅ درست: برای انتظارهای کوتاه
var spinLock = new SpinLock();
bool lockTaken = false;
try
{
    spinLock.Enter(ref lockTaken);
    // کار سریع
}
finally
{
    if (lockTaken) spinLock.Exit();
}
```

**2. استفاده از SpinWait برای انتظارهای متغیر:**

```csharp
// ✅ درست: استفاده از SpinWait
var spinWait = new SpinWait();
while (!condition)
{
    spinWait.SpinOnce();
}
```

**3. استفاده از CompareExchange برای عملیات اتمی:**

```csharp
// ✅ درست: استفاده از CompareExchange
int current;
int newValue;
do
{
    current = _value;
    newValue = CalculateNewValue(current);
} while (Interlocked.CompareExchange(ref _value, newValue, current) != current);
```

**4. اجتناب از SpinLock برای انتظارهای طولانی:**

```csharp
// ❌ نادرست: SpinLock برای انتظارهای طولانی
var spinLock = new SpinLock();
// انتظار برای I/O - استفاده از lock بهتر است

// ✅ بهتر: استفاده از lock
lock (_lock)
{
    await LongRunningOperationAsync();
}
```

#### خلاصه

- **ساختارهای بدون قفل:** استفاده از عملیات اتمی(Atomic Operations) برای دسترسی همزمان(Concurrent)
- **SpinLock:** برای انتظارهای کوتاه و کارهای سریع
- **SpinWait:** برای انتظارهای متغیر با بهینه‌سازی خودکار
- **CompareExchange:** برای عملیات اتمی(Atomic Operations) پیچیده
- **بهترین روش‌ها:** انتخاب ابزار مناسب بر اساس سناریو

<a id="42-برنامهنویسی-موازی-پیشرفته"></a>
## 4.2 برنامه‌نویسی موازی پیشرفته (Advanced Parallel Programming)

در سطح متخصص، باید با تکنیک‌های پیشرفته برنامه‌نویسی موازی(Parallel Programming) آشنا شوید. این شامل درک تفاوت بین موازی‌سازی تسک(Task Parallelism) و موازی‌سازی داده(Data Parallelism)، استفاده از PLINQ، و بهینه‌سازی الگوریتم‌های موازی است.

<a id="421-موازیسازی-تسک-و-موازیسازی-داده"></a>
### 4.2.1 موازی‌سازی تسک و موازی‌سازی داده

دو رویکرد اصلی برای برنامه‌نویسی موازی(Parallel Programming) وجود دارد: موازی‌سازی تسک(Task Parallelism) و موازی‌سازی داده(Data Parallelism). درک تفاوت بین این دو برای انتخاب رویکرد مناسب ضروری است.

<a id="4211-موازیسازی-تسک-task-parallelism"></a>
#### 4.2.1.1 موازی‌سازی تسک(Task Parallelism)

موازی‌سازی تسک(Task Parallelism) به معنای اجرای چندین تسک(Task) مستقل به صورت همزمان(Concurrent) است.

**ویژگی‌های کلیدی:**

- هر تسک(Task) کار متفاوتی انجام می‌دهد
- تسک‌ها(Tasks) مستقل از یکدیگر هستند
- مناسب برای کارهای ناهمگن(Heterogeneous)

**مثال پایه:**

```csharp
public async Task TaskParallelismExample()
{
    var task1 = Task.Run(() => ProcessFile("file1.txt"));
    var task2 = Task.Run(() => ProcessDatabase());
    var task3 = Task.Run(() => ProcessApiCall());

    await Task.WhenAll(task1, task2, task3);
}
```

**مثال پیشرفته: پردازش چندگانه:**

```csharp
public class TaskParallelProcessor
{
    public async Task ProcessMultipleTasksAsync()
    {
        var tasks = new List<Task>
        {
            Task.Run(() => DownloadFileAsync("file1.txt")),
            Task.Run(() => ProcessImageAsync("image.jpg")),
            Task.Run(() => CalculateStatisticsAsync()),
            Task.Run(() => SendNotificationAsync())
        };

        await Task.WhenAll(tasks);
    }
}
```

<a id="4212-موازیسازی-داده-data-parallelism"></a>
#### 4.2.1.2 موازی‌سازی داده(Data Parallelism)

موازی‌سازی داده(Data Parallelism) به معنای تقسیم داده‌ها به بخش‌های کوچکتر و پردازش هر بخش به صورت موازی(Parallel) است.

**ویژگی‌های کلیدی:**

- همان عملیات روی داده‌های مختلف
- داده‌ها به بخش‌های کوچکتر تقسیم می‌شوند
- مناسب برای کارهای همگن(Homogeneous)

**مثال پایه:**

```csharp
public void DataParallelismExample()
{
    var data = Enumerable.Range(0, 1000).ToArray();
    
    Parallel.For(0, data.Length, i =>
    {
        data[i] = ProcessItem(data[i]);
    });
}
```

**مثال پیشرفته: پردازش دسته‌ای:**

```csharp
public class DataParallelProcessor
{
    public void ProcessDataParallel<T>(IEnumerable<T> items, Action<T> processor)
    {
        Parallel.ForEach(items, item =>
        {
            processor(item);
        });
    }

    public void ProcessDataParallelWithOptions<T>(
        IEnumerable<T> items,
        Action<T> processor,
        int maxDegreeOfParallelism)
    {
        var options = new ParallelOptions
        {
            MaxDegreeOfParallelism = maxDegreeOfParallelism
        };

        Parallel.ForEach(items, options, item =>
        {
            processor(item);
        });
    }
}
```

<a id="4213-تفاوت-های-کلیدی"></a>
#### 4.2.1.3 تفاوت‌های کلیدی

**مقایسه:**

| ویژگی | موازی‌سازی تسک(Task Parallelism) | موازی‌سازی داده(Data Parallelism) |
|-------|----------------------------------|-----------------------------------|
| نوع کار | کارهای مختلف | همان کار روی داده‌های مختلف |
| استقلال | تسک‌ها(Tasks) مستقل | عملیات‌ها مشابه |
| استفاده | Task.Run، Task.WhenAll | Parallel.For، Parallel.ForEach |
| مناسب برای | کارهای ناهمگن | کارهای همگن |

<a id="4214-مثال-کاربردی-ترکیب"></a>
#### 4.2.1.4 مثال کاربردی: ترکیب هر دو

```csharp
public class HybridParallelProcessor
{
    public async Task ProcessHybridAsync()
    {
        // موازی‌سازی تسک(Task Parallelism): چند کار مختلف
        var downloadTask = Task.Run(async () =>
        {
            var files = await DownloadFilesAsync();
            // موازی‌سازی داده(Data Parallelism): پردازش فایل‌ها
            Parallel.ForEach(files, file =>
            {
                ProcessFile(file);
            });
        });

        var processTask = Task.Run(async () =>
        {
            var data = await FetchDataAsync();
            // موازی‌سازی داده(Data Parallelism): پردازش داده‌ها
            Parallel.ForEach(data, item =>
            {
                ProcessItem(item);
            });
        });

        await Task.WhenAll(downloadTask, processTask);
    }
}
```

<a id="422-استفاده-از-parallel-linq-plinq-برای-موازیسازی-داده"></a>
### 4.2.2 استفاده از Parallel LINQ (PLINQ) برای موازی‌سازی داده

PLINQ (Parallel LINQ) نسخه موازی(Parallel) LINQ است که به شما امکان می‌دهد کوئری‌های LINQ را به صورت موازی(Parallel) اجرا کنید.

<a id="4221-مفهوم-plinq"></a>
#### 4.2.2.1 مفهوم PLINQ

**ویژگی‌های کلیدی:**

- استفاده از `.AsParallel()` برای فعال‌سازی موازی‌سازی(Parallelization)
- بهینه‌سازی خودکار برای اجرای موازی(Parallel Execution)
- پشتیبانی از اکثر عملیات LINQ

**مثال پایه:**

```csharp
public void PLINQBasicExample()
{
    var numbers = Enumerable.Range(0, 1000000);
    
    var result = numbers
        .AsParallel()
        .Where(x => x % 2 == 0)
        .Select(x => x * x)
        .ToList();
}
```

<a id="4222-عملیات-پیشرفته"></a>
#### 4.2.2.2 عملیات پیشرفته PLINQ

**مثال: GroupBy موازی:**

```csharp
public void PLINQGroupByExample()
{
    var items = Enumerable.Range(0, 100000);
    
    var grouped = items
        .AsParallel()
        .GroupBy(x => x % 10)
        .Select(g => new { Key = g.Key, Count = g.Count() })
        .ToList();
}
```

**مثال: OrderBy موازی:**

```csharp
public void PLINQOrderByExample()
{
    var items = Enumerable.Range(0, 100000);
    
    var sorted = items
        .AsParallel()
        .OrderBy(x => x)
        .ToList();
}
```

<a id="4223-تنظیم-درجه-موازیسازی"></a>
#### 4.2.2.3 تنظیم درجه موازی‌سازی(Degree of Parallelism)

```csharp
public void PLINQWithDegreeOfParallelism()
{
    var items = Enumerable.Range(0, 100000);
    
    var result = items
        .AsParallel()
        .WithDegreeOfParallelism(4) // محدود کردن به 4 نخ
        .Where(x => IsValid(x))
        .Select(x => Process(x))
        .ToList();
}
```

<a id="4224-مدیریت-استثنا"></a>
#### 4.2.2.4 مدیریت استثنا(Exception Handling)

```csharp
public void PLINQExceptionHandling()
{
    var items = Enumerable.Range(0, 100000);
    
    try
    {
        var result = items
            .AsParallel()
            .Select(x =>
            {
                if (x == 50000)
                    throw new Exception("خطا در پردازش");
                return x * 2;
            })
            .ToList();
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

<a id="4225-مثال-کاربردی-پردازش-فایل"></a>
#### 4.2.2.5 مثال کاربردی: پردازش فایل

```csharp
public class PLINQFileProcessor
{
    public void ProcessFilesParallel(string directory)
    {
        var files = Directory.GetFiles(directory);
        
        var results = files
            .AsParallel()
            .Select(file =>
            {
                var content = File.ReadAllText(file);
                return new
                {
                    File = file,
                    LineCount = content.Split('\n').Length,
                    WordCount = content.Split(' ').Length
                };
            })
            .ToList();
    }
}
```

<a id="423-تعادل-بار-در-الگوریتمهای-موازی"></a>
### 4.2.3 تعادل بار در الگوریتم‌های موازی

تعادل بار(Load Balancing) در الگوریتم‌های موازی(Parallel Algorithms) به معنای توزیع یکنواخت کار بین نخ‌ها است.

<a id="4231-مفهوم-تعادل-بار"></a>
#### 4.2.3.1 مفهوم تعادل بار(Load Balancing)

**مشکل عدم تعادل:**

- برخی نخ‌ها زودتر تمام می‌کنند
- برخی نخ‌ها دیرتر تمام می‌کنند
- استفاده ناکارآمد از منابع

**راه‌حل:**

- تقسیم کار به بخش‌های کوچکتر
- توزیع پویا(Dynamic Distribution) کار
- استفاده از Work Stealing

<a id="4232-تقسیم-کار-یکنواخت"></a>
#### 4.2.3.2 تقسیم کار یکنواخت

**مثال: تقسیم دستی:**

```csharp
public class LoadBalancedProcessor
{
    public void ProcessWithLoadBalancing<T>(IEnumerable<T> items, Action<T> processor)
    {
        var itemArray = items.ToArray();
        int chunkSize = Math.Max(1, itemArray.Length / Environment.ProcessorCount);
        
        Parallel.ForEach(
            Partitioner.Create(0, itemArray.Length, chunkSize),
            range =>
            {
                for (int i = range.Item1; i < range.Item2; i++)
                {
                    processor(itemArray[i]);
                }
            });
    }
}
```

<a id="4233-استفاده-از-partitioner"></a>
#### 4.2.3.3 استفاده از Partitioner

```csharp
public void ProcessWithPartitioner<T>(IEnumerable<T> items, Action<T> processor)
{
    var partitioner = Partitioner.Create(items, loadBalance: true);
    
    Parallel.ForEach(partitioner, item =>
    {
        processor(item);
    });
}
```

<a id="4234-مثال-کاربردی-پردازش-نامتوازن"></a>
#### 4.2.3.4 مثال کاربردی: پردازش نامتوازن

```csharp
public class UnbalancedWorkProcessor
{
    public void ProcessUnbalancedWork<T>(IEnumerable<T> items, Func<T, int> getWorkTime)
    {
        // استفاده از Partitioner برای تعادل بار(Load Balancing)
        var partitioner = Partitioner.Create(items, loadBalance: true);
        
        Parallel.ForEach(partitioner, item =>
        {
            int workTime = getWorkTime(item);
            Thread.Sleep(workTime); // شبیه‌سازی کار نامتوازن
            ProcessItem(item);
        });
    }
}
```

<a id="424-موازیسازی-تسک-در-مقابل-موازیسازی-داده-معاوضهها-و-بهترین-روشها"></a>
### 4.2.4 موازی‌سازی تسک در مقابل موازی‌سازی داده: معاوضه‌ها و بهترین روش‌ها

انتخاب بین موازی‌سازی تسک(Task Parallelism) و موازی‌سازی داده(Data Parallelism) به عوامل مختلفی بستگی دارد.

<a id="4241-مقایسه-تفصیلی"></a>
#### 4.2.4.1 مقایسه تفصیلی

**موازی‌سازی تسک(Task Parallelism):**

**مزایا:**
- انعطاف‌پذیری بیشتر
- مناسب برای کارهای ناهمگن
- کنترل بهتر بر هر تسک(Task)

**معایب:**
- سربار(S overhead) بیشتر
- مدیریت پیچیده‌تر

**موازی‌سازی داده(Data Parallelism):**

**مزایا:**
- سربار(S overhead) کمتر
- ساده‌تر برای کارهای همگن
- بهینه‌سازی خودکار

**معایب:**
- انعطاف‌پذیری کمتر
- نیاز به داده‌های قابل تقسیم

<a id="4242-زمان-استفاده-از-موازیسازی-تسک"></a>
#### 4.2.4.2 زمان استفاده از موازی‌سازی تسک(Task Parallelism)

```csharp
// ✅ مناسب: کارهای مختلف
var task1 = Task.Run(() => DownloadFile());
var task2 = Task.Run(() => ProcessDatabase());
var task3 = Task.Run(() => SendEmail());

await Task.WhenAll(task1, task2, task3);
```

<a id="4243-زمان-استفاده-از-موازیسازی-داده"></a>
#### 4.2.4.3 زمان استفاده از موازی‌سازی داده(Data Parallelism)

```csharp
// ✅ مناسب: همان کار روی داده‌های مختلف
var items = Enumerable.Range(0, 100000);
Parallel.ForEach(items, item =>
{
    ProcessItem(item);
});
```

<a id="4244-بهترین-روشها"></a>
#### 4.2.4.4 بهترین روش‌ها

**1. انتخاب بر اساس نوع کار:**

```csharp
// کارهای ناهمگن → موازی‌سازی تسک(Task Parallelism)
// کارهای همگن → موازی‌سازی داده(Data Parallelism)
```

**2. ترکیب هر دو:**

```csharp
// ✅ بهتر: ترکیب هر دو
var tasks = dataChunks.Select(chunk =>
    Task.Run(() => Parallel.ForEach(chunk, ProcessItem))
);
await Task.WhenAll(tasks);
```

**3. اندازه کار:**

```csharp
// کارهای کوچک → موازی‌سازی تسک(Task Parallelism)
// کارهای بزرگ → موازی‌سازی داده(Data Parallelism)
```

<a id="425-استفاده-از-taskwhenany-و-taskwhenall-با-مدیریت-استثنا"></a>
### 4.2.5 استفاده از Task.WhenAny() و Task.WhenAll() با مدیریت استثنا

در سطح متخصص، باید بتوانید استثناها(Exception) را در سناریوهای پیچیده موازی(Parallel) مدیریت کنید.

<a id="4251-مدیریت-استثنا-در-taskwhenall"></a>
#### 4.2.5.1 مدیریت استثنا در Task.WhenAll()

**مثال پایه:**

```csharp
public async Task HandleExceptionsInWhenAll()
{
    var tasks = new[]
    {
        Task.Run(() => { throw new Exception("خطا 1"); }),
        Task.Run(() => { throw new Exception("خطا 2"); }),
        Task.Run(() => ProcessItem(3))
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

**مثال پیشرفته: مدیریت انتخابی:**

```csharp
public async Task HandleExceptionsSelectively()
{
    var tasks = new List<Task>();
    
    for (int i = 0; i < 10; i++)
    {
        int item = i;
        tasks.Add(Task.Run(() =>
        {
            if (item % 3 == 0)
                throw new Exception($"خطا در آیتم {item}");
            return ProcessItem(item);
        }));
    }

    try
    {
        await Task.WhenAll(tasks);
    }
    catch (AggregateException aggEx)
    {
        var criticalErrors = aggEx.InnerExceptions
            .Where(ex => ex is CriticalException)
            .ToList();
            
        var nonCriticalErrors = aggEx.InnerExceptions
            .Where(ex => !(ex is CriticalException))
            .ToList();

        // مدیریت خطاهای بحرانی
        if (criticalErrors.Any())
        {
            throw new AggregateException(criticalErrors);
        }

        // لاگ خطاهای غیربحرانی
        foreach (var ex in nonCriticalErrors)
        {
            LogError(ex);
        }
    }
}
```

<a id="4252-مدیریت-استثنا-در-taskwhenany"></a>
#### 4.2.5.2 مدیریت استثنا در Task.WhenAny()

**مثال پایه:**

```csharp
public async Task<string> HandleExceptionsInWhenAny()
{
    var tasks = new[]
    {
        Task.Run(() => { throw new Exception("خطا 1"); return "نتیجه 1"; }),
        Task.Run(() => { throw new Exception("خطا 2"); return "نتیجه 2"; }),
        Task.Run(() => "نتیجه 3")
    };

    var completedTask = await Task.WhenAny(tasks);
    
    try
    {
        return await completedTask;
    }
    catch (Exception ex)
    {
        Console.WriteLine($"خطا در تسک(Task) کامل شده: {ex.Message}");
        // تلاش با تسک(Task) دیگر
        var remainingTasks = tasks.Where(t => t != completedTask).ToArray();
        if (remainingTasks.Any())
        {
            var nextTask = await Task.WhenAny(remainingTasks);
            return await nextTask;
        }
        throw;
    }
}
```

<a id="4253-مثال-پیشرفته-fallback"></a>
#### 4.2.5.3 مثال پیشرفته: Fallback با مدیریت استثنا

```csharp
public async Task<string> GetDataWithFallbackAsync()
{
    var primaryTask = FetchFromPrimarySourceAsync();
    var fallbackTask = FetchFromFallbackSourceAsync();

    var completedTask = await Task.WhenAny(primaryTask, fallbackTask);

    try
    {
        if (completedTask == primaryTask && !primaryTask.IsFaulted)
        {
            return await primaryTask;
        }
        else
        {
            return await fallbackTask;
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"خطا در دریافت داده: {ex.Message}");
        throw;
    }
}
```

<a id="4254-مدیریت-استثنا-در-حلقه-موازی"></a>
#### 4.2.5.4 مدیریت استثنا در حلقه موازی(Parallel Loop)

```csharp
public void HandleExceptionsInParallelLoop()
{
    var items = Enumerable.Range(0, 1000);
    var exceptions = new ConcurrentQueue<Exception>();

    Parallel.ForEach(items, item =>
    {
        try
        {
            ProcessItem(item);
        }
        catch (Exception ex)
        {
            exceptions.Enqueue(ex);
        }
    });

    if (exceptions.Any())
    {
        throw new AggregateException(exceptions);
    }
}
```

<a id="4255-بهترین-روشها"></a>
#### 4.2.5.5 بهترین روش‌ها

**1. همیشه استثناها را مدیریت کنید:**

```csharp
// ✅ درست: مدیریت استثنا
try
{
    await Task.WhenAll(tasks);
}
catch (AggregateException aggEx)
{
    HandleExceptions(aggEx);
}
```

**2. استفاده از ContinueWith برای مدیریت خطا:**

```csharp
// ✅ درست: استفاده از ContinueWith
var task = Task.Run(() => ProcessItem())
    .ContinueWith(t =>
    {
        if (t.IsFaulted)
        {
            LogError(t.Exception);
        }
        return t.Result;
    });
```

**3. بررسی وضعیت تسک(Task) قبل از await:**

```csharp
// ✅ درست: بررسی وضعیت
var task = Task.Run(() => ProcessItem());
var completedTask = await Task.WhenAny(task, timeoutTask);

if (completedTask.IsFaulted)
{
    HandleError(completedTask.Exception);
}
```

#### خلاصه

- **موازی‌سازی تسک:** برای کارهای ناهمگن و مستقل
- **موازی‌سازی داده:** برای کارهای همگن روی داده‌های مختلف
- **PLINQ:** برای کوئری‌های LINQ موازی(Parallel)
- **تعادل بار:** توزیع یکنواخت کار بین نخ‌ها
- **مدیریت استثنا:** استفاده از AggregateException و مدیریت انتخابی

<a id="43-مدیریت-حافظه-در-برنامههای-چندنخی"></a>
## 4.3 مدیریت حافظه در برنامه‌های چندنخی (Memory Management in Multi-Threaded Applications)

در برنامه‌های چندنخی(Multi-Threaded Applications)، مدیریت حافظه(Memory Management) از اهمیت بالایی برخوردار است. درک خطاهای سازگاری حافظه(Memory Consistency Errors)، موانع حافظه(Memory Barriers)، و استفاده صحیح از کلمه کلیدی `volatile` برای نوشتن برنامه‌های ایمن و کارآمد ضروری است.

<a id="431-خطاهای-سازگاری-حافظه"></a>
### 4.3.1 خطاهای سازگاری حافظه

خطاهای سازگاری حافظه(Memory Consistency Errors) زمانی رخ می‌دهند که نخ‌های مختلف نسخه‌های متفاوتی از یک متغیر را می‌بینند.

<a id="4311-مفهوم-سازگاری-حافظه"></a>
#### 4.3.1.1 مفهوم سازگاری حافظه(Memory Consistency)

**تعریف:**

سازگاری حافظه(Memory Consistency) به معنای این است که تمام نخ‌ها نسخه یکسانی از داده‌های مشترک(Shared Data) را می‌بینند.

**مشکل:**

- هر نخ ممکن است کپی محلی(Local Copy) از داده‌ها داشته باشد
- تغییرات ممکن است فوراً برای سایر نخ‌ها قابل مشاهده نباشند
- بهینه‌سازی‌های کامپایلر(Compiler Optimizations) ممکن است ترتیب عملیات را تغییر دهند

<a id="4312-مثال-خطای-سازگاری"></a>
#### 4.3.1.2 مثال خطای سازگاری

**مثال مشکل‌دار:**

```csharp
public class MemoryConsistencyError
{
    private bool _flag = false;
    private int _value = 0;

    public void Thread1()
    {
        _value = 42;
        _flag = true; // ممکن است قبل از _value = 42 اجرا شود!
    }

    public void Thread2()
    {
        if (_flag)
        {
            // ممکن است _value هنوز 0 باشد!
            Console.WriteLine(_value);
        }
    }
}
```

**مشکل:**

- کامپایلر یا پردازنده ممکن است ترتیب عملیات را تغییر دهد
- نخ 2 ممکن است `_flag` را true ببیند اما `_value` هنوز 0 باشد

<a id="4313-راه-حل-با-موانع-حافظه"></a>
#### 4.3.1.3 راه‌حل با موانع حافظه(Memory Barriers)

```csharp
public class FixedMemoryConsistency
{
    private bool _flag = false;
    private int _value = 0;

    public void Thread1()
    {
        _value = 42;
        Thread.MemoryBarrier(); // اطمینان از نوشتن _value قبل از _flag
        _flag = true;
    }

    public void Thread2()
    {
        if (_flag)
        {
            Thread.MemoryBarrier(); // اطمینان از خواندن _flag قبل از _value
            Console.WriteLine(_value); // اکنون همیشه 42 است
        }
    }
}
```

<a id="4314-راه-حل-با-volatile"></a>
#### 4.3.1.4 راه‌حل با volatile

```csharp
public class VolatileMemoryConsistency
{
    private volatile bool _flag = false;
    private int _value = 0;

    public void Thread1()
    {
        _value = 42;
        _flag = true; // با volatile، ترتیب حفظ می‌شود
    }

    public void Thread2()
    {
        if (_flag)
        {
            Console.WriteLine(_value); // اکنون همیشه 42 است
        }
    }
}
```

<a id="432-موانع-حافظه-و-اهمیت-آنها-در-مدلهای-نخبندی"></a>
### 4.3.2 موانع حافظه و اهمیت آن‌ها در مدل‌های نخ‌بندی

موانع حافظه(Memory Barriers) دستورالعمل‌هایی هستند که به کامپایلر و پردازنده می‌گویند که ترتیب عملیات حافظه(Memory Operations) را تغییر ندهند.

<a id="4321-انواع-موانع-حافظه"></a>
#### 4.3.2.1 انواع موانع حافظه(Memory Barriers)

**1. Full Barrier (Thread.MemoryBarrier):**

```csharp
public class FullBarrierExample
{
    private int _value1 = 0;
    private int _value2 = 0;

    public void Thread1()
    {
        _value1 = 1;
        Thread.MemoryBarrier(); // تمام خواندن/نوشتن قبل از این نقطه کامل می‌شود
        _value2 = 2;
    }

    public void Thread2()
    {
        if (_value2 == 2)
        {
            Thread.MemoryBarrier(); // تمام خواندن/نوشتن قبل از این نقطه کامل می‌شود
            Console.WriteLine(_value1); // همیشه 1 است
        }
    }
}
```

**2. Acquire Barrier (خواندن):**

```csharp
// در C#، Thread.MemoryBarrier() هم Acquire و هم Release است
// اما می‌توانیم از volatile برای Acquire استفاده کنیم
public class AcquireBarrierExample
{
    private volatile bool _flag = false;
    private int _data = 0;

    public void Thread1()
    {
        _data = 42;
        _flag = true; // Release semantics
    }

    public void Thread2()
    {
        if (_flag) // Acquire semantics
        {
            // تمام خواندن‌ها بعد از این نقطه، تغییرات Thread1 را می‌بینند
            Console.WriteLine(_data); // همیشه 42 است
        }
    }
}
```

**3. Release Barrier (نوشتن):**

```csharp
// Release barrier اطمینان می‌دهد که تمام نوشتن‌ها قبل از این نقطه کامل می‌شوند
public class ReleaseBarrierExample
{
    private int _data = 0;
    private volatile bool _ready = false;

    public void Producer()
    {
        _data = 100;
        Thread.MemoryBarrier(); // Release barrier
        _ready = true; // اکنون _data برای Consumer قابل مشاهده است
    }

    public void Consumer()
    {
        if (_ready) // Acquire barrier (از volatile)
        {
            Console.WriteLine(_data); // همیشه 100 است
        }
    }
}
```

<a id="4322-اهمیت-در-مدلهای-نخبندی"></a>
#### 4.3.2.2 اهمیت در مدل‌های نخ‌بندی(Threading Models)

**مدل حافظه(Memory Model) در .NET:**

- .NET از مدل حافظه ضعیف(Weak Memory Model) استفاده می‌کند
- کامپایلر و پردازنده می‌توانند ترتیب عملیات را تغییر دهند
- موانع حافظه(Memory Barriers) برای کنترل ترتیب ضروری هستند

**مثال: بدون موانع حافظه:**

```csharp
// ❌ مشکل: بدون Memory Barrier
public class WithoutBarrier
{
    private int _x = 0;
    private int _y = 0;

    public void Thread1()
    {
        _x = 1;
        _y = 1; // ممکن است قبل از _x = 1 اجرا شود!
    }

    public void Thread2()
    {
        int localY = _y;
        int localX = _x; // ممکن است 0 باشد حتی اگر _y = 1 باشد!
    }
}
```

**مثال: با موانع حافظه:**

```csharp
// ✅ درست: با Memory Barrier
public class WithBarrier
{
    private int _x = 0;
    private int _y = 0;

    public void Thread1()
    {
        _x = 1;
        Thread.MemoryBarrier();
        _y = 1; // همیشه بعد از _x = 1 اجرا می‌شود
    }

    public void Thread2()
    {
        int localY = _y;
        Thread.MemoryBarrier();
        int localX = _x; // اکنون همیشه 1 است اگر _y = 1 باشد
    }
}
```

<a id="4323-استفاده-در-ساختارهای-بدون-قفل"></a>
#### 4.3.2.3 استفاده در ساختارهای بدون قفل(Lock-Free Structures)

```csharp
public class LockFreeWithBarriers<T>
{
    private volatile Node _head;

    private class Node
    {
        public T Value;
        public Node Next;
    }

    public void Push(T item)
    {
        var newNode = new Node { Value = item };
        Node oldHead;
        do
        {
            oldHead = _head;
            newNode.Next = oldHead;
        } while (Interlocked.CompareExchange(ref _head, newNode, oldHead) != oldHead);
        
        // CompareExchange خودش Memory Barrier دارد
    }

    public bool TryPop(out T result)
    {
        Node oldHead;
        do
        {
            oldHead = _head;
            if (oldHead == null)
            {
                result = default(T);
                return false;
            }
            Thread.MemoryBarrier(); // اطمینان از خواندن Next
        } while (Interlocked.CompareExchange(ref _head, oldHead.Next, oldHead) != oldHead);

        result = oldHead.Value;
        return true;
    }
}
```

<a id="433-کلمه-کلیدی-volatile-برای-دیداری-متغیر"></a>
### 4.3.3 کلمه کلیدی volatile برای دیداری متغیر

کلمه کلیدی `volatile` به کامپایلر می‌گوید که این متغیر ممکن است توسط چندین نخ تغییر کند و نباید بهینه‌سازی‌هایی انجام دهد که فرض می‌کند فقط یک نخ به آن دسترسی دارد.

<a id="4331-مفهوم-volatile"></a>
#### 4.3.3.1 مفهوم volatile

**ویژگی‌های کلیدی:**

- خواندن از متغیر volatile همیشه از حافظه اصلی(Main Memory) انجام می‌شود
- نوشتن در متغیر volatile همیشه به حافظه اصلی(Main Memory) نوشته می‌شود
- ترتیب عملیات روی متغیرهای volatile حفظ می‌شود

**مثال پایه:**

```csharp
public class VolatileExample
{
    private volatile bool _stop = false;

    public void WorkerThread()
    {
        while (!_stop)
        {
            // کار انجام می‌دهد
        }
    }

    public void Stop()
    {
        _stop = true; // فوراً برای WorkerThread قابل مشاهده است
    }
}
```

<a id="4332-تفاوت-با-متغیر-عادی"></a>
#### 4.3.3.2 تفاوت با متغیر عادی

**بدون volatile (مشکل‌دار):**

```csharp
// ❌ مشکل: بدون volatile
public class WithoutVolatile
{
    private bool _flag = false;

    public void Thread1()
    {
        while (!_flag) // ممکن است همیشه true بماند!
        {
            // حلقه بی‌نهایت
        }
    }

    public void Thread2()
    {
        _flag = true; // ممکن است برای Thread1 قابل مشاهده نباشد
    }
}
```

**با volatile (درست):**

```csharp
// ✅ درست: با volatile
public class WithVolatile
{
    private volatile bool _flag = false;

    public void Thread1()
    {
        while (!_flag) // همیشه از حافظه اصلی خوانده می‌شود
        {
            // حلقه تا زمانی که _flag = true شود
        }
    }

    public void Thread2()
    {
        _flag = true; // فوراً برای Thread1 قابل مشاهده است
    }
}
```

<a id="4333-محدودیتهای-volatile"></a>
#### 4.3.3.3 محدودیت‌های volatile

**1. فقط برای انواع ساده:**

```csharp
// ✅ درست: انواع ساده
private volatile int _counter = 0;
private volatile bool _flag = false;

// ❌ نادرست: انواع مرجع
// private volatile MyClass _obj; // خطا!
```

**2. فقط برای فیلدها:**

```csharp
// ✅ درست: فیلد
private volatile int _value = 0;

// ❌ نادرست: متغیر محلی
// void Method() { volatile int x = 0; } // خطا!
```

**3. نمی‌تواند برای عملیات اتمی پیچیده استفاده شود:**

```csharp
// ❌ نادرست: volatile برای عملیات اتمی پیچیده کافی نیست
private volatile int _counter = 0;

public void Increment()
{
    _counter++; // این عملیات اتمی نیست!
}

// ✅ درست: استفاده از Interlocked
private int _counter = 0;

public void Increment()
{
    Interlocked.Increment(ref _counter);
}
```

<a id="4334-مثال-کاربردی-flag-برای-توقف"></a>
#### 4.3.3.4 مثال کاربردی: Flag برای توقف

```csharp
public class CancellationFlag
{
    private volatile bool _cancelled = false;

    public void LongRunningOperation()
    {
        for (int i = 0; i < 1000000; i++)
        {
            if (_cancelled)
            {
                Console.WriteLine("عملیات لغو شد");
                return;
            }
            // کار انجام می‌دهد
        }
    }

    public void Cancel()
    {
        _cancelled = true;
    }
}
```

<a id="434-استفاده-از-gccollect-و-gckeepalive-برای-مدیریت-پیشرفته-جمعآوری-زباله"></a>
### 4.3.4 استفاده از GC.Collect() و GC.KeepAlive() برای مدیریت پیشرفته جمع‌آوری زباله

در برنامه‌های چندنخی(Multi-Threaded Applications)، مدیریت جمع‌آوری زباله(Garbage Collection) می‌تواند پیچیده باشد. `GC.Collect()` و `GC.KeepAlive()` ابزارهای پیشرفته‌ای هستند که باید با احتیاط استفاده شوند.

<a id="4341-استفاده-از-gccollect"></a>
#### 4.3.4.1 استفاده از GC.Collect()

**هشدار مهم:**

- به طور کلی، نباید `GC.Collect()` را به صورت دستی فراخوانی کنید
- GC در .NET بهینه‌سازی شده است و خودش تصمیم می‌گیرد چه زمانی جمع‌آوری کند
- فراخوانی دستی می‌تواند عملکرد(Performance) را کاهش دهد

**موارد استثنایی:**

```csharp
// فقط در موارد خاص، مانند تست یا پروفایلینگ
public class GarbageCollectionExample
{
    public void ForceCollection()
    {
        // ❌ معمولاً نادرست
        GC.Collect();
        
        // ✅ بهتر: با پارامترها
        GC.Collect(GC.MaxGeneration, GCCollectionMode.Optimized);
        GC.WaitForPendingFinalizers();
        GC.Collect(GC.MaxGeneration, GCCollectionMode.Forced);
    }
}
```

<a id="4342-استفاده-از-gckeepalive"></a>
#### 4.3.4.2 استفاده از GC.KeepAlive()

`GC.KeepAlive()` اطمینان می‌دهد که یک شیء تا زمان فراخوانی این متد زنده می‌ماند.

**مثال: جلوگیری از جمع‌آوری زودرس:**

```csharp
public class KeepAliveExample
{
    private IntPtr _handle;

    public void UseNativeResource()
    {
        var resource = new NativeResource();
        _handle = resource.GetHandle();
        
        // استفاده از resource
        
        // اطمینان از اینکه resource تا اینجا زنده می‌ماند
        GC.KeepAlive(resource);
    }
}
```

<a id="4343-مثال-پیشرفته-مدیریت-منابع-بومی"></a>
#### 4.3.4.3 مثال پیشرفته: مدیریت منابع بومی(Native Resources)

```csharp
public class NativeResourceManager : IDisposable
{
    private IntPtr _handle;
    private bool _disposed = false;

    public NativeResourceManager()
    {
        _handle = AllocateNativeResource();
    }

    public void UseResource()
    {
        if (_disposed)
            throw new ObjectDisposedException(nameof(NativeResourceManager));

        // استفاده از _handle
        UseNativeHandle(_handle);
        
        // اطمینان از اینکه این شیء تا اینجا زنده می‌ماند
        GC.KeepAlive(this);
    }

    public void Dispose()
    {
        if (!_disposed)
        {
            if (_handle != IntPtr.Zero)
            {
                FreeNativeResource(_handle);
                _handle = IntPtr.Zero;
            }
            _disposed = true;
        }
        GC.SuppressFinalize(this);
    }

    ~NativeResourceManager()
    {
        Dispose();
    }

    // متدهای بومی
    [DllImport("native.dll")]
    private static extern IntPtr AllocateNativeResource();

    [DllImport("native.dll")]
    private static extern void FreeNativeResource(IntPtr handle);

    [DllImport("native.dll")]
    private static extern void UseNativeHandle(IntPtr handle);
}
```

<a id="4344-بهترین-روشها"></a>
#### 4.3.4.4 بهترین روش‌ها

**1. اجتناب از GC.Collect():**

```csharp
// ❌ نادرست: فراخوانی دستی
GC.Collect();

// ✅ بهتر: اجازه دهید GC خودش تصمیم بگیرد
```

**2. استفاده از GC.KeepAlive() فقط در موارد خاص:**

```csharp
// ✅ درست: فقط برای منابع بومی
GC.KeepAlive(nativeResource);
```

**3. استفاده از IDisposable:**

```csharp
// ✅ بهتر: استفاده از IDisposable
using (var resource = new ManagedResource())
{
    // استفاده از resource
} // به صورت خودکار Dispose می‌شود
```

<a id="435-نظارت-و-پروفایلینگ-عملکرد-با-استفاده-از-ابزارها"></a>
### 4.3.5 نظارت و پروفایلینگ عملکرد با استفاده از ابزارها

نظارت(Monitoring) و پروفایلینگ(Profiling) عملکرد(Performance) در برنامه‌های چندنخی(Multi-Threaded Applications) برای شناسایی مشکلات و بهینه‌سازی ضروری است.

<a id="4351-ابزارهای-پروفایلینگ"></a>
#### 4.3.5.1 ابزارهای پروفایلینگ(Profiling Tools)

**1. Visual Studio Diagnostic Tools:**

```csharp
// استفاده از Performance Profiler
public class ProfilingExample
{
    public void ProfiledMethod()
    {
        // کد شما
        // Visual Studio می‌تواند زمان اجرا، استفاده از CPU، و استفاده از حافظه را نشان دهد
    }
}
```

**2. PerfView:**

- ابزار رایگان مایکروسافت
- برای تحلیل عملکرد(Performance Analysis) و استفاده از حافظه(Memory Usage)
- پشتیبانی از Threading Analysis

**3. dotMemory:**

- ابزار JetBrains برای تحلیل حافظه
- شناسایی Memory Leaks
- تحلیل استفاده از حافظه در برنامه‌های چندنخی

<a id="4352-نظارت-بر-نخها"></a>
#### 4.3.5.2 نظارت بر نخ‌ها(Thread Monitoring)

```csharp
public class ThreadMonitor
{
    public void MonitorThreads()
    {
        var threads = Process.GetCurrentProcess().Threads;
        foreach (ProcessThread thread in threads)
        {
            Console.WriteLine($"Thread ID: {thread.Id}");
            Console.WriteLine($"State: {thread.ThreadState}");
            Console.WriteLine($"CPU Time: {thread.TotalProcessorTime}");
        }
    }

    public void MonitorCurrentThread()
    {
        var thread = Thread.CurrentThread;
        Console.WriteLine($"Thread Name: {thread.Name}");
        Console.WriteLine($"Thread ID: {thread.ManagedThreadId}");
        Console.WriteLine($"Is Background: {thread.IsBackground}");
        Console.WriteLine($"Priority: {thread.Priority}");
    }
}
```

<a id="4353-نظارت-بر-حافظه"></a>
#### 4.3.5.3 نظارت بر حافظه(Memory Monitoring)

```csharp
public class MemoryMonitor
{
    public void MonitorMemory()
    {
        // استفاده از حافظه فعلی
        long memoryBefore = GC.GetTotalMemory(false);
        
        // کار شما
        
        long memoryAfter = GC.GetTotalMemory(false);
        Console.WriteLine($"Memory used: {memoryAfter - memoryBefore} bytes");
    }

    public void MonitorGC()
    {
        Console.WriteLine($"Gen 0 Collections: {GC.CollectionCount(0)}");
        Console.WriteLine($"Gen 1 Collections: {GC.CollectionCount(1)}");
        Console.WriteLine($"Gen 2 Collections: {GC.CollectionCount(2)}");
    }
}
```

<a id="4354-مثال-کاربردی-پروفایلینگ-کامل"></a>
#### 4.3.5.4 مثال کاربردی: پروفایلینگ کامل

```csharp
public class PerformanceProfiler
{
    private readonly Stopwatch _stopwatch = new Stopwatch();
    private long _memoryBefore;
    private long _memoryAfter;

    public void StartProfiling()
    {
        _memoryBefore = GC.GetTotalMemory(false);
        _stopwatch.Start();
    }

    public void StopProfiling()
    {
        _stopwatch.Stop();
        _memoryAfter = GC.GetTotalMemory(false);
        
        Console.WriteLine($"Execution Time: {_stopwatch.ElapsedMilliseconds} ms");
        Console.WriteLine($"Memory Used: {_memoryAfter - _memoryBefore} bytes");
        Console.WriteLine($"GC Gen 0: {GC.CollectionCount(0)}");
        Console.WriteLine($"GC Gen 1: {GC.CollectionCount(1)}");
        Console.WriteLine($"GC Gen 2: {GC.CollectionCount(2)}");
    }

    public void ProfileMethod(Action method)
    {
        StartProfiling();
        method();
        StopProfiling();
    }
}
```

<a id="4355-بهترین-روشها"></a>
#### 4.3.5.5 بهترین روش‌ها

**1. استفاده از ابزارهای مناسب:**

```csharp
// ✅ درست: استفاده از ابزارهای پروفایلینگ
// Visual Studio Diagnostic Tools
// PerfView
// dotMemory
```

**2. نظارت مداوم:**

```csharp
// ✅ درست: نظارت در محیط Production
public class ProductionMonitor
{
    public void LogPerformanceMetrics()
    {
        // لاگ کردن معیارهای عملکرد(Performance Metrics)
    }
}
```

**3. تحلیل نتایج:**

- شناسایی Bottlenecks
- تحلیل استفاده از CPU
- تحلیل استفاده از حافظه
- شناسایی Deadlocks و Race Conditions

#### خلاصه

- **خطاهای سازگاری حافظه:** استفاده از Memory Barriers و volatile برای حل
- **موانع حافظه:** کنترل ترتیب عملیات حافظه
- **volatile:** برای متغیرهای ساده که توسط چندین نخ استفاده می‌شوند
- **GC.Collect():** فقط در موارد خاص استفاده شود
- **GC.KeepAlive():** برای منابع بومی
- **پروفایلینگ:** استفاده از ابزارهای مناسب برای نظارت و بهینه‌سازی

---
