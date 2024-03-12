import httpRequest from '@/api-client/httpRequest';

//constant
import { API_ROUTE } from '@/constants';

//models
import { FilteringOptions, Ticket } from '@/models';

//type
import { UpdateTicketPayload } from '@/types';

export const ticketApi = {
  getAllTickets: (options?: Partial<FilteringOptions>) => {
    return httpRequest.get<Ticket[]>(API_ROUTE.ticket, {
      params: options
    });
  },
  getAllMyTicketsByUserId: (
    userId: string,
    options?: Partial<FilteringOptions>
  ) => {
    return httpRequest.get<Ticket[]>(
      API_ROUTE.ticket + `/my-tickets/${userId}`,
      {
        params: options
      }
    );
  },
  getTicketById: (id: string) => {
    return httpRequest.get<Ticket[]>(API_ROUTE.ticket + `/${id}`);
  },
  updateTicketInfo: (id: string, ticket: UpdateTicketPayload) => {
    return httpRequest.patch<Ticket, UpdateTicketPayload>(
      `${API_ROUTE.ticket}/${id}`,
      ticket
    );
  },
  getTicketsByPaymentId: (paymentId: string) => {
    return httpRequest.get<Ticket[]>(
      API_ROUTE.ticket + `/get-by-payment/${paymentId}`
    );
  },
  terminateTicket: (id: string) => {
    return httpRequest.patch<Ticket>(API_ROUTE.ticket + `/${id}/terminate`, {});
  }
};
