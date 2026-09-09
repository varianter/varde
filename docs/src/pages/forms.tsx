export const path = "/patterns/forms";

export default function FormPage() {
  return (
    <form method="post" class="stack-v gap-m mx-auto" style="max-width: 600px;">
      <div class="stack-v gap-xs">
        <label class="fs-s ink-subtle" for="Name">
          Name
        </label>
        <input class="v-input" type="text" id="Name" name="Name" />
      </div>
      <div class="stack-h items-start gap-m">
        <div class="stack-v gap-xs grow">
          <label class="fs-s ink-subtle" for="Nationality">
            Nationality (ISO 3166-1 numeric)
          </label>
          <input
            class="v-input"
            type="text"
            id="Nationality"
            name="Nationality"
            placeholder="e.g. 578 - Norway"
          />
        </div>
        <div class="stack-v grow">
          <label class="fs-s ink-subtle mb-xs" for="NationalOrgNumber">
            National organization number
          </label>
          <input
            class="v-input"
            type="text"
            value="asdf"
            id="NationalOrgNumber"
            name="NationalOrgNumber"
            aria-invalid="true"
          />
          <p class="fs-s ink-danger-medium mt-2xs">
            <span
              class="ink-danger-strong bg-danger-medium"
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
      <div class="stack-v gap-xs">
        <label class="fs-s ink-subtle" for="Address">
          Address
        </label>
        <textarea class="v-textarea" rows={3} id="Address" name="Address"></textarea>
      </div>
      <button class="v-button ml-auto px-xl" type="submit">
        Add Company
      </button>
    </form>
  );
}
