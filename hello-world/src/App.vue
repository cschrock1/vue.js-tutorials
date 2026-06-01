<template>
    <h1>Job Application</h1>
    <div>
        <pre>
{{ JSON.stringify(formValues, null, 2) }}
</pre>
    </div>
    <form @submit.prevent="submitForm">
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" v-model.trim.lazy="formValues.name" />
        </div>
        <br />
        <div>
            <label for="profile">Profile Summary</label>
            <textarea id="profile" v-model="formValues.profileSummary"></textarea>
        </div>
        <br />
        <div>
            <label for="country">Country</label>
            <select id="country" v-model="formValues.country">
                <option value="">Select a Country</option>
                <option v-for="country in sortedCountries"
                        :key="country"
                        :value="country">
                    {{ country }}
                </option>
            </select>
        </div>
        <br />
        <div>
            <label for="job-location">Job Location</label>
            <select id="job-location" multiple v-model="formValues.jobLocation">
                <option v-for="country in sortedCountries"
                        :key="country"
                        :value="country">
                    {{ country }}
                </option>
            </select>
        </div>
        <br />
        <div>
            <input type="checkbox" id="remoteWork" v-model="formValues.remoteWork" true-value="yes" false-value="no" />
            <label for="remoteWork">Open to remote work?</label>
        </div>
        <br />
        <div>
            <label>Skill Set</label><br />
            <input type="checkbox" id="html" value="html" v-model="formValues.skillSet" />
            <label for="html">HTML</label>
            <input type="checkbox" id="css" value="css" v-model="formValues.skillSet" />
            <label for="css">CSS</label>
            <input type="checkbox" id="javascript" value="javascript" v-model="formValues.skillSet" />
            <label for="javascript">JavaScript</label>
        </div>
        <br />
        <div>
            <label>Years of Experience</label> <br />
            <input type="radio" id="0-2" value="0-2" v-model="formValues.yearsOfExperience" />
            <label for="0-2">0-2</label>
            <input type="radio" id="3-5" value="3-5" v-model="formValues.yearsOfExperience" />
            <label for="3-5">3-5</label>
            <input type="radio" id="6-10" value="6-10" v-model="formValues.yearsOfExperience" />
            <label for="6-10">6-10</label>
            <input type="radio" id="10+" value="10+" v-model="formValues.yearsOfExperience" />
            <label for="10+">10+</label>
        </div>
        <br />
        <div>
            <label for="birthday">Birthday</label><br />
            <input type="date"
                   id="birthday"
                   v-model="formValues.birthday" />
        </div>
        <br />
        <div>
            <label for="age">Age</label><br />
            <input @keyup.enter="submitForm" type="number" id="age" v-model.number="formValues.age" />
        </div>
        <br />
        <div>
        <button>Submit</button>
        </div>
    </form>
</template>


<script>
    export default {
        name: "App",
        data() {
            return {
                formValues: {
                    name: '',
                    profileSummary: '',
                    country: '',
                    jobLocation: [],
                    remoteWork: 'no',
                    skillSet: [],
                    yearsOfExperience: '',
                    age: null,
                    birthday: '',
                },

                countries: [
                    // North America
                    'United States',
                    'Canada',
                    'Mexico',

                    // South America
                    'Brazil',
                    'Argentina',
                    'Chile',
                    'Colombia',
                    'Peru',
                    'Venezuela',

                    // Europe
                    'United Kingdom',
                    'France',
                    'Germany',
                    'Italy',
                    'Spain',
                    'Netherlands',
                    'Belgium',
                    'Sweden',
                    'Norway',
                    'Denmark',
                    'Poland',
                    'Switzerland',
                    'Austria',
                    'Ireland',
                    'Portugal',
                    'Greece',
                    'Czech Republic',
                    'Hungary',
                    'Finland',
                    'Ukraine',

                    // Asia
                    'China',
                    'India',
                    'Japan',
                    'South Korea',
                    'Indonesia',
                    'Saudi Arabia',
                    'United Arab Emirates',
                    'Turkey',
                    'Israel',
                    'Thailand',
                    'Vietnam',
                    'Philippines',
                    'Malaysia',
                    'Singapore',

                    // Africa
                    'Nigeria',
                    'South Africa',
                    'Egypt',
                    'Kenya',
                    'Morocco',
                    'Ethiopia',
                    'Ghana',

                    // Oceania
                    'Australia',
                    'New Zealand'
                ]
            }
        },
        computed: {
            sortedCountries() {
                return [...this.countries].sort()
            },
        },
        methods: {
            submitForm() {
                console.log('Form Values', this.formValues)
            }
        }
    }
    
</script>


<style>
    #app {
        font-family: Avenir, Arial, Helvetica, sans-serif;
/*        text-align: center; */
        color: #2c3e50;
        margin-top: 60px;
    }
    label {
        font-weight: bold;
        display: inline-flex;
        margin-bottom: 5px;
    }
    input + label {
        font-weight: bold;
        display: inline-flex;
        margin-right: 20px;
    }
    input[type='text'],
    textarea,
    select {
        display: block;
        width: 400px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
</style>
