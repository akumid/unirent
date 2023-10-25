const axios = require("axios");
const request = require("supertest");

const app = require("./app");

jest.mock("axios");

describe("POST /recommendation", () => {
  it("should respond with recommended accommodations", async () => {
    const grahqlResponse = {
      data: {
        data: {
          listAccommodations: {
            items: [
              {
                availableDate: "2023-10-21",
                createdAt: "2023-10-21T13:40:01.896Z",
                id: "Rgg3ncR1bYYo6nbO6Z57K",
                images: ["Rgg3ncR1bYYo6nbO6Z57K/image_0"],
                price: 1500,
                propertyType: "HDB",
                rented: false,
                title: "Best Clementi Suite ",
                userId: "ce634985-a581-4b4a-952b-de4d223f828a",
                User: {
                  name: "user1",
                },
                address:
                  '{"geo":{"lng":103.7458599,"lat":1.345379},"country":"singapore","aptName":"Clementi Suite","unitNo":"0808","postalCode":"120101","addressLine1":"Block 101","addressLine2":"Clement Rd 1"}',
              },
              {
                availableDate: "2023-10-23",
                createdAt: "2023-10-23T08:45:36.453Z",
                id: "CRwsaXhiTSdXM2YxDRhKO",
                images: ["CRwsaXhiTSdXM2YxDRhKO/image_0"],
                price: 12345,
                propertyType: "HDB",
                rented: false,
                title: "etasydt",
                userId: "7de455fd-fca9-4197-8125-b737cb1fa04f",
                User: {
                  name: "tommy",
                },
                address:
                  '{"geo":{"lng":103.7459989,"lat":1.3454847},"country":"Singapore","street":"190 bukit batok west ave 6","postalCode":"650190"}',
              },
            ],
          },
        },
      },
    };
    axios.post.mockResolvedValue(grahqlResponse); // Mock graphql response

    const requestBody = {
      coords: { latitude: 1.3362175, longitude: 103.7602691 }, // Replace with your desired coordinates
    };

    const response = await request(app)
      .post("/recommendation")
      .send(requestBody);

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);

    // Add more specific assertions based on your expected response data
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("title");
    expect(response.body[0]).toHaveProperty("distance");
    // expect to be sorted
    expect(response.body[1].distance).toBeGreaterThan(
      response.body[0].distance,
    );
  });
});
