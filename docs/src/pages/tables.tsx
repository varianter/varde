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
                <th>Species</th>
                <th>Locality</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Atlantic salmon</td>
                <td>Frøya</td>
                <td>Active</td>
              </tr>
              <tr>
                <td>Rainbow trout</td>
                <td>Hitra</td>
                <td>Active</td>
              </tr>
              <tr>
                <td>Arctic char</td>
                <td>Senja</td>
                <td>Fallow</td>
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
                    <th>Pen</th>
                    <th>Species</th>
                    <th>Count</th>
                    <th>Avg. weight</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>A-01</td>
                    <td>Atlantic salmon</td>
                    <td>185 000</td>
                    <td>4.2 kg</td>
                  </tr>
                  <tr>
                    <td>A-02</td>
                    <td>Atlantic salmon</td>
                    <td>192 000</td>
                    <td>3.8 kg</td>
                  </tr>
                  <tr>
                    <td>B-01</td>
                    <td>Rainbow trout</td>
                    <td>145 000</td>
                    <td>3.1 kg</td>
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
                    <th>Pen</th>
                    <th>Species</th>
                    <th>Count</th>
                    <th>Avg. weight</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>A-01</td>
                    <td>Atlantic salmon</td>
                    <td>185 000</td>
                    <td>4.2 kg</td>
                  </tr>
                  <tr>
                    <td>A-02</td>
                    <td>Atlantic salmon</td>
                    <td>192 000</td>
                    <td>3.8 kg</td>
                  </tr>
                  <tr>
                    <td>B-01</td>
                    <td>Rainbow trout</td>
                    <td>145 000</td>
                    <td>3.1 kg</td>
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
            <caption>Harvest by locality — 2024 (gutted weight, tonnes)</caption>
            <thead>
              <tr>
                <th>Locality</th>
                <th>Q1</th>
                <th>Q2</th>
                <th>Q3</th>
                <th>Q4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Frøya</td>
                <td>820</td>
                <td>1 140</td>
                <td>1 350</td>
                <td>960</td>
              </tr>
              <tr>
                <td>Hitra</td>
                <td>640</td>
                <td>890</td>
                <td>1 020</td>
                <td>750</td>
              </tr>
              <tr>
                <td>Senja</td>
                <td>510</td>
                <td>720</td>
                <td>680</td>
                <td>590</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Total</th>
                <td>1 970</td>
                <td>2 750</td>
                <td>3 050</td>
                <td>2 300</td>
              </tr>
            </tfoot>
          </table>
        </ExamplePanel>
      </Section>
    </DocsPage>
  );
}

export default TablesPage;
