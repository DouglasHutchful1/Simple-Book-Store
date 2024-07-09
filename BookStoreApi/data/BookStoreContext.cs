using Microsoft.EntityFrameworkCore;
using BookStoreApi.Models;

namespace BookStoreApi.data
{
    public class BookStoreContext : DbContext
    {
        public BookStoreContext(DbContextOptions<BookStoreContext> options) : base(options) { }

        public DbSet<Book> Books { get; set; }
    }
}


