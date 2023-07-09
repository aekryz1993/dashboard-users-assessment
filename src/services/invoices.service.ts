const invoiceService = (baseUrl: string) => {
  const getInvoices = () => fetch(`${baseUrl}/invoices`)

  return {
    getInvoices,
  }
}

export default invoiceService;

// fetch('https://example.com?' + new URLSearchParams({
//     foo: 'value',
//     bar: 2,
// }))
