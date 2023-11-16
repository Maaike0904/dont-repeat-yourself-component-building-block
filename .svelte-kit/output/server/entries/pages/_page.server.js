import { gql } from "graphql-request";
import { h as hygraph } from "../../chunks/hygraph.js";
async function load() {
  let query = gql`
    {
      waterkwaliteits {
        title
        subtitel
        waterkwaliteittext
        waterkwaliteitfoto
      }
      projectens {
        categorie
        createdAt
        intro
        plaats {
          latitude
          longitude
        }
        image {
          url
        }
        title
        slug
      }
      kennisbanks {
        author
        categorie
        createdAt
        date
        image {
          url
        }
        title
        content {
          raw
          html
          markdown
          text
        }
        slug
      }
      partner(first: 12) {
        image {
          url
        }
        link
      }
      teams {
        email {
          text
        }
        imageHover {
          id
        }
        image {
          id
          url
        }
        name
        title
      }
    }
  `;
  return await hygraph.request(query);
}
export {
  load
};
