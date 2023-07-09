
function routes() {
  this.get("/api/invoices", (schema, request) => {
    return schema.invoices.all()
  })
}

export default routes;