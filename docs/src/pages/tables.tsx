import { DocsPage, ExamplePanel, Section } from "../components/docs";

export const path = "/components/tables";

export function TablesPage() {
  return (
    <DocsPage
      title="Tables"
      description="Use .table on <table> elements. Control density with data-density. Row hover is on by default."
    >
      {/* Default */}
      <Section
        title="Default"
        description="A plain .table with no extra attributes gives you a clean, medium-density table."
      >
        <ExamplePanel>
          <table class="table">
            <thead>
              <tr>
                <th>Consultant</th>
                <th>Client</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Emma Berg</td>
                <td>Acme Corp</td>
                <td>Active</td>
              </tr>
              <tr>
                <td>Lars Holm</td>
                <td>TechVent</td>
                <td>Active</td>
              </tr>
              <tr>
                <td>Mia Andersson</td>
                <td>FinHub</td>
                <td>Bench</td>
              </tr>
            </tbody>
          </table>
        </ExamplePanel>
      </Section>

      {/* Density */}
      <Section
        title="Density"
        description='You can set data-density to "compact" or "relaxed" to control cell padding.'
      >
        <div class="stack gap-m">
          <div class="stack gap-2xs">
            <span class="fs-xs fg-muted t-medium">Compact</span>
            <ExamplePanel>
              <table class="table" data-density="compact">
                <thead>
                  <tr>
                    <th>Consultant</th>
                    <th>Client</th>
                    <th>Booked</th>
                    <th>Invoiced</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Emma Berg</td>
                    <td>Acme Corp</td>
                    <td>
                      34.5 <span class="fg-muted">/ 37.5h</span>
                    </td>
                    <td>92%</td>
                  </tr>
                  <tr>
                    <td>Lars Holm</td>
                    <td>TechVent</td>
                    <td>
                      28.0 <span class="fg-muted">/ 37.5h</span>
                    </td>
                    <td>75%</td>
                  </tr>
                  <tr>
                    <td>Mia Andersson</td>
                    <td>FinHub</td>
                    <td>
                      37.5 <span class="fg-muted">/ 37.5h</span>
                    </td>
                    <td>100%</td>
                  </tr>
                </tbody>
              </table>
            </ExamplePanel>
          </div>

          <div class="stack gap-2xs">
            <span class="fs-xs fg-muted t-medium">Relaxed</span>
            <ExamplePanel>
              <table class="table" data-density="relaxed">
                <thead>
                  <tr>
                    <th>Consultant</th>
                    <th>Client</th>
                    <th>Booked</th>
                    <th>Invoiced</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Emma Berg</td>
                    <td>Acme Corp</td>
                    <td>
                      34.5 <span class="fg-muted">/ 37.5h</span>
                    </td>
                    <td>92%</td>
                  </tr>
                  <tr>
                    <td>Lars Holm</td>
                    <td>TechVent</td>
                    <td>
                      28.0 <span class="fg-muted">/ 37.5h</span>
                    </td>
                    <td>75%</td>
                  </tr>
                  <tr>
                    <td>Mia Andersson</td>
                    <td>FinHub</td>
                    <td>
                      37.5 <span class="fg-muted">/ 37.5h</span>
                    </td>
                    <td>100%</td>
                  </tr>
                </tbody>
              </table>
            </ExamplePanel>
          </div>
        </div>
      </Section>

      {/* Caption & footer */}
      <Section
        title="Caption & footer"
        description="Use <caption> for a table description and <tfoot> for summary rows. Both are styled automatically."
      >
        <ExamplePanel>
          <table class="table">
            <caption>Booked hours by consultant — H1 2026</caption>
            <thead>
              <tr>
                <th>Consultant</th>
                <th>Jan</th>
                <th>Feb</th>
                <th>Mar</th>
                <th>Apr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Emma Berg</td>
                <td>148</td>
                <td>156</td>
                <td>142</td>
                <td>150</td>
              </tr>
              <tr>
                <td>Lars Holm</td>
                <td>132</td>
                <td>140</td>
                <td>138</td>
                <td>145</td>
              </tr>
              <tr>
                <td>Mia Andersson</td>
                <td>150</td>
                <td>148</td>
                <td>155</td>
                <td>152</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Total</th>
                <td>430</td>
                <td>444</td>
                <td>435</td>
                <td>447</td>
              </tr>
            </tfoot>
          </table>
        </ExamplePanel>
      </Section>
    </DocsPage>
  );
}

export default TablesPage;
