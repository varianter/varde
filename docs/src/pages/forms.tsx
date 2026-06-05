export const path = "/patterns/forms";

export default function FormPage() {
  return (
    <form method="post" class="stack gap-m mx-auto" style="max-width: 600px;">
      <div class="stack gap-xs">
        <label class="fs-s fg-muted" for="Name">
          Name
        </label>
        <input class="input" type="text" id="Name" name="Name" />
      </div>
      <div class="stack-horizontal items-start gap-m">
        <div class="stack gap-xs grow">
          <label class="fs-s fg-muted" for="Nationality">
            Nationality (ISO 3166-1 numeric)
          </label>
          <input
            class="input"
            type="text"
            id="Nationality"
            name="Nationality"
            placeholder="e.g. 578 - Norway"
          />
        </div>
        <div class="stack grow">
          <label class="fs-s fg-muted mb-xs" for="NationalOrgNumber">
            National organization number
          </label>
          <input
            class="input"
            type="text"
            value="asdf"
            id="NationalOrgNumber"
            name="NationalOrgNumber"
            aria-invalid="true"
          />
          <p class="fs-s fg-danger-medium mt-2xs">
            <span
              class="fg-danger-strong bg-danger-medium"
              style="    display: inline-block;
                  width: 1rem;
                  height: 1rem;
                  border-radius: 50%;
                  text-align: center;
                  font-size: 0.7rem;
                  vertical-align: baseline;
                  font-weight: bold;
                  margin-right: var(--spacing-2xs);"
            >
              !
            </span>
            You may only enter numbers
          </p>
        </div>
      </div>
      <div class="stack gap-xs">
        <label class="fs-s fg-muted" for="Address">
          Address
        </label>
        <textarea class="textarea" rows={3} id="Address" name="Address"></textarea>
      </div>
      <button class="button ml-auto px-xl" type="submit">
        Add Company
      </button>
    </form>
  );
}
